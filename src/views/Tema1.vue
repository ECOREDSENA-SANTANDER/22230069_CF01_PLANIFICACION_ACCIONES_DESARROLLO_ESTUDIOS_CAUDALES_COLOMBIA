<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Caudal ambiental
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        img.img-t.img-a(src='@/assets/curso/tema1/1.svg')
      .col-lg-6
        .bg1.p-lg-5.p-4
          .bg2.p-1.mb-4
            h4.mb-0.text-white.ps-2.pe-2 ¿Qué ocurre cuando cambia el flujo de un río?
          p.mb-0.mt-lg-2.mb-lg-0 Imagine un río cuyo caudal ha disminuido considerablemente debido a la captación de agua para diferentes actividades. A primera vista, podría parecer suficiente con garantizar que siempre permanezca una determinada cantidad de agua en el cauce. Sin embargo, ¿sería suficiente para conservar los peces, la vegetación, los hábitats, el transporte de sedimentos y los demás procesos que hacen posible el funcionamiento del ecosistema?

    p.mb-0 La respuesta permite comprender la importancia del caudal ambiental. Para garantizar el uso sostenible del recurso hídrico y conservar la estructura, el funcionamiento y la biodiversidad de los ecosistemas acuáticos, es necesario considerar un régimen de caudales que permita atender las necesidades ambientales sin desconocer los diferentes usos del agua. Por ello, el caudal ambiental constituye una herramienta fundamental para la planificación y gestión integral del recurso hídrico y orienta la toma de decisiones relacionadas con proyectos de aprovechamiento del agua, obras hidráulicas y procesos de licenciamiento ambiental.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 ¿Qué es el caudal ambiental?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5
        img(src='@/assets/curso/tema1/2.png')
      .col-lg-7
        p.mb-3 Para comprender este concepto, primero es necesario reconocer qué se entiende por caudal. Este corresponde al volumen de agua que atraviesa una sección transversal de un cauce en una unidad de tiempo y generalmente se expresa en metros cúbicos por segundo (m³/s). Es una de las principales variables utilizadas para describir el comportamiento de un río y refleja el resultado de procesos como la precipitación, la infiltración, la evapotranspiración, el almacenamiento superficial y subterráneo, la escorrentía y los aportes de los afluentes.
        p.mb-0 Sin embargo, un río no mantiene siempre el mismo caudal. Este cambia diariamente, durante las diferentes épocas del año y entre unos años y otros, como respuesta a la variabilidad climática y a las características de la cuenca. Este comportamiento natural constituye el régimen hidrológico, entendido como el patrón de variación de los caudales a lo largo del tiempo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 El régimen natural de flujo: mucho más que una cantidad de agua

    p.mb-4 El régimen natural de flujo presenta cinco atributos fundamentales:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/3.svg')
          h4.mb-4.text-center Magnitud
          p.mb-0.text-center Cantidad de agua que circula por el cauce.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/4.svg')
          h4.mb-4.text-center Frecuencia
          p.mb-0.text-center Número de veces que ocurre un determinado evento de caudal.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/5.svg')
          h4.mb-4.text-center Duración
          p.mb-0.text-center Tiempo durante el cual se mantiene una condición de flujo.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/6.svg')
          h4.mb-4.text-center Oportunidad
          p.mb-0.text-center Momento en que ocurre un determinado evento de caudal.
      .col-lg.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/7.svg')
          h4.mb-4.text-center Tasa de cambio
          p.mb-0.text-center Velocidad con la que aumenta o disminuye el caudal.

    p.mb-5 Estos atributos están relacionados con la disponibilidad de hábitats, la conectividad entre ecosistemas, el transporte de sedimentos, la calidad del agua y otros procesos ecológicos. Por esta razón, una modificación significativa del régimen natural puede generar cambios en la estructura y el funcionamiento de los ecosistemas fluviales.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-acento-botones.p-4.mb-0
          p.mb-0 #[b Pregúntese:] si dos ríos presentan el mismo caudal promedio, ¿significa que funcionan de la misma manera?
          p.mb-0 No necesariamente. La forma en que ese caudal cambia en el tiempo también es determinante para el ecosistema.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Del caudal natural al caudal ambiental

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-4
        img.img-t.mb-4(src='@/assets/curso/tema1/8.svg')
        p.mb-0.mt-p A partir de esta comprensión surge el concepto de #[b caudal ambiental], entendido como el régimen de agua necesario para mantener los ecosistemas acuáticos y los beneficios que estos proporcionan a la sociedad, en contextos donde existen diferentes usos y demandas del recurso hídrico. Por tanto, el caudal ambiental no se limita a establecer un valor mínimo, sino que busca conservar una dinámica hidrológica que permita mantener los procesos ecológicos y los servicios ecosistémicos.
      .col-lg-4
        img(src='@/assets/curso/tema1/9.png')
      .col-lg-4
        .bg3.p-4
          p.mb-0 En Colombia, la metodología para la estimación del caudal ambiental incorpora este enfoque ecosistémico y orienta su determinación hacia la conservación de la condición ecológica del cuerpo de agua mediante la preservación de componentes esenciales del régimen natural de flujo. De esta manera, el análisis supera la idea de garantizar únicamente un volumen mínimo y considera la dinámica hidrológica necesaria para mantener la funcionalidad ecológica de los sistemas acuáticos.


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 ¿Cómo se estima el caudal ambiental?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-3 Comprender el concepto de caudal ambiental conduce a una segunda pregunta: #[b ¿cómo determinar el régimen de flujo que necesita un ecosistema?]
        p.mb-0 La respuesta ha evolucionado con el desarrollo del conocimiento científico. Las primeras metodologías se concentraron principalmente en variables hidrológicas y asumían que conservar un porcentaje del caudal natural podía ser suficiente. Posteriormente, se incorporaron variables hidráulicas relacionadas con la profundidad, la velocidad y las características físicas del hábitat. Más adelante surgieron enfoques que integran información hidrológica, hidráulica, geomorfológica, ecológica, socioeconómica y de gobernanza.
      .col-lg-5
        img(src='@/assets/curso/tema1/10.png')

    p.mb-5 Actualmente, las metodologías pueden agruparse en cuatro grandes enfoques:

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .pol.bg5.h-100.p-4.p-lg-5.cen
          h4.mb-0.text-white Hidrológico
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .pol.bg6.h-100.p-4.p-lg-5.cen
          h4.mb-0 Hidráulico
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .pol.bg5.h-100.p-4.p-lg-5.cen
          h4.mb-0.text-white Eco hidráulico 
      .col-lg-3.col-md-6.mb-4.mb-lg-0
        .pol.pol--fin.bg6.h-100.p-4.p-lg-5.cen
          h4.mb-0 Holístico

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema1/11.svg')
      .col-lg-11
        p.mb-0 Esta evolución muestra cómo la estimación del caudal ambiental pasó de preguntarse #[b “¿cuánta agua hay?”] a plantear preguntas más amplias como #[b “¿qué condiciones genera ese flujo en el hábitat?”], #[b “¿cómo responden los organismos?” y “¿qué régimen permite mantener el funcionamiento del sistema socio ecológico?”.]
        
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Enfoque hidrológico")
            .col-lg-11
              p.mb-4 El enfoque hidrológico constituye uno de los grupos de metodologías más antiguos y utilizados, especialmente en estudios preliminares. Se fundamenta en el análisis estadístico de series históricas de caudales para establecer un régimen de flujo asociado con un determinado nivel de conservación ecológica.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-4
                  p.mb-4 Entre las variables utilizadas se encuentran:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Caudal medio anual.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Caudal medio mensual.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Curvas de duración de caudales.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Percentiles hidrológicos.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Índices de alteración hidrológica.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Frecuencia de eventos extremos.
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 Duración de crecientes y estiajes.
                .col-lg-8 
                  img(src='@/assets/curso/tema1/12.png')
              p.mb-4 Entre los métodos asociados con este enfoque se encuentran Tennant o Montana, Tessmann, Escocés, Suizo, Asturiano, curvas de permanencia, Q95 y 7Q10. En Colombia, indicadores como Q95 y 7Q10 han sido utilizados en aproximaciones iniciales; sin embargo, por sí solos presentan limitaciones para valorar integralmente la funcionalidad ecológica de un río.
              p.mb-0 #[b ¿Cuándo puede ser útil?]
              p.mb-4 Cuando se requiere una aproximación inicial y existe principalmente información histórica de caudales. Su aplicación demanda menos información y recursos que otros enfoques, lo que facilita su utilización en estudios exploratorios y de diagnóstico.
              p.mb-0 #[b ¿Cuál es su principal limitación?]
              p.mb-0 No considera directamente la respuesta de las especies, las características del hábitat, los aspectos geomorfológicos ni otros factores ecológicos. Estas limitaciones son especialmente importantes en ríos cuyo régimen ha sido altamente modificado por embalses o derivaciones.
          .row.justify-content-center.align-items-center(titulo="Enfoque hidráulico")
            .col-lg-11
              p.mb-4 El enfoque hidráulico amplía el análisis al reconocer que los organismos acuáticos dependen de las condiciones físicas que genera el flujo. Por ello, estudia cómo diferentes caudales modifican variables como la profundidad, la velocidad del agua, el ancho del cauce, el perímetro mojado, la tensión de corte, la rugosidad y la conectividad lateral.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-4 Una variable de interés es el #[b perímetro mojado,] que corresponde a la longitud del cauce que permanece en contacto con el agua. Cuando el caudal disminuye significativamente, este también puede reducirse, afectando la disponibilidad de hábitats para diferentes organismos. Asimismo, pueden emplearse modelos hidráulicos unidimensionales o bidimensionales para analizar los cambios en la profundidad y velocidad del flujo.
                  p.mb-0 Su principal ventaja consiste en establecer una relación más directa entre el caudal y las características físicas del hábitat. No obstante, un hábitat físicamente adecuado no garantiza por sí mismo la presencia o supervivencia de una especie, debido a que también intervienen factores como la competencia, la reproducción, la migración, la calidad del agua y la disponibilidad de alimento.
                .col-lg-6
                  img(src='@/assets/curso/tema1/13.png')
          .row.justify-content-center.align-items-center(titulo="Enfoque eco hidráulico")
            .col-lg-11
              p.mb-4 El enfoque eco hidráulico integra conocimientos de #[b hidrología, hidráulica y ecología.] Su propósito es analizar cómo las variaciones del caudal afectan la disponibilidad de hábitat para especies indicadoras, mediante modelos de simulación que relacionan las condiciones físicas del cauce con los requerimientos de los organismos.
              .row.justify-content-center.align-items-center.mb-0
                .col-lg-6
                  p.mb-4 Una metodología reconocida dentro de este enfoque es el #[em Physical Habitat Simulation System] (PHABSIM), que combina modelos hidráulicos, curvas de preferencia de hábitat y requerimientos ecológicos de especies objetivo. El resultado permite estimar la superficie útil de hábitat disponible bajo diferentes escenarios de caudal. Actualmente, estas evaluaciones pueden complementarse con herramientas como HEC-RAS, sistemas de información geográfica y modelos de hábitat.
                  p.mb-0 Su principal fortaleza es la posibilidad de realizar evaluaciones con mayor precisión ecológica, incluso por especies y bajo diferentes escenarios. Sin embargo, requiere campañas de campo, equipos especializados, información biológica detallada y una mayor inversión económica.
                .col-lg-6
                  img(src='@/assets/curso/tema1/14.png')
          .row.justify-content-center.align-items-center(titulo="Enfoque holístico")
            .col-lg-11
              p.mb-0 El enfoque holístico representa una perspectiva integral para la estimación del caudal ambiental. Considera el río como un #[b sistema socio ecológico complejo,] en el que interactúan procesos hidrológicos, geomorfológicos, ecológicos, económicos y culturales.
              p.mb-4 Desde esta perspectiva, el objetivo no consiste únicamente en conservar determinadas especies, sino en mantener el funcionamiento integral del ecosistema y los servicios ambientales que este proporciona a la sociedad.
              .row.justify-content-center.align-items-center.mb-4
                .col-lg-6
                  p.mb-4 Entre las variables utilizadas se encuentran:
                  ul.lista-ul.mb-0
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 #[em Building Block Methodology] (BBM).
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 #[em Downstream Response to Imposed Flow Transformation] (DRIFT).
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 #[em Ecological Limits of Hydrologic Alteration] (ELOHA).
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 #[em Benchmarking Method.]
                    li.d-flex.mb-0
                      i.fas.fa-drop
                      p.mb-0 #[em Expert Panel Assessment.]
                .col-lg-6
                  img(src='@/assets/curso/tema1/15.png')
              p.mb-4 Por ejemplo, la metodología BBM propone construir el régimen ambiental mediante diferentes bloques hidrológicos, como caudales base, pulsos de caudal, crecientes estacionales e inundaciones extraordinarias. Cada uno puede cumplir funciones ecológicas relacionadas con la reproducción de peces, el transporte de sedimentos, la recarga de humedales, la dispersión de semillas y el mantenimiento de la conectividad ecológica.
              p.mb-0 En Colombia, la metodología propuesta por el IDEAM incorpora principios de este enfoque al integrar elementos como el régimen natural de flujo, la condición ecológica, los servicios ecosistémicos, la información hidrológica e hidráulica, los componentes biológicos, la participación institucional y la gestión adaptativa.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/16.png ')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 #[b Importante]
            br
            p.mb-0 Los cuatro enfoques no deben entenderse como opciones completamente aisladas. Cada uno responde a diferentes necesidades de información, niveles de análisis y condiciones del sistema hídrico.
            br
            br
            .row.justify-content-center.align-items-center.mb-0.d-flex
              .col-lg-12
                ul.lista-ul.mb-0
                  li.d-flex.mb-0
                    i.fas.fa-drop.i2
                    p.mb-0 #[b Hidrológico:] ¿cómo se comporta el caudal?
                  li.d-flex.mb-0
                    i.fas.fa-drop.i2
                    p.mb-0 #[b Hidráulico:] ¿qué condiciones físicas genera el caudal?
                  li.d-flex.mb-0
                    i.fas.fa-drop.i2
                    p.mb-0 #[b Eco hidráulico:] ¿cómo responden los organismos y sus hábitats?
                  li.d-flex.mb-0
                    i.fas.fa-drop.i2
                    p.mb-0 #[b Holístico:] ¿cómo interactúan los componentes ecológicos y sociales del sistema?

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Comparación de los enfoques para cálculo de caudal ambiental
        .tabla-a.tab1.mb-0
          table
            thead
              tr
                th Enfoque
                th Información requerida
                th Nivel de complejidad
                th Precisión ecológica
                th Aplicación recomendada
            tbody
              tr
                td Hidrológico
                td Series históricas de caudales.
                td Baja.
                td Baja.
                td Estudios preliminares y cuencas con información limitada.
              tr
                td Hidráulico
                td Caudales y geometría del cauce.
                td Media.
                td Media.
                td Estudios locales de hábitat físico.
              tr
                td Eco hidráulico
                td Hidrología, hidráulica y biología.
                td Alta.
                td Alta.
                td Licenciamiento ambiental y conservación de especies.
              tr
                td Holístico
                td Información hidrológica, hidráulica, ecológica, geomorfológica y socioeconómica.
                td Muy alta.
                td Muy alta.
                td Gestión integral de cuencas, planificación hídrica y evaluación ambiental.

    .row.justify-content-center.align-items-center.mb-0
      .col-lg-1
        img(src='@/assets/curso/tema1/17.svg')
      .col-lg-11
        p.mb-0 La evolución de los enfoques para la estimación del caudal ambiental refleja el tránsito desde métodos basados exclusivamente en la cantidad de agua hacia metodologías que reconocen la complejidad de los ecosistemas fluviales y la necesidad de integrar múltiples disciplinas. Aunque los métodos hidrológicos continúan siendo útiles en estudios exploratorios, las tendencias internacionales y la normativa colombiana favorecen enfoques holísticos que consideran el régimen natural de flujo, la condición ecológica deseada y los servicios ecosistémicos como elementos centrales de la gestión sostenible del recurso hídrico.


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Requisitos técnicos y normativos para la estimación del caudal ambiental en Colombia

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/18.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 La estimación del caudal ambiental en Colombia se desarrolla dentro de un marco técnico y normativo orientado a garantizar que el aprovechamiento del recurso hídrico sea compatible con la conservación de los ecosistemas acuáticos. Por esta razón, antes de definir un régimen de caudal ambiental es necesario reconocer las disposiciones que orientan su determinación y establecer los requerimientos de información que debe considerar el estudio.

    .sub1.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle(aria-hidden="true")
      i.fas.fa-circle(aria-hidden="true")
      h4.mb-0 ¿Por qué es importante conocer el marco normativo?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-3 La gestión del recurso hídrico en Colombia ha evolucionado desde un enfoque centrado principalmente en el aprovechamiento del agua hacia una perspectiva de gestión integral, en la que los ecosistemas acuáticos son reconocidos como elementos fundamentales para el bienestar de las comunidades y el desarrollo sostenible.
        p.mb-0 En este contexto, la estimación del caudal ambiental constituye un instrumento técnico y normativo que permite analizar las condiciones hidrológicas necesarias para conservar la estructura, el funcionamiento y la capacidad de recuperación de los ecosistemas acuáticos frente a las intervenciones sobre el recurso hídrico.
      .col-lg-5
        img(src='@/assets/curso/tema1/19.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Fundamento constitucional

    p.mb-4 La Constitución Política de Colombia de 1991 establece principios relacionados con la protección de los recursos naturales y del ambiente que sirven como fundamento para la gestión del recurso hídrico.
    
    p.mb-5 Entre ellos se encuentran:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/20.svg')
          p.mb-0 #[b Artículo 8:] establece el deber del Estado y de las personas de proteger las riquezas naturales de la Nación.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/20.svg')
          p.mb-0 #[b Artículo 79:] reconoce el derecho a disfrutar de un ambiente sano y establece el deber del Estado de proteger la diversidad e integridad del ambiente.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/20.svg')
          p.mb-0 #[b Artículo 80:] dispone que el Estado debe planificar el manejo y aprovechamiento de los recursos naturales para garantizar su desarrollo sostenible, conservación, restauración o sustitución.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/20.svg')
          p.mb-0 #[b Artículo 95:] establece como deber de las personas proteger los recursos naturales y velar por la conservación de un ambiente sano.

    p.mb-5 Estos principios constituyen una base para las acciones de planificación, administración y conservación del recurso hídrico.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Política Nacional para la Gestión Integral del Recurso Hídrico


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg7.p-4.mb-4
          p.mb-0.mt-lg-2.mb-lg-2 La Política Nacional para la Gestión Integral del Recurso Hídrico, adoptada en 2010, plantea una gestión del agua orientada hacia el desarrollo sostenible, considerando la cuenca hidrográfica como unidad fundamental de planificación y promoviendo la participación de los diferentes actores relacionados con el recurso.
        p.mb-4 Entre sus propósitos se encuentran garantizar el abastecimiento de agua, proteger los ecosistemas asociados al recurso hídrico, mejorar la calidad del agua, fortalecer la gobernanza y promover su uso eficiente.
        p.mb-0 Desde esta perspectiva, la conservación de las condiciones hidrológicas necesarias para el funcionamiento de los ecosistemas acuáticos constituye un elemento fundamental de la gestión integral del recurso.
      .col-lg-5
        img(src='@/assets/curso/tema1/21.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Decreto 1076 de 2015

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-t.mb-4(src='@/assets/curso/tema1/8.svg')
        p.mb-4 El Decreto 1076 de 2015 reúne disposiciones relacionadas con el sector de Ambiente y Desarrollo Sostenible y establece lineamientos para la administración y gestión de los recursos naturales, incluido el recurso hídrico.
        p.mb-0 Su aplicación se relaciona con aspectos como las concesiones de agua, los permisos de ocupación de cauces, las licencias ambientales, la planificación del recurso hídrico y la evaluación ambiental de proyectos.
      .col-lg-4
        img(src='@/assets/curso/tema1/22.png')
      .col-lg-4
        .bg8.p-4
          p.mb-0 Aunque el decreto no establece una metodología específica para calcular el caudal ambiental, sus disposiciones orientan hacia el uso sostenible del agua y la prevención del deterioro de los ecosistemas. En este contexto, los estudios de caudal ambiental aportan información técnica para la toma de decisiones relacionadas con proyectos que requieren el aprovechamiento o intervención del recurso hídrico.

    .row.fd1.p-5.fon.mb-4(data-aos="fade-down")
      .col-lg-12
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-8
            .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
              .col-auto.ps-2.pe-1.mi
                img(src='@/assets/curso/tema1/sub.svg')
              .col.ps-0
                .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
                  h3.mb-0 Metodología de la ANLA para proyectos con licencia ambiental
            p.mb-3 En 2013 se desarrolló una metodología orientada a la determinación del caudal ambiental en proyectos sujetos a licenciamiento ambiental. Esta propuesta incorporó de manera conjunta componentes hidrológicos, hidráulicos y ecológicos.
            p.mb-3 El procedimiento contempla actividades como la recopilación y revisión de información hidrológica e hidráulica, el análisis de las condiciones climáticas, la clasificación hidrológica, la estimación de valores como Q95 y 7Q10, la formulación inicial del caudal, la evaluación hidráulica y ecológica y la validación biológica.
            .bg9.p-4
              p.mb-0.mt-lg-3.mb-lg-4.mx-lg-3 Este enfoque representó un avance al considerar diferentes variables del sistema y no limitar la estimación del caudal a un único indicador hidrológico.
          .col-lg-4
            img.img-t.img-a(src='@/assets/curso/tema1/23.png')
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Guía metodológica IDEAM-MADS

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1
        img(src='@/assets/curso/tema1/8.svg')
      .col-lg-11
        p.mb-0 La Guía metodológica para la estimación del caudal ambiental, desarrollada conjuntamente por el IDEAM y el Ministerio de Ambiente y Desarrollo Sostenible en 2017, plantea un cambio conceptual importante: pasar de la identificación de un caudal mínimo hacia la determinación de un régimen de caudal ambiental.
        p.mb-0 La metodología considera como principios fundamentales la conservación del régimen natural de caudales, el mantenimiento de la condición ecológica y la preservación de los servicios ecosistémicos.

    p.mb-5 Para ello, establece dos niveles de trabajo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Nivel 1. Estimación del caudal ambiental
                    p.mb-0 Comprende diferentes fases relacionadas con el levantamiento y caracterización de información hidrológica, hidráulica, geomorfológica, ecológica y socioeconómica; la estimación del régimen de caudal y la evaluación de los servicios ecosistémicos asociados.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/24.png")
            .row.justify-content-center.align-items-center.mb-2
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Nivel 2. Gestión del caudal ambiental
                    p.mb-4 Está relacionado con la implementación, seguimiento, monitoreo y manejo adaptativo del régimen de caudal ambiental, de acuerdo con las condiciones y resultados obtenidos durante el proceso.
                    p.mb-0 De esta manera, la estimación no se entiende como un resultado aislado, sino como parte de un proceso de gestión que puede ajustarse a partir del seguimiento de las condiciones del ecosistema.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/25.png")

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Metodología para la estimación del caudal ambiental en el río Bogotá

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 En 2019 se desarrolló una metodología aplicada al río Bogotá, tomando como referencia los principios de la guía nacional y considerando las condiciones particulares de una cuenca altamente intervenida.
        .bg10.p-4.mb-4
          p.mb-0.mt-lg-1.mb-lg-1.mx-lg-2 Esta propuesta presta especial atención a los atributos del régimen natural de caudales: #[b magnitud, frecuencia, duración, oportunidad y tasa de cambio.] Asimismo, establece objetivos ambientales diferenciados de acuerdo con los segmentos del río y contempla escenarios de manejo orientados a la recuperación progresiva de la funcionalidad ecológica.
      .col-lg-5
        img(src='@/assets/curso/tema1/26.png')

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema1/27.png')
      .col-lg-6(data-aos="fade-left")
        .bg11.mb-0.p-4
          .row.justify-content-center.align-items-end.mb-0
            .col-lg-2
              img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema1/28.svg')
            .col-lg-10.ps-4
              .sub1.pb-2.mb-4(data-aos="fade-right")
                i.fas.fa-circle(aria-hidden="true")
                i.fas.fa-circle(aria-hidden="true")
                h4.mb-0 Resolución 2130 de 2019
          p.mb-4.mx-lg-4 La Resolución 2130 de 2019 adopta la metodología correspondiente para la estimación del caudal ambiental y establece un referente técnico para proyectos, obras o actividades que puedan modificar el régimen natural de caudales.
          p.mb-0.mx-lg-4 Su aplicación contribuye a fortalecer la articulación entre las autoridades ambientales, el IDEAM y los usuarios del recurso hídrico, promoviendo criterios técnicos para la estimación y gestión del caudal ambiental.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 Estudios ambientales y licenciamiento

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-4 Los proyectos sujetos a licenciamiento ambiental deben considerar la caracterización de las condiciones hidrológicas del área de influencia y evaluar los posibles efectos de las intervenciones sobre los ecosistemas acuáticos.
        p.mb-4 En este contexto, los estudios de caudal ambiental pueden aportar información para instrumentos como los estudios de impacto ambiental, el diagnóstico ambiental de alternativas, los planes de manejo ambiental y los programas de seguimiento y monitoreo.
        p.mb-0 La información debe analizarse de manera integrada, considerando las características hidrológicas, hidráulicas, biológicas y socioeconómicas del territorio.
      .col-lg-5
        img(src='@/assets/curso/tema1/29.png')

    .sub1.pb-2.mb-4(data-aos="fade-right")
      i.fas.fa-circle(aria-hidden="true")
      i.fas.fa-circle(aria-hidden="true")
      h4.mb-0 Información técnica requerida para el estudio

    p.mb-5 Para desarrollar un estudio de caudal ambiental es necesario contar con información suficiente y pertinente sobre las condiciones del sistema hídrico. Entre los principales componentes se encuentran:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/30.svg')
            h4.text-center.mb-4 Información hidrológica
            p.mb-0.text-center Registros históricos de caudales, precipitación, evapotranspiración, curvas de duración y balance hídrico.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/31.svg')
            h4.text-center.mb-4 Información hidráulica
            p.mb-0.text-center Geometría del cauce, secciones transversales, velocidades, profundidades y rugosidad.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/32.svg')
            h4.text-center.mb-4 Información geomorfológica
            p.mb-0.text-center Transporte de sedimentos, estabilidad del cauce, dinámica fluvial y conectividad.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/33.svg')
            h4.text-center.mb-4 Información ecológica
            p.mb-0.text-center Peces, macroinvertebrados, vegetación ribereña, hábitats y especies prioritarias.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/34.svg')
            h4.text-center.mb-4 Información fisicoquímica
            p.mb-0.text-center Temperatura, oxígeno disuelto, conductividad, pH, sólidos suspendidos y nutrientes.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/35.svg')
            h4.text-center.mb-4 Información socioeconómica
            p.mb-3.text-center Usos del agua, comunidades, actividades productivas y servicios ecosistémicos.

    p.mb-0 La integración de esta información permite construir una visión amplia del sistema y proporciona elementos técnicos para definir un régimen de caudal ambiental acorde con las condiciones del territorio.


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Medición del caudal ambiental y estudios de referencia en Colombia y el mundo

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-t.mb-4(src='@/assets/curso/tema1/36.svg')
        p.mb-0.mt-p1 Para determinar un régimen de caudal ambiental es necesario conocer cómo se comporta el agua en el cauce y cómo sus variaciones se relacionan con el funcionamiento del ecosistema. Por esta razón, la medición del caudal constituye una actividad fundamental dentro de los estudios ambientales, ya que permite obtener información sobre el comportamiento del flujo y analizar las condiciones necesarias para conservar los ecosistemas acuáticos.
      .col-lg-4
        img(src='@/assets/curso/tema1/37.svg')
      .col-lg-4
        .bg33.p-4
          p.mb-0 Medir el caudal ambiental no significa únicamente determinar cuánta agua circula por un río. También implica caracterizar su régimen natural y reconocer cómo cambian sus caudales en diferentes momentos. Para ello, se consideran aspectos como la #[b magnitud, frecuencia, duración, oportunidad y tasa de cambio] del flujo, debido a su relación con procesos ecológicos como el transporte de sedimentos, la conectividad de los hábitats y la dinámica de las comunidades acuáticas.
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .bg12.p-lg-5.p-4
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-3
              img(src='@/assets/curso/tema1/38.svg')
            .col-lg-9
              .bg2.p-1.mb-4
                h4.text-white.mb-0.ps-2.pe-2 ¿Qué información se obtiene al medir el caudal?
              p.mb-0 La medición del caudal permite recopilar información necesaria para caracterizar el régimen de flujo, identificar posibles alteraciones hidrológicas y analizar diferentes escenarios de manejo del recurso hídrico.
      .col-lg-5
        p.mb-4 Durante un estudio pueden desarrollarse actividades como:
        ul.lista-ul.mb-0.mt-lg-4
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Levantamiento de información hidrológica e hidráulica.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Realización de aforos y medición de velocidades del flujo.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Análisis de series históricas de caudales.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Caracterización geomorfológica del cauce.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Evaluación de variables fisicoquímicas del agua.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Caracterización de los ecosistemas y comunidades biológicas.
          li.d-flex.mb-1
            i.fas.fa-drop.i2
            p.mb-0 Modelación hidrológica e hidráulica.
          li.d-flex.mb-0
            i.fas.fa-drop.i2
            p.mb-0 Evaluación de escenarios de alteración del régimen de caudales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Cómo se mide el caudal?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-3 La selección del método de medición depende de las características del río, la precisión requerida, los equipos disponibles y las condiciones encontradas durante el trabajo de campo.
        p.mb-3 Uno de los procedimientos tradicionales es el método área-velocidad, que permite calcular el caudal mediante la relación:
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4.pe-lg-0
            .bg13.p-4.cen
              h4.mb-0 Q = A × V 
          .col-lg-8.ps-lg-0
            .bg14.p-4
              p.mb-3 Donde:
              p.mb-0 #[b Q:] caudal (m#[sup 3]/s).
              p.mb-0 #[b A:] área transversal del cauce (m#[sup 2]).
              p.mb-0 #[b V:] velocidad media del agua (m/s).
        p.mb-0 Para aplicar este método, la sección transversal del cauce se divide en segmentos. En cada uno se determina el área y se mide la velocidad del agua. Posteriormente, se calculan los caudales parciales y se obtiene el caudal total.
      .col-lg-6
        img(src='@/assets/curso/tema1/39.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Qué instrumento se puede utilizar?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4
        img.img-a.img-t(src='@/assets/curso/tema1/40.png')
      .col-lg-8
        p.mb-4 Uno de los instrumentos tradicionales es el #[b molinete hidrométrico,] cuya hélice gira de acuerdo con la velocidad del flujo. Es un equipo práctico y de amplia utilización, aunque puede presentar limitaciones en ríos muy profundos o durante crecientes.
        p.mb-4 Otra alternativa es el #[b Perfilador Acústico Doppler (ADCP),] utilizado para realizar aforos de alta precisión. Este equipo emplea el efecto Doppler para determinar la velocidad del flujo a diferentes profundidades y permite obtener información del perfil de velocidades y del área transversal del cauce.
        .bg7.p-4.mb-0.mt-lg-1
          p.mb-0.mt-lg-3.mb-lg-3.mx-lg-2 También existen métodos más sencillos, como los #[b aforos mediante flotadores,] útiles principalmente para actividades educativas o estudios exploratorios, y métodos de #[b dilución de trazadores,] empleados especialmente en determinados ríos de montaña y condiciones de flujo turbulento o geometría irregular.
      
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿De dónde provienen los datos hidrológicos?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        p.mb-3 Las estaciones hidrométricas constituyen una fuente fundamental para conocer el comportamiento del régimen de flujo. En Colombia, la red hidrológica nacional es operada principalmente por el IDEAM y permite registrar variables como nivel del río, caudal, precipitación, temperatura, sedimentos y calidad del agua.
        p.mb-0 Los registros obtenidos durante periodos prolongados permiten construir series temporales que posteriormente pueden utilizarse para realizar análisis de frecuencia, construir curvas de duración, calcular indicadores hidrológicos, desarrollar modelos y apoyar la estimación del caudal ambiental.
      .col-lg-5
        img(src='@/assets/curso/tema1/41.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Por qué no basta con conocer el nivel del río?

    .row.justify-content-center.align-items-center(data-aos="fade-right").mb-5
      .col-lg-12
        .bloque-texto-g.color-secundario.p-3.p-lg-5.p-md-4
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require_src('@/assets/curso/tema1/42.png')})`}"
          )
          .bloque-texto-g__texto.p-lg-5.p-md-4.p-4
            p.mb-0 Las estaciones hidrométricas normalmente registran el #[b nivel del agua.] Para convertir esta información en caudal se utilizan las #[b curvas de gasto], que relacionan el nivel del agua con el caudal correspondiente.
            br 
            br
            p.mb-0 Estas curvas se construyen a partir de diferentes campañas de aforo realizadas bajo distintas condiciones hidrológicas. Su confiabilidad depende, entre otros aspectos, de la cantidad de aforos disponibles, la estabilidad del cauce y la representatividad de las condiciones hidrológicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Cómo se analiza la disponibilidad del caudal?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-3 Una herramienta utilizada para analizar el comportamiento de los caudales son las #[b curvas de duración del caudal.] Estas representan el porcentaje del tiempo durante el cual un determinado caudal es igualado o superado.
        p.mb-4 Por ejemplo:
        ul.lista-ul.mb-4
          li.d-flex.mb-2
            i.fas.fa-drop.i2
            p.mb-0 #[b Q95:] caudal que es igualado o superado durante el 95 % del tiempo.
          li.d-flex.mb-0
            i.fas.fa-drop.i2
            p.mb-0 #[b Q90:] caudal que es igualado o superado durante el 90 % del tiempo.
        p.mb-0 Estos indicadores han sido utilizados como aproximaciones al caudal ecológico. Sin embargo, no permiten por sí solos representar toda la complejidad del régimen natural de flujo, por lo que deben interpretarse dentro de un análisis más amplio.
      .col-lg-6
        img(src='@/assets/curso/tema1/43.png')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Qué ocurre cuando no existen suficientes registros?
    
    p.mb-4 En algunos territorios no se dispone de series históricas suficientes para caracterizar directamente el comportamiento del río. En estos casos, pueden utilizarse modelos hidrológicos para simular diferentes procesos y escenarios.
    
    p.mb-4 Entre las herramientas mencionadas en los estudios se encuentran:

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/3.svg')
          h4.mb-4.text-center HEC-HMS
          p.mb-0 Permite simular procesos de lluvia-escorrentía y apoyar la estimación de caudales, crecientes y balances hídricos.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/3.svg')
          h4.mb-4.text-center SWAT
          p.mb-0 Permite analizar aspectos relacionados con hidrología, uso del suelo, erosión, sedimentos y calidad del agua.
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/3.svg')
          h4.mb-4.text-center WEAP
          p.mb-0 Permite analizar la oferta y demanda hídrica, escenarios futuros y asignación del recurso. 
      .col-lg-3.col-md-6.mb-lg-0.mb-4
        .h-100.bg4.p-4
          .caja-img.mb-4
            img(src='@/assets/curso/tema1/3.svg')
          h4.mb-4.text-center HEC-RAS
          p.mb-0 Se emplea principalmente para modelación hidráulica y permite analizar variables como profundidades, velocidades, inundaciones, hábitat hidráulico y transporte de sedimentos.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-auto.ps-2.pe-1.mi
        img(src='@/assets/curso/tema1/sub.svg')
      .col.ps-0
        .sub.p-1.pe-lg-4.ps-lg-4.pe-md-4.ps-md-4.pe-4.ps-4
          h3.mb-0 ¿Cómo se identifica una alteración del régimen de flujo?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p.mb-4 Para analizar los cambios producidos en el régimen natural de un río pueden utilizarse #[b indicadores hidrológicos.] Entre ellos se encuentran los #[em Indicators of Hydrologic Alteration] (IHA), que permiten analizar cinco componentes principales:
        .row.justify-content-center.align-items.mb-4
          .col-lg-4
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-drop.i2
                p.mb-0 #[b Magnitud.] 
              li.d-flex.mb-3
                i.fas.fa-drop.i2
                p.mb-0 #[b Frecuencia.] 
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 #[b Duración.] 
          .col-lg-8
            ul.lista-ul.mb-0
              li.d-flex.mb-3
                i.fas.fa-drop.i2
                p.mb-0 #[b Oportunidad.] 
              li.d-flex.mb-0
                i.fas.fa-drop.i2
                p.mb-0 #[b Tasa de cambio.] 
        p.mb-0 Estos indicadores permiten comparar las condiciones naturales y alteradas del régimen de flujo y analizar el grado de modificación asociado a las actividades humanas.
      .col-lg-6
        img(src='@/assets/curso/tema1/44.png')
    
    p.mb-5 Explore el pódcast ¿Qué experiencias existen en otros países? y conozca los avances internacionales en la gestión del caudal ambiental.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/45.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-primario.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="¿Qué experiencias existen en otros países?"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-0
                p.mb-0 

      
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
