import React from 'react';
import { X, MapPin, DollarSign, Clock, Camera, Star, Navigation } from 'lucide-react';
import { TouristSpot } from '../data/touristSpots';

interface TouristSpotDetailsProps {
  spot: TouristSpot;
  onClose: () => void;
}

export const TouristSpotDetails: React.FC<TouristSpotDetailsProps> = ({ spot, onClose }) => {
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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{spot.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Spot Header Info */}
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1 ${getCategoryColor(spot.category)}`}>
                <span>{getCategoryIcon(spot.category)}</span>
                <span>{spot.category}</span>
              </span>
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin size={18} className="text-green-600" />
              <span className="font-medium">{spot.municipality}</span>
            </div>
          </div>

          {/* Quick Info */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <DollarSign className="mx-auto text-green-600 mb-2" size={20} />
              <div className="text-lg font-bold text-green-700">${spot.transportCost.toFixed(2)}</div>
              <div className="text-xs text-green-600">Costo Transporte</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Clock className="mx-auto text-blue-600 mb-2" size={20} />
              <div className="text-lg font-bold text-blue-700">{spot.estimatedVisitTime}</div>
              <div className="text-xs text-blue-600">Tiempo Estimado</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Navigation className="mx-auto text-purple-600 mb-2" size={20} />
              <div className="text-lg font-bold text-purple-700">{spot.nearbyRoutes.length}</div>
              <div className="text-xs text-purple-600">Rutas de Acceso</div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 leading-relaxed">{spot.description}</p>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ubicación</h3>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <MapPin size={18} className="text-blue-600" />
                <span className="font-medium text-gray-900">{spot.municipality}</span>
              </div>
              <div className="text-sm text-gray-600">
                <strong>Coordenadas:</strong> {spot.coordinates.lat.toFixed(6)}, {spot.coordinates.lng.toFixed(6)}
              </div>
              <div className="mt-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  📍 Ver en Google Maps
                </button>
              </div>
            </div>
          </div>

          {/* Transport Routes */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Rutas de Transporte Disponibles</h3>
            <div className="space-y-3">
              {spot.nearbyRoutes.map((route, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="font-medium text-gray-900">{route}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign size={14} />
                    <span>${spot.transportCost.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-yellow-50 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-800 mb-2">💡 Consejos de Visita</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Lleva efectivo para el transporte público</li>
              <li>• Confirma horarios de rutas antes de viajar</li>
              <li>• Considera visitar durante las primeras horas del día</li>
              <li>• Pregunta al conductor sobre paradas cercanas al destino</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};