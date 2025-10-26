<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Prácticas agropecuarias sostenibles
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 En respuesta a los impactos negativos que puede generar la producción agropecuaria convencional, han surgido enfoques que promueven una relación más armónica entre el campo y la naturaleza. Estos enfoques se conocen como prácticas agropecuarias sostenibles, y representan una alternativa viable para conservar los recursos naturales sin sacrificar la productividad ni el bienestar de las comunidades rurales.
    
    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Definición y características

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-5.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Las prácticas agropecuarias sostenibles son formas de trabajar la agricultura y la ganadería que protegen el medio ambiente, conservan los recursos naturales (como el agua, el suelo y la biodiversidad) y al mismo tiempo garantizan el bienestar de las familias rurales, permitiendo que puedan continuar produciendo alimentos de manera responsable y duradera. Su enfoque va más allá del presente: buscan que el campo siga siendo fértil y productivo también para las futuras generaciones.
    
    .bg-full-width.bg-fondo-6.mb-5
      .px-4.px-md-5.py-4  
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Cuáles son sus características?
        
        p.mb-5 A continuación, se presentan las principales características de las prácticas agropecuarias sostenibles. Estas permiten comprender por qué se consideran una opción viable, tanto ecológica como socialmente:

        SlyderF(columnas="col-12 col-lg-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Cuidado del medio ambiente
            p.text-center Reducen la contaminación del suelo, el agua y el aire. Protegen la biodiversidad local.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Conservación de recursos naturales
            p.text-center Usan el agua, el suelo y los ecosistemas de forma responsable para evitar su agotamiento.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Productividad a largo plazo
            p.text-center Mantienen la fertilidad del suelo y aseguran la disponibilidad futura de agua.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Reducción de químicos
            p.text-center Disminuyen el uso de pesticidas y fertilizantes sintéticos, promoviendo alternativas naturales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Bienestar animal
            p.text-center En la ganadería, se respetan las necesidades de los animales, evitando prácticas crueles o antinaturales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Respeto por los ciclos naturales
            p.text-center Aplican técnicas como la rotación de cultivos, el compostaje o los policultivos, adaptándose a los ritmos de la naturaleza.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Justicia social y equidad
            p.text-center Mejoran la calidad de vida rural, promueven la equidad y fomentan la participación comunitaria.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Viabilidad económica
            p.text-center Permiten a los productores obtener ingresos sostenibles sin depender de insumos costosos o externos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Adaptación al cambio climático
            p.text-center Incorporan prácticas que ayudan a enfrentar sequías, lluvias intensas y otras variaciones climáticas extremas.
    
    p Estas prácticas no solo buscan minimizar los impactos negativos, sino también generar beneficios positivos para el ambiente, la economía rural y la sociedad. 

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2	Fundamentos de la producción agroecológica
    
    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/12.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Frente a los impactos negativos de la agricultura convencional, la agroecología surge como una propuesta integral que combina ciencia, prácticas tradicionales y principios éticos para construir sistemas agropecuarios más sostenibles, resilientes y justos. Este enfoque promueve formas de producción que respetan los ciclos naturales, fortalecen las comunidades rurales y reducen la dependencia de insumos externos.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué propone la agroecología?
    
    p.mb-5 A continuación, se presenta un video que expone los principios fundamentales de la agroecología como una alternativa sostenible para la producción de alimentos, integrando criterios ecológicos, sociales y culturales en el manejo del territorio rural.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
  
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	¿Que son las condiciones agroecológicas?
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/13.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Para que una actividad agrícola o pecuaria sea verdaderamente sostenible, no basta con aplicar buenas prácticas: es fundamental conocer y respetar las condiciones agroecológicas del territorio donde se va a producir. Estas condiciones permiten tomar decisiones informadas sobre qué, cómo y cuándo sembrar o criar, de forma que se aprovechen los recursos naturales sin degradarlos.
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/14.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-23.tarjeta.p-4(data-aos="fade-left")
              p.mb-0 Las condiciones agroecológicas son el conjunto de características naturales y ambientales de una región que influyen en el desarrollo de actividades agrícolas y pecuarias. Estas condiciones determinan qué tipo de cultivos o sistemas ganaderos se pueden implementar de manera sostenible, y bajo qué prácticas es posible alcanzar buenos resultados productivos sin afectar el ecosistema.
    
    .bg-full-width.bg-fondo-6.mb-5
      .px-4.px-md-5.py-4  
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Qué incluyen las condiciones agroecológicas?
        
        p.mb-5 A continuación, se presentan los principales componentes que forman parte de las condiciones agroecológicas de una zona:

        .row.justify-content-center.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6").mb-3
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Clima
                p.text-center Temperatura, lluvias, humedad, luz solar y vientos. Estos factores determinan la adaptabilidad de los cultivos y animales a una región.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Suelo
                p.text-center Tipo, textura, fertilidad, pH, porosidad, aireación y capacidad de retención de agua. El suelo es clave para el crecimiento de las plantas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Relieve
                p.text-center Forma del terreno: plano, inclinado o montañoso. Afecta la erosión, el drenaje, la mecanización y los tipos de cultivo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/19.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Altitud
                p.text-center La altura sobre el nivel del mar influye directamente en el clima y define qué especies agrícolas y animales se adaptan mejor.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/20.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Disponibilidad de agua
                p.text-center Cantidad y calidad del agua disponible para riego, consumo animal y otros usos. Factor esencial para la sostenibilidad del sistema.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema3/21.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Biodiversidad
                p.text-center Presencia de flora, fauna, insectos y microorganismos que interactúan en el ecosistema agrícola. Una alta biodiversidad mejora la resiliencia del sistema.
          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema3/15.png', alt='')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Por qué es importante conocer las condiciones agroecológicas?
    
    p.mb-5 Conocer bien las condiciones agroecológicas de una región permite adaptar la producción agropecuaria al entorno, logrando así un manejo más eficiente, productivo y respetuoso con la naturaleza. En particular, permite:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/22.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Seleccionar cultivos y sistemas ganaderos adecuados al territorio.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aplicar prácticas sostenibles, ajustadas a las características locales.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Prevenir problemas como erosión, baja productividad o sobreexplotación del agua.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aumentar la resiliencia frente a fenómenos como sequías, heladas o lluvias extremas.
    
    p.mb-5 Las condiciones agroecológicas definen el potencial productivo y la sostenibilidad de un territorio rural. Son la base para tomar decisiones responsables en el diseño de sistemas agropecuarios y deben ser el punto de partida de cualquier intervención en el campo.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4	Objetivos de las prácticas agropecuarias sostenibles
    
    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/23.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Las prácticas agropecuarias sostenibles no solo se enfocan en producir alimentos, sino en hacerlo de una forma que garantice el bienestar de las personas, el cuidado del ambiente y la viabilidad económica a largo plazo. Su enfoque busca mantener la productividad sin degradar el entorno, promoviendo al mismo tiempo la justicia social y la resiliencia ante los efectos del cambio climático.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué buscan lograr estas prácticas?
    
    p.mb-5 A continuación, se presentan los principales objetivos que guían la implementación de prácticas sostenibles en la agricultura y la ganadería. Cada uno de estos propósitos apunta a equilibrar los aspectos ambientales, económicos y sociales de la producción agropecuaria.

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/24.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Conservar los recursos naturales").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Proteger el suelo, el agua, los bosques y la biodiversidad.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Prevenir la erosión y la degradación del ambiente.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Usar el agua de forma eficiente y responsable.
          div(titulo="Reducir el impacto ambiental").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Minimizar el uso de agroquímicos.     
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Disminuir emisiones de gases de efecto invernadero.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fomentar energías renovables y tecnologías limpias.
          div(titulo="Mejorar la productividad y rentabilidad").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aumentar el rendimiento sin dañar el ambiente.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducir costos mediante el uso eficiente de recursos.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Incentivar la innovación y el uso de tecnologías apropiadas. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Priorizar el uso de insumos y comercio locales.
          div(titulo="Garantizar la seguridad alimentaria").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ofrecer alimentos sanos, seguros y suficientes.     
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Diversificar cultivos y razas animales para fortalecer la dieta
          div(titulo="Fomentar el bienestar de los productores").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejorar la calidad de vida en el campo.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promover la equidad, la inclusión, el trabajo digno y la participación comunitaria.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalecer la economía local y la soberanía alimentaria.
          div(titulo="Promover la resiliencia frente al cambio climático").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Adaptarse a fenómenos extremos como sequías o lluvias intensas.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Diversificar la producción para reducir riesgos económicos y ecológicos.
          div(titulo="Respetar la cultura y los saberes tradicionales").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Integrar prácticas ancestrales a la producción moderna.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Valorar el conocimiento local, campesino e indígena.
    
    p Las prácticas agropecuarias sostenibles tienen una visión integral del desarrollo rural: buscan proteger la naturaleza, mejorar las condiciones de vida del productor, garantizar el acceso a alimentos de calidad y asegurar que el campo siga siendo viable para las generaciones futuras.
    
    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 Clasificación de las prácticas agropecuarias sostenibles
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/25.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-5.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Las prácticas agropecuarias sostenibles pueden organizarse de distintas maneras, dependiendo del enfoque utilizado: ambiental, social, económico o técnico. No obstante, una forma práctica y pedagógica de clasificarlas es según el tipo de recurso natural o función ecosistémica que buscan conservar o mejorar.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Prácticas de conservación del suelo
    
    p.mb-5 El suelo es un recurso vital para la producción de alimentos y un componente clave de los ecosistemas terrestres. Se forma lentamente a lo largo de millones de años mediante procesos naturales como la descomposición de rocas, la acción de microorganismos, el clima y el paso del tiempo (Instituto Geográfico Agustín Codazzi, 2008). Dado que su regeneración es extremadamente lenta, su pérdida por erosión, compactación o degradación química representa una amenaza seria para la seguridad alimentaria y la sostenibilidad agrícola.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/26.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-25.tarjeta.p-4.mb-3(data-aos="fade-left")
          h5 ¿Qué buscan las prácticas de conservación del suelo?
          p Estas prácticas tienen como finalidad:
          div
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evitar la pérdida de suelo fértil por erosión hídrica o eólica.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservar y mejorar su estructura, aireación, humedad y fertilidad.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mantener la actividad biológica del suelo, favoreciendo los microorganismos y la materia orgánica
    
    p.mb-5 Los ejemplos de prácticas sostenibles para conservar el suelo son:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/27.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Rotación de cultivos
              p Alternar diferentes tipos de cultivos en una misma parcela para evitar el agotamiento de nutrientes y romper ciclos de plagas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Asociación de cultivos
              p Sembrar varias especies en el mismo terreno, lo que mejora el uso del espacio y protege el suelo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Labranza mínima o siembra directa
              p Evitar el arado profundo para preservar la estructura del suelo y reducir su compactación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/30.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cobertura vegetal (cultivos de cobertura y abonos verdes)
              p Sembrar plantas que cubren el suelo cuando no hay cultivo principal, protegiéndolo de la erosión y enriqueciéndolo orgánicamente.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/31.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Terrazas en laderas y zanjas de escorrentía
              p Modificar el relieve del terreno para frenar la erosión en zonas inclinadas y conservar el agua.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/32.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso de abonos orgánicos o compost
              p Reemplazar fertilizantes sintéticos por materiales orgánicos que mejoran la fertilidad y activan la vida del suelo.
    
    p.mb-5 La conservación del suelo es una prioridad estratégica en la agricultura sostenible. Su degradación afecta directamente la productividad, la calidad de los alimentos y el equilibrio ecológico. Adoptar prácticas que lo protejan es un paso esencial para garantizar sistemas productivos duraderos y responsables con el ambiente.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Prácticas de manejo eficiente del agua
    
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/33.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El agua es uno de los recursos naturales más valiosos y limitados del planeta. Aunque abunda en la Tierra, solo una pequeña fracción es dulce y accesible, y esta se encuentra distribuida de forma desigual. Por eso, su gestión sostenible es esencial para garantizar la seguridad alimentaria, la sostenibilidad ambiental y la continuidad de la producción agropecuaria. En este contexto, el manejo eficiente del agua es una de las principales prioridades dentro de las prácticas agropecuarias sostenibles.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Por qué es importante el uso eficiente del agua?

    p.mb-5.mt-5 Las prácticas agropecuarias requieren grandes cantidades de agua, tanto para el riego de cultivos como para el consumo animal y el procesamiento de productos. Implementar estrategias que reduzcan el desperdicio y protejan las fuentes hídricas permite:
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/34.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Aumentar la eficiencia del riego y del consumo.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evitar la sobreexplotación de acuíferos y nacimientos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Prevenir la contaminación de ríos, quebradas y lagos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Adaptarse mejor a la variabilidad climática (sequías prolongadas, lluvias extremas).

    p.mb-5 Las principales prácticas de manejo eficiente del agua son: 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/35.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Riego tecnificado (goteo o microaspersión)").ms-5
            p.mb-0 Aplica el agua directamente en la zona radicular. 
            p.mb-0 Reduce la evaporación y las pérdidas por escurrimiento. 
            p.mb-0 Puede ahorrar hasta un 60 % más de agua frente a métodos tradicionales.


          div(titulo="Captación y almacenamiento de agua lluvia").ms-5
            p.mb-0 Recolección de agua durante la temporada de lluvias en tanques o reservorios para usarla en época seca. 
            p.mb-0 Favorece la autosuficiencia hídrica de las fincas.

          div(titulo="Programación del riego según necesidades del cultivo").ms-5
            p.mb-0 Uso de sensores de humedad y calendarios agronómicos para determinar cuándo y cuánto regar. 
            p.mb-0 Evita el exceso de riego y mejora el rendimiento.
 
          div(titulo="Manejo del suelo para retención de humedad").ms-5
            p.mb-0 Uso de mulch (acolchado), labranza mínima y cultivos de cobertura para reducir la evaporación y mejorar la infiltración.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/36.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Reutilización de aguas residuales tratadas").ms-5
            p.mb-0 Empleo de aguas grises adecuadamente tratadas para riego o uso secundario. 
            p.mb-0 Requiere control sanitario estricto para evitar contaminación.


          div(titulo="Protección de fuentes de agua").ms-5
            p.mb-0 Reforestación de riberas, cercado de nacimientos y control de contaminantes.  
            p.mb-0 Evita el ingreso de ganado y residuos a las fuentes hídricas.

          div(titulo="Manejo del agua en sistemas ganaderos").ms-5
            p.mb-0 Instalación de bebederos eficientes, uso de agua lluvia para animales y tratamiento adecuado de aguas residuales.
 
          div(titulo="Construcción de zanjas de infiltración y terrazas").ms-5
            p.mb-0 Permiten que el agua se infiltre en zonas de pendiente, reducen la erosión y recargan acuíferos subterráneos.
    
    p.mb-5 El manejo eficiente del agua no solo optimiza el uso del recurso, sino que también fortalece la resiliencia del sistema productivo frente al cambio climático, mejora el rendimiento de los cultivos, reduce costos y protege los ecosistemas hídricos locales. Estas prácticas son fundamentales en cualquier enfoque de producción agropecuaria sostenible.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Prácticas para conservar la biodiversidad

    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/37.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-15.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Antes de implementar cualquier estrategia de sostenibilidad, es fundamental comprender qué se entiende por biodiversidad y por qué es esencial conservarla en los sistemas agropecuarios.
          
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué es la biodiversidad?

    p.mb-5.mt-5 La biodiversidad abarca toda la variedad de formas de vida presentes en la naturaleza, desde los genes hasta los ecosistemas completos. Su conservación es clave para mantener el equilibrio ecológico y garantizar la sostenibilidad de la producción.

    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/38.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Según el Convenio sobre la Diversidad Biológica (1992), la biodiversidad es:
        .bloque-texto-b.color-primario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h2.mb-0 La variabilidad de organismos vivos de cualquier fuente, incluidos, entre otros, los ecosistemas terrestres, marinos y otros ecosistemas acuáticos, y los complejos ecológicos de los que forman parte; comprende la diversidad dentro de cada especie, entre especies y de los ecosistemas.
            i.fas.fa-quote-right
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Cuáles son los componentes de la biodiversidad?

    p.mb-5.mt-5 La biodiversidad se manifiesta en distintos niveles, cada uno fundamental para el funcionamiento de los ecosistemas y la sostenibilidad agropecuaria.

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/40.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Diversidad genética
            p Variabilidad de genes dentro de una misma especie.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/41.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Diversidad de especies
            p Número y variedad de especies (animales, plantas, hongos, microorganismos).
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/42.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Diversidad de ecosistemas
            p Conjunto de elementos vivos y no vivos que interactúan en un mismo entorno natural.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema3/39.png', alt='Texto que describa la imagen')

    h3.bg-color-21.d-flex.d-lg-inline.p-3.text-white.tarjeta ¿Cómo contribuyen las prácticas agropecuarias sostenibles a conservar la biodiversidad?

    p.mb-5.mt-5 Las prácticas sostenibles aplicadas en el campo pueden ayudar a mantener o incluso mejorar la biodiversidad del entorno. A continuación, se presentan las más relevantes.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/43.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Agroforestería
              p Combina árboles con cultivos o pastos, generando hábitats diversos y beneficios ecológicos como sombra, protección del suelo y atracción de fauna.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/44.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Corredores biológicos
              p Conectan fragmentos de hábitats para permitir el movimiento de especies silvestres. Previenen el aislamiento poblacional.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/45.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Diversificación de cultivos y rotación
              p Promueve diferentes hábitats, reduce plagas y mejora la salud del suelo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/46.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso de insumos orgánicos y manejo ecológico
              p Disminuye el uso de químicos, protege organismos benéficos y aumenta la biodiversidad microbiana.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/47.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Mantenimiento de áreas naturales
              p Conservar zonas con vegetación nativa protege especies silvestres y mantiene servicios ecosistémicos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/48.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Conservación del suelo
              p Prácticas como la labranza mínima y el mantillo mejoran la vida del suelo y la diversidad de organismos que lo habitan.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/49.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Apicultura
              p Las abejas polinizan cultivos y plantas silvestres, favoreciendo la biodiversidad vegetal. Es una práctica rentable y de bajo impacto.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/50.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso de especies nativas
              p Favorece el equilibrio ecológico al evitar el reemplazo de especies locales por exóticas o invasoras.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Por qué destacar la apicultura dentro de estas prácticas?

    p.mb-5.mt-5 La apicultura es una de las actividades agropecuarias más sostenibles, y su importancia va más allá de la producción de miel.

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/51.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Las abejas polinizan una gran variedad de cultivos y plantas silvestres.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Contribuyen al equilibrio de los ecosistemas sin generar contaminación.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Representan una fuente de ingreso para pequeños productores.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ayudan a reducir el uso de pesticidas mediante el control biológico.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promueven la educación ambiental y la protección de polinizadores.
    
    p Conservar la biodiversidad no es solo una responsabilidad ecológica, sino también una estrategia inteligente para garantizar una producción agropecuaria más estable, resiliente y saludable.
    p.mb-5 Las prácticas que la favorecen son clave en los sistemas sostenibles y deben ser adoptadas de forma integral y adaptada al contexto local.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Prácticas ganaderas sostenibles
    
    p.mb-5 Las prácticas ganaderas sostenibles buscan equilibrar tres aspectos fundamentales:

    .row.justify-content-center
      .col-lg-3.d-flex
        .bg-color-28.mb-3.tarjeta.flex-fill.d-flex.align-items-center.justify-content-center
          .px-4.py-4.text-center.text-white
            p.mb-0 La producción animal eficiente.
      .col-lg-3.d-flex
        .bg-color-28.mb-3.tarjeta.flex-fill.d-flex.align-items-center.justify-content-center
          .px-4.py-4.text-center.text-white
            p.mb-0 El bienestar económico y ético del productor.
      .col-lg-3.d-flex
        .bg-color-28.mb-3.tarjeta.flex-fill.d-flex.align-items-center.justify-content-center
          .px-4.py-4.text-center.text-white
            p.mb-0 La producción animal eficiente.
    
    p.mb-5 A continuación, se describen las principales prácticas aplicadas en sistemas ganaderos sostenibles:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/52.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Manejo racional de pastos (pastoreo rotativo)").ms-5
            p Consiste en dividir los potreros en sectores o parcelas y trasladar el ganado de manera planificada. Esto permite que los pastos se recuperen antes de ser utilizados nuevamente.  
            h5 Beneficios: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se evita el sobrepastoreo. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Regeneración natural de los pastos. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejora la fertilidad del suelo y reduce la erosión.
          div(titulo="Silvopastoreo").ms-5
            p Es un sistema agropecuario que integra árboles, pastos y animales de manera planificada. 
            h5 Beneficios clave del silvopastoreo: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Salud del suelo: mejora la fertilidad y reduce la erosión; algunas especies fijan nitrógeno.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Bienestar animal: brinda sombra y protección, reduce el estrés térmico y mejora la productividad. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Diversificación productiva: produce carne, leche, miel, leña, madera, frutas, etc., diversificando ingresos. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Biodiversidad: aumenta la presencia de fauna útil, que contribuye al control de plagas.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservación del agua: favorece la infiltración del agua y protege las fuentes hídricas.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Captura de carbono: los árboles almacenan CO₂, ayudando a mitigar el cambio climático. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducción de costos: menor uso de suplementos, fertilizantes y medicamentos.
            h5 Ejemplos de especies empleadas: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Árboles forrajeros: Leucaena leucocephala, Gliricidia sepium, Prosopis spp.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Maderables y frutales: Cedro, Caoba, Guayaba, Nance. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Pastos nutritivos: Brachiaria, Panicum, Estrella africana. 

          div(titulo="Manejo adecuado de estiércoles y residuos").ms-5
            p Consiste en el aprovechamiento de desechos animales como fertilizantes orgánicos.
            h3 Beneficios:  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reduce la contaminación del suelo y del agua.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Genera energía renovable mediante la producción de biogás. 
 
          div(titulo="Alimentación balanceada y eficiente").ms-5
            p Se basa en el uso de forrajes locales, suplementos naturales y residuos agrícolas, en lugar de concentrados comerciales.
            h5 Ventajas: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Menor huella de carbono.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducción de costos de producción.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejora la eficiencia digestiva.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Disminuye la emisión de gases como el metano por cada kg de alimento.
          div(titulo="Bienestar animal").ms-5
            p Implica garantizar condiciones dignas y saludables para los animales, incluyendo: • Alimentación y agua constante. 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Espacio suficiente para movilizarse.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Protección frente al clima. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Atención veterinaria adecuada.     
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Prevención del maltrato y prácticas dolorosas (como mutilaciones innecesarias). 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evitar mejoramientos genéticos que comprometan la salud. Además, se promueve el uso de razas criollas o autóctonas, adaptadas al entorno local y más resilientes. 
            p <b>Nota</b>: antes de iniciar una producción sostenible, es fundamental formarse y certificarse en Buenas Prácticas Ganaderas (BPG) según la norma nacional correspondiente.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/53.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Uso racional del agua").ms-5
            p Se promueve:
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Instalación de bebederos eficientes. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Cosecha de agua lluvia. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Limpieza eficiente de establos.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evitar que el ganado acceda libremente a fuentes hídricas para prevenir su deterioro.
          div(titulo="Integración agricultura - ganadería").ms-5
            p Este enfoque aprovecha los residuos de cada sistema para alimentar al otro: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Residuos agrícolas → alimento animal. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Estiércol animal → fertilización de cultivos. 
              p <b>Resultado</b>: mayor eficiencia y menor dependencia de insumos externos.
            
          div(titulo="Reducción del uso de antibióticos y químicos").ms-5
            p La ganadería sostenible promueve la prevención sobre el tratamiento, reduciendo el uso de medicamentos. 
            h3 Razones clave:  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Salud pública: evita la aparición de bacterias resistentes a antibióticos.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Medio ambiente: reduce la contaminación de suelos, agua y aire por residuos químicos.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Bienestar animal: se prioriza el manejo adecuado, higiene, nutrición y reducción del estrés, disminuyendo la necesidad de medicamentos. 
 
          div(titulo="Ganadería regenerativa y ecológica").ms-5
            p Ambos enfoques comparten principios de sostenibilidad, pero tienen objetivos y regulaciones distintas.  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ganadería regenerativa:</b> su objetivo es regenerar suelos y ecosistemas. Su enfoque es holístico y va más allá de la sostenibilidad. Sus prácticas incluyen pastoreo racional, aumento de biodiversidad, captura de carbono, sin agroquímicos. En cuanto al bienestar animal, busca su integración natural al ecosistema.    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ganadería ecológica (Orgánica):</b> su objetivo es producir alimentos sanos sin dañar el ambiente. Está regulada por normas internacionales (UE, USDA). Sus prácticas se basan en el no uso de químicos sintéticos ni transgénicos, alimentación orgánica y control sanitario natural. En el bienestar animal garantiza condiciones éticas: acceso a pastos, sin confinamiento y cuidado integral.
          div(titulo="Educación y capacitación continua").ms-5
            p Consiste en capacitar constantemente a los campesinos en temas como: 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Buenas Prácticas Ganaderas (BPG).    
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Crianza respetuosa. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Gestión de riesgos. Esto representa un valor agregado fundamental para: 
            ul.lista-ul--color.mb-0.ms-5
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejorar la sostenibilidad. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Elevar la productividad.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mitigar los efectos del cambio climático. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Cumplir con estándares valorados en mercados especializados.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Manejo ecológico de plagas y enfermedades y BPA
    
    p.mb-5 El manejo ecológico de plagas y enfermedades es un enfoque preventivo, sostenible y respetuoso con el medio ambiente que busca controlar plagas, enfermedades y malezas que afectan los cultivos o animales sin recurrir o recurriendo mínimamente a agroquímicos sintéticos. Este enfoque prioriza prácticas naturales, culturales y biológicas, procurando:

    .row.mb-3.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/54.png", data-aos="zoom-in")
      .col-lg-6
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-9.h-100.p-4.tarjeta.text-center(data-aos="fade-left")
              p.mb-0.text-bold Prevenir la aparición de plagas y enfermedades.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-9.h-100.p-4.tarjeta.text-center(data-aos="fade-left")
              p.mb-0.text-bold Mantener el equilibrio ecológico.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-9.h-100.p-4.tarjeta.text-center(data-aos="fade-left")
              p.mb-0.text-bold Reducir el daño económico.
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-9.h-100.p-4.tarjeta.text-center(data-aos="fade-left")
              p.mb-0.text-bold Proteger la salud humana, animal y ambiental.
    
    p.mb-5 Los principales componentes del manejo ecológico son: 

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/55.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Prevención y monitoreo
              p Uso de semillas sanas y resistentes, rotación y diversificación de cultivos, monitoreo constante con trampas e inspecciones periódicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/56.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Control cultural
              p Siembras en fechas adecuadas, labores oportunas (deshierbe, poda, riego), eliminación de residuos infectados, y manejo del suelo para fortalecer plantas y animales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/57.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Control biológico
              p Empleo de enemigos naturales como insectos benéficos, hongos o bacterias. Ejemplos: mariquitas (pulgones), Trichogramma (avispa parasitoide), Bacillus thuringiensis (Bt).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/58.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Control físico o mecánico
              p Trampas de luz, trampas con feromonas, mallas, barreras físicas, o remoción manual de plagas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/59.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso limitado de insumos naturales
              p Extractos vegetales (ajo, neem, ruda), jabones potásicos, aceites vegetales, y otros productos aprobados por normativas ecológicas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/60.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Capacitación y conocimiento del agroecosistema
              p Comprender las relaciones entre suelo, clima, plagas, enemigos naturales, y tomar decisiones basadas en el análisis del entorno y no solo en síntomas visibles.
    
    .bg-color-5.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.mb-3.mb-lg-0
            img(src="@/assets/curso/tema3/61.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 <b>Importante</b>. El objetivo no es eliminar totalmente las plagas, sino mantenerlas en niveles que no causen daños significativos, sin alterar el equilibrio del ecosistema.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Buenas Prácticas Agrícolas (BPA)

    p.mb-5.mt-5 Las BPA son un conjunto de principios, normas y recomendaciones técnicas aplicadas durante la producción, cosecha y poscosecha de productos agrícolas. Su fin es garantizar:

    .row.mb-5.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/61.png", data-aos="zoom-in")
      .col-lg-6
        .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La inocuidad alimentaria (alimentos seguros y sin contaminación).
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La protección ambiental.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 El bienestar de los trabajadores.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La sostenibilidad económica del sistema productivo
    
    .row.justify-content-center
      .col-lg-10
        p.mb-5 Los principios clave de las BPA son:

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/62.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Inocuidad alimentaria.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Uso responsable de agroquímicos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Manejo sostenible del suelo y del agua.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Protección del entorno natural.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Bienestar y seguridad de los trabajadores.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Trazabilidad</b>: Registro y control de cada etapa del proceso productivo.
    
    .row.justify-content-center
      .col-lg-10
        p.mb-5 Se recomienda revisar los videos del material complementario para fortalecer estos aprendizajes.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Diversificación productiva y biodiversidad

    p.mb-5.mt-5 La diversificación productiva fortalece la resiliencia del agroecosistema y reduce los riesgos de plagas. Se basa en:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/63.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Policultivos
            p Cultivar varias especies en un mismo terreno para mejorar la diversidad y proteger los cultivos.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/64.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Agroforestería
            p Integrar árboles con cultivos agrícolas, lo cual mejora la estructura del suelo, regula microclimas y aporta otros productos (frutas, leña, sombra, etc.).
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/65.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Bancos de semillas nativas o criollas
            p Preservar variedades locales adaptadas al clima y enfermedades del territorio.

      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema3/66.png', alt='Texto que describa la imagen')

    .row.mb-5.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/67.png", data-aos="zoom-in")
      .col-lg-7
        p El manejo ecológico de plagas y enfermedades es una estrategia integral basada en la prevención, el conocimiento del ecosistema y el uso de métodos naturales, con el propósito de:
        .bg-color-30.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evitar o reducir el uso de agroquímicos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Favorecer la biodiversidad.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promover sistemas productivos más saludables, sostenibles y seguros.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Prácticas de economía circular y reciclaje
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/68.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 En la búsqueda de sistemas productivos más sostenibles, la economía circular y el reciclaje emergen como prácticas clave para reducir residuos, aprovechar mejor los recursos disponibles y optimizar la eficiencia en el sector agropecuario. Aunque están estrechamente relacionadas, no significan lo mismo, como se explicará a continuación.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué es la economía circular?

    .row.mb-5.mt-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/69.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") Antes de revisar las aplicaciones concretas, es fundamental comprender qué es la economía circular. Se trata de un modelo económico que propone minimizar el desperdicio y maximizar el aprovechamiento de los recursos. A diferencia de la economía lineal tradicional (extraer, producir, consumir, desechar), la economía circular plantea:
        .bg-color-30.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Diseñar productos duraderos, fáciles de reparar y reciclar.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reutilizar y reparar antes de desechar.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reciclar materiales para que vuelvan al ciclo productivo.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducir el uso de materias primas y energía.
        p El objetivo es construir un sistema más sostenible, donde los recursos se mantengan en uso el mayor tiempo posible, generando eficiencia, ahorro y menor impacto ambiental.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Aplicaciones de economía circular en el sector agropecuario

    p.mb-5.mt-5 Este modelo económico se traduce en una serie de acciones concretas dentro del contexto agropecuario, que permiten transformar residuos en recursos valiosos. A continuación, se presentan algunas de las prácticas más relevantes:

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/70.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Reutilización de residuos orgánicos").ms-5
            p El estiércol se usa como fertilizante natural y los restos de cosechas se compostan para enriquecer el suelo.
          div(titulo="Biodigestores").ms-5
            p Transforman residuos orgánicos en biogás (energía renovable) y biofertilizantes.
          div(titulo="Rotación y asociación de cultivos").ms-5
            p Evita el desgaste del suelo, mejora la biodiversidad y reduce el uso de agroquímicos.
          div(titulo="Agua reciclada").ms-5
            p Sistemas de riego que reutilizan agua de lluvia o agua residual tratada de procesos agroindustriales.
          div(titulo="Alimentación animal circular").ms-5
            p Animales alimentados con subproductos agrícolas (como cáscaras y restos de frutas).
          div(titulo="Producción y consumo local").ms-5
            p Disminuye la huella de carbono al reducir distancias de transporte.
          div(titulo="Energías renovables").ms-5
            p Uso de tecnologías limpias como paneles solares y biodigestores en el entorno rural.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Beneficios de la economía circular para el productor agropecuario

    p.mb-5.mt-5 Además de proteger el medio ambiente, estas prácticas representan ventajas económicas y sociales para quienes las implementan. Entre los principales beneficios se destacan:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/71.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ahorro en el uso de fertilizantes, energía y agua.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Menor dependencia de insumos externos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Producción con valor agregado y mayor aceptación en mercados responsables.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejor imagen frente a consumidores que valoran la sostenibilidad.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué es el reciclaje?

    .row.mb-5.mt-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/72.svg", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        p(data-aos="fade-left") Dentro del enfoque de economía circular, el reciclaje es una de las estrategias más conocidas y aplicadas. Consiste en recolectar materiales usados como plástico, papel, vidrio o metal, para transformarlos en nuevos productos o materias primas que puedan reincorporarse al proceso productivo.
        .bg-color-23.tarjeta.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El objetivo principal del reciclaje es evitar que los residuos terminen contaminando el ambiente o en vertederos. Un ejemplo práctico en el sector agropecuario es la elaboración de abonos orgánicos a partir de estiércoles y desechos vegetales mediante técnicas como el compostaje. Para comprender mejor cómo se relacionan, es útil comparar estos dos conceptos en una tabla:
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Comparación entre economía circular y reciclaje 
        
        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-11 Economía circular
                th.bg-color-11 Reciclaje
            tbody
              tr.bg-color-sintesis
                td Modelo económico integral que abarca todo el ciclo de vida del producto.
                td Estrategia puntual de manejo de residuos.
              tr
                td Incluye rediseño, reutilización, reducción y reciclaje.
                td Se limita a la transformación de materiales ya descartados.
              tr.bg-color-sintesis
                td Enfocada en prevenir la generación de residuos desde el inicio.
                td Actúa cuando el residuo ya ha sido generado.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Enfoque social y comunitario
    
    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/73.svg", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 La sostenibilidad agropecuaria no solo se basa en el cuidado ambiental o la eficiencia productiva. También implica un compromiso social, donde el bienestar de las personas, la equidad y el fortalecimiento del tejido comunitario son elementos fundamentales.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué significa tener un enfoque social y comunitario?

    p.mb-5.mt-5 Cuando se afirma que una práctica agropecuaria es sostenible desde el punto de vista social y comunitario, se está reconociendo que las personas y sus comunidades deben estar en el centro de las decisiones y beneficios del sistema productivo. Este enfoque busca integrar justicia social, participación activa y respeto por la diversidad cultural. A continuación, se describen los elementos clave que definen este enfoque:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/74.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Bienestar de las personas
              p Se prioriza la calidad de vida de los agricultores, sus familias y comunidades rurales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/75.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Equidad social
              p Se promueve el acceso justo a recursos y oportunidades para pequeños productores, mujeres, jóvenes, comunidades indígenas y afrocolombianas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/76.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Participación colectiva
              p Las decisiones se toman de forma participativa, reconociendo y valorando el conocimiento local y ancestral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/77.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Trabajo digno
              p Se generan empleos rurales con condiciones laborales justas, estables y seguras.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema3/78.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Identidad y cultura rural
              p Se protege y fortalece la vida campesina, las tradiciones, valores y saberes del campo.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Por qué es importante este enfoque?

    p.mb-5.mt-5 Incluir un enfoque social y comunitario en la producción agropecuaria es indispensable para lograr una sostenibilidad real y duradera. Las siguientes razones explican su relevancia:

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/79.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-11.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Porque la sostenibilidad no puede limitarse al medio ambiente; también debe ser económica y social.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Porque un campo justo, equitativo y participativo construye comunidades más resilientes, fuertes y autónomas.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Porque muchos problemas ambientales están directamente ligados a desigualdades sociales, como la pobreza, la migración forzada y el acceso desigual a la tierra, el agua o la educación.
        p.mb-0 Un enfoque social y comunitario en las prácticas agropecuarias sostenibles garantiza que la producción de alimentos:
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-5.tarjeta.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0
                img(src="@/assets/curso/tema3/80.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Sea buena para el planeta,
                p.mb-0 Pero también justa e inclusiva para las personas,
                p.mb-0 Y que fortalezca el bienestar, la equidad y la cultura en las comunidades rurales.
    
    separador
    
    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.6	Alternativas de producción sustentable para el sector rural

    .row.mb-5.mt-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/81.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") En muchas regiones rurales, las actividades agropecuarias tradicionales no son suficientes para asegurar ingresos estables ni condiciones de vida dignas. Por ello, surgen diversas alternativas de producción sustentable, que permiten generar recursos económicos de forma ambientalmente responsable, económicamente viable y socialmente justa.
        .bg-color-4.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Estas alternativas son especialmente útiles en contextos como:
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Zonas donde la capacidad productiva del suelo es limitada.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Épocas del año con bajos ingresos por falta de cosechas.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Regiones afectadas por el cambio climático que requieren formas nuevas de producción.
        p Además, muchas de estas prácticas están estrechamente ligadas a la cohesión social y el rescate de saberes ancestrales, aportando valor no solo económico, sino también cultural y comunitario.

    .row.mb-5.mt-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/82.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") Los criterios de sostenibilidad que deben cumplir estas alternativas son: 
        .bg-color-5.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservación de recursos naturales (agua, suelo, biodiversidad).
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducción de la contaminación y el desperdicio.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalecimiento de las comunidades rurales.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Mejora de la calidad de vida de las familias campesinas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Principales alternativas sustentables
    
    p.mb-5 A continuación, se describen algunas de las alternativas más representativas. Es importante destacar que existen muchas otras prácticas que, aunque poco valoradas actualmente, pueden rescatarse y adaptarse para fortalecer la sostenibilidad rural.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/83.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Biocomercio").ms-5
            p Conjunto de actividades de recolección, producción, transformación y comercialización de productos y servicios derivados de la biodiversidad nativa. Principios: conserva los ecosistemas, respeta los conocimientos tradicionales, genera beneficios económicos justos. Ejemplos: aceite de aguaje, jabones con plantas medicinales, cacao nativo.


          div(titulo="Especies promisorias (vegetales y pecuarias)").ms-5
            p Recursos biológicos con alto potencial productivo, medicinal, ecológico o nutricional aún poco aprovechados. Ejemplos vegetales: moringa, quinua. Ejemplos pecuarias: cuy, peces nativos amazónicos.

          div(titulo="Rescate de técnicas tradicionales").ms-5
            p Recuperación de oficios y saberes que permiten dar valor agregado a materias primas y generar ingresos sustentables. Ejemplos: fique, cestería, sombreros artesanales.
    
    .row
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/84.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Transformación artesanal de productos agropecuarios").ms-5
            p Los campesinos transforman productos primarios usando saberes tradicionales, diferenciándolos de los industriales y aumentando su valor. Ejemplos: quesos campesinos, arepas, almojábanas, amasijos de maíz, derivados de la leche. Incluye ferias de gastronomía y artesanía apoyadas por entidades públicas.


          div(titulo="Pago por servicios ambientales (PSA)").ms-5
            p Mecanismo económico voluntario para compensar a quienes conservan, restauran o protegen ecosistemas que generan beneficios colectivos (captura de carbono, regulación hídrica, conservación de biodiversidad). Ejemplo: pago a campesinos que conservan un bosque como sumidero de carbono.

          div(titulo="Artesanía, cestería y cerámica tradicional").ms-5
            p Elaboración de productos con técnicas tradicionales que sustituyen materiales contaminantes. Son biodegradables, reutilizables y culturalmente valiosos.
 
          div(titulo="Agroturismo").ms-5
            p.mb-0 Actividad que combina agricultura y turismo, diversificando ingresos y conservando tradiciones bajo un enfoque de educación ambiental y sostenibilidad. Beneficios: genera empleo, fortalece la identidad campesina, promueve la conservación, educa sobre alimentos, impulsa el desarrollo local. Ejemplos en Colombia: Huila, zona cafetera, Sierra Nevada de Santa Marta, Cundinamarca.
    
    separador
    
    #t_3_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.7 Regulaciones frente al uso de semillas y material genético
    
    .row.mb-5.align-items-center
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/85.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-6.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 En el contexto de la sostenibilidad rural, el tema de las semillas y el material genético cobra gran relevancia, ya que se relaciona directamente con la soberanía alimentaria, el derecho al trabajo, y la vida digna de las comunidades campesinas, indígenas y afrocolombianas.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Problemática actual
    
    p.mb-5 Desde el siglo pasado, con el auge del mejoramiento genético industrial impulsado por empresas extranjeras, se ha presentado una serie de problemáticas que afectan profundamente a los pequeños productores:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/86.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Pérdida de soberanía sobre las semillas
            p Las semillas, que tradicionalmente se seleccionaban, guardaban e intercambiaban libremente, pasaron a ser controladas por corporaciones a través de patentes y tecnologías protegidas.
      .col-sm-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/87.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Dependencia de paquetes tecnológicos
            p Para mantener sus cultivos, los campesinos comenzaron a depender de semillas híbridas o transgénicas, junto con agroquímicos costosos (fertilizantes, pesticidas, herbicidas).
      .col-sm-6.col-lg-4.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema3/88.svg', alt='Texto que describa la imagen')
          div.text-center
            H5 Desvinculación del equilibrio natural
            p Lo que antes ofrecía la naturaleza como la fertilidad del suelo, los abonos orgánicos y las semillas propias hoy ha sido reemplazado por insumos industriales que generan dependencia económica.
    
    p.mb-5 En consecuencia, muchos campesinos no pueden cultivar si no cuentan con dinero suficiente para adquirir insumos externos, lo que dificulta su autonomía y sostenibilidad.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ausencia de una reglamentación específica
    
    p.mb-5 Actualmente en Colombia no existe una reglamentación clara que proteja el derecho de los campesinos sobre las semillas, especialmente las nativas y criollas. Esto genera tensiones en temas fundamentales como:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/89.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Seguridad y soberanía alimentaria
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Derecho al trabajo rural
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservación de la biodiversidad agrícola
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Acceso equitativo a los recursos genéticos

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Propuesta institucional: hacia una regulación integral

    .row.mb-4.justify-content-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/90.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Ante esta situación, se han iniciado esfuerzos para construir una normativa que reconozca y proteja las semillas tradicionales y el papel de las comunidades que las preservan. En este sentido, el Instituto Colombiano Agropecuario (ICA) lidera un proyecto macro denominado: Plan de acción para la conservación, multiplicación, uso e intercambio de semillas nativas y criollas.
        .bg-color-15.tarjeta.p-4.mb-3(data-aos="fade-left")
          p Este plan incluido en los materiales complementarios tiene como objetivos principales:
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promover la producción y uso autónomo de semillas nativas y criollas.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Establecer criterios de calidad y sanidad vegetal sin excluir a los pequeños productores.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reconocer el rol cultural y técnico de las comunidades campesinas, indígenas y afrocolombianas.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalecer el intercambio comunitario de semillas como práctica ancestral.
    
    .row.justify-content-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/91.png", data-aos="zoom-in")
      .col-lg-8
        p La regulación del uso de semillas y material genético no puede limitarse a criterios técnicos o comerciales. Es urgente desarrollar un marco legal que:
        .bg-color-4.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reconozca los derechos colectivos sobre las semillas.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Proteja la biodiversidad agrícola.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalezca la soberanía alimentaria.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Y asegure que los campesinos puedan seguir cultivando con autonomía, dignidad y justicia.
    
    separador
    
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.8 La biopiratería y sus riesgos para las comunidades campesinas y la soberanía alimentaria
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/92.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 En el contexto de la biodiversidad y los conocimientos tradicionales, la biopiratería representa una amenaza directa para las comunidades rurales, indígenas y afrodescendientes, así como para su autonomía y la soberanía alimentaria.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Qué es la biopiratería?
    
    .row.justify-content-center.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema3/93.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p La biopiratería se refiere al uso, aprovechamiento o comercialización de recursos biológicos (como plantas, semillas, animales o microorganismos) y de conocimientos tradicionales asociados (como saberes sobre medicina natural, cultivos o usos de especies nativas) sin el consentimiento ni el beneficio para las comunidades que los han conservado por generaciones. Esta práctica ocurre cuando empresas o investigadores:
        .bg-color-4.tarjeta.p-4.mb-3(data-aos="fade-left")
          div.mb-3
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Se apropian de recursos y conocimientos locales.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Los registran como propios mediante patentes u otros mecanismos.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Los explotan comercialmente sin reconocer ni compensar a las comunidades.
          p.mb-0 En esencia, la biopiratería constituye un hurto del patrimonio natural y cultural, especialmente grave en un país como Colombia, cuya legislación en este ámbito es aún débil, permisiva o inexistente.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Riesgos de la biopiratería para las comunidades y la soberanía alimentaria
    
    p.mb-5 Los impactos de la biopiratería van más allá del ámbito legal o económico; afectan directamente la capacidad de las comunidades rurales para vivir de manera autónoma, cuidar su territorio y preservar sus saberes. A continuación, se presentan algunos de los riesgos más importantes:

    TabsC.color-acento-contenido.mb-5
      .p-5(titulo="Pérdida del control sobre semillas tradicionales")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Pérdida del control sobre semillas tradicionales
            p Las comunidades ya no pueden guardar, intercambiar o sembrar libremente sus propias semillas si estas han sido registradas por terceros.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/94.png', alt='Texto que describa la imagen')
      .p-5(titulo="Exclusión de beneficios económicos")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Exclusión de beneficios económicos
            p Aunque los productos derivados se comercialicen a gran escala, las comunidades no reciben ninguna compensación.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/95.png', alt='Texto que describa la imagen')
      .p-5(titulo="Desconocimiento del conocimiento ancestral")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Desconocimiento del conocimiento ancestral
            p Se ignora o minimiza el papel de los pueblos originarios en la conservación de la biodiversidad.  
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/96.png', alt='Texto que describa la imagen')
      .p-5(titulo="Amenaza a la soberanía alimentaria")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Amenaza a la soberanía alimentaria
            p Al depender de insumos externos, las comunidades pierden su capacidad de producir alimentos de forma autónoma y sostenible.
          .col-lg-5
            figure
              img(src='@/assets/curso/tema3/97.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo se puede evitar la biopiratería?
    
    p.mb-5 Tanto a nivel institucional como comunitario, existen acciones concretas que pueden prevenir y contrarrestar esta práctica:

    .row.mb-5.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/98.png", data-aos="zoom-in")
      .col-lg-7
        .bg-color-15.tarjeta.p-5.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fortalecer leyes que protejan la biodiversidad y los conocimientos ancestrales.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reconocer y respaldar el uso libre de semillas nativas y criollas por parte de las comunidades.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Exigir el consentimiento previo, libre e informado antes del uso de cualquier recurso biológico o conocimiento tradicional. 
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Promover bancos comunitarios de semillas y apoyar la agricultura tradicional como forma de resistencia y preservación cultural.
    
    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/99.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        p(data-aos="fade-left") La biopiratería representa un grave riesgo para:
    
        .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto.mb-3.mb-lg-0
              img(src="@/assets/curso/tema3/100.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La biodiversidad
              p.mb-0 El conocimiento ancestral
              p.mb-0 Y la soberanía alimentaria y cultural de las comunidades rurales
        p Proteger estos recursos y saberes no solo es una cuestión de justicia, sino una condición fundamental para lograr una agricultura sostenible, equitativa y verdaderamente soberana.




</template>

<script>
export default {
  name: 'Tema3',
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
