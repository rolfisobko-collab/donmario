// Mock data para el hotel - usar cuando no hay conexión a DB

export const mockRooms = [
  {
    id: 1,
    name: "Habitación Doble",
    slug: "habitacion-doble",
    description: "Habitación cómoda con cama matrimonial, ideal para parejas o viajeros de negocios. Incluye aire acondicionado, TV smart y baño privado.",
    max_guests: 2,
    base_price: 120000,
    beds_info: {
      matrimonial: 1
    },
    amenities: ["aire-acondicionado", "tv-smart", "wifi", "banio-privado"],
    images: [
      "https://i.ibb.co/d41rZQfg/unnamed-1.webp"
    ],
    status: "disponible"
  },
  {
    id: 2,
    name: "Habitación Simple",
    slug: "habitacion-simple",
    description: "Habitación funcional con cama matrimonial, perfecta para viajeros solitarios o estancias cortas.",
    max_guests: 1,
    base_price: 80000,
    beds_info: {
      matrimonial: 1
    },
    amenities: ["aire-acondicionado", "tv-smart", "wifi", "banio-privado"],
    images: [
      "https://i.ibb.co/B25YQ2dp/unnamed-2.webp"
    ],
    status: "disponible"
  },
  {
    id: 3,
    name: "Habitación Cuádruple",
    slug: "habitacion-cuadruple",
    description: "Espaciosa habitación con dos camas matrimoniales, ideal para familias o grupos grandes.",
    max_guests: 4,
    base_price: 160000,
    beds_info: {
      matrimonial: 2
    },
    amenities: ["aire-acondicionado", "tv-smart", "wifi", "banio-privado", "escritorio"],
    images: [
      "https://i.ibb.co/C3gsRXKp/unnamed-4.webp"
    ],
    status: "disponible"
  },
  {
    id: 4,
    name: "Habitación Triple",
    slug: "habitacion-triple",
    description: "Habitación versátil con cama matrimonial y cama individual, perfecta para familias pequeñas o grupos.",
    max_guests: 3,
    base_price: 140000,
    beds_info: {
      matrimonial: 1,
      individual: 1
    },
    amenities: ["aire-acondicionado", "tv-smart", "wifi", "banio-privado", "escritorio"],
    images: [
      "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp"
    ],
    status: "disponible"
  },
  {
    id: 5,
    name: "Suite Deluxe",
    slug: "suite-deluxe",
    description: "Suite premium con cama matrimonial king size, sala de estar y amenities de lujo para estadías especiales.",
    max_guests: 2,
    base_price: 200000,
    beds_info: {
      king: 1
    },
    amenities: ["aire-acondicionado", "tv-smart", "wifi", "banio-privado", "jacuzzi", "sala-estar", "minibar"],
    images: [
      "https://i.ibb.co/Jj0Dv6fx/unnamed-5.webp"
    ],
    status: "disponible"
  }
]

export const mockGallery = [
  {
    id: 1,
    title: "Recepción del Hotel",
    description: "Nuestra elegante recepción con atención 24/7",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "recepcion",
    display_order: 1,
    is_featured: true,
    status: "active"
  },
  {
    id: 2,
    title: "Lobby Principal",
    description: "Espacio de descanso y socialización",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "areas-comunes",
    display_order: 2,
    is_featured: true,
    status: "active"
  },
  {
    id: 3,
    title: "Jardín Interior",
    description: "Oasis de tranquilidad en el corazón del hotel",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "exterior",
    display_order: 3,
    is_featured: true,
    status: "active"
  },
  {
    id: 4,
    title: "Piscina",
    description: "Piscina climatizada con solarium",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "amenidades",
    display_order: 4,
    is_featured: true,
    status: "active"
  },
  {
    id: 5,
    title: "Restaurante",
    description: "Gastronomía local e internacional",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "restaurante",
    display_order: 5,
    is_featured: false,
    status: "active"
  },
  {
    id: 6,
    title: "Bar Terraza",
    description: "Cocktails y vistas panorámicas",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "bar",
    display_order: 6,
    is_featured: false,
    status: "active"
  },
  {
    id: 7,
    title: "Gimnasio",
    description: "Equipo moderno para mantenerte en forma",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "amenidades",
    display_order: 7,
    is_featured: false,
    status: "active"
  },
  {
    id: 8,
    title: "Sala de Conferencias",
    description: "Espacio ideal para eventos y reuniones",
    image_url: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
    category: "eventos",
    display_order: 8,
    is_featured: false,
    status: "active"
  }
]

export const mockTestimonials = [
  {
    id: 1,
    guest_name: "María González",
    rating: 5,
    comment: "Excelente atención y muy limpio. Las habitaciones son cómodas y el personal muy amable. Sin duda volveré.",
    room_type: "Suite Junior",
    date: "2024-01-15"
  },
  {
    id: 2,
    guest_name: "Carlos Rodríguez",
    rating: 5,
    comment: "Perfecto para mi viaje de negocios. Ubicación céntrica, wifi rápido y habitación muy funcional.",
    room_type: "Habitación Doble Estándar",
    date: "2024-01-10"
  },
  {
    id: 3,
    guest_name: "Laura Martínez",
    rating: 4,
    comment: "Muy buena experiencia en general. El desayuno delicioso y las instalaciones impecables. Recomendado.",
    room_type: "Habitación Triple",
    date: "2024-01-05"
  },
  {
    id: 4,
    guest_name: "Diego Fernández",
    rating: 5,
    comment: "Aniversario perfecto en la Suite Ejecutiva. El jacuzzi y la atención de conserjería fueron inmejorables.",
    room_type: "Suite Ejecutiva",
    date: "2023-12-20"
  },
  {
    id: 5,
    guest_name: "Ana Sofía López",
    rating: 5,
    comment: "Viajé con mi familia y la habitación cuádruple fue ideal para nosotros. Los niños amaron la piscina.",
    room_type: "Habitación Cuádruple",
    date: "2023-12-15"
  },
  {
    id: 6,
    guest_name: "Roberto Silva",
    rating: 4,
    comment: "Muy bueno por el precio. Limpieza impecable y cama muy cómoda. Lo único a mejorar es el estacionamiento.",
    room_type: "Habitación Individual",
    date: "2023-12-10"
  }
]

export const mockMenu = [
  {
    id: 1,
    category: "CORTES PREMIUM",
    items: [
      {
        id: 1,
        name: "Ojo de Bife",
        description: "500g - Corte jugoso con hueso, cocido a la parrilla",
        price: 12500,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: true
      },
      {
        id: 2,
        name: "Cuadril",
        description: "400g - Tierno y sabroso, punto justo",
        price: 10800,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 3,
        name: "Vacío",
        description: "350g - Tradicional argentino con chimichurri",
        price: 9500,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 4,
        name: "Costillar",
        description: "600g - Ahumado lentamente, tierno como manteca",
        price: 14200,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: true
      }
    ]
  },
  {
    id: 2,
    category: "ACOMPAÑAMIENTOS",
    items: [
      {
        id: 5,
        name: "Papas Provenzales",
        description: "Hierbas aromáticas, ajo fresco y perejil",
        price: 3800,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 6,
        name: "Ensalada Mixta",
        description: "Verde fresca con vinagreta casera",
        price: 2900,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 7,
        name: "Puré de Papas",
        description: "Crema, manteca y nuez moscada",
        price: 3200,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 8,
        name: "Provoleta",
        description: "Grillada con hierbas, oregano y tomillo",
        price: 4500,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: true
      }
    ]
  },
  {
    id: 3,
    category: "BEBIDAS",
    items: [
      {
        id: 9,
        name: "Vino Tinto Malbec",
        description: "Cosecha 2021, Mendoza",
        price: 4800,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 10,
        name: "Cerveza Artesanal IPA",
        description: "Local, notas cítricas y lupulo",
        price: 2200,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 11,
        name: "Limonada Fresca",
        description: "Natural con menta y jengibre",
        price: 1800,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      },
      {
        id: 12,
        name: "Agua Mineral",
        description: "Con o sin gas, origen andino",
        price: 800,
        image: "https://i0.wp.com/iguazuargentinatours.com/wp-content/uploads/2020/05/Iguazu-Waterfalls-Awasi-Iguazu-PH-Miguel-Cesar-scaled.jpg?fit=1920%2C1275&ssl=1",
        featured: false
      }
    ]
  }
]

export const mockAmenities = [
  {
    id: 1,
    name: "Wi-Fi Gratis",
    description: "Internet de alta velocidad en todo el hotel",
    icon: "wifi",
    category: "servicios"
  },
  {
    id: 2,
    name: "Aire Acondicionado",
    description: "Climatización individual en cada habitación",
    icon: "wind",
    category: "habitaciones"
  },
  {
    id: 3,
    name: "TV Smart",
    description: "Televisión con Netflix y servicios de streaming",
    icon: "tv",
    category: "habitaciones"
  },
  {
    id: 4,
    name: "Piscina Climatizada",
    description: "Piscina exterior con temperatura controlada",
    icon: "waves",
    category: "amenidades"
  },
  {
    id: 8,
    name: "Recepción 24/7",
    description: "Atención permanente en recepción",
    icon: "clock",
    category: "servicios"
  }
]

export const mockSettings = [
  {
    id: 1,
    key: "hotel_name",
    value: "Hotel Mariox",
    category: "general",
    description: "Nombre del hotel"
  },
  {
    id: 2,
    key: "hotel_address",
    value: "Av. Principal 123, Centro, Ciudad",
    category: "contact",
    description: "Dirección del hotel"
  },
  {
    id: 3,
    key: "hotel_phone",
    value: "+54 9 11 1234-5678",
    category: "contact",
    description: "Teléfono de contacto"
  },
  {
    id: 4,
    key: "hotel_email",
    value: "info@hotelmariox.com",
    category: "contact",
    description: "Email de contacto"
  },
  {
    id: 5,
    key: "check_in_time",
    value: "14:00",
    category: "policies",
    description: "Hora de check-in"
  },
  {
    id: 6,
    key: "check_out_time",
    value: "11:00",
    category: "policies",
    description: "Hora de check-out"
  },
  {
    id: 7,
    key: "cancellation_policy",
    value: "24 horas",
    category: "policies",
    description: "Política de cancelación"
  }
]

// Mock data for tours/traslados
export const mockTours = [
  {
    id: "cataratas-iguazu-argentina",
    slug: "cataratas-iguazu-argentina",
    title_es: "Cataratas del Iguazú - Argentina",
    title_en: "Iguazu Falls - Argentina",
    title_pt: "Cataratas do Iguaçu - Argentina",
    title_fr: "Chutes d'Iguazú - Argentine",
    title_de: "Iguazú-Wasserfälle - Argentinien",
    title_zh: "伊瓜苏瀑布 - 阿根廷",
    description_es: "Descubre las majestuosas Cataratas del Iguazú desde el lado argentino, con senderos y miradores cercanos a las cascadas.",
    description_en: "Discover Iguazu Falls from the Argentinian side, with trails and viewpoints close to the waterfalls.",
    description_pt: "Descubra as Cataratas do Iguaçu pelo lado argentino, com trilhas e mirantes próximos às quedas.",
    description_fr: "Découvrez les chutes d'Iguazú côté argentin, avec sentiers et belvédères proches des cascades.",
    description_de: "Entdecken Sie die Iguazú-Wasserfälle auf der argentinischen Seite mit Wegen und Aussichtspunkten nahe an den Fällen.",
    description_zh: "从阿根廷一侧探索伊瓜苏瀑布，步道与观景台近距离欣赏瀑布。",
    short_description_es: "Experiencia inmersiva en la selva misionera",
    short_description_en: "Immersive experience in the Misiones jungle",
    short_description_pt: "Experiência imersiva na selva missioneira",
    short_description_fr: "Expérience immersive dans la jungle de Misiones",
    short_description_de: "Immersives Erlebnis im Misiones-Dschungel",
    short_description_zh: "沉浸式丛林体验",
    duration_es: "Día completo",
    duration_en: "Full day",
    duration_pt: "Dia inteiro",
    duration_fr: "Journée complète",
    duration_de: "Ganzer Tag",
    duration_zh: "全天",
    route_es: "Puerto Iguazú ↔ Parque Nacional Iguazú",
    route_en: "Puerto Iguazú ↔ Iguazú National Park",
    route_pt: "Puerto Iguazú ↔ Parque Nacional Iguazú",
    route_fr: "Puerto Iguazú ↔ Parc national d'Iguazú",
    route_de: "Puerto Iguazú ↔ Nationalpark Iguazú",
    route_zh: "Puerto Iguazú ↔ 伊瓜苏国家公园",
    whatsapp_message_es: "Hola! Me interesa visitar las Cataratas del Iguazú del lado argentino. ¿Info de traslado y lugares a visitar?",
    whatsapp_message_en: "Hi! I'm interested in Iguazu Falls (Argentinian side). Info on transport and places to visit?",
    whatsapp_message_pt: "Olá! Tenho interesse nas Cataratas (lado argentino). Informações de traslado e locais?",
    whatsapp_message_fr: "Bonjour ! Intéressé par les chutes (côté argentin). Infos sur le transfert et les lieux à visiter ?",
    whatsapp_message_de: "Hallo! Interessiert an den Iguazú-Fällen (argentinische Seite). Infos zu Transfer und Besichtigungen?",
    whatsapp_message_zh: "你好！我想去阿根廷一侧的伊瓜苏瀑布。能提供交通与景点信息吗？",
    features_es: ["Garganta del Diablo","Sendero Superior","Sendero Inferior","Isla San Martín","Sendero Macuco"],
    features_en: ["Devil's Throat","Upper Trail","Lower Trail","San Martín Island","Macuco Trail"],
    features_pt: ["Garganta do Diabo","Trilha Superior","Trilha Inferior","Ilha San Martín","Trilha Macuco"],
    features_fr: ["Gorge du Diable","Sentier supérieur","Sentier inférieur","Île San Martín","Sentier Macuco"],
    features_de: ["Teufelsschlund","Oberer Steg","Unterer Steg","San-Martín-Insel","Macuco-Pfad"],
    features_zh: ["魔鬼喉","上层步道","下层步道","圣马丁岛","马库科小径"],
    price_from: 15000,
    price_per_passenger: null,
    price_display_type: "base",
    image_url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/cb/95/57/img-20180721-wa0042-largejpg.jpg?w=900&h=500&s=1",
    media_urls: [],
    is_featured: false,
    display_order: 1,
    country: "argentina"
  },
  {
    id: "cataratas-iguazu-brasil",
    slug: "cataratas-iguazu-brasil",
    title_es: "Cataratas del Iguazú - Brasil",
    title_en: "Iguazu Falls - Brazil",
    title_pt: "Cataratas do Iguaçu - Brasil",
    title_fr: "Chutes d'Iguazú - Brésil",
    title_de: "Iguazú-Wasserfälle - Brasilien",
    title_zh: "伊瓜苏瀑布 - 巴西",
    description_es: "Vista panorámica espectacular desde Foz do Iguaçu.",
    description_en: "Spectacular panoramic views from Foz do Iguaçu.",
    description_pt: "Vistas panorâmicas espetaculares a partir de Foz do Iguaçu.",
    description_fr: "Vues panoramiques spectaculaires depuis Foz do Iguaçu.",
    description_de: "Spektakuläre Panoramaaussichten von Foz do Iguaçu.",
    description_zh: "在巴西一侧（伊瓜苏市）欣赏壮观全景。",
    short_description_es: "Vista panorámica espectacular",
    short_description_en: "Spectacular panoramic view",
    short_description_pt: "Vista panorâmica espetacular",
    short_description_fr: "Vue panoramique spectaculaire",
    short_description_de: "Spektakuläre Panoramaaussicht",
    short_description_zh: "壮丽全景",
    duration_es: "Día completo",
    duration_en: "Full day",
    duration_pt: "Dia inteiro",
    duration_fr: "Journée complète",
    duration_de: "Ganzer Tag",
    duration_zh: "全天",
    route_es: "Puerto Iguazú ↔ Parque Nacional do Iguaçu",
    route_en: "Puerto Iguazú ↔ Iguaçu National Park",
    route_pt: "Puerto Iguazú ↔ Parque Nacional do Iguaçu",
    route_fr: "Puerto Iguazú ↔ Parc national d'Iguaçu",
    route_de: "Puerto Iguazú ↔ Nationalpark Iguaçu",
    route_zh: "Puerto Iguazú ↔ 伊瓜苏国家公园（巴西）",
    whatsapp_message_es: "Hola! Me interesa visitar las Cataratas (Brasil). ¿Info de traslado y atracciones?",
    whatsapp_message_en: "Hi! Interested in Iguazu Falls (Brazil). Info on transport and attractions?",
    whatsapp_message_pt: "Olá! Interesso-me pelas Cataratas (Brasil). Informações de traslado e atrações?",
    whatsapp_message_fr: "Bonjour ! Intéressé par les chutes (Brésil). Infos sur transfert et attractions ?",
    whatsapp_message_de: "Hallo! Interessiert an den Fällen (Brasilien). Infos zu Transfer und Attraktionen?",
    whatsapp_message_zh: "你好！我想去巴西一侧的伊瓜苏瀑布。能提供交通与景点信息吗？",
    features_es: ["Pasarelas panorámicas","Macuco Safari","Centro de visitantes"],
    features_en: ["Panoramic walkways","Macuco Safari","Visitor center"],
    features_pt: ["Passarelas panorâmicas","Macuco Safari","Centro de visitantes"],
    features_fr: ["Passerelles panoramiques","Macuco Safari","Centre des visiteurs"],
    features_de: ["Panoramastege","Macuco Safari","Besucherzentrum"],
    features_zh: ["全景栈道","马库科漂流","游客中心"],
    price_from: 18000,
    price_per_passenger: null,
    price_display_type: "base",
    image_url: "https://media.tacdn.com/media/attractions-splice-spp-674x446/10/5a/30/a4.jpg",
    media_urls: [],
    is_featured: false,
    display_order: 2,
    country: "argentina"
  },
  {
    id: "city-tour-puerto-iguazu",
    slug: "city-tour-puerto-iguazu",
    title_es: "City Tour Puerto Iguazú",
    title_en: "Puerto Iguazú City Tour",
    title_pt: "City Tour Puerto Iguazú",
    title_fr: "City tour de Puerto Iguazú",
    title_de: "Stadttour Puerto Iguazú",
    title_zh: "伊瓜苏港城市观光",
    description_es: "Recorrido por puntos emblemáticos: Hito Tres Fronteras, feria y vistas del río.",
    description_en: "Tour through landmarks: Triple Frontier, crafts fair, and river views.",
    description_pt: "Passeio por marcos: Tríplice Fronteira, feira e vistas do rio.",
    description_fr: "Parcours des lieux emblématiques : Trois Frontières, foire et vues sur le fleuve.",
    description_de: "Tour zu Wahrzeichen: Dreiländereck, Markt und Flussblicke.",
    description_zh: "游览地标：三国交界、手工艺集市与河景。",
    short_description_es: "Cultura, historia y naturaleza",
    short_description_en: "Culture, history and nature",
    short_description_pt: "Cultura, história e natureza",
    short_description_fr: "Culture, histoire et nature",
    short_description_de: "Kultur, Geschichte und Natur",
    short_description_zh: "文化·历史·自然",
    duration_es: "4 horas",
    duration_en: "4 hours",
    duration_pt: "4 horas",
    duration_fr: "4 heures",
    duration_de: "4 Stunden",
    duration_zh: "4小时",
    route_es: "Circuito por Puerto Iguazú",
    route_en: "Circuit around Puerto Iguazú",
    route_pt: "Circuito por Puerto Iguazú",
    route_fr: "Circuit à Puerto Iguazú",
    route_de: "Rundfahrt in Puerto Iguazú",
    route_zh: "伊瓜苏港城市环线",
    whatsapp_message_es: "Hola! Info del City Tour (lugares y horarios)?",
    whatsapp_message_en: "Hi! City Tour info (stops and schedules)?",
    whatsapp_message_pt: "Olá! Informações do City Tour (paradas e horários)?",
    whatsapp_message_fr: "Bonjour ! Infos sur le city tour (arrêts et horaires) ?",
    whatsapp_message_de: "Hallo! Infos zur Stadttour (Stopps und Zeiten)?",
    whatsapp_message_zh: "你好！城市观光的站点与时间安排？",
    features_es: ["Hito Tres Fronteras","Feria de artesanías","Vistas del río"],
    features_en: ["Triple Frontier","Crafts fair","River views"],
    features_pt: ["Marco das Três Fronteiras","Feira de artesanato","Vistas do rio"],
    features_fr: ["Trois Frontières","Foire d'artisanat","Vues sur le fleuve"],
    features_de: ["Dreiländereck","Kunsthandwerksmarkt","Flussblick"],
    features_zh: ["三国交界","手工艺集市","河景"],
    price_from: 12000,
    price_per_passenger: null,
    price_display_type: "base",
    image_url: "https://image-tc.galaxy.tf/wijpeg-3kw75nl2xa0h2fraqv9my6td2/iguazu-city-psx-20191219-234035-medium.jpg",
    media_urls: [],
    is_featured: false,
    display_order: 3,
    country: "argentina"
  },
  {
    id: "traslado-ruinas-san-ignacio",
    slug: "traslado-ruinas-san-ignacio",
    title_es: "Traslado a las Ruinas de San Ignacio",
    title_en: "Transfer to San Ignacio Ruins",
    title_pt: "Traslado às Ruínas de San Ignacio",
    title_fr: "Transfert vers les ruines de San Ignacio",
    title_de: "Transfer zu den Ruinen von San Ignacio",
    title_zh: "圣伊格纳西奥遗址接送",
    description_es: "Ruinas Jesuíticas, Patrimonio Mundial UNESCO.",
    description_en: "Jesuit Ruins, UNESCO World Heritage.",
    description_pt: "Ruínas Jesuíticas, Patrimônio Mundial UNESCO.",
    description_fr: "Ruines jésuites, patrimoine mondial de l'UNESCO.",
    description_de: "Jesuitenruinen, UNESCO-Welterbe.",
    description_zh: "耶稣会遗址（世界遗产）。",
    short_description_es: "Historia y cultura",
    short_description_en: "History and culture",
    short_description_pt: "História e cultura",
    short_description_fr: "Histoire et culture",
    short_description_de: "Geschichte und Kultur",
    short_description_zh: "历史与文化",
    duration_es: "Día completo",
    duration_en: "Full day",
    duration_pt: "Dia inteiro",
    duration_fr: "Journée complète",
    duration_de: "Ganzer Tag",
    duration_zh: "全天",
    route_es: "Puerto Iguazú ↔ San Ignacio, Misiones",
    route_en: "Puerto Iguazú ↔ San Ignacio, Misiones",
    route_pt: "Puerto Iguazú ↔ San Ignacio, Misiones",
    route_fr: "Puerto Iguazú ↔ San Ignacio, Misiones",
    route_de: "Puerto Iguazú ↔ San Ignacio, Misiones",
    route_zh: "Puerto Iguazú ↔ 圣伊格纳西奥",
    whatsapp_message_es: "Hola! Info de traslado a San Ignacio (precio y horarios)?",
    whatsapp_message_en: "Hi! Transfer to San Ignacio info (price and schedule)?",
    whatsapp_message_pt: "Olá! Informações do traslado a San Ignacio (preço e horários)?",
    whatsapp_message_fr: "Bonjour ! Infos transfert vers San Ignacio (prix et horaires) ?",
    whatsapp_message_de: "Hallo! Infos zum Transfer nach San Ignacio (Preis und Zeiten)?",
    whatsapp_message_zh: "你好！前往圣伊格纳西奥的接送价格与时间？",
    features_es: ["Patrimonio Mundial","Arquitectura colonial","Cultura guaraní"],
    features_en: ["World Heritage","Colonial architecture","Guaraní culture"],
    features_pt: ["Patrimônio Mundial","Arquitetura colonial","Cultura guarani"],
    features_fr: ["Patrimoine mondial","Architecture coloniale","Culture guarani"],
    features_de: ["Weltkulturerbe","Kolonialarchitektur","Guaraní-Kultur"],
    features_zh: ["世界遗产","殖民建筑","瓜拉尼文化"],
    price_from: 25000,
    price_per_passenger: null,
    price_display_type: "base",
    image_url: "https://www.iguazuturismo.com.ar/img/1200/ruinas-san-ignacio.jpg",
    media_urls: [],
    is_featured: false,
    display_order: 4,
    country: "argentina"
  },
  {
    id: "traslado-saltos-mocona",
    slug: "traslado-saltos-mocona",
    title_es: "Traslado a los Saltos del Moconá",
    title_en: "Transfer to Moconá Falls",
    title_pt: "Traslado aos Saltos do Moconá",
    title_fr: "Transfert vers les chutes du Moconá",
    title_de: "Transfer zu den Moconá-Fällen",
    title_zh: "莫科纳瀑布接送",
    description_es: "Cascadas longitudinales únicas en el mundo.",
    description_en: "Unique longitudinal waterfalls in the world.",
    description_pt: "Quedas longitudinais únicas no mundo.",
    description_fr: "Cascades longitudinales uniques au monde.",
    description_de: "Einzigartige längs verlaufende Wasserfälle weltweit.",
    description_zh: "世界罕见的纵向瀑布。",
    short_description_es: "Aventura y naturaleza",
    short_description_en: "Adventure and nature",
    short_description_pt: "Aventura e natureza",
    short_description_fr: "Aventure et nature",
    short_description_de: "Abenteuer und Natur",
    short_description_zh: "探险与自然",
    duration_es: "Día completo",
    duration_en: "Full day",
    duration_pt: "Dia inteiro",
    duration_fr: "Journée complète",
    duration_de: "Ganzer Tag",
    duration_zh: "全天",
    route_es: "Puerto Iguazú ↔ El Soberbio, Misiones",
    route_en: "Puerto Iguazú ↔ El Soberbio, Misiones",
    route_pt: "Puerto Iguazú ↔ El Soberbio, Misiones",
    route_fr: "Puerto Iguazú ↔ El Soberbio, Misiones",
    route_de: "Puerto Iguazú ↔ El Soberbio, Misiones",
    route_zh: "Puerto Iguazú ↔ 埃尔索韦尔比奥",
    whatsapp_message_es: "Hola! Info de Moconá (precio, horarios y actividades)?",
    whatsapp_message_en: "Hi! Moconá info (price, schedule, activities)?",
    whatsapp_message_pt: "Olá! Informações de Moconá (preço, horários, atividades)?",
    whatsapp_message_fr: "Bonjour ! Infos Moconá (prix, horaires, activités) ?",
    whatsapp_message_de: "Hallo! Infos zu Moconá (Preis, Zeiten, Aktivitäten)?",
    whatsapp_message_zh: "你好！莫科纳行程的价格、时间与活动？",
    features_es: ["Paseos en lancha","Senderismo","Vistas del río Uruguay"],
    features_en: ["Boat rides","Jungle hiking","Uruguay River views"],
    features_pt: ["Passeios de barco","Trilhas","Vistas do rio Uruguai"],
    features_fr: ["Balades en bateau","Randonnée","Vues sur le fleuve Uruguay"],
    features_de: ["Bootsfahrten","Wandern","Blick auf den Río Uruguay"],
    features_zh: ["乘船","丛林徒步","乌拉圭河景观"],
    price_from: 30000,
    price_per_passenger: null,
    price_display_type: "base",
    image_url: "https://upload.wikimedia.org/wikipedia/commons/6/66/Mocona5.jpg",
    media_urls: [],
    is_featured: false,
    display_order: 5,
    country: "argentina"
  }
]
