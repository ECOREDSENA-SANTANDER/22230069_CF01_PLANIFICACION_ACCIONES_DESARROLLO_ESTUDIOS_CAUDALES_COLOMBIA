<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") En este componente formativo se comprendió la importancia de planificar técnicamente un estudio de caudal ambiental mediante la organización de actividades, tiempos, responsables y recursos, de acuerdo con la metodología seleccionada. Asimismo, se reconoció la importancia de estructurar un plan de trabajo que articule las actividades de gabinete, campo, procesamiento y análisis de información. 

    p.mb-5(data-aos="fade-left") También se identificó el aporte de las herramientas digitales para la gestión y el seguimiento de los estudios, así como la importancia de elaborar un presupuesto que contemple los recursos humanos, técnicos, tecnológicos y financieros necesarios. De esta manera, se fortalecieron conocimientos para planificar estudios de caudal ambiental con criterios de eficiencia, calidad y cumplimiento de los requerimientos técnicos  y ambientales aplicables.
    

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Diagrama jerárquico sobre la identificación del alcance del estudio de caudales ambientales, organizado en dos ramas principales: caudal ambiental y metodologías para su cálculo. Incluye conceptos, estimación, requisitos técnicos y normativos, medición, clasificación y complejidad de las metodologías, información requerida, casos de aplicación y análisis de selección metodológica.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
