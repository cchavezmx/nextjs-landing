

const LOCAL = {
  type: "Store",
  id: "https://itamx.com/#/dashboard",
  name: "Productos ABB, Canlizaciones Eléctricas",
  ur: "https://itamx.com/#/dashboard",
  telephone: "+52 55 5570-1197",

  address: {
    addressLocality: "Alvaro Obregon",
    postalCode: '01220',
    addressRegion: "Ciudad de México",
    addresCountry: "MX"
  },
  images: [
    "https://grupointecsa.com/web-logo.webp",
    "https://firebasestorage.googleapis.com/v0/b/itacatalgo.appspot.com/o/02AU143607I0039_01.webp?alt=media&token=f06fa8ad-d8c5-4bf3-9d09-098692c23a57"
  ],
  sameAs: [
    "https://itamx.com/#/dashboard"
  ],
  openingHours: [
  {
    opens: '09:00',
    closes: '15:00',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
    ],
    validFrom: '20121-01-01',
    validThrough: '2021-12-31',
  }           
  ],

  geo: {
    latitude: 19.386927952288477,
    longitude: -99.22415466137612
  },

  makesOffer: [
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'MXN',
        price: '580-700',
      },
      itemOffered: {
        name: 'Interruptor miniatura-s200-1+NP-c-0.5 A',
        description:
          'Los interruptores automáticos en miniatura System pro M compact S200 tienen limitación de corriente. Tienen dos mecanismos de disparo diferentes, el mecanismo de disparo térmico retardado para protección contra sobrecargas y el mecanismo de disparo electromecánico para protección contra cortocircuitos. Están disponibles en diferentes características (B, C, D, K, Z), configuraciones (1P, 1P + N, 2P, 3P, 3P + N, 4P), capacidades de corte (hasta 6 kA a 230/400 V AC ) y corrientes nominales (hasta 63A). Todos los MCB de la gama de productos S200 cumplen con IEC / EN 60898-1, IEC / EN 60947-2, UL1077, lo que permite su uso en aplicaciones residenciales, comerciales e industriales. El contacto auxiliar de ajuste inferior se puede montar en el S200 para ahorrar un 50% de espacio.',
      },
    },
  ],
  action: [
    {
      actionName: "potentialAction",
      actionType: "ReviewAction",
      target: "https://itamx.com/#/dashboard"
    }
  ]
}

export default LOCAL