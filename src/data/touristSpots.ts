export interface TouristSpot {
  id: string;
  name: string;
  description: string;
  municipality: string;
  coordinates: { lat: number; lng: number };
  nearbyRoutes: string[];
  transportCost: number;
  category: 'Histórico' | 'Natural' | 'Cultural' | 'Religioso' | 'Recreativo';
  estimatedVisitTime: string;
}

export const touristSpots: TouristSpot[] = [
  {
    id: 'catedral-santa-ana',
    name: 'Catedral de Santa Ana',
    description: 'Majestuosa catedral de estilo neogótico construida a finales del siglo XIX. Su imponente arquitectura y hermosos vitrales la convierten en el símbolo religioso más importante de la ciudad.',
    municipality: 'Santa Ana',
    coordinates: { lat: 13.9942, lng: -89.5597 },
    nearbyRoutes: ['Ruta 201', 'Ruta 216', 'Ruta 210'],
    transportCost: 0.25,
    category: 'Religioso',
    estimatedVisitTime: '1-2 horas'
  },
  {
    id: 'teatro-santa-ana',
    name: 'Teatro de Santa Ana',
    description: 'Hermoso teatro de estilo neoclásico inaugurado en 1910, considerado uno de los más elegantes de Centroamérica. Sede de importantes eventos culturales y artísticos de la región.',
    municipality: 'Santa Ana',
    coordinates: { lat: 13.9951, lng: -89.5605 },
    nearbyRoutes: ['Ruta 201', 'Ruta 202', 'Ruta 210'],
    transportCost: 0.25,
    category: 'Cultural',
    estimatedVisitTime: '2-3 horas'
  },
  {
    id: 'volcan-santa-ana',
    name: 'Volcán de Santa Ana (Ilamatepec)',
    description: 'El volcán más alto de El Salvador con 2,381 metros de altura. Ofrece espectaculares vistas panorámicas y el famoso cráter con la Laguna Verde de aguas sulfurosas.',
    municipality: 'Santa Ana',
    coordinates: { lat: 14.0823, lng: -89.6234 },
    nearbyRoutes: ['Ruta 216'],
    transportCost: 0.50,
    category: 'Natural',
    estimatedVisitTime: '4-6 horas'
  },
  {
    id: 'parque-colon',
    name: 'Parque Colón',
    description: 'Parque central de Santa Ana rodeado de edificios coloniales y neoclásicos. Perfecto para caminar y disfrutar del ambiente local, con kioscos de comida típica salvadoreña.',
    municipality: 'Santa Ana',
    coordinates: { lat: 13.9956, lng: -89.5612 },
    nearbyRoutes: ['Ruta 202', 'Ruta 210', 'Ruta 205'],
    transportCost: 0.25,
    category: 'Recreativo',
    estimatedVisitTime: '1-2 horas'
  },
  {
    id: 'casa-cultural',
    name: 'Casa de la Cultura de Santa Ana',
    description: 'Centro cultural que alberga exposiciones de arte local, talleres artísticos y eventos culturales. Edificio histórico que preserva la arquitectura colonial de la época.',
    municipality: 'Santa Ana',
    coordinates: { lat: 13.9934, lng: -89.5589 },
    nearbyRoutes: ['Ruta 201', 'Ruta 202', 'Ruta 210'],
    transportCost: 0.25,
    category: 'Cultural',
    estimatedVisitTime: '1-2 horas'
  },
  {
    id: 'ruinas-tazumal',
    name: 'Ruinas de Tazumal',
    description: 'Importante sitio arqueológico maya ubicado en Chalchuapa. Presenta estructuras piramidales bien conservadas y un museo con artefactos precolombinos de gran valor histórico.',
    municipality: 'Chalchuapa',
    coordinates: { lat: 13.8756, lng: -89.6934 },
    nearbyRoutes: ['Ruta 218'],
    transportCost: 0.60,
    category: 'Histórico',
    estimatedVisitTime: '2-3 horas'
  },
  {
    id: 'lago-coatepeque',
    name: 'Lago de Coatepeque',
    description: 'Hermoso lago de origen volcánico con aguas cristalinas de color azul turquesa. Ideal para actividades acuáticas, relajación y disfrutar de restaurantes con vista panorámica.',
    municipality: 'Santa Ana (cercano)',
    coordinates: { lat: 13.9234, lng: -89.5012 },
    nearbyRoutes: ['Ruta 240'],
    transportCost: 1.50,
    category: 'Natural',
    estimatedVisitTime: '3-5 horas'
  },
  {
    id: 'mercado-central',
    name: 'Mercado Central de Santa Ana',
    description: 'Vibrante mercado tradicional donde se puede encontrar artesanías locales, comida típica, productos agrícolas frescos y souvenirs auténticos de la región occidental.',
    municipality: 'Santa Ana',
    coordinates: { lat: 13.9934, lng: -89.5578 },
    nearbyRoutes: ['Ruta 205', 'Ruta 210', 'Ruta 202'],
    transportCost: 0.25,
    category: 'Cultural',
    estimatedVisitTime: '1-2 horas'
  }
];