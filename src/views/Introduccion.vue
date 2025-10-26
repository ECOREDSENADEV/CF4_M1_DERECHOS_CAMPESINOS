<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-19.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-15.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/intro/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") La relación entre el medio ambiente y las actividades agropecuarias siempre ha sido muy estrecha, ya sea porque es armónica y equilibrada o porque estas actividades contribuyen a deteriorar el medio natural. Con la preocupación actual del cambio climático y la presión que ejercen los seres humanos sobre los recursos naturales, la mejor decisión es estar del lado de la naturaleza, cuidándola, protegiéndola y aprovechando de manera respetuosa lo que nos provee.
            p(data-aos="fade-left") En este componente formativo además de repasar los diferentes tipos de producción agropecuaria en Colombia y enumerar los impactos ambientales que pueden generarse, se enfatiza en los beneficios ambientales, sociales y económicos de la producción agropecuaria sostenible. Este enfoque ofrece a los campesinos alternativas productivas, mayor autonomía y soberanía sobre los insumos, ingresos estables y una vida más tranquila, sin depender en exceso del dinero.
        
        .row.justify-content-center
          .col-lg-10
            .bg-color-5.mb-5.tarjeta
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/intro/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 Asimismo, tanto los beneficios de la actividad agropecuaria sostenible como las alternativas económicas para zonas rurales se convierten en la base para que los estudiantes diseñen propuestas de producción responsable. De esta manera, podrán aplicar los conocimientos adquiridos en el programa y contribuir al desarrollo de sistemas productivos que respeten la vida campesina y el equilibrio ambiental.

    


</template>

<script>
export default {
  name: 'Introduccion',
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
