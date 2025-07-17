export interface TransportRoute {
  id: string;
  name: string;
  type: 'Urbana' | 'Interurbana' | 'Interdepartamental';
  vehicle: 'Bus' | 'Microbús';
  origin: string;
  destination: string;
  stops: string[];
  zones: string[];
  touristSpots: string[];
  price: number;
  description: string;
  coordinates: { lat: number; lng: number; name: string }[];
}

export const transportRoutes: TransportRoute[] = [
  {
    id: 'ruta-201',
    name: 'Ruta 201',
    type: 'Urbana',
    vehicle: 'Bus',
    origin: 'Centro de Santa Ana',
    destination: 'Colonia El Palmar',
    stops: [
      'Catedral de Santa Ana',
      'Hospital Nacional San Juan de Dios',
      'Mercado Colón',
      'Estadio Óscar Quiteño',
      'Colonia El Palmar'
    ],
    zones: ['Centro Histórico', 'Zona Norte', 'El Palmar'],
    touristSpots: ['Catedral de Santa Ana', 'Teatro de Santa Ana'],
    price: 0.25,
    description: 'Bus azul y blanco con número 201 en el frente',
    coordinates: [
      { lat: 13.9942, lng: -89.5597, name: 'Catedral de Santa Ana' },
      { lat: 13.9987, lng: -89.5623, name: 'Hospital San Juan de Dios' },
      { lat: 14.0012, lng: -89.5578, name: 'Mercado Colón' },
      { lat: 14.0089, lng: -89.5634, name: 'Estadio Óscar Quiteño' },
      { lat: 14.0156, lng: -89.5689, name: 'Colonia El Palmar' }
    ]
  },
  {
    id: 'ruta-202',
    name: 'Ruta 202',
    type: 'Urbana',
    vehicle: 'Microbús',
    origin: 'Terminal de Occidente',
    destination: 'Colonia Santa Lucía',
    stops: [
      'Terminal de Occidente',
      'Plaza Libertad',
      'Parque Colón',
      'Universidad de Santa Ana',
      'Colonia Santa Lucía'
    ],
    zones: ['Centro', 'Zona Universitaria', 'Santa Lucía'],
    touristSpots: ['Plaza Libertad', 'Parque Colón'],
    price: 0.25,
    description: 'Microbús rojo y amarillo con franja azul',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal de Occidente' },
      { lat: 13.9942, lng: -89.5598, name: 'Plaza Libertad' },
      { lat: 13.9956, lng: -89.5612, name: 'Parque Colón' },
      { lat: 14.0023, lng: -89.5667, name: 'Universidad de Santa Ana' },
      { lat: 14.0078, lng: -89.5723, name: 'Colonia Santa Lucía' }
    ]
  },
  {
    id: 'ruta-218',
    name: 'Ruta 218',
    type: 'Interurbana',
    vehicle: 'Bus',
    origin: 'Santa Ana',
    destination: 'Chalchuapa',
    stops: [
      'Centro de Santa Ana',
      'El Congo',
      'Texistepeque',
      'Ruinas de Tazumal',
      'Chalchuapa Centro'
    ],
    zones: ['Santa Ana', 'El Congo', 'Texistepeque', 'Chalchuapa'],
    touristSpots: ['Ruinas de Tazumal', 'Casa Blanca'],
    price: 0.60,
    description: 'Bus verde y blanco con número 218 destacado',
    coordinates: [
      { lat: 13.9942, lng: -89.5597, name: 'Centro de Santa Ana' },
      { lat: 13.9234, lng: -89.6123, name: 'El Congo' },
      { lat: 13.8967, lng: -89.6789, name: 'Texistepeque' },
      { lat: 13.8756, lng: -89.6934, name: 'Ruinas de Tazumal' },
      { lat: 13.8723, lng: -89.6945, name: 'Chalchuapa Centro' }
    ]
  },
  {
    id: 'ruta-235',
    name: 'Ruta 235',
    type: 'Interdepartamental',
    vehicle: 'Bus',
    origin: 'Santa Ana',
    destination: 'Ahuachapán',
    stops: [
      'Terminal Santa Ana',
      'Candelaria de la Frontera',
      'El Refugio',
      'Atiquizaya',
      'Terminal Ahuachapán'
    ],
    zones: ['Santa Ana', 'Candelaria', 'Atiquizaya', 'Ahuachapán'],
    touristSpots: ['Parque Nacional El Imposible (cercano)'],
    price: 1.25,
    description: 'Bus azul marino con franjas blancas y rojas',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal Santa Ana' },
      { lat: 13.9145, lng: -89.6234, name: 'Candelaria de la Frontera' },
      { lat: 13.8934, lng: -89.6567, name: 'El Refugio' },
      { lat: 13.8456, lng: -89.7123, name: 'Atiquizaya' },
      { lat: 13.8234, lng: -89.7456, name: 'Terminal Ahuachapán' }
    ]
  },
  {
    id: 'ruta-210',
    name: 'Ruta 210',
    type: 'Urbana',
    vehicle: 'Microbús',
    origin: 'Centro de Santa Ana',
    destination: 'Colonia San Rafael',
    stops: [
      'Alcaldía Municipal',
      'Banco Central',
      'Clínica Médica Santa Ana',
      'Centro Comercial Metrocentro',
      'Colonia San Rafael'
    ],
    zones: ['Centro', 'Zona Comercial', 'San Rafael'],
    touristSpots: ['Alcaldía Municipal (Arquitectura Colonial)'],
    price: 0.25,
    description: 'Microbús blanco con franjas naranjas y número 210',
    coordinates: [
      { lat: 13.9945, lng: -89.5601, name: 'Alcaldía Municipal' },
      { lat: 13.9956, lng: -89.5623, name: 'Banco Central' },
      { lat: 13.9978, lng: -89.5645, name: 'Clínica Médica Santa Ana' },
      { lat: 14.0012, lng: -89.5689, name: 'Centro Comercial Metrocentro' },
      { lat: 14.0045, lng: -89.5712, name: 'Colonia San Rafael' }
    ]
  },
  {
    id: 'ruta-220',
    name: 'Ruta 220',
    type: 'Interurbana',
    vehicle: 'Bus',
    origin: 'Santa Ana',
    destination: 'Metapán',
    stops: [
      'Terminal Santa Ana',
      'Masahuat',
      'Montecristo (desvío)',
      'Esquipulas',
      'Metapán Centro'
    ],
    zones: ['Santa Ana', 'Masahuat', 'Montecristo', 'Metapán'],
    touristSpots: ['Parque Nacional Montecristo', 'Lago de Güija'],
    price: 0.75,
    description: 'Bus amarillo con franjas verdes y azules',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal Santa Ana' },
      { lat: 14.0234, lng: -89.4567, name: 'Masahuat' },
      { lat: 14.1234, lng: -89.3456, name: 'Montecristo (desvío)' },
      { lat: 14.2123, lng: -89.2789, name: 'Esquipulas' },
      { lat: 14.3234, lng: -89.2456, name: 'Metapán Centro' }
    ]
  },
  {
    id: 'ruta-216',
    name: 'Ruta 216',
    type: 'Urbana',
    vehicle: 'Bus',
    origin: 'Centro de Santa Ana',
    destination: 'Volcán de Santa Ana (base)',
    stops: [
      'Catedral de Santa Ana',
      'Cementerio General',
      'Colonia El Calvario',
      'Cantón El Tablón',
      'Base del Volcán Ilamatepec'
    ],
    zones: ['Centro', 'El Calvario', 'Zona Rural Norte'],
    touristSpots: ['Volcán de Santa Ana (Ilamatepec)', 'Laguna Verde'],
    price: 0.50,
    description: 'Bus verde bosque con número 216 blanco',
    coordinates: [
      { lat: 13.9942, lng: -89.5597, name: 'Catedral de Santa Ana' },
      { lat: 14.0023, lng: -89.5634, name: 'Cementerio General' },
      { lat: 14.0156, lng: -89.5723, name: 'Colonia El Calvario' },
      { lat: 14.0456, lng: -89.5934, name: 'Cantón El Tablón' },
      { lat: 14.0823, lng: -89.6234, name: 'Base del Volcán Ilamatepec' }
    ]
  },
  {
    id: 'ruta-240',
    name: 'Ruta 240',
    type: 'Interdepartamental',
    vehicle: 'Bus',
    origin: 'Santa Ana',
    destination: 'San Salvador',
    stops: [
      'Terminal Santa Ana',
      'Coatepeque',
      'El Congo',
      'Santa Tecla',
      'Terminal de Occidente San Salvador'
    ],
    zones: ['Santa Ana', 'Coatepeque', 'El Congo', 'La Libertad', 'San Salvador'],
    touristSpots: ['Lago de Coatepeque'],
    price: 1.50,
    description: 'Bus blanco con franjas rojas y azules, número 240 grande',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal Santa Ana' },
      { lat: 13.9234, lng: -89.5012, name: 'Coatepeque' },
      { lat: 13.9234, lng: -89.6123, name: 'El Congo' },
      { lat: 13.6767, lng: -89.2792, name: 'Santa Tecla' },
      { lat: 13.6929, lng: -89.2181, name: 'Terminal Occidente San Salvador' }
    ]
  },
  {
    id: 'ruta-205',
    name: 'Ruta 205',
    type: 'Urbana',
    vehicle: 'Microbús',
    origin: 'Terminal de Santa Ana',
    destination: 'Colonia Las Flores',
    stops: [
      'Terminal de Santa Ana',
      'Mercado Central',
      'Instituto Nacional',
      'Polideportivo',
      'Colonia Las Flores'
    ],
    zones: ['Terminal', 'Centro', 'Zona Educativa', 'Las Flores'],
    touristSpots: ['Mercado Central (artesanías locales)'],
    price: 0.25,
    description: 'Microbús rosa con franjas blancas y número 205',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal de Santa Ana' },
      { lat: 13.9934, lng: -89.5578, name: 'Mercado Central' },
      { lat: 13.9967, lng: -89.5601, name: 'Instituto Nacional' },
      { lat: 14.0012, lng: -89.5645, name: 'Polideportivo' },
      { lat: 14.0078, lng: -89.5689, name: 'Colonia Las Flores' }
    ]
  },
  {
    id: 'ruta-230',
    name: 'Ruta 230',
    type: 'Interurbana',
    vehicle: 'Bus',
    origin: 'Santa Ana',
    destination: 'Juayúa',
    stops: [
      'Terminal Santa Ana',
      'Armenia',
      'Izalco',
      'Nahuizalco',
      'Juayúa Centro'
    ],
    zones: ['Santa Ana', 'Armenia', 'Izalco', 'Sonsonate'],
    touristSpots: ['Ruta de las Flores', 'Iglesia de Izalco', 'Festival Gastronómico Juayúa'],
    price: 1.00,
    description: 'Bus café con franjas doradas y verdes',
    coordinates: [
      { lat: 13.9876, lng: -89.5534, name: 'Terminal Santa Ana' },
      { lat: 13.7446, lng: -89.4992, name: 'Armenia' },
      { lat: 13.7446, lng: -89.6717, name: 'Izalco' },
      { lat: 13.7276, lng: -89.7351, name: 'Nahuizalco' },
      { lat: 13.7421, lng: -89.7449, name: 'Juayúa Centro' }
    ]
  }
];