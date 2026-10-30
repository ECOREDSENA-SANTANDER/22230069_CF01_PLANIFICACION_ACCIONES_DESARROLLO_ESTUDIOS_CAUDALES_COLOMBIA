<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        .row.justify-content-center.align-items-start.mb-lg-2.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4.d-none.d-md-block
            img.img-t(src='@/assets/curso/intro/2.svg')
          .col-lg-10.ps-lg-0.col-md-10
            p.mb-0 La sostenibilidad de los ecosistemas acuáticos depende, en gran medida, del mantenimiento de un régimen de flujo que permita conservar sus procesos ecológicos y su funcionalidad. Los organismos que habitan ríos, quebradas, lagos y humedales se han desarrollado bajo patrones naturales de variación hidrológica, determinados por la magnitud, duración, frecuencia, oportunidad y tasa de variación de los caudales. 
        p.mb-0 Estas características intervienen en procesos fundamentales como la reproducción de peces, la dispersión de semillas, la conectividad entre ecosistemas, el transporte de sedimentos, la renovación de nutrientes y el mantenimiento de hábitats acuáticos (Richter et al., 1997; King et al., 2008). Sin embargo, actividades como la regulación mediante presas, la extracción y derivación de agua, la expansión urbana y las transformaciones asociadas al cambio climático pueden alterar este régimen y afectar la biodiversidad y el funcionamiento de los ecosistemas. Ante esta situación, se han desarrollado diversas metodologías para determinar las condiciones de flujo necesarias para conservar la funcionalidad ecológica de los sistemas acuáticos, cuya selección depende de las características del sistema, los objetivos del estudio y la información disponible (King et al., 1999; Acreman et al., 2014).
    
    p.mb-5 En este contexto, la identificación del alcance constituye una etapa fundamental para orientar el estudio de caudales ambientales, ya que permite reconocer el sistema hídrico objeto de análisis, sus características y condiciones de referencia, los posibles factores de alteración, los objetivos del estudio y los requerimientos de información. En Colombia, el Ministerio de Ambiente y Desarrollo Sostenible y el Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM) han establecido orientaciones para la estimación del caudal ambiental bajo un enfoque que reconoce la importancia de conservar la dinámica del régimen natural de flujo y no únicamente un valor mínimo de caudal. Por ello, delimitar adecuadamente el alcance permite establecer una base técnica para seleccionar las metodologías, variables y criterios de análisis pertinentes, de acuerdo con las condiciones ambientales e hidrológicas del territorio, y orientar de manera coherente las etapas posteriores del estudio.
    
    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
