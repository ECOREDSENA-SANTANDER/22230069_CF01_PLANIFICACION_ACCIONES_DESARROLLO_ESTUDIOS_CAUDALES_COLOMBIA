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
        download: 'downloads/dist.pdf',
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
      termino: 'Actividades de campo',
      significado:
        'tareas realizadas directamente en el área de estudio para recopilar información hidrológica, hidráulica y ecológica.',
    },
    {
      termino: 'Caudal ambiental',
      significado:
        'régimen de flujo de agua necesario para mantener los ecosistemas acuáticos y los servicios ecosistémicos asociados.',
    },
    {
      termino: 'Cronograma',
      significado:
        'herramienta de planificación que organiza las actividades de un estudio según su duración, secuencia y fechas de ejecución.',
    },
    {
      termino: 'Estudio de caudal ambiental',
      significado:
        'proceso técnico que permite determinar las condiciones de flujo necesarias para mantener el funcionamiento de los ecosistemas acuáticos.',
    },
    {
      termino: 'Gestión de proyectos',
      significado:
        'conjunto de procesos orientados a planificar, organizar, ejecutar y controlar las actividades y los recursos de un proyecto.',
    },
    {
      termino: 'Herramientas digitales',
      significado:
        'aplicaciones y programas informáticos que facilitan la planificación, el procesamiento de datos, la modelación y el seguimiento de un estudio.',
    },
    {
      termino: 'Información hidrológica',
      significado:
        'datos relacionados con el comportamiento del agua, como caudales, precipitaciones, escorrentía y variaciones temporales del flujo.',
    },
    {
      termino: 'Metodología',
      significado:
        'conjunto de procedimientos y técnicas seleccionados para desarrollar un estudio y alcanzar sus objetivos.',
    },
    {
      termino: 'Modelación hidráulica',
      significado:
        'representación del comportamiento del agua mediante modelos que permiten analizar variables como velocidad, profundidad y nivel del flujo.',
    },
    {
      termino: 'Monitoreo',
      significado:
        'seguimiento sistemático de variables y condiciones ambientales para evaluar cambios y verificar el cumplimiento de los objetivos establecidos.',
    },
    {
      termino: 'Plan de trabajo',
      significado:
        'documento que establece las actividades, los responsables, los tiempos y los recursos necesarios para ejecutar un estudio.',
    },
    {
      termino: 'Presupuesto',
      significado:
        'estimación de los costos asociados con el personal, los equipos, las actividades de campo, el procesamiento de datos y los productos técnicos.',
    },
    {
      termino: 'Recursos técnicos',
      significado:
        'equipos, instrumentos, materiales y conocimientos especializados requeridos para desarrollar las actividades de un estudio.',
    },
    {
      termino: 'Sistemas de Información Geográfica (SIG)',
      significado:
        'herramientas tecnológicas que permiten recopilar, gestionar, analizar y representar información geográfica relacionada con la cuenca y el sistema fluvial.',
    },
    {
      termino: 'Trabajo interdisciplinario',
      significado:
        'colaboración entre profesionales de diferentes áreas del conocimiento para integrar perspectivas y desarrollar estudios de caudal ambiental de manera integral.',
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
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Maria Alejandra Vera Briceño',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
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
