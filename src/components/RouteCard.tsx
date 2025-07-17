import React from 'react';
import { Bus, MapPin, DollarSign, Clock, Users } from 'lucide-react';
import { TransportRoute } from '../data/routes';

interface RouteCardProps {
  route: TransportRoute;
  onSelect: (route: TransportRoute) => void;
}

export const RouteCard: React.FC<RouteCardProps> = ({ route, onSelect }) => {
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Urbana': return 'bg-blue-100 text-blue-800';
      case 'Interurbana': return 'bg-green-100 text-green-800';
      case 'Interdepartamental': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getVehicleIcon = (vehicle: string) => {
    return vehicle === 'Bus' ? '🚌' : '🚐';
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-blue-200 transform hover:-translate-y-1"
      onClick={() => onSelect(route)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Bus size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{route.name}</h3>
              <p className="text-sm text-gray-600">{getVehicleIcon(route.vehicle)} {route.vehicle}</p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(route.type)}`}>
            {route.type}
          </span>
        </div>

        {/* Route */}
        <div className="mb-4">
          <div className="flex items-center space-x-2 text-gray-700">
            <MapPin size={16} className="text-green-600" />
            <span className="text-sm font-medium">{route.origin}</span>
            <span className="text-gray-400">→</span>
            <span className="text-sm font-medium">{route.destination}</span>
          </div>
        </div>

        {/* Price and Info */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-green-600" />
            <span className="font-bold text-green-700">${route.price.toFixed(2)}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Users size={16} />
            <span className="text-xs">{route.stops.length} paradas</span>
          </div>
        </div>

        {/* Description */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-600 italic">{route.description}</p>
        </div>

        {/* Tourist Spots */}
        {route.touristSpots.length > 0 && (
          <div className="mb-3">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Sitios Turísticos Cercanos:</h4>
            <div className="flex flex-wrap gap-1">
              {route.touristSpots.map((spot, index) => (
                <span key={index} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                  {spot}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Zones */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Zonas que Recorre:</h4>
          <div className="flex flex-wrap gap-1">
            {route.zones.map((zone, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                {zone}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};