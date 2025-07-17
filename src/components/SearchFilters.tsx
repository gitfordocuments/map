import React from 'react';
import { Search, Filter, MapPin, Bus } from 'lucide-react';

interface SearchFiltersProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedType: string;
  setSelectedType: (type: string) => void;
  selectedVehicle: string;
  setSelectedVehicle: (vehicle: string) => void;
  activeTab: 'routes' | 'spots';
  setActiveTab: (tab: 'routes' | 'spots') => void;
}

export const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchTerm,
  setSearchTerm,
  selectedType,
  setSelectedType,
  selectedVehicle,
  setSelectedVehicle,
  activeTab,
  setActiveTab
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Tab Navigation */}
      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setActiveTab('routes')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${
            activeTab === 'routes'
              ? 'bg-white shadow-sm text-blue-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <Bus size={18} />
          <span className="font-medium">Rutas de Transporte</span>
        </button>
        <button
          onClick={() => setActiveTab('spots')}
          className={`flex-1 flex items-center justify-center space-x-2 py-2 px-4 rounded-md transition-all duration-200 ${
            activeTab === 'spots'
              ? 'bg-white shadow-sm text-green-600'
              : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <MapPin size={18} />
          <span className="font-medium">Sitios Turísticos</span>
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder={
            activeTab === 'routes' 
              ? "Buscar rutas por nombre, origen o destino..." 
              : "Buscar sitios turísticos por nombre o descripción..."
          }
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Filters for Routes */}
      {activeTab === 'routes' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Filter size={16} className="inline mr-1" />
              Tipo de Ruta
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los tipos</option>
              <option value="Urbana">Urbana</option>
              <option value="Interurbana">Interurbana</option>
              <option value="Interdepartamental">Interdepartamental</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Bus size={16} className="inline mr-1" />
              Tipo de Vehículo
            </label>
            <select
              value={selectedVehicle}
              onChange={(e) => setSelectedVehicle(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Todos los vehículos</option>
              <option value="Bus">Bus</option>
              <option value="Microbús">Microbús</option>
            </select>
          </div>
        </div>
      )}

      {/* Quick Stats */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-blue-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-blue-600">10</div>
            <div className="text-xs text-blue-700">Rutas Disponibles</div>
          </div>
          <div className="bg-green-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-600">8</div>
            <div className="text-xs text-green-700">Sitios Turísticos</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-purple-600">$0.25</div>
            <div className="text-xs text-purple-700">Precio Mínimo</div>
          </div>
          <div className="bg-orange-50 rounded-lg p-3">
            <div className="text-2xl font-bold text-orange-600">3</div>
            <div className="text-xs text-orange-700">Departamentos</div>
          </div>
        </div>
      </div>
    </div>
  );
};