import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, AuthState, LoginCredentials, RegisterCredentials } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>;
  register: (credentials: RegisterCredentials) => Promise<boolean>;
  logout: () => void;
  error: string | null;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Simulated user database
  const users = JSON.parse(localStorage.getItem('transportes_users') || '[]');

  useEffect(() => {
    // Check if user is logged in on app start
    const savedUser = localStorage.getItem('transportes_current_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const foundUser = users.find((u: any) => 
        u.email === credentials.email && u.password === credentials.password
      );

      if (foundUser) {
        const userWithoutPassword = {
          id: foundUser.id,
          email: foundUser.email,
          name: foundUser.name,
          createdAt: foundUser.createdAt
        };
        
        setUser(userWithoutPassword);
        localStorage.setItem('transportes_current_user', JSON.stringify(userWithoutPassword));
        setIsLoading(false);
        return true;
      } else {
        setError('Email o contraseña incorrectos');
        setIsLoading(false);
        return false;
      }
    } catch (err) {
      setError('Error al iniciar sesión. Intenta nuevamente.');
      setIsLoading(false);
      return false;
    }
  };

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Validate passwords match
      if (credentials.password !== credentials.confirmPassword) {
        setError('Las contraseñas no coinciden');
        setIsLoading(false);
        return false;
      }

      // Check if user already exists
      const existingUser = users.find((u: any) => u.email === credentials.email);
      if (existingUser) {
        setError('Ya existe una cuenta con este email');
        setIsLoading(false);
        return false;
      }

      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        createdAt: new Date().toISOString()
      };

      const updatedUsers = [...users, newUser];
      localStorage.setItem('transportes_users', JSON.stringify(updatedUsers));

      const userWithoutPassword = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        createdAt: newUser.createdAt
      };

      setUser(userWithoutPassword);
      localStorage.setItem('transportes_current_user', JSON.stringify(userWithoutPassword));
      setIsLoading(false);
      return true;
    } catch (err) {
      setError('Error al crear la cuenta. Intenta nuevamente.');
      setIsLoading(false);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('transportes_current_user');
  };

  const clearError = () => {
    setError(null);
  };

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    register,
    logout,
    error,
    clearError
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};