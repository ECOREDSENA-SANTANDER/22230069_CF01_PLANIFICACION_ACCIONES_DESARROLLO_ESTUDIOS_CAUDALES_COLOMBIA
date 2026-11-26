<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-4(data-aos="fade-right") El estudio del caudal ambiental comprende la identificación de su alcance, desde la comprensión de su concepto e importancia hasta la selección de metodologías para su estimación. Para ello, se abordan los fundamentos del caudal ambiental, los métodos utilizados para calcularlo, los requisitos técnicos y normativos aplicables en Colombia, así como las técnicas de medición y los estudios de referencia nacionales e internacionales. 

    p.mb-5(data-aos="fade-left") Asimismo, se estudian las diferentes metodologías para el cálculo del caudal ambiental, considerando su clasificación, nivel de complejidad, información requerida y casos de aplicación. Finalmente, se analiza la pertinencia de cada metodología para seleccionar la más adecuada según las características y necesidades del estudio. 
    

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
