import React, { useState, useMemo } from 'react';
import { Bus, MapPin, Navigation, Phone, Info, LogIn, UserPlus } from 'lucide-react';
import { SearchFilters } from './components/SearchFilters';
import { RouteCard } from './components/RouteCard';
import { TouristSpotCard } from './components/TouristSpotCard';
import { RouteDetails } from './components/RouteDetails';
import { TouristSpotDetails } from './components/TouristSpotDetails';
import { AuthModal } from './components/AuthModal';
import { UserMenu } from './components/UserMenu';
import { useAuth } from './contexts/AuthContext';
import { transportRoutes, TransportRoute } from './data/routes';
import { touristSpots, TouristSpot } from './data/touristSpots';

function App() {
  const { isAuthenticated } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const [activeTab, setActiveTab] = useState<'routes' | 'spots'>('routes');
  const [selectedRoute, setSelectedRoute] = useState<TransportRoute | null>(null);
  const [selectedSpot, setSelectedSpot] = useState<TouristSpot | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  // Filter routes
  const filteredRoutes = useMemo(() => {
    return transportRoutes.filter(route => {
      const matchesSearch = searchTerm === '' || 
        route.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.destination.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.zones.some(zone => zone.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesType = selectedType === '' || route.type === selectedType;
      const matchesVehicle = selectedVehicle === '' || route.vehicle === selectedVehicle;
      
      return matchesSearch && matchesType && matchesVehicle;
    });
  }, [searchTerm, selectedType, selectedVehicle]);

  // Filter tourist spots
  const filteredSpots = useMemo(() => {
    return touristSpots.filter(spot => {
      const matchesSearch = searchTerm === '' ||
        spot.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.municipality.toLowerCase().includes(searchTerm.toLowerCase()) ||
        spot.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      return matchesSearch;
    });
  }, [searchTerm]);

  const handleAuthClick = (mode: 'login' | 'register') => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Bus className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">TransporteES</h1>
                <p className="text-sm text-gray-600">Sistema de Transporte Público - El Salvador</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
                <Phone size={16} />
                <span>Línea de ayuda: 2213-3000</span>
              </div>
              
              {isAuthenticated ? (
                <div className="flex items-center space-x-3">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Info size={16} />
                    <span className="hidden md:inline">Ayuda</span>
                  </button>
                  <UserMenu />
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <button 
                    onClick={() => handleAuthClick('login')}
                    className="text-blue-600 hover:text-blue-800 px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors flex items-center space-x-2"
                  >
                    <LogIn size={16} />
                    <span className="hidden md:inline">Iniciar Sesión</span>
                  </button>
                  <button 
                    onClick={() => handleAuthClick('register')}
                    className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-green-700 transition-all duration-200 flex items-center space-x-2"
                  >
                    <UserPlus size={16} />
                    <span className="hidden md:inline">Registrarse</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Encuentra tu Ruta Perfecta
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre las mejores rutas de transporte público en El Salvador y explora 
            los sitios turísticos más fascinantes de Santa Ana
          </p>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
          selectedVehicle={selectedVehicle}
          setSelectedVehicle={setSelectedVehicle}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Results */}
        <div className="space-y-6">
          {activeTab === 'routes' ? (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Rutas de Transporte Disponibles
                </h3>
                <span className="text-sm text-gray-600">
                  {filteredRoutes.length} de {transportRoutes.length} rutas
                </span>
              </div>
              
              {filteredRoutes.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredRoutes.map((route) => (
                    <RouteCard
                      key={route.id}
                      route={route}
                      onSelect={setSelectedRoute}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Bus size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No se encontraron rutas
                  </h3>
                  <p className="text-gray-600">
                    Intenta ajustar los filtros de búsqueda para encontrar más opciones
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Sitios Turísticos en Santa Ana
                </h3>
                <span className="text-sm text-gray-600">
                  {filteredSpots.length} de {touristSpots.length} sitios
                </span>
              </div>
              
              {filteredSpots.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSpots.map((spot) => (
                    <TouristSpotCard
                      key={spot.id}
                      spot={spot}
                      onSelect={setSelectedSpot}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <MapPin size={48} className="mx-auto text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    No se encontraron sitios turísticos
                  </h3>
                  <p className="text-gray-600">
                    Intenta ajustar la búsqueda para encontrar más destinos
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Information Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Bus className="text-blue-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900">Transporte Seguro</h4>
            </div>
            <p className="text-sm text-gray-600">
              Todas las rutas están verificadas y operan con horarios regulares para tu comodidad y seguridad.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <MapPin className="text-green-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900">Destinos Verificados</h4>
            </div>
            <p className="text-sm text-gray-600">
              Información actualizada sobre sitios turísticos con coordenadas precisas y datos de acceso.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-purple-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-purple-100 p-2 rounded-lg">
                <Navigation className="text-purple-600" size={20} />
              </div>
              <h4 className="font-semibold text-gray-900">Fácil Navegación</h4>
            </div>
            <p className="text-sm text-gray-600">
              Interfaz intuitiva que te ayuda a encontrar la ruta más conveniente para llegar a tu destino.
            </p>
          </div>
        </div>
      </main>

      {/* Modals */}
      {selectedRoute && (
        <RouteDetails
          route={selectedRoute}
          onClose={() => setSelectedRoute(null)}
        />
      )}

      {selectedSpot && (
        <TouristSpotDetails
          spot={selectedSpot}
          onClose={() => setSelectedSpot(null)}
        />
      )}

      {/* Auth Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        initialMode={authMode}
      />

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 p-2 rounded-lg">
                <Bus className="text-white" size={20} />
              </div>
              <div>
                <h3 className="font-bold">TransporteES</h3>
                <p className="text-sm text-gray-400">El Salvador 2025</p>
              </div>
            </div>
            <div className="text-sm text-gray-400 text-center md:text-right">
              <p>Sistema de información de transporte público</p>
              <p>Datos actualizados regularmente</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;