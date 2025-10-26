<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Tipos o modos de producción agropecuaria en Colombia
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 En Colombia, los modos de producción agropecuaria se clasifican de acuerdo con varios factores: el tamaño de la unidad productiva, el nivel de tecnificación, el destino de la producción y el uso de la tierra. Uno de los tipos más relevantes es la producción agropecuaria tradicional, campesina o familiar, especialmente en comunidades rurales.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Producción agropecuaria tradicional, campesina o familiar
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Este tipo de producción se caracteriza por estar estrechamente ligada a la vida familiar, a los saberes ancestrales y a una relación armónica con la naturaleza. Aunque se ve amenazada por procesos como la tecnificación forzada y la migración del campo a la ciudad, sigue siendo fundamental para la seguridad alimentaria, la sostenibilidad y la preservación cultural.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué es la producción agropecuaria tradicional, campesina o familiar?
    
    p.mb-5 Es una forma de agricultura y ganadería basada en el trabajo familiar, con conocimientos transmitidos de generación en generación, enmarcados en un vínculo cultural, social y económico profundo con la tierra. Esta modalidad tiene múltiples dimensiones que se presentan a continuación:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tamaño de la unidad productiva
              p La unidad productiva, es decir, la finca o parcela, suele ser pequeña, tipo minifundio. Cuando su tamaño no alcanza para suplir las necesidades de la familia que trabaja en ella, se generan problemas como pobreza rural, el desplazamiento de los jóvenes a la ciudad, y una desintegración familiar y social en las comunidades.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mano de obra y decisiones
              p La mano de obra es mayoritariamente familiar. No se contratan empleados externos. Las decisiones sobre qué sembrar, cómo producir o cuándo cosechar, son tomadas por la misma familia que trabaja la tierra.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Destino de la producción
              p La producción se destina tanto al autoconsumo, para el abastecimiento alimentario de la propia familia, como a la comercialización en mercados locales, permitiendo un pequeño ingreso económico.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conocimientos tradicionales
              p Se utilizan saberes ancestrales transmitidos oralmente, adaptados al entorno local: por ejemplo, el uso de las fases de la luna para sembrar, el empleo de semillas nativas, la rotación de cultivos, el uso de abonos orgánicos y técnicas de manejo del suelo sin químicos. Estos conocimientos, aunque muchas veces no estén sistematizados ni documentados, son de gran valor para una agricultura sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Impacto de la Revolución Verde
              p Con la llegada de la Revolución Verde en el siglo XX, muchos saberes tradicionales fueron desvalorizados y reemplazados por tecnologías e insumos industriales que prometían progreso. Sin embargo, esto trajo consecuencias como la contaminación de los alimentos, el deterioro ambiental y la pérdida de la soberanía alimentaria. Hoy es urgente recuperar esos conocimientos tradicionales como una forma de reconectar con la tierra de manera sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Relación con la naturaleza
              p Existe una conexión profunda con el territorio, los ecosistemas, la biodiversidad y los ciclos naturales. Se prioriza el cuidado del suelo, la conservación del agua, y la protección de la diversidad de cultivos como parte integral del trabajo agrícola.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Diversidad productiva
              p A diferencia de la agricultura industrial que tiende al monocultivo, en la producción campesina se combinan múltiples cultivos y especies: por ejemplo, maíz, papa, hortalizas, frutales, legumbres y animales de corral. Esta diversidad permite garantizar la seguridad alimentaria y reduce la dependencia del mercado o de productos importados.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Importancia social y cultural
              p Este tipo de producción sostiene comunidades rurales enteras, no solo desde lo económico, sino también desde lo cultural y lo simbólico. Permite mantener vivas las tradiciones, costumbres y formas de vida que han perdurado por siglos en distintas regiones del país.
    
    .bg-color-4.mb-5.tarjeta
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 La producción agropecuaria tradicional, campesina o familiar es mucho más que una técnica productiva: representa una forma de vida basada en el respeto por la tierra, la memoria colectiva y la sostenibilidad. Recuperar y valorar estos saberes es esencial para enfrentar los retos del presente y del futuro, especialmente en lo que respecta a la crisis ambiental y la justicia social.
    
    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Concepto de seguridad y soberanía alimentaria
        
        p.mb-5 A continuación, se presenta un pódcast  que analiza las diferencias entre seguridad alimentaria y soberanía alimentaria en comunidades campesinas, destacando sus fundamentos conceptuales, condiciones prácticas y su relevancia en la construcción de sistemas alimentarios justos, sostenibles y culturalmente arraigados.

        .row.mb-5.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema1/13.png", data-aos="zoom-in")
          .col-lg-7.order-lg-1
            .bg-color-1.tarjeta.mb-3
              .p-4
                .row.justify-content-center.align-items-center
                  .col-lg-5.mb-3.mb-lg-0
                    figure
                      img(src="@/assets/curso/tema1/12.svg", data-aos="zoom-in")
                  .col-lg-7
                    h3 Pódcast
                    TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                      texto="Concepto de seguridad y soberanía alimentaria "
                      tiempo
                      :audio="require('../assets/curso/podcast/podcast1.mp3')"
                    ) 
            p La seguridad alimentaria garantiza el derecho a una alimentación adecuada, mientras que la soberanía alimentaria permite ejercer ese derecho con autonomía, identidad cultural y sostenibilidad. Ambas son necesarias y complementarias: sin soberanía, la seguridad alimentaria es frágil y dependiente; sin seguridad, la soberanía pierde su sentido práctico. La soberanía alimentaria fortalece la seguridad alimentaria, preserva la cultura campesina, cuida el ambiente y garantiza el derecho a una vida digna en el campo.
    
        .row.mb-5.align-items-center
          .col-lg-3.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/14.svg", data-aos="zoom-in")
          .col-lg-9
            .bg-color-28.tarjeta.p-4(data-aos="fade-left").text-white
              h5 Ejemplo destacado. Comunidad de Paz de San José de Apartadó (Antioquia)
              p.mb-0 Desde 1997, esta comunidad ha defendido su derecho a producir sus propios alimentos, proteger su territorio y vivir con dignidad al margen del conflicto armado. Su experiencia demuestra que la soberanía alimentaria no es una idea abstracta, sino una práctica concreta que transforma vidas y territorios.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Qué son alimentos nutritivos y culturalmente apropiados para la alimentación humana en el contexto de una comunidad campesina en Colombia?
        
        p.mb-5 Los alimentos nutritivos y culturalmente apropiados son aquellos que no solo satisfacen las necesidades biológicas del ser humano, sino que también respetan las tradiciones, costumbres y entorno cultural de una comunidad. Un ejemplo claro en el contexto colombiano son alimentos como los envueltos, el queso y la gallina, ampliamente consumidos por los campesinos. Estos representan una dieta que es nutritiva y a la vez culturalmente significativa. Las características clave de los alimentos nutritivos y culturalmente  son: apropiados
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Nutritivos")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Nutritivos
            p Son aquellos que proporcionan los nutrientes esenciales para la salud, el crecimiento y el desarrollo humano. Estos incluyen: 
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Macronutrientes: carbohidratos, proteínas y grasas. 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Micronutrientes: vitaminas y minerales.
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Agua, vital para funciones corporales.
            h5 Ejemplos de alimentos nutritivos: 
            p Frutas, verduras, legumbres, cereales integrales, lácteos, carnes magras, huevos, frutos secos, pescado, entre otros.

          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/15.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Culturalmente apropiados")
        .row.align-items-center.p-5
          .col-lg-7.mb-4.mb-md-0
            h4 Culturalmente apropiados
            p Son alimentos aceptados y valorados dentro del contexto social y cultural de una comunidad, transmitidos a través de generaciones. Están vinculados a la identidad y prácticas tradicionales.
            h5 Ejemplos por región:
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Suero costeño (Costa Atlántica)  
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Cuy (Nariño) 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ternera a la llanera (Llanos Orientales) 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Hormigas culonas (Santander)
            h5 Costumbres generalizadas: 	
            ul.lista-ul--color.ms-3
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Consumo de papa, yuca y plátano 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Arroz y productos derivados del maíz, especialmente arepas 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Café y chocolate 
              li.mb-0.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Tamales y lechona (originarios del Tolima, pero con aceptación nacional)

          .col-lg-5.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema1/16.png', alt='Texto que describa la imagen')

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Importancia de combinar lo nutricional con lo cultural

    p.mb-5.mt-5 Una alimentación adecuada debe cumplir una doble función:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-25.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex.bg-white.tarjeta.p-3
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Nutrir el cuerpo con los elementos necesarios para su funcionamiento.
              li.mb-3.d-flex.bg-white.tarjeta.p-3
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Respetar y fortalecer la identidad cultural, las prácticas y la dignidad de las personas.
          p.mb-0 Esto es particularmente relevante en programas de ayuda alimentaria, seguridad alimentaria y políticas públicas. En Colombia, por ejemplo, se han presentado numerosas quejas en el Programa de Alimentación Escolar debido a la falta de pertinencia nutricional y cultural de los alimentos suministrados.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Realidad de los alimentos en el contexto campesino colombiano

    p.mb-5.mt-5 Aunque Colombia posee condiciones naturales excepcionales para la producción de alimentos —climas variados, sin estaciones, con alta biodiversidad—, los campesinos pueden enfrentar dificultades para acceder a una alimentación adecuada. Estas limitaciones no son por condiciones naturales, sino por otros factores:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Orden público
              p Enfrentamientos armados y paros impiden el transporte y la llegada de alimentos a algunas regiones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Limitaciones económicas
              p La falta de ingresos, tierra o fuerza de trabajo (por envejecimiento, por ejemplo) limita la capacidad de producir o adquirir alimentos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pérdida de valores ancestrales
              p El enfoque exclusivo en monocultivos comerciales ha reducido la producción de alimentos diversos para el autoconsumo, en contraste con prácticas ancestrales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Dieta tradicional desequilibrada
              p En algunas regiones, la dieta campesina tiene alto contenido de carbohidratos y grasas, con escaso aporte de proteínas, frutas y verduras. Esto puede deberse tanto a costumbres como a la adopción de hábitos forzados por cambios externos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cambio climático
              p Inundaciones y otros fenómenos naturales afectan las cosechas y la producción pecuaria, dejando a las familias sin recursos alimentarios.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/23.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Deficiencias en programas gubernamentales
              p Muchos programas no consideran el contexto cultural ni garantizan calidad alimentaria. Además, han sido objeto de denuncias por corrupción, afectando negativamente la efectividad y pertinencia de la ayuda alimentaria.
    
    .bg-color-17.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema1/24.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Garantizar una alimentación nutritiva y culturalmente apropiada para las comunidades campesinas en Colombia no solo implica producir alimentos, sino también comprender y respetar sus contextos sociales, culturales y económicos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estrategias para proteger la soberanía alimentaria de los campesinos en Colombia
    
    p.mb-5 Proteger la soberanía alimentaria de los campesinos colombianos es fundamental para garantizar el derecho a una alimentación adecuada, fortalecer el tejido rural y preservar los saberes ancestrales. Este proceso requiere acciones integrales, que incluyan cambios estructurales, apoyo económico, participación comunitaria y respeto por el medio ambiente. A continuación se presentan las principales estrategias:

    .row.justify-content-center
      .col-lg-11
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="a) Apoyar la agricultura campesina").ms-5
            p.mb-0 Brindar acceso a tierras, créditos, formación técnica y organizativa. Fortalecer las asociaciones campesinas para mejorar su capacidad de negociación y comercialización.
          div(titulo="b) Reforma agraria").ms-5
            p Redistribuir tierras improductivas a campesinos que las trabajan sin ser propietarios, promoviendo así la autonomía productiva.
          div(titulo="c) Fomentar mercados locales").ms-5
            p.mb-0 Promover canales de comercialización directa como ferias agrícolas y mercados campesinos, eliminando intermediarios y asegurando precios justos.
          div(titulo="d) Agroecología y biodiversidad").ms-5
            p.mb-0 Incentivar prácticas agrícolas sostenibles, uso de semillas locales, rotación de cultivos y reducción del uso de agroquímicos. Preservar el ecosistema y la salud del suelo.
          div(titulo="e) Acceso a financiamiento y apoyo técnico").ms-5
            p.mb-0 Ofrecer créditos blandos, asistencia técnica y capacitación en tecnologías apropiadas para mejorar la productividad y comercialización.
          div(titulo="f) Legislación protectora del campesinado").ms-5
            p Crear leyes que garanticen el acceso a la tierra, la protección del producto nacional frente a importaciones y los derechos laborales del campesino.
          div(titulo="g) Inclusión de pueblos indígenas y afrocolombianos").ms-5
            p.mb-0 Reconocer y apoyar los sistemas agrícolas tradicionales (como la chagra), sus saberes ancestrales y su participación en la toma de decisiones sobre políticas rurales.
          div(titulo="h) Educación y sensibilización").ms-5
            p.mb-0 Implementar campañas educativas para promover el consumo de productos locales, hábitos saludables y el apoyo a la agricultura familiar y de comercio justo.
          div(titulo="i) Adaptación al cambio climático").ms-5
            p.mb-0 Desarrollar cultivos resistentes, sistemas de captación de agua, y formación sobre mitigación y adaptación a fenómenos climáticos extremos.
    
    p.mb-5 La protección de la soberanía alimentaria en Colombia no depende únicamente de medidas económicas. Se requiere un enfoque integral e inclusivo, que abarque:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Distribución justa de la tierra
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalecimiento del campesinado y sus organizaciones
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promoción de modelos agrícolas sostenibles
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Participación activa de comunidades indígenas y afrocolombianas
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Educación y conciencia colectiva
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Preparación frente al cambio climático
    
    p.mb-5 Solo así será posible construir un sistema alimentario más justo, resiliente y culturalmente arraigado.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Manipulación de alimentos por parte de los campesinos como parte de la seguridad alimentaria.

    p.mb-5.mt-5 La manipulación de alimentos realizada por los campesinos es un componente fundamental de la seguridad alimentaria, ya que garantiza que los productos lleguen al consumidor final en condiciones higiénicas, nutritivas y seguras. A diferencia de la visión reducida que asocia este proceso únicamente con la cocina o la venta, en el contexto campesino abarca toda la cadena alimentaria, desde la siembra hasta la comercialización.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/26.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Producción agrícola y pecuaria segura
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Elección de semillas sanas (preferiblemente orgánicas, nativas o criollas).
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso racional de insumos, evitando agroquímicos tóxicos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Empleo de medicamentos pecuarios orgánicos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de agua libre de contaminantes y sin pesticidas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cosecha higiénica
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Limpieza previa de herramientas, manos y utensilios.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Recolección en condiciones secas (evitar la lluvia).
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 No mezclar productos en descomposición con alimentos sanos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Postcosecha y almacenamiento
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Lavado de productos antes del transporte.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Almacenamiento en espacios limpios, secos, sin plagas ni roedores.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Clasificación y empaque higiénico adecuado para cada tipo de alimento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Transporte
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Evitar transportar alimentos junto con químicos, combustibles o animales.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de vehículos limpios, ventilados o refrigerados si es necesario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Transformación artesanal
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Lavado frecuente de manos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Limpieza de superficies y utensilios.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de agua potable.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Evitar el contacto de alimentos con animales domésticos o insectos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Procesos como elaboración de queso, dulces, conservas o harinas deben cumplir normas básicas de higiene.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/31.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Comercialización directa
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Exhibir productos en mesas limpias, nunca sobre el suelo.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de manteles y utensilios higiénicos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Refrigeración de productos perecederos cuando sea necesario.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 EAtención al cliente con medidas básicas de higiene.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Educación y buenas prácticas
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Formación en Buenas Prácticas Agrícolas (BPA), Buenas Prácticas Pecuarias (BPG) y Buenas Prácticas de Manufactura (BPM).
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Integrar conocimientos tradicionales sobre manipulación y conservación de alimentos.
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Participación en procesos de formación comunitaria.
    
    p.mb-5 La manipulación de alimentos en el contexto campesino es un proceso integral que abarca todas las etapas: siembra, cosecha, almacenamiento, transporte, transformación y comercialización. Aplicar prácticas higiénicas y seguras en cada fase es esencial para garantizar que los alimentos sean seguros, nutritivos y culturalmente apropiados, contribuyendo así a una seguridad alimentaria real y sostenible en las comunidades rurales y en el país.

    separador
    
    .bg-full-width.bg-fondo-5.mb-5
      .px-4.px-md-5.py-4
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.2 Producción agropecuaria empresarial o tecnificada
        
        p.mb-5 Este tipo de producción se caracteriza por su enfoque comercial y su alto nivel de tecnificación. Está orientada principalmente al mercado, tanto nacional como internacional, y busca maximizar las ganancias a través del uso intensivo de recursos y tecnología.
    
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6").mb-3
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Extensión territorial
                p.text-center Se realiza en grandes extensiones de tierra (latifundios).
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Tecnificación
                p.text-center Emplea maquinaria avanzada, fertilizantes, sistemas de riego tecnificado y semillas mejoradas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Orientación productiva
                p.text-center Su producción está destinada al mercado nacional e internacional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/37.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Financiamiento
                p.text-center Requiere capitales propios o financiación bancaria para operar.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/38.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uso de recursos
                p.text-center Utiliza intensivamente mano de obra contratada y tecnología especializada.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelo productivo
                p.text-center Se basa en el monocultivo en agricultura o en la cría de una única especie en ganadería, lo que reduce la biodiversidad y provoca erosión genética.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/39-1.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Finalidad
                p.text-center Su objetivo principal es el lucro.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/40.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Relación con la naturaleza
                p.text-center Tiene un enfoque extractivo que prioriza la explotación de los recursos naturales.
            
            .bg-color-29.tarjeta.mb-5.bord
              .px-4.px-md-5.py-4
                .row.align-items-center
                  .col-lg-auto.mb-3.mb-lg-0
                    img(src="@/assets/curso/tema1/41.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    p.mb-0 <b>Ejemplos</b>. Cultivo de palma de aceite, banano, caña de azúcar o producción ganadera a gran escala.
          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/33.png', alt='')

        separador
        
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 1.3 Producción agroecológica o sostenible  
        
        p.mb-5 Este modelo de producción se basa en el respeto a los principios ecológicos y sostenibles. A diferencia del enfoque empresarial, prioriza la conservación del ambiente, la salud de los ecosistemas y el bienestar de las comunidades.

        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/42.png", data-aos="zoom-in")
          .col-lg-8
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/43.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Fundamento
                      p.mb-0 Se rige por principios ecológicos y sostenibles
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/45.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Uso de insumos
                      p.mb-0 No emplea químicos sintéticos como pesticidas ni fertilizantes artificiales.
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/47.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Conservación ambiental
                      p.mb-0 Promueve el cuidado del suelo, el agua y la biodiversidad.
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/44.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Escala de producción
                      p.mb-0 Puede darse en pequeña o mediana escala
            .row.mb-3
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/46.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Destino de la producción
                      p.mb-0 Puede estar orientada al autoconsumo o a un mercado especializado (productos orgánicos).
              .col-lg-6.mb-3.mb-lg-0.mb-3.mb-lg-0
                .bg-color-6.p-3.tarjeta.h-100(data-aos="fade-left")
                  .row.align-items-start
                    .col-lg-auto.mb-3.mb-lg-0
                      img(src="@/assets/curso/tema1/49.svg", style="max-width: 90px").mx-auto
                    .col-lg
                      h5 Ejemplos
                      p.mb-0 Huertas orgánicas, fincas integrales sostenibles.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué son los principios ecológicos y sostenibles?
    
    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/50.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-17.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Son fundamentos que orientan nuestras acciones para proteger el medio ambiente, conservar los recursos naturales y garantizar el bienestar de las generaciones presentes y futuras. Se aplican en diversos ámbitos: agricultura, industria, construcción, educación, consumo, entre otros.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Principios ecológicos

    p.mb-5.mt-5 Estos se basan en el funcionamiento natural de los ecosistemas y buscan mantener su equilibrio. A continuación, se presentan los principales:

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/51.png", data-aos="zoom-in")
      .col-lg-8
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/52.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Interdependencia
                  p.mb-0 Todos los seres vivos están conectados: afectar a uno impacta al sistema entero.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/54.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Diversidad biológica
                  p.mb-0 Cuanta más biodiversidad, mayor estabilidad del ecosistema.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/56.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Ciclos naturales cerrados
                  p.mb-0 La naturaleza recicla todo: no genera residuos. Ejemplo: ciclo del agua, del carbono
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/53.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Capacidad de carga
                  p.mb-0 Cada ecosistema tiene un límite de uso sin degradarse.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/55.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Adaptación y resiliencia
                  p.mb-0 Los ecosistemas sanos se adaptan y recuperan ante cambios.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Principios de sostenibilidad (desarrollo sostenible)

    p.mb-5.mt-5 Se enfocan en cómo los seres humanos pueden vivir y desarrollarse sin agotar los recursos del planeta:

    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/57.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Satisfacción de necesidades actuales sin comprometer las futuras  ").ms-5
            p.mb-0 Uso responsable de los recursos, pensando en las futuras generaciones.
          div(titulo="Equilibrio ambiental, social y económico").ms-5
            p El desarrollo sostenible se basa en tres pilares: 
            ul.lista-ul--color.mb-0
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Medio ambiente (naturaleza) 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Sociedad (equidad, justicia social) 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Economía (crecimiento responsable)
          div(titulo="Uso racional de los recursos").ms-5
            p.mb-0 Ahorrar y optar por fuentes renovables: agua, energía, materiales, suelo, recursos genéticos, etc. 
          div(titulo="Prevención y precaución").ms-5
            p.mb-0 Es preferible evitar daños al ambiente que intentar repararlos.
          div(titulo="Participación y educación").ms-5
            p.mb-0 Involucrar a la comunidad y fomentar la conciencia ambiental mediante la educación.
    
    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Producción agroindustrial

    p.mb-5 La producción agroindustrial constituye una fase intermedia entre el sector agropecuario y la industria, enfocándose en transformar materias primas agrícolas o pecuarias en productos con valor agregado. Este tipo de producción es clave en las economías rurales y urbanas, ya que amplía las posibilidades de comercialización y desarrollo tecnológico.
    
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/58.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Las características principales son:
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Articula la producción primaria con procesos industriales.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Genera productos procesados listos para el consumo o distribución.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Impulsa sectores estratégicos como:
            ul.lista-ul--color.mb-0.ms-3
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Café: tostado y molido.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Caña de azúcar: azúcar, etanol o panela.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Frutas: jugos, conservas, deshidratados, entre otros.
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-29.tarjeta.mb-5.bord
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/59.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 <b>Ejemplos</b>. El cultivo de caña de azúcar puede destinarse a la producción de etanol como biocombustible o a la fabricación artesanal de panela.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Producción extensiva vs. intensiva
    
    p.mb- Existen diferentes formas de organizar la producción agropecuaria según el uso de recursos y la escala de intervención. Las formas más comunes son la producción extensiva y la intensiva, que responden a lógicas diferentes en cuanto al manejo del espacio, el capital y la tecnología.

    TabsC.color-acento-contenido.mb-5
      .p-5(titulo="Extensiva")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Extensiva
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Requiere grandes extensiones de tierra. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Baja densidad de animales o cultivos. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Uso limitado de insumos y tecnología.
            p <b>Ejemplo</b> típico. Ganadería extensiva en los Llanos Orientales o la Costa Atlántica.
        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/60.png', alt='Texto que describa la imagen')
      .p-5(titulo="Intensiva")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Intensiva
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Optimiza espacios reducidos. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Alta inversión en insumos, infraestructura y tecnología. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Alto rendimiento por unidad de superficie.
            p <b>Ejemplo típico</b>. Avicultura o porcicultura tecnificada.
        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema1/61.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Producción convencional
      
    p.mb-5 La producción convencional se refiere al modelo predominante en agricultura y ganadería desde mediados del siglo XX, consolidado especialmente a partir de la Revolución Verde. Este sistema busca maximizar el rendimiento utilizando técnicas modernas de alto impacto, aunque muchas veces sin considerar las consecuencias ecológicas y sociales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/62.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 En agricultura convencional
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Fertilizantes químicos sintéticos. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Plaguicidas y herbicidas para controlar plagas y malezas. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Monocultivos en grandes extensiones. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Semillas mejoradas (a veces transgénicas). 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Alta mecanización y tecnología.  
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso intensivo de agua y energía.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema1/63.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 En ganadería convencional
              ul.lista-ul--color.mb-0
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Alimentación basada en concentrados. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Uso de antibióticos y hormonas de crecimiento. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Sistemas intensivos o en confinamiento. 
                li.mb-3.d-flex
                  i.fas.fa-leaf.bg-color-7
                  p.mb-0 Prioriza productividad sobre bienestar animal.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo se diferencia de otros sistemas productivos?
    
    p.mb-5 A continuación, se comparan los principales enfoques de producción agropecuaria, destacando sus diferencias en cuanto al uso de insumos, valores ecológicos y sociales:
          
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/64.png", data-aos="zoom-in")
      .col-lg-8
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/65.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Convencional
                  p.mb-0 Uso de químicos sintéticos, maquinaria y monocultivos; busca el máximo rendimiento.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/67.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Orgánica o ecológica
                  p.mb-0 Evita químicos sintéticos y transgénicos; promueve prácticas naturales.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/68.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Agroecológica
                  p.mb-0 Enfocada en sostenibilidad, diversidad biológica y equidad social.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-23.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema1/66.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Regenerativa
                  p.mb-0 Busca restaurar suelos, ecosistemas y ciclos naturales dañados.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema1/69.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-25.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Las ventajas percibidas de la producción convencional son: 
          div
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Alta productividad y eficiencia.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Capacidad de abastecimiento masivo para mercados nacionales e internacionales.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducción de costos unitarios de producción, lo que puede traducirse en precios más bajos al consumidor.
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/70.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-4.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Los impactos negativos asociados son:  
          div
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Contaminación de suelos, aguas y aire.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Degradación de la fertilidad natural del suelo.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pérdida de biodiversidad agrícola y silvestre.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Riesgos para la salud humana y animal por residuos químicos.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Dependencia estructural de insumos externos (fertilizantes, pesticidas, semillas, maquinaria).

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
