<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Metodologías para el cálculo de caudal ambiental

    p.mb-5 En este capítulo se presentan las principales metodologías empleadas a nivel nacional e internacional para el cálculo del caudal ambiental, clasificadas de acuerdo con sus fundamentos técnicos, los requerimientos de información y el nivel de complejidad asociado con su aplicación.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/1.png')
      .col-lg-7
        .row.justify-content-center.align-items.mb-2
          .col-lg-2
            img.img-t(src='@/assets/curso/tema1/8.svg')
          .col-lg-10.ps-lg-0
            p.mb-0 La determinación del caudal ambiental constituye uno de los principales desafíos técnicos de la gestión integrada del recurso hídrico. A diferencia de otros parámetros hidrológicos, no existe un valor único y universal que permita garantizar la conservación de todos los ecosistemas acuáticos, debido a que cada río presenta condiciones hidrológicas, geomorfológicas, ecológicas y socioeconómicas particulares.
        p.mb-0 Durante las últimas cinco décadas se han desarrollado más de doscientas metodologías para estimar el caudal ambiental, las cuales difieren en sus fundamentos conceptuales, requerimientos de información, complejidad técnica, costos y nivel de precisión. Estas metodologías han evolucionado desde enfoques basados principalmente en registros y estadísticas hidrológicas hasta aproximaciones holísticas que integran procesos físicos, biológicos y sociales. Esta evolución ha permitido avanzar hacia la definición de regímenes ambientales de flujo que respondan a objetivos específicos de conservación y desarrollo sostenible (King et al., 1999; Acreman et al., 2014).

    p.mb-0 En Colombia, la metodología desarrollada por el Ministerio de Ambiente y Desarrollo Sostenible y el IDEAM adopta un enfoque jerárquico que permite seleccionar y combinar diferentes métodos de acuerdo con la disponibilidad de información y el nivel de complejidad del sistema fluvial. En este sentido, la selección de una metodología no depende exclusivamente de criterios técnicos, sino también del objetivo del estudio, la escala espacial, el grado de intervención del río, las características del ecosistema y los recursos disponibles para su ejecución.


    separador
    #t_2_1.titulo-segundo.mb-5
      h2 2.1 Clasificación y tipos de metodologías para el cálculo del caudal ambiental

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Las metodologías para estimar el caudal ambiental pueden clasificarse de acuerdo con el tipo de información utilizada, los procesos considerados y el nivel de integración de las variables ecológicas. Una de las clasificaciones más reconocidas es la propuesta por Tharme (2003) y complementada posteriormente por King et al. (2008), que permite diferenciar los métodos según sus fundamentos y requerimientos de información.
        p.mb-0 De acuerdo con esta clasificación, las metodologías pueden agruparse en cinco categorías principales: hidrológicas, hidráulicas, de simulación de hábitat, holísticas y ecohidráulicas.
      .col-lg-5
        img(src='@/assets/curso/tema2/2.png')

    p.mb-5 Explore el pódcast #[b Métodos hidrológicos] y conozca cómo se utilizan para estimar el caudal ambiental.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/45.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Métodos hidrológicos"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-0
                p.mb-0 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img(src='@/assets/curso/tema2/3.svg')
      .col-lg-6
        .bg12.p-lg-5.p-4
          .bg2.p-1.mb-4.mt-lg-3
            h4.text-white.mb-0.ps-2.pe-2 ¿Qué ventajas y limitaciones presentan?
          p.mb-0.mb-lg-2 Su principal ventaja es la facilidad de aplicación, debido a que requieren relativamente poca información y permiten obtener resultados en menor tiempo y con costos reducidos. Por ello, pueden ser útiles en evaluaciones preliminares, cuencas con información limitada y estudios en los que se requiere una primera aproximación al comportamiento del régimen de caudales.

    p.mb-5 Sin embargo, su principal limitación es que se concentran en las características hidrológicas y no representan de manera directa la respuesta de las especies, las condiciones físicas del hábitat, la calidad del agua, la geomorfología o los servicios ecosistémicos. Por esta razón, en estudios de mayor complejidad pueden complementarse con métodos hidráulicos, de simulación de hábitat, eco hidráulicos u holísticos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Métodos hidráulicos

    p.mb-4 Los métodos hidráulicos relacionan el caudal con las características físicas del cauce y del hábitat disponible. Para ello, analizan variables como la #[b profundidad, velocidad del flujo, ancho del cauce, perímetro mojado y tensión de corte.]
    
    p.mb-5 Entre los métodos más representativos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Método del perímetro mojado")
            .col-lg-12
              p.mb-0 Identifica el punto a partir del cual una disminución del caudal puede generar una reducción significativa del hábitat disponible. Ha sido utilizado especialmente en ríos de montaña.
          .row.align-items-center(titulo="Método de la profundidad crítica")
            .col-lg-12
              p.mb-0 Determina la profundidad mínima requerida para mantener determinadas condiciones del hábitat y puede utilizarse en estudios relacionados con especies de peces migratorios.
          .row.align-items-center(titulo="Métodos basados en la velocidad")
            .col-lg-12
              p.mb-0 Relacionan la velocidad del flujo con los requerimientos hidráulicos de determinadas especies o comunidades acuáticas.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/4.png')

    p.mb-4 Una de sus principales ventajas es que permiten analizar directamente la relación entre el caudal y las condiciones físicas del cauce, proporcionando información más detallada que los métodos exclusivamente hidrológicos.

    p.mb-5 No obstante, requieren campañas de campo para obtener información topográfica e hidráulica y no incorporan por sí solos las interacciones ecológicas ni los procesos biológicos que determinan el funcionamiento del ecosistema. Además, los resultados pueden verse afectados por modificaciones geomorfológicas del cauce, como erosión, sedimentación o cambios en su configuración, por lo que la información puede requerir actualización.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Métodos de simulación de hábitat
    
    p.mb-4 Los métodos de simulación de hábitat integran información hidrológica, hidráulica y ecológica para analizar cómo los cambios en el caudal modifican la disponibilidad de hábitat para determinadas especies o comunidades biológicas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/5.png')
      .col-lg-7
        p.mb-3 Uno de los métodos más conocidos es #[b PHABSIM #[em (Physical Habitat Simulation System)]], que relaciona la geometría del cauce, la profundidad, la velocidad del flujo y las preferencias de hábitat de las especies seleccionadas. Entre sus resultados se encuentra el #[b Área Ponderada Utilizable #[em (Weighted Usable Area, WUA),]] utilizada como indicador de la disponibilidad de hábitat bajo diferentes condiciones de caudal.
        .bg7.p-4.mb-0
          p.mb-0 Una de sus principales ventajas es la posibilidad de comparar diferentes escenarios y analizar cómo una variación del caudal puede modificar las condiciones del hábitat. Esto permite apoyar decisiones relacionadas con la operación de embalses, derivaciones, captaciones y otros proyectos que puedan modificar el régimen de flujo.
        
    p.mb-5 Sin embargo, su aplicación requiere mayor cantidad de información y recursos que los métodos anteriores. Es necesario realizar campañas de campo, recopilar información biológica de las especies objetivo y contar con profesionales especializados en hidrología, hidráulica, ecología y modelación. Por estas razones, su aplicación resulta especialmente pertinente en proyectos de mediana y gran escala o en ecosistemas de alta importancia ecológica.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Métodos holísticos

    p.mb-4 Los métodos holísticos consideran el río como un sistema ecológico y social complejo. Por ello, integran diferentes componentes, entre ellos la hidrología, hidráulica, geomorfología, biología, calidad del agua, aspectos sociales, economía y gobernanza.

    p.mb-5 Entre los principales métodos se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="BBM <em>(Building Block Methodology)</em>")
            .col-lg-12
              p.mb-0 Desarrollada en Sudáfrica. Construye el régimen ambiental a partir de diferentes componentes o bloques de flujo, como caudales base, pulsos, crecientes e inundaciones, relacionándolos con funciones ecológicas específicas.
          .row.align-items-center(titulo="DRIFT <em>(Downstream Response to Imposed Flow Transformation)</em>")
            .col-lg-12
              p.mb-0 Analiza los efectos ecológicos y sociales asociados con diferentes escenarios de regulación del flujo. Su aplicación resulta especialmente relevante en estudios relacionados con grandes embalses.
          .row.align-items-center(titulo="ELOHA <em>(Ecological Limits of Hydrologic Alteration)</em>")
            .col-lg-12
              p.mb-0 Desarrollado por The Nature Conservancy. Busca establecer límites regionales de alteración hidrológica mediante el análisis de diferentes cuencas y tipos de ríos, por lo que puede ser útil para procesos de planificación y gestión del recurso hídrico.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/6.png')

    p.mb-5 La principal ventaja de estos métodos es su capacidad para integrar diferentes componentes del sistema y analizar no solo la conservación de la biodiversidad, sino también los servicios ecosistémicos y las necesidades de las comunidades relacionadas con el recurso hídrico.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema1/8.svg')
      .col-lg-11
        p.mb-0 Su aplicación, sin embargo, requiere una cantidad considerable de información, equipos interdisciplinarios y procesos de análisis y participación que pueden incrementar los costos y el tiempo de ejecución. Por ello, suelen emplearse en proyectos de gran envergadura, procesos de planificación de cuencas y estudios estratégicos que requieren una visión integral del sistema fluvial.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Métodos ecohidráulicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/7.png')
      .col-lg-7
        p.mb-3 Los métodos ecohidráulicos integran diferentes herramientas para analizar la relación entre el régimen de flujo, las condiciones hidráulicas y la respuesta de los ecosistemas acuáticos. Constituyen una línea de desarrollo más reciente y aprovechan los avances en modelación, análisis espacial y procesamiento de información.
        p.mb-3 Entre las herramientas utilizadas se encuentran #[b HEC-RAS 2D, River2D, CASiMiR, Delft3D, MIKE 11, SWAT y WEAP,] que permiten representar diferentes condiciones del sistema y analizar escenarios relacionados con cambios en el régimen de caudales.
        p.mb-0 Estas herramientas pueden emplearse para simular escenarios asociados con el cambio climático, la construcción y operación de presas, las variaciones en la demanda de agua y otras intervenciones que puedan modificar el comportamiento del sistema fluvial.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Comparación de las metodologías para el cálculo del caudal ambiental
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Tipo de metodología
                th Variables principales
                th Información requerida
                th Complejidad
                th Precisión
            tbody
              tr
                td Hidrológica.
                td Caudal.
                td Series históricas.
                td Baja.
                td Baja.
              tr
                td Hidráulica.
                td Profundidad y velocidad.
                td Topografía y aforos.
                td Media.
                td Media.
              tr
                td Simulación de hábitat.
                td Hábitat físico.
                td Hidráulica y biología.
                td Alta.
                td Alta.
              tr
                td Holística.
                td Ecosistema completo.
                td Información interdisciplinaria.
                td Muy alta.
                td Muy alta.
              tr
                td Eco hidráulica.
                td Ecosistemas y modelos numéricos.
                td Modelación integrada.
                td Muy alta.
                td Muy alta.


    separador
    #t_2_2.titulo-segundo.mb-5
      h2 2.2 Nivel de complejidad de las metodologías para la estimación del caudal ambiental

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        .bg7.p-4
          p.mb-0.mb-lg-1 Uno de los aspectos más importantes en la selección de una metodología para estimar el caudal ambiental es el nivel de complejidad que requiere su aplicación. La complejidad está determinada por diversos factores, entre ellos la disponibilidad y calidad de la información, el nivel de intervención del sistema fluvial, la magnitud del proyecto, los objetivos de conservación, los recursos técnicos y financieros disponibles y las exigencias normativas.
      .col-lg-4
        img(src='@/assets/curso/tema2/8.svg')
      .col-lg-4
        p.mb-0 En términos generales, a mayor complejidad metodológica, se requiere una mayor cantidad de información, equipos especializados y personal interdisciplinario; sin embargo, también aumenta la precisión de los resultados y la capacidad para representar el funcionamiento ecológico del río. En este sentido, la Guía metodológica para la estimación del caudal ambiental del IDEAM propone un enfoque escalonado que permite adaptar la metodología a las condiciones particulares de cada estudio, lo que favorece una gestión eficiente y técnicamente sólida.
      
    p.mb-5 Las metodologías pueden agruparse en cuatro niveles de complejidad: básico, intermedio, avanzado y holístico.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Nivel básico")
            .col-lg-11
              p.mb-4 Corresponde a estudios con información limitada, cuyo objetivo es obtener una aproximación inicial del régimen ambiental de flujo. Se aplica en estudios exploratorios, proyectos de pequeña escala, concesiones de agua de bajo impacto y cuencas con escasa instrumentación hidrológica. 
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Información requerida:] series históricas de caudales y precipitación, delimitación de la cuenca y cartografía básica. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Métodos:] Tennant, Tessmann, curvas de duración, Q95, 7Q10 y percentiles hidrológicos. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Tiempo promedio:] entre dos y seis semanas. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Equipo técnico:] ingeniero hidráulico, ingeniero ambiental e hidrólogo. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Precisión:] baja a media.
          .row.justify-content-center.align-items-center(titulo="Nivel intermedio")
            .col-lg-11
              p.mb-4 Incorpora información hidráulica del cauce y permite relacionar el caudal con las condiciones físicas del hábitat. Se utiliza en estudios de aprovechamiento del agua, pequeños proyectos hidroeléctricos, obras hidráulicas y captaciones superficiales. 
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Información requerida:] topografía detallada, perfiles transversales, velocidades, profundidades, rugosidad y aforos. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Métodos:] perímetro mojado, profundidad crítica, modelos hidráulicos y HEC-RAS. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Tiempo promedio:] entre dos y cuatro meses. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Equipo técnico:] hidrólogo, ingeniero hidráulico, topógrafo y especialista en sistemas de información geográfica (SIG). 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Precisión:] media.
          .row.justify-content-center.align-items-center(titulo="Nivel avanzado")
            .col-lg-11
              p.mb-4 Integra variables hidráulicas y ecológicas mediante modelos de simulación de hábitat. Se utiliza principalmente en proyectos hidroeléctricos, trasvases, embalses, licencias ambientales y procesos de restauración fluvial. Incorpora especies indicadoras y evalúa la disponibilidad de hábitat bajo diferentes escenarios de caudal. 
              ul.lista-ul.mb-0
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Información requerida:] datos hidrológicos, hidráulicos, biológicos y fisicoquímicos. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Métodos:] PHABSIM, River2D, CASiMiR y HEC-RAS 2D. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Tiempo promedio:] entre seis meses y un año. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Equipo técnico:] hidrólogo, ingeniero hidráulico, ecólogo, ictiólogo, limnólogo, especialista en SIG y modelador hidrológico. 
                li.d-flex.mb-0
                  i.fas.fa-drop
                  p.mb-0 #[b Precisión:] alta.
          .row.justify-content-center.align-items-center(titulo="Nivel holístico")
            .col-lg-11
              p.mb-4 Representa el mayor nivel de complejidad y busca definir un régimen ambiental integral, considerando el funcionamiento del ecosistema y los servicios ecosistémicos asociados. Se utiliza en la planificación nacional del recurso hídrico, el ordenamiento de cuencas, grandes proyectos hidroeléctricos, planes de restauración y evaluaciones ambientales estratégicas. 
              p.mb-0 #[b Enfoque:] integración de componentes hidrológicos, hidráulicos, ecológicos y socioambientales para establecer un régimen de caudal ambiental acorde con el funcionamiento integral de la cuenca.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1.
          | Información que integra el método  holístico
        img(src='@/assets/curso/tema2/9.svg', alt='Este es el método holístico para la gestión integral de ríos y cuencas, que relaciona aspectos hidrológicos, hidráulicos, geomorfológicos, biológicos, sociales y económicos para promover su uso sostenible.')

    p.mb-5 La metodología colombiana del IDEAM incorpora muchos de estos principios mediante el análisis del régimen natural de flujo y la evaluación de los servicios ecosistémicos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Comparaciones de nivel de complejidad
        .tabla-a.tab2.mb-0
          table
            thead
              tr
                th Característica
                th Básico
                th Intermedio
                th Avanzado
                th Holístico
            tbody
              tr
                td Información hidrológica.
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
              tr
                td Información hidráulica.
                td ✗
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
              tr
                td Información biológica.
                td ✗
                td ✗
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
              tr
                td Calidad del agua.
                td ✗
                td Parcial.
                td #[i.fas.fa-check]
                td #[i.fas.fa-check]
              tr
                td Información socioeconómica.
                td ✗
                td ✗
                td Parcial.
                td #[i.fas.fa-check]
              tr
                td Servicios ecosistémicos.
                td ✗
                td ✗
                td Parcial.
                td #[i.fas.fa-check]
              tr
                td Tiempo de ejecución.
                td Semanas.
                td 2-4 meses.
                td 6-12 meses.
                td >12 meses.
              tr
                td Costo.
                td Bajo.
                td Medio.
                td Alto.
                td Muy alto.
              tr
                td Precisión.
                td Baja.
                td Media.
                td Alta.
                td Muy alta.


    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Factores que determinan el nivel de complejidad

    p.mb-5 La selección del nivel metodológico no depende exclusivamente de la disponibilidad de información. Antes de iniciar un estudio de caudal ambiental, es necesario analizar diversos factores relacionados con las características del proyecto, las condiciones del ecosistema, los requerimientos regulatorios y los recursos disponibles.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema2/10.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Tipo de proyecto")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 El nivel de análisis debe responder a las características, magnitud e impactos potenciales del proyecto. Por ejemplo, una captación destinada al abastecimiento rural generalmente requiere un nivel de análisis diferente al de una central hidroeléctrica de gran capacidad.
          .tarjeta.color-a.p-4(titulo="Estado del ecosistema")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Las condiciones de conservación o alteración del sistema fluvial determinan el grado de detalle requerido. Los ríos que presentan altos niveles de intervención requieren metodologías más integrales que permitan caracterizar las alteraciones existentes, evaluar sus efectos y orientar posibles medidas de manejo o restauración.
          .tarjeta.color-a.p-4(titulo="Disponibilidad de información")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La cantidad, calidad y continuidad de los registros disponibles condicionan la selección metodológica. Las cuencas que cuentan con registros hidrológicos continuos durante varias décadas permiten desarrollar análisis más robustos que aquellas con información limitada o fragmentada.
          .tarjeta.color-a.p-4(titulo="Importancia ecológica")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La presencia de especies endémicas, migratorias o amenazadas, así como de ecosistemas de especial interés para la conservación, incrementa la necesidad de realizar evaluaciones detalladas que permitan establecer condiciones de caudal compatibles con sus requerimientos ecológicos.
          .tarjeta.color-a.p-4(titulo="Exigencias regulatorias")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 Los proyectos sujetos a procesos de licenciamiento ambiental suelen requerir estudios de mayor nivel de detalle que aquellos asociados exclusivamente con concesiones de agua, debido a la magnitud de sus posibles efectos sobre los ecosistemas y los usos del recurso.
          .tarjeta.color-a.p-4(titulo="Presupuesto")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-0 La complejidad metodológica también está condicionada por los recursos económicos disponibles. Los enfoques holísticos requieren campañas de campo prolongadas, modelación especializada y la participación de equipos interdisciplinarios, lo que representa mayores costos de ejecución.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Criterios para seleccionar la metodología

    p.mb-5 La selección de la metodología debe realizarse a partir de un análisis integral de las características del proyecto, las condiciones del sistema fluvial y los objetivos del estudio. Para ello, el equipo técnico debe considerar, entre otros, los siguientes interrogantes:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        ul.lista-ul.mb-0
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Cuál es el objetivo del estudio?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Cuál es el grado de alteración del río?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Existe información hidrológica suficiente, confiable y representativa?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Existen especies prioritarias o de especial interés para la conservación?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿El proyecto está sujeto a licenciamiento ambiental?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Cuál es la escala espacial requerida para el análisis?
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 ¿Qué nivel de incertidumbre resulta aceptable para la toma de decisiones?
          li.d-flex.mb-0
            i.fas.fa-drop.i2
            p.mb-0 ¿Cuál es el presupuesto disponible para desarrollar el estudio?
      .col-lg-6
        img(src='@/assets/curso/tema2/11.png')
    
    p.mb-5 El análisis de estos criterios permite seleccionar una metodología técnicamente pertinente y proporcional al nivel de complejidad del problema, evitando tanto la aplicación de métodos insuficientes como el uso de procedimientos excesivamente complejos frente a las necesidades reales del estudio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Tendencias actuales

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-3 En los últimos años, la estimación del caudal ambiental ha incorporado herramientas tecnológicas que permiten mejorar la precisión de los análisis, optimizar el procesamiento de información y evaluar un mayor número de escenarios de gestión.
        p.mb-3 Entre las principales tendencias se encuentran:
        ul.lista-ul.mb-0
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Modelación hidráulica bidimensional y tridimensional.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Sensores remotos y técnicas de teledetección.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Vehículos aéreos no tripulados (drones).
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Inteligencia artificial aplicada a la predicción hidrológica.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Aprendizaje automático (Machine Learning) para la estimación de caudales.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Sistemas de información geográfica (SIG) avanzados.
          li.d-flex.mb-0
            i.fas.fa-drop.i2
            p.mb-0 Modelación integrada de cuencas bajo diferentes escenarios de cambio climático.
      .col-lg-6
        img(src='@/assets/curso/tema2/12.png')

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1
        img(src='@/assets/curso/tema1/8.svg')
      .col-lg-11
        p.mb-0 La incorporación de estas herramientas facilita la integración de información hidrológica, hidráulica, ecológica y espacial, y permite analizar diferentes escenarios de manejo del recurso hídrico. Su aplicación resulta especialmente relevante en cuencas sometidas a una alta presión por el uso del agua o que presentan condiciones de variabilidad climática y ambiental.


    separador
    #t_2_3.titulo-segundo.mb-5
      h2 2.3 Información requerida para la estimación del caudal ambiental

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/13.png')
      .col-lg-7
        p.mb-3 La calidad de un estudio de caudal ambiental depende, en gran medida, de la cantidad, calidad, continuidad y representatividad de la información utilizada. La selección de una metodología técnicamente adecuada pierde efectividad cuando los datos de entrada son insuficientes, presentan inconsistencias o no representan de manera apropiada las condiciones hidrológicas, físicas y ecológicas del sistema fluvial.
        .bg9.p-4.mb-0
          p.mb-0 En este sentido, #[b la Guía metodológica para la estimación del caudal ambiental del IDEAM] establece como fase inicial del estudio el levantamiento y la caracterización del cuerpo de agua. Este proceso comprende la recopilación, validación, análisis y organización de la información necesaria para comprender el funcionamiento de los sistemas hidrológico y ecológico. A partir de esta caracterización es posible establecer el régimen natural de flujo, determinar la condición ecológica objetivo y formular escenarios para el manejo del recurso hídrico.

    p.mb-5 La recopilación de información debe integrar #[b fuentes primarias,] obtenidas mediante trabajo de campo y mediciones directas, y #[b fuentes secundarias,] provenientes de bases de datos, estudios previos, registros históricos y cartografía oficial. En todos los casos, los datos deben someterse a procesos de revisión y validación que permitan garantizar su confiabilidad, actualidad y representatividad frente a las condiciones de la cuenca.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Tipos de información requerida

    p.mb-5 La estimación del caudal ambiental requiere integrar información de diferentes disciplinas para lograr una caracterización completa del sistema fluvial. En términos generales, se consideran seis grupos principales: información hidrológica, hidráulica, geomorfológica, climática, ecológica y socioeconómica.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        AcordionA.press(tipo="b" clase-tarjeta="tarjeta tarjeta--grey")
          .row.align-items-center(titulo="Información hidrológica")
            .col-lg-12
              p.mb-4 Constituye uno de los principales insumos para caracterizar el régimen natural de flujo y determinar las posibles alteraciones ocasionadas por las actividades humanas. Entre las variables de mayor importancia se encuentran los caudales medios diarios, máximos y mínimos; las series históricas de caudales; los caudales mensuales e instantáneos; los caudales ecológicos históricos; las curvas de duración; los hidrogramas; el balance hídrico y la escorrentía.
              p.mb-0 En lo posible, las series hidrológicas deben contar con una longitud suficiente para representar la variabilidad temporal de la cuenca. Como referencia, los registros de diez años o más pueden proporcionar una base útil para el análisis; sin embargo, las series de veinte o treinta años permiten caracterizar con mayor confiabilidad la variabilidad climática y la ocurrencia de eventos extremos, incluidos aquellos asociados con los fenómenos de El Niño y La Niña.
          .row.align-items-center(titulo="Información hidráulica")
            .col-lg-12
              p.mb-0 Permite establecer la relación entre el caudal y las características físicas del cauce, así como analizar las condiciones hidráulicas asociadas con la disponibilidad de hábitat para los organismos acuáticos. Entre las principales variables se encuentran el ancho y la profundidad del cauce, la velocidad del agua, la pendiente longitudinal, la rugosidad, el radio hidráulico, la sección transversal, el perímetro mojado y el nivel del agua. Esta información resulta fundamental para la aplicación de modelos hidráulicos mediante herramientas como HEC-RAS y River2D.
          .row.align-items-center(titulo="Información geomorfológica")
            .col-lg-12
              p.mb-4 Permite caracterizar la configuración y dinámica física del sistema fluvial, así como los procesos que condicionan la estabilidad del cauce y su funcionamiento ecológico. Entre las variables de interés se incluyen el tipo de cauce, la forma del valle, la granulometría, los procesos erosivos, la sedimentación, la estabilidad de los márgenes, la conectividad lateral y longitudinal y el transporte de sedimentos.
              p.mb-0 El análisis geomorfológico contribuye a identificar procesos de degradación, erosión o sedimentación que pueden modificar las características físicas del río y, en consecuencia, afectar su régimen natural y las condiciones de los hábitats acuáticos.
          .row.align-items-center(titulo="Información climática")
            .col-lg-12
              p.mb-4 Las condiciones climáticas influyen directamente en la dinámica hidrológica de la cuenca y en la disponibilidad del recurso hídrico. Por esta razón, es necesario recopilar información sobre variables como precipitación, temperatura, humedad relativa, radiación solar, velocidad del viento, evaporación, evapotranspiración potencial e índices climáticos.
              p.mb-0 Asimismo, es recomendable considerar información relacionada con los fenómenos asociados con el ENOS (El Niño-Oscilación del Sur), debido a su influencia sobre la variabilidad climática e hidrológica de Colombia. La incorporación de estos registros permite reconocer períodos de condiciones hidrológicas atípicas y mejorar la interpretación de las variaciones observadas en el régimen de flujo.
          .row.align-items-center(titulo="Información ecológica")
            .col-lg-12
              p.mb-4 Uno de los principales avances de las metodologías modernas consiste en incorporar información biológica en la determinación del caudal ambiental. Las principales variables incluyen:
              .titulo-sexto.mb-4
                h5 Figura 2.
                | Información  ecológica requerida
              img(src='@/assets/curso/tema2/15.svg', alt='Los componentes biológicos para evaluar el caudal ambiental: fauna íctica, macroinvertebrados acuáticos, vegetación ribereña, humedales asociados y ecosistemas estratégicos, destacando su importancia para la conservación de los ecosistemas y el bienestar humano.')
          .row.align-items-center(titulo="Información fisicoquímica")
            .col-lg-12
              p.mb-0 La calidad del agua influye directamente en la funcionalidad del ecosistema. Los principales parámetros incluyen: temperatura; oxígeno disuelto; pH; conductividad; sólidos suspendidos; turbidez; DBO; DQO; nitrógeno; fósforo.
          .row.align-items-center(titulo="Información socioeconómica")
            .col-lg-12
              p.mb-0 Las metodologías holísticas consideran que el agua cumple múltiples funciones para la sociedad. Por ello, resulta necesario caracterizar: abastecimiento humano; riego; generación hidroeléctrica; pesca; turismo; recreación; navegación; usos culturales; comunidades indígenas; comunidades afrodescendientes; conflictos por el agua. La evaluación de estos aspectos facilita la construcción de escenarios participativos para la asignación del recurso.
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema2/14.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Fuentes de información

    p.mb-0 La calidad del estudio depende de utilizar fuentes oficiales y verificables.
    p.mb-5 En Colombia las principales son:

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Fuentes de información en Colombia
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .tabla-a.tab3.mb-0
          table
            thead
              tr
                th Fuente
                th Información disponible
            tbody
              tr
                td IDEAM
                td Caudales, estaciones hidrológicas, precipitación, climatología.
              tr.bgr
                td SIAC
                td Información ambiental nacional.
              tr
                td ANLA
                td Estudios ambientales y licencias.
              tr.bgr
                td CAR
                td Información regional del recurso hídrico.
              tr
                td Instituto Humboldt
                td Biodiversidad.
              tr.bgr
                td IGAC
                td Cartografía, modelos digitales de terreno.
              tr
                td DANE
                td Información socioeconómica.
              tr.bgr
                td Servicio Geológico Colombiano
                td Geología y amenazas.
      .col-lg-3
        img(src='@/assets/curso/tema2/16.svg')

    p.mb-5 Además de estas fuentes nacionales, pueden consultarse bases de datos internacionales como: FAO AQUASTAT; NASA EarthData; Copernicus; HydroSHEDS; Global Runoff Data Centre (GRDC).

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Levantamiento de información en campo

    p.mb-4 Aunque actualmente existe una gran cantidad de información secundaria, la mayoría de los estudios requieren campañas de campo para validar las condiciones reales del río.

    .row.fd2.p-5.fon.mb-4(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-4
            img(src='@/assets/curso/tema2/17.svg')
          .col-lg-8
            p.mb-4.text-white Las actividades de campo generalmente incluyen:
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-12
                SlyderF(columnas="col-md-6 col-xl-4")
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Aforos
                    p.mb-0 Para determinar el caudal instantáneo.
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Levantamientos topográficos
                    p.mb-0 Medición de perfiles transversales y longitudinales.
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Muestreo biológico
                    p.mb-0 Inventarios de peces, macroinvertebrados y vegetación.
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Muestreo de calidad del agua
                    p.mb-0 Análisis fisicoquímicos y microbiológicos.
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Caracterización geomorfológica
                    p.mb-0 Evaluación de estabilidad del cauce y sedimentos.
                  .tarjeta.tarjeta--slyder.b2.p-4
                    .row.justify-content-center.align-items-center.mb-4.mt-3
                      .col-12
                        img.img-a.img-t(src='@/assets/curso/tema2/18.svg')
                    h4.mb-4 Encuestas comunitarias
                    p.mb-0 Identificación de usos tradicionales y percepción del recurso.
        
    .row.fd3.p-5.fon.mb-4(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
          .col-auto.ps-2.pe-1.mi
            img(src='@/assets/curso/tema1/sub.svg')
          .col.ps-0
            .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
              h3.mb-0 Equipos utilizados
        p.mb-4 La selección de equipos depende de la complejidad del estudio.
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-3.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Equipos hidrológicos.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Molinete hidrométrico.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 ADCP.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Limnímetros.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Sensores de nivel.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Pluviómetros.
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 Equipos topográficos.
          .col-lg-3.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Estación total.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 GPS diferencial.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 RTK.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Nivel automático.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Drones con fotogrametría.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Equipos hidráulicos.
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 Ecosonda.
          .col-lg-3.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Perfilador acústico.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Corrientómetro electromagnético.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Equipos para calidad del agua.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Multiparámetro portátil.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Oxímetro.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Conductímetro.
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 Turbidímetro.
          .col-lg-3.col-md-6
            ul.lista-ul.mb-0
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 pH-metro.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Equipos biológicos.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Redes Surber.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Redes de arrastre.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Trampas para peces.
              li.d-flex.mb-1
                i.fas.fa-drop.i2
                p.mb-0 Redes de mano.
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 Lupas estereoscópicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Herramientas informáticas

    p.mb-5 Actualmente, los estudios de caudal ambiental incorporan diversas plataformas especializadas.

    .row.justify-content-center.mb-5
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador.mb-3
          li.d-flex
            .lista-ol--cuadro__vineta
              span a
            | Modelación hidrológica: HEC-HMS, SWAT, WEAP.
          li.d-flex
            .lista-ol--cuadro__vineta
              span b
            | Modelación hidráulica: HEC-RAS, River2D, MIKE 11, Delft3D.
          li.d-flex
            .lista-ol--cuadro__vineta
              span c
            | Sistemas de Información Geográfica: ArcGIS, QGIS.
          li.d-flex
            .lista-ol--cuadro__vineta
              span d
            | Procesamiento estadístico: R, Python, SPSS.
          li.d-flex
            .lista-ol--cuadro__vineta
              span e
            | Análisis hidrológico: IHA (Indicators of Hydrologic Alteration).
          li.d-flex
            .lista-ol--cuadro__vineta
              span f
            | Sensores remotos: Google Earth Engine, Sentinel Hub.
        .bg10.p-4
          p.mb-0 La integración de estas herramientas permite simular escenarios futuros, evaluar el impacto del cambio climático y optimizar la gestión del recurso hídrico.
      .col-lg-6
        img(src='@/assets/curso/tema2/24.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Calidad y validación de la información
    
    p.mb-5 Antes de utilizar la información recopilada, es indispensable verificar su calidad mediante procedimientos de control y validación.

    .b2.p-4.mb-5
      .row.justify-content-center.align-items-center.mb-0
        .col-lg-5
          p.mb-4 Entre los aspectos que deben revisarse se encuentran:
          ul.lista-ul.mb-0
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Continuidad de las series.
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Datos faltantes.
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Valores atípicos.
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Consistencia temporal.
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Consistencia espacial.
            li.d-flex.mb-1
              i.fas.fa-drop.i2
              p.mb-0 Homogeneidad.
            li.d-flex.mb-0
              i.fas.fa-drop.i2
              p.mb-0 Representatividad hidrológica.
        .col-lg-7
          img(src='@/assets/curso/tema2/25.png')
    
    p.mb-5 Cuando existen vacíos en las series históricas pueden utilizarse métodos de regionalización hidrológica o modelos de simulación, siempre documentando claramente los procedimientos empleados.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 5.
          | Cuadro resumen
        .tabla-a.tab5.mb-0
          table
            thead
              tr
                th Tipo de información
                th Variables principales
                th Aplicación
            tbody
              tr
                td Hidrológica.
                td Caudales, precipitación, hidrogramas.
                td Régimen natural de flujo.
              tr
                td Hidráulica.
                td Velocidad, profundidad, geometría.
                td Modelación hidráulica.
              tr
                td Geomorfológica.
                td Sedimentos, erosión, estabilidad.
                td Dinámica fluvial.
              tr
                td Climática.
                td Precipitación, temperatura, evaporación.
                td Balance hídrico.
              tr
                td Biológica.
                td Peces, macroinvertebrados, vegetación.
                td Condición ecológica.
              tr
                td Calidad del agua.
                td Oxígeno, pH, nutrientes.
                td Funcionamiento ecológico.
              tr
                td Socioeconómica.
                td Usos del agua, comunidades.
                td Servicios ecosistémicos.


    separador
    #t_2_4.titulo-segundo.mb-5
      h2 2.4 Casos de aplicación de metodologías para la estimación del caudal ambiental
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema2/26.svg')
      .col-lg-11
        p.mb-0 Las metodologías para la estimación del caudal ambiental adquieren verdadero valor cuando se aplican a la resolución de problemas concretos de gestión del recurso hídrico. Aunque existen principios generales ampliamente aceptados, cada cuenca hidrográfica presenta condiciones hidrológicas, ecológicas, sociales y económicas particulares, lo que hace necesario adaptar las metodologías a las características específicas de cada territorio.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/27.png')
      .col-lg-7
        .bg9.p-4.mb-4 
          p.mb-0.mt-lg-2.mb-lg-2 La experiencia internacional demuestra que no existe una única metodología válida para todos los escenarios. En algunos casos, un método hidrológico puede ser suficiente para pequeñas captaciones de agua, mientras que en proyectos hidroeléctricos o de gran infraestructura resulta indispensable aplicar metodologías holísticas que integren componentes hidrológicos, hidráulicos, ecológicos y sociales.
        p.mb-0 En Colombia, la aplicación de la Guía metodológica para la estimación del caudal ambiental ha permitido desarrollar estudios con un enfoque ecosistémico, orientados a conservar el régimen natural de flujo y los servicios ecosistémicos asociados. Estos avances se complementan con experiencias internacionales que han contribuido de manera significativa al desarrollo científico del concepto de caudal ambiental.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Caso de estudio 1. Río Bogotá (Colombia)")
            .col-lg-11
              p.mb-4 #[b Contexto:] es uno de los sistemas hídricos más importantes y más intervenidos de Colombia, debido al crecimiento urbano, la expansión industrial y el desarrollo de infraestructura hidráulica. Estas presiones han alterado el régimen natural de flujo y afectado la calidad del agua, la biodiversidad y los servicios ecosistémicos. 
              p.mb-4 #[b Metodología:] en 2019, el Ministerio de Ambiente y Desarrollo Sostenible y el IDEAM desarrollaron una metodología con enfoque holístico basada en el régimen natural de flujo. El estudio comprendió la recopilación y caracterización de información, la estimación del régimen ambiental considerando el funcionamiento ecológico y la evaluación de los servicios ecosistémicos. Se analizaron magnitud, frecuencia, duración, oportunidad (timing) y tasa de cambio. 
              p.mb-4 #[b Resultados:] se determinó que la conservación del ecosistema requiere preservar la variabilidad natural del río y no únicamente mantener un caudal mínimo. Se plantearon medidas de restauración ecológica, control de vertimientos, regulación de captaciones, monitoreo hidrológico y seguimiento biológico.
              p.mb-0 #[b Lecciones aprendidas:] el caudal ambiental debe entenderse como un régimen de flujo; la integración entre hidrología y ecología fortalece la toma de decisiones; y el monitoreo continuo permite implementar procesos de gestión adaptativa.
          .row.justify-content-center.align-items-center(titulo="Caso de estudio 2. <em>Building Block Methodology </em>(Sudáfrica)")
            .col-lg-11
              p.mb-4 #[b Contexto:] durante la década de 1990, Sudáfrica enfrentó una creciente presión sobre sus recursos hídricos debido a la expansión agrícola, la construcción de embalses y el aumento de la demanda urbana. Esta situación impulsó el desarrollo de la #[em Building Block Methodology] (BBM), considerada una de las metodologías holísticas más influyentes.
              p.mb-4 #[b Metodología:] identifica los principales componentes del régimen natural de flujo y los representa mediante bloques hidrológicos necesarios para conservar el funcionamiento ecológico del río. Estos incluyen caudal base, pulsos de caudal, crecientes estacionales e inundaciones extraordinarias, relacionados con funciones como la reproducción de peces, el transporte de sedimentos, la renovación de nutrientes y la conectividad entre ecosistemas.
              p.mb-4 #[b Resultados:] su aplicación permitió establecer reservas de agua para el ambiente en el marco de la legislación sudafricana y fortalecer la planificación de los recursos hídricos en diferentes cuencas.
              p.mb-0 #[b Lecciones aprendidas:] la conservación ecológica requiere mantener una variedad de eventos hidrológicos; la participación de equipos interdisciplinarios mejora la confiabilidad de los estudios; y la gestión adaptativa facilita el ajuste progresivo del régimen ambiental.
          .row.justify-content-center.align-items-center(titulo="Caso de estudio 3. <em>Range of Variability Approach</em> (Estados Unidos)")
            .col-lg-11
              p.mb-4 #[b Contexto:] numerosos ríos de Estados Unidos han experimentado alteraciones significativas debido a la construcción de presas y embalses. Para evaluar estos cambios, The Nature Conservancy desarrolló el #[em Range of Variability Approach] (RVA), basado en el análisis de la variabilidad hidrológica natural.
              p.mb-4 #[b Metodología:] compara el régimen natural con el régimen alterado mediante 32 indicadores hidrológicos agrupados en cinco componentes: magnitud, frecuencia, duración, oportunidad y tasa de cambio. Posteriormente, se determina el grado de alteración hidrológica generado por las actividades humanas.
              p.mb-4 #[b Resultados:] el RVA permitió ajustar las reglas de operación de diferentes embalses para aproximar los caudales liberados al comportamiento natural de los ríos, favoreciendo la recuperación de hábitats acuáticos y la biodiversidad.
              p.mb-0 #[b Lecciones aprendidas:] la variabilidad hidrológica es tan importante como el volumen de agua; el análisis de indicadores facilita el seguimiento del estado ecológico de los ríos; y la gestión basada en evidencia contribuye a la sostenibilidad de las infraestructuras hidráulicas.
          .row.justify-content-center.align-items-center(titulo="Caso de estudio 4. Cuenca Murray-Darling (Australia)")
            .col-lg-11
              p.mb-4 #[b Contexto:] la cuenca Murray-Darling concentra una parte importante de la producción agrícola de Australia y ha experimentado una intensa regulación hidráulica. La reducción de los caudales naturales afectó humedales, bosques ribereños y especies de peces nativos.
              p.mb-4 #[b Metodología:] se implementó un programa nacional de asignación de caudales ambientales basado en modelación hidrológica, modelación hidráulica, monitoreo ecológico, gestión adaptativa y participación comunitaria.
              p.mb-4 #[b Resultados:] las acciones implementadas contribuyeron a recuperar humedales, mejorar la reproducción de peces, restaurar bosques ribereños y fortalecer la conectividad ecológica.
              p.mb-0 #[b Lecciones aprendidas:] el monitoreo permanente es indispensable para evaluar la efectividad del caudal ambiental; la participación de usuarios y autoridades facilita la implementación de medidas de gestión; y la asignación de agua para el ambiente puede coexistir con los usos productivos cuando existe una planificación adecuada.
          .row.justify-content-center.align-items-center(titulo="Caso de estudio 5. Río Grande-Río Bravo (Estados Unidos-México)")
            .col-lg-11
              p.mb-4 #[b Contexto:] el Río Grande o Río Bravo constituye una cuenca internacional compartida entre Estados Unidos y México, caracterizada por una alta demanda de agua para la agricultura, el abastecimiento urbano y la generación de energía. Las alteraciones hidrológicas y la disminución de los caudales naturales motivaron estudios de caudales ambientales con un enfoque de gobernanza multinivel.
              p.mb-4 #[b Metodología:] los estudios integraron hidrología, ecología, gobernanza, análisis institucional y participación de actores. Además, se evaluaron diferentes escenarios de asignación del recurso hídrico, considerando simultáneamente los requerimientos ambientales y las demandas sociales.
              p.mb-4 #[b Resultados:] se identificaron oportunidades para fortalecer la cooperación binacional y establecer reservas de agua destinadas a la conservación de los ecosistemas.
              p.mb-0 #[b Lecciones aprendidas:] la gestión del caudal ambiental requiere coordinación entre múltiples instituciones; los acuerdos de gobernanza son tan importantes como los análisis hidrológicos; y la conservación del régimen natural favorece tanto la biodiversidad como la seguridad hídrica.


    #t_2_5.titulo-segundo.mb-5
      h2 2.5 Análisis del caso: selección de la metodología para estimar el caudal ambiental

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema2/28.png')
      .col-lg-7  
        img.img-t.mb-3(src='@/assets/curso/tema2/29.svg')
        p.mb-0 La Corporación Autónoma Regional (CAR) evaluó un estudio para determinar el caudal ambiental de un río donde se proyectaba una nueva captación de agua. Aunque se contaba con 22 años de registros hidrológicos, información hidráulica, datos ecológicos y antecedentes sobre los usos del recurso, la autoridad identificó que una metodología exclusivamente hidrológica no era suficiente para representar las necesidades del ecosistema y de los usuarios ubicados aguas abajo.

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/30.svg')
          h4.mb-4.text-center Metodología hidrológica
          p.mb-0 Permitía caracterizar el comportamiento de los caudales a partir de registros históricos, pero no representaba por sí sola las necesidades ecológicas y sociales.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/30.svg')
          h4.mb-4.text-center Metodología hidráulica
          p.mb-0 Permitía relacionar el caudal con la profundidad, la velocidad y el área mojada, pero no determinaba directamente los requerimientos biológicos.
      .col-lg-4.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema2/30.svg')
          h4.mb-4.text-center Metodología eco hidráulica
          p.mb-0 Permitía relacionar las condiciones hidráulicas con los requerimientos de hábitat de determinadas especies, aunque no integraba por sí sola todos los componentes sociales y productivos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Qué decisión tomó la CAR?

    p.mb-5 La autoridad recomendó un enfoque metodológico integrado, que utilizara la información hidrológica como base y la complementara con análisis hidráulicos, ecológicos y socioeconómicos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema2/31.png')
      .col-lg-6
        LineaTiempoD.color-secundario.activo
          .row.justify-content-center.align-items-center.mb-0(numero="a" titulo="Caracterizar el régimen hidrológico")
            .col-lg-12
              p.mb-0 Analizar los caudales históricos y las diferencias entre las temporadas secas y lluviosas.
          .row.justify-content-center.align-items-center.mb-0(numero="b" titulo="Evaluar las condiciones hidráulicas")
            .col-lg-12
              p.mb-0 Determinar cómo cambia el comportamiento del agua según el caudal disponible.
          .row.justify-content-center.align-items-center.mb-0(numero="c" titulo="Analizar las necesidades ecológicas")
            .col-lg-12
              p.mb-0 Identificar los requerimientos del humedal, las comunidades acuáticas y las especies relevantes.
          .row.justify-content-center.align-items-center.mb-0(numero="d" titulo="Considerar los usos del agua")
            .col-lg-12
              p.mb-0 Reconocer las necesidades de abastecimiento humano y de las actividades productivas aguas abajo.
          .row.justify-content-center.align-items-center.mb-0(numero="e" titulo="Justificar y hacer seguimiento")
            .col-lg-12
              p.mb-0 Establecer el caudal ambiental propuesto, evaluar los efectos de la captación y definir medidas de monitoreo.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-t.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/16.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
              .col-auto.ps-2.pe-1.mi
                img.img-t(src='@/assets/curso/tema1/sub.svg')
              .col.ps-0
                .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
                  h3.mb-0 ¿Qué enseñanza deja el caso?
            br
            br
            p.mb-0 La selección de una metodología debe responder a las características del río, la información disponible, la importancia ecológica y los objetivos del estudio. No basta con calcular un caudal mínimo: es necesario comprender cómo la captación puede afectar el ecosistema y los diferentes usos del agua.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
