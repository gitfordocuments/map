import React from 'react';
import { MapPin, DollarSign, Clock, Camera, Star } from 'lucide-react';
import { TouristSpot } from '../data/touristSpots';

interface TouristSpotCardProps {
  spot: TouristSpot;
  onSelect: (spot: TouristSpot) => void;
}

export const TouristSpotCard: React.FC<TouristSpotCardProps> = ({ spot, onSelect }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Histórico': return 'bg-amber-100 text-amber-800';
      case 'Natural': return 'bg-green-100 text-green-800';
      case 'Cultural': return 'bg-purple-100 text-purple-800';
      case 'Religioso': return 'bg-blue-100 text-blue-800';
      case 'Recreativo': return 'bg-pink-100 text-pink-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Histórico': return '🏛️';
      case 'Natural': return '🌿';
      case 'Cultural': return '🎭';
      case 'Religioso': return '⛪';
      case 'Recreativo': return '🎪';
      default: return '📍';
    }
  };

  return (
    <div 
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-green-200 transform hover:-translate-y-1"
      onClick={() => onSelect(spot)}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center space-x-3">
            <div className="bg-green-600 text-white p-2 rounded-lg">
              <Camera size={20} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{spot.name}</h3>
              <p className="text-sm text-gray-600 flex items-center space-x-1">
                <MapPin size={12} />
                <span>{spot.municipality}</span>
              </p>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1 ${getCategoryColor(spot.category)}`}>
            <span>{getCategoryIcon(spot.category)}</span>
            <span>{spot.category}</span>
          </span>
        </div>

        {/* Description */}
        <div className="mb-4">
          <p className="text-gray-700 text-sm leading-relaxed">{spot.description}</p>
        </div>

        {/* Cost and Time */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <DollarSign size={16} className="text-green-600" />
            <span className="font-bold text-green-700">${spot.transportCost.toFixed(2)}</span>
            <span className="text-xs text-gray-500">desde centro</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock size={16} />
            <span className="text-xs">{spot.estimatedVisitTime}</span>
          </div>
        </div>

        {/* Coordinates */}
        <div className="bg-gray-50 rounded-lg p-3 mb-4">
          <p className="text-xs text-gray-600">
            <strong>Coordenadas:</strong> {spot.coordinates.lat.toFixed(4)}, {spot.coordinates.lng.toFixed(4)}
          </p>
        </div>

        {/* Nearby Routes */}
        <div>
          <h4 className="text-sm font-semibold text-gray-700 mb-2">Rutas de Acceso:</h4>
          <div className="flex flex-wrap gap-1">
            {spot.nearbyRoutes.map((route, index) => (
              <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full">
                {route}
              </span>
            ))}
          </div>
        </div>

        {/* Rating placeholder */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={12} className="text-yellow-400 fill-current" />
              ))}
              <span className="text-xs text-gray-500 ml-2">Muy recomendado</span>
            </div>
            <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
              Ver más detalles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};