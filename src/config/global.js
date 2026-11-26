export default {
  global: {
    Name: 'Identificación del alcance del estudio de caudales ambientales',
    Description:
      'Este componente desarrolla los fundamentos conceptuales, técnicos y normativos necesarios para comprender el alcance de los estudios de caudal ambiental como instrumento para la gestión integral del recurso hídrico. Se abordan los conceptos de caudal y caudal ambiental, los enfoques hidrológico, hidráulico y holístico utilizados en su estimación, así como los requisitos técnicos y legales vigentes en Colombia. Este componente proporciona al aprendiz las herramientas necesarias para identificar el alcance, los criterios técnicos y las metodologías aplicables en estudios de caudal ambiental, de acuerdo con la normativa ambiental colombiana y las buenas prácticas internacionales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Caudal ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Qué es el caudal ambiental?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: '¿Cómo se estima el caudal ambiental?',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Requisitos técnicos y normativos para la estimación del caudal ambiental en Colombia',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Medición del caudal ambiental y estudios de referencia en Colombia y el mundo',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Metodologías para el cálculo de caudal ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Clasificación y tipos de metodologías para el cálculo del caudal ambiental',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Nivel de complejidad de las metodologías para la estimación del caudal ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Información requerida para la estimación del caudal ambiental',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Casos de aplicación de metodologías para la estimación del caudal ambiental',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo:
              'Análisis del caso: selección de la metodología para estimar el caudal ambiental',
            hash: 't_2_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/22230069_CF01_CFA.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Caudal ambiental',
      significado:
        'cantidad y distribución de agua necesaria para mantener las funciones ecológicas de un ecosistema acuático.',
    },
    {
      termino: 'Caudal',
      significado:
        'volumen de agua que circula por una sección de una corriente durante un periodo determinado.',
    },
    {
      termino: 'Ecosistema acuático',
      significado:
        'sistema natural en el que interactúan organismos vivos y componentes físicos y químicos del ambiente acuático.',
    },
    {
      termino: 'Estimación del caudal ambiental',
      significado:
        'proceso técnico para determinar los flujos de agua necesarios para conservar un ecosistema.',
    },
    {
      termino: 'Estudio de caudales ambientales',
      significado:
        'análisis orientado a identificar las necesidades de flujo de agua de un ecosistema y sus condiciones ambientales.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de procedimientos y técnicas utilizados para desarrollar un estudio y alcanzar sus objetivos.',
    },
    {
      termino: 'Método hidrológico',
      significado:
        'procedimiento basado en registros históricos y estadísticas de caudales para estimar el caudal ambiental.',
    },
    {
      termino: 'Método hidráulico',
      significado:
        'técnica que analiza variables como profundidad, velocidad y características del flujo de agua.',
    },
    {
      termino: 'Método hidrobiológico',
      significado:
        'procedimiento que considera los organismos acuáticos y sus necesidades para determinar los requerimientos de caudal.',
    },
    {
      termino: 'Método holístico',
      significado:
        'enfoque que integra diferentes componentes ambientales, hidrológicos, hidráulicos y ecológicos para estimar el caudal ambiental.',
    },
    {
      termino: 'Régimen hidrológico',
      significado:
        'comportamiento de los caudales de una corriente de agua a lo largo del tiempo.',
    },
    {
      termino: 'Serie histórica de caudales',
      significado:
        'registro de mediciones de caudal recopiladas durante un periodo determinado.',
    },
    {
      termino: 'Aforo',
      significado:
        'procedimiento técnico utilizado para medir el caudal de agua que circula por una corriente.',
    },
    {
      termino: 'Cuenca hidrográfica',
      significado:
        'territorio cuyas aguas drenan hacia un mismo río, quebrada o cuerpo de agua.',
    },
    {
      termino: 'Selección metodológica',
      significado:
        'proceso de elección de la metodología más adecuada según las características del ecosistema, la información disponible y los objetivos del estudio.',
    },
  ],
  referencias: [
    {
      referencia:
        'Acreman, M., et al. (2014). Environmental flows for natural, hybrid, and novel riverine ecosystems in a changing world. Frontiers in Ecology and the Environment, 12(8), 466–473.',
      link: '',
    },
    {
      referencia:
        'Arthington, A. H. (2023). Environmental flows: From theory to implementation in a changing world. River Research and Applications, 39(5), 695–709.',
      link: '',
    },
    {
      referencia:
        'Álvarez Villanueva, J. I., & Huamán Vidaurre, J. F. (2022). Modelos hidrológicos para la estimación de caudal ecológico. Manglar, 19(2), 201–207.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales. (2022). Estudio Nacional del Agua 2022.',
      link: '',
    },
    {
      referencia:
        'Instituto de Hidrología, Meteorología y Estudios Ambientales, & Ministerio de Ambiente y Desarrollo Sostenible. (2017). Guía metodológica para la estimación del caudal ambiental.',
      link: '',
    },
    {
      referencia:
        'King, J. M., Tharme, R. E., & De Villiers, M. S. (Eds.). (2008). Environmental flow assessments for rivers: Manual for the Building Block Methodology. Water Research Commission.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2018). Metodología general para la elaboración y presentación de estudios ambientales.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible, & Instituto de Hidrología, Meteorología y Estudios Ambientales. (2019). Metodología para la estimación del caudal ambiental en el río Bogotá.',
      link: '',
    },
    {
      referencia:
        'Pastor, A. V., Ludwig, F., Biemans, H., Hoff, H., & Kabat, P. (2014). Accounting for environmental flow requirements in global water assessments. Hydrology and Earth System Sciences, 18, 5041–5059.',
      link: '',
    },
    {
      referencia:
        'Poff, N. L., & Zimmerman, J. K. H. (2010). Ecological responses to altered flow regimes: A literature review to inform environmental flows science and management. Freshwater Biology, 55(1), 194–205.',
      link: '',
    },
    {
      referencia:
        'Richter, B. D., Baumgartner, J. V., Wigington, R., & Braun, D. P. (1997). How much water does a river need? Freshwater Biology, 37(1), 231–249.',
      link: '',
    },
    {
      referencia:
        'Sandoval-Solis, S., et al. (2022). Environmental flows in the Rio Grande–Rio Bravo basin. Ecology and Society, 27(1), Article 20.',
      link: '',
    },
    {
      referencia:
        'Tharme, R. E. (2003). A global perspective on environmental flow assessment: Emerging trends in the development and application of environmental flow methodologies for rivers. River Research and Applications, 19(5–6), 397–441.',
      link: '',
    },
    {
      referencia:
        'The Nature Conservancy. (2009). Indicators of Hydrologic Alteration (IHA), Version 7.1: User’s manual.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2020). Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2020: Agua y cambio climático.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2022). Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos 2022: Aguas subterráneas. Hacer visible el recurso invisible.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional G06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Margarita Inés Viloria Villegas',
          cargo: 'Profesional 04',
          centro: 'Centro Biotecnológico del Caribe - Regional Cesar',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastian Teran Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
