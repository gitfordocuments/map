import React from 'react';
import { X, MapPin, DollarSign, Clock, Users, Navigation } from 'lucide-react';
import { TransportRoute } from '../data/routes';

interface RouteDetailsProps {
  route: TransportRoute;
  onClose: () => void;
}

export const RouteDetails: React.FC<RouteDetailsProps> = ({ route, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-90vh overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{route.name}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Route Header Info */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {route.type}
              </span>
              <span className="text-2xl">{route.vehicle === 'Bus' ? '🚌' : '🚐'}</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <MapPin size={18} className="text-green-600" />
              <span className="font-medium">{route.origin}</span>
              <span className="text-gray-400">→</span>
              <span className="font-medium">{route.destination}</span>
            </div>
          </div>

          {/* Price and Basic Info */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-green-50 rounded-lg p-4 text-center">
              <DollarSign className="mx-auto text-green-600 mb-2" size={20} />
              <div className="text-lg font-bold text-green-700">${route.price.toFixed(2)}</div>
              <div className="text-xs text-green-600">Precio</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4 text-center">
              <Users className="mx-auto text-blue-600 mb-2" size={20} />
              <div className="text-lg font-bold text-blue-700">{route.stops.length}</div>
              <div className="text-xs text-blue-600">Paradas</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 text-center">
              <Navigation className="mx-auto text-purple-600 mb-2" size={20} />
              <div className="text-lg font-bold text-purple-700">{route.zones.length}</div>
              <div className="text-xs text-purple-600">Zonas</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4 text-center">
              <MapPin className="mx-auto text-orange-600 mb-2" size={20} />
              <div className="text-lg font-bold text-orange-700">{route.touristSpots.length}</div>
              <div className="text-xs text-orange-600">Sitios Turísticos</div>
            </div>
          </div>

          {/* Visual Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Descripción Visual</h3>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-gray-700 italic">{route.description}</p>
            </div>
          </div>

          {/* Stops */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Paradas Principales</h3>
            <div className="space-y-3">
              {route.stops.map((stop, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>
                  <span className="text-gray-700">{stop}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Zones */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Zonas que Recorre</h3>
            <div className="flex flex-wrap gap-2">
              {route.zones.map((zone, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Tourist Spots */}
          {route.touristSpots.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Sitios Turísticos Cercanos</h3>
              <div className="flex flex-wrap gap-2">
                {route.touristSpots.map((spot, index) => (
                  <span key={index} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    {spot}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Coordinates */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Coordenadas de Paradas</h3>
            <div className="bg-gray-50 rounded-lg p-4 max-h-40 overflow-y-auto">
              <div className="space-y-2">
                {route.coordinates.map((coord, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-gray-900">{coord.name}:</span>
                    <span className="text-gray-600 ml-2">
                      {coord.lat.toFixed(4)}, {coord.lng.toFixed(4)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};