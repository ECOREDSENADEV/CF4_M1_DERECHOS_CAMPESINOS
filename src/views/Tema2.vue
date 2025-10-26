<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Actividad agropecuaria en Colombia y su impacto ambiental
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 En Colombia, la actividad agropecuaria es una de las principales fuentes de sustento económico y empleo rural. No obstante, su crecimiento y modernización han generado múltiples efectos sobre el medio ambiente. Comprender estos impactos es fundamental para tomar decisiones más sostenibles en el uso del suelo, el agua y los recursos naturales.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 ¿Qué es el impacto ambiental?
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/2.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Antes de analizar los efectos específicos de la producción agropecuaria, es importante entender el concepto de impacto ambiental. Este término se refiere a cualquier alteración en el entorno natural generada por actividades humanas o fenómenos naturales. En otras palabras, se trata de los efectos positivos o negativos que nuestras acciones provocan en el agua, el aire, el suelo, la flora, la fauna y el clima.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto ¿Cómo puede manifestarse un impacto ambiental?
    
    p.mb-5 Los impactos pueden clasificarse según su efecto en el entorno. A continuación, se presenta una comparación entre los impactos negativos y positivos más comunes:

    .bg-full-width.bg-color-10.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center
          .col-lg-5.mb-3.mb-lg-0.order-lg-2
            figure
              img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
          .col-lg-6.mb-3.mb-lg-0.order-lg-1
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
              div(titulo="Negativo").ms-5
                p Efectos que deterioran los ecosistemas y afectan la calidad de vida.
                h5 Ejemplos: 
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Deforestación de bosques.
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Contaminación del agua, aire o suelo.
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Pérdida de biodiversidad.
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Cambio climático.
              div(titulo="Positivo").ms-5
                p Efectos que contribuyen a restaurar, proteger o mejorar el ambiente.
                h5 Ejemplos: 
                ul.lista-ul--color.mb-0
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Reforestación con especies nativas. 
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Restauración de ecosistemas degradados.
                  li.mb-3.d-flex
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Conservación de la biodiversidad.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto Ejemplos concretos de impacto ambiental

        p.mb-5 Para entender mejor cómo se manifiestan estos impactos, observa los siguientes ejemplos reales que pueden presentarse en zonas rurales o urbanas: 

        .row.justify-content-center.mb-3
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.tarjeta.p-4(data-aos="fade-left").mb-3
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Construcción de una represa
                  p.mb-0 Inundación de ecosistemas naturales.
            .bg-color-25.tarjeta.p-4(data-aos="fade-left").mb-3
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Uso excesivo de pesticidas
                  p.mb-0 Contaminación de ríos y afectación de fauna y flora.
            .bg-color-25.tarjeta.p-4(data-aos="fade-left").mb-3
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Expansión urbana sin planificación
                  p.mb-0 Destrucción de hábitats naturales.
        
        .row.justify-content-center
          .col-lg-10
            .bg-color-29.tarjeta.mb-5.bord
              .px-4.px-md-5.py-4
                p.mb-0 <b>Nota</b>. Un hábitat es el lugar natural donde vive un ser vivo. Este espacio le proporciona todo lo necesario para su supervivencia: alimento, agua, refugio y condiciones ambientales adecuadas (temperatura, luz, humedad, etc.).

        .titulo-con-imagen(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
            h3.titulo-con-imagen__texto ¿Qué es una Evaluación de Impacto Ambiental (EIA)?
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Toda intervención humana sobre el entorno debería prever sus posibles consecuencias. Para ello existe la Evaluación de Impacto Ambiental (EIA), un estudio previo que permite analizar los efectos de un proyecto antes de su ejecución. Este procedimiento es clave para tomar decisiones responsables que reduzcan, mitiguen o compensen los daños potenciales al medio ambiente.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Normatividad a cerca del medio ambiente y el impacto ambiental
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-4.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 La protección del medio ambiente no solo depende de buenas prácticas individuales o empresariales, sino también del cumplimiento de normas claras que orienten las acciones humanas hacia un desarrollo sostenible. En este contexto, existen tanto normas internacionales como legislaciones nacionales que buscan prevenir, mitigar o corregir los impactos ambientales derivados de actividades productivas o de infraestructura.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Normativa ambiental internacional
    
    p.mb-5 Las normas ambientales internacionales son acuerdos, convenios y directrices establecidos por organizaciones multilaterales con el fin de proteger los ecosistemas, frenar el cambio climático y promover la sostenibilidad a escala global. Aunque algunos no tienen carácter obligatorio, muchos países los integran en su legislación interna como compromiso con la comunidad internacional. A continuación, se presentan los principales instrumentos normativos internacionales relacionados con el impacto ambiental:

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Convenio sobre la Diversidad Biológica (CDB) - 1992").ms-5
            p Adoptado en la Cumbre de la Tierra (Río de Janeiro). 
            h5 Objetivos:  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservar la biodiversidad. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Uso sostenible de los recursos. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Participación justa en los beneficios derivados del uso de recursos genéticos. 
            p Requiere evaluaciones de impacto ambiental (EIA) para proyectos que afecten la biodiversidad.
          div(titulo="Protocolo de Kioto (1997)").ms-5
            p Acuerdo internacional centrado en la reducción de emisiones de gases de efecto invernadero (GEI). Entró en vigor en 2005. 
            p.mb-0 Fue el primer paso hacia compromisos globales en la lucha contra el cambio climático.

          div(titulo="Acuerdo de París (2015)").ms-5
            p Reemplaza al Protocolo de Kioto.
            h5 Objetivos:  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Limitar el calentamiento global a menos de 2 °C.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Reducir emisiones de GEI.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Fomentar proyectos sostenibles con bajo impacto ambiental. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/11.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Convenio de Basilea (1989)").ms-5
            p Regula el movimiento transfronterizo de residuos peligrosos. 
            p.mb-0 Busca evitar que países industrializados trasladen desechos contaminantes a países en desarrollo.

          div(titulo="Convenio de Estocolmo (2001)").ms-5
            p Trata sobre los contaminantes orgánicos persistentes (COPs). 
            p.mb-0 Prohíbe o restringe sustancias químicas peligrosas como ciertos pesticidas.


          div(titulo="Directrices de desempeño ambiental y social del IFC (Banco Mundial)").ms-5
            p Establecen requisitos para proyectos financiados por instituciones como el Banco Mundial, IFC o BID. 
            h5 Exigen:  
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evaluaciones de impacto ambiental y social.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Planes de manejo ambiental.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Consulta con comunidades afectadas. 
          div(titulo="ISO 14001 - Sistema de Gestión Ambiental (SGA)").ms-5
            p No es un tratado internacional, sino una norma voluntaria adoptada globalmente por empresas. 
            p.mb-0 Establece lineamientos para mejorar el desempeño ambiental y reducir impactos negativos.
          
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ley 99 de 1993 – Base de la normativa ambiental en Colombia
    
    p.mb-5 En Colombia, la protección del medio ambiente se consolidó legalmente a través de la Ley 99 de 1993, considerada la piedra angular de la legislación ambiental del país. Esta norma sentó las bases institucionales y jurídicas para una gestión ambiental estructurada, participativa y sostenible.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-15.tarjeta.p-5(data-aos="fade-left")
          h5 Objetivo principal
          p.mb-0 La ley fue creada con el propósito de establecer un marco legal e institucional que garantice la protección del medio ambiente y los recursos naturales, integrando criterios de desarrollo sostenible en todas las actividades económicas del país.
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Cuáles fueron sus principales aportes?

    p.mb-5.mt-5 La Ley 99 de 1993 introdujo profundas transformaciones en la manera como se gestiona el ambiente en Colombia. A continuación, se destacan sus principales contribuciones institucionales, técnicas y sociales:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Creación del Ministerio del Medio Ambiente
              p Estableció una entidad estatal encargada de dirigir la política ambiental del país. Actualmente se conoce como Ministerio de Ambiente y Desarrollo Sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Creación del Sistema Nacional Ambiental (SINA)
              p Conformó un sistema articulado de entidades públicas, privadas, ONG y comunidades, encargado de la planificación, ejecución y control de la gestión ambiental.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/15.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Autoridades Ambientales Regionales
              p Instituyó las Corporaciones Autónomas Regionales (CAR) como responsables de aplicar la normativa ambiental en sus respectivas jurisdicciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/16.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Evaluación de Impacto Ambiental (EIA)
              p Estableció la obligatoriedad de presentar estudios de impacto ambiental y obtener licencias ambientales para proyectos con potencial afectación ecológica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/17.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Participación ciudadana
              p Reconoció el derecho de la ciudadanía a involucrarse en los asuntos ambientales mediante mecanismos legales, como la acción popular.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Principio de desarrollo sostenible
              p Introdujo el concepto de que el desarrollo debe garantizar el bienestar presente sin comprometer las necesidades de las generaciones futuras.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Por qué es importante esta ley?

    p.mb-5.mt-5 La Ley 99 de 1993 es fundamental porque marcó un antes y un después en la política ambiental colombiana. Entre sus principales impactos se destacan:

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/19.svg", data-aos="zoom-in")
      .col-lg-8
        .bg-color-25.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 El fortalecimiento del control sobre la contaminación ambiental.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La inclusión de criterios ecológicos en la planificación del territorio.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La promoción de la conservación de la biodiversidad.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 La institucionalización de la participación ciudadana en decisiones ambientales.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Sistema Nacional Ambiental (SINA)
    
    p.mb-5 Para garantizar una gestión ambiental efectiva en todo el territorio nacional, Colombia cuenta con un sistema institucional especializado: el Sistema Nacional Ambiental (SINA). Este sistema fue creado por la Ley 99 de 1993 y tiene como objetivo articular esfuerzos entre el Estado, el sector privado y la sociedad civil en la protección del ambiente y los recursos naturales.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-info.p-3.tarjeta
          h3 ¿Qué es el SINA?
          p A continuación, se presenta un pódcast que explica en detalle qué es el Sistema Nacional Ambiental, su estructura, funciones y la importancia que tiene en la gestión ambiental de Colombia.
          .bg-color-1.tarjeta.mb-3
            .p-4
              .row.justify-content-center.align-items-center
                .col-lg-5.mb-3.mb-lg-0
                  figure
                    img(src="@/assets/curso/tema2/21.svg", data-aos="zoom-in")
                .col-lg-7
                  h3 Pódcast
                  TarjetaAudio.color-acento-contenido.bg-color-white.mb-3(
                    texto="¿Qué es el SINA?"
                    tiempo
                    :audio="require('../assets/curso/podcast/podcast1.mp3')"
                  ) 
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Quiénes hacen parte del SINA?

    p.mb-5.mt-5 El SINA está compuesto por entidades a nivel nacional, regional y local, además de instituciones de apoyo, investigación, autoridades locales y actores sociales. A continuación, se presenta  su estructura general:

    .row.mb-3
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg-color-4")
          div(titulo="Autoridad ambiental nacional").ms-5
            p Autoridad ambiental nacional
            p <b>Ministerio de Ambiente y Desarrollo Sostenible (MADS)</b>: dirige el SINA, formula políticas, regula, coordina y supervisa la gestión ambiental del país.
          div(titulo="Autoridades ambientales regionales y urbanas").ms-5
            p <b>CAR (Corporaciones Autónomas Regionales)</b>: gestionan el ambiente en sus regiones de forma autónoma y descentralizada. 
            p <b>AAU (Autoridades Ambientales Urbanas)</b>: actúan en ciudades con más de un millón de habitantes. Ejemplo: Secretaría Distrital de Ambiente - Bogotá; Área Metropolitana del Valle de Aburrá.
          div(titulo="Acuerdo de París (2015)").ms-5
            p Otras entidades del Estado 
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Ministerios con competencias ambientales</b>: agricultura, Minas, Salud, etc.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>IDEAM</b>: proporciona datos científicos sobre clima, agua y suelos.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Parques Nacionales Naturales (PNN)</b>: administra y protege el sistema de parques. 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 <b>Institutos de investigación</b>: INVEMAR, IAVH, SINCHI, IIAP.
          div(titulo="Entidades territoriales").ms-5
            p Gobernaciones y alcaldías que ejecutan políticas ambientales locales, con posibilidad de crear secretarías u oficinas ambientales propias.
          div(titulo="Sociedad civil y sector privado").ms-5
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 ONGs ambientales.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Comunidades indígenas, afrocolombianas y campesinas.   
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Empresas que desarrollan proyectos con impacto ambiental.  
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ciudadanos, mediante participación activa y veeduría ciudadana.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Decreto único reglamentario del sector ambiente y desarrollo sostenible (Decreto 1076 de 2015)
    
    p.mb-5 En Colombia existían múltiples normas ambientales dispersas, lo que dificultaba su consulta y aplicación. Para resolver esto, se creó el Decreto 1076 de 2015, que reúne y actualiza en un solo cuerpo legal todas las disposiciones reglamentarias del sector ambiente.

    TabsC.color-acento-contenido.mb-5
      .p-5(titulo="¿Qué regula?")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 ¿Qué regula?
            p A continuación, se enumeran las principales áreas que son reguladas por el Decreto 1076 de 2015. Estas abarcan desde licencias ambientales hasta la participación ciudadana en temas ambientales.
            p Temas principales regulados por el Decreto 1076 de 2015
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Licencias y permisos ambientales 
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Gestión del recurso hídrico
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evaluación del impacto ambiental (EIA)
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Control de la contaminación (aire, agua, suelo)
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Manejo de residuos y emisiones
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Uso sostenible de la biodiversidad
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Conservación de áreas protegidas
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Participación ciudadana
        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/23.png', alt='Texto que describa la imagen')
      .p-5(titulo="Importancia del decreto")
        .row.align-items-center
          .col-lg-7.mb-4.mb-md-0
            h4 Importancia del decreto
            p Este decreto es la herramienta clave para que las autoridades ambientales puedan actuar con base legal. Establece las reglas que deben seguir ciudadanos, comunidades y empresas para cumplir con la legislación ambiental vigente.
        
          .col-lg-5
            figure
              img(src='@/assets/curso/tema2/24.png', alt='Texto que describa la imagen')
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Ministerio de Ambiente y Desarrollo Sostenible

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/25.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-5.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 El Ministerio de Ambiente y Desarrollo Sostenible es la entidad estatal encargada de liderar la política ambiental en Colombia. Su misión principal es proteger los recursos naturales del país y dirigir el Sistema Nacional Ambiental (SINA). Además, representa a Colombia en tratados y acuerdos ambientales internacionales.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Objetivos principales

    p.mt-5 Los siguientes objetivos orientan la labor del Ministerio a nivel nacional:

    .bg-full-width.bg-fondo-5.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/26.svg", data-aos="zoom-in")
          .col-lg-8
            .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
              div
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Liderar la política ambiental nacional.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Promover el desarrollo sostenible.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Proteger los ecosistemas estratégicos.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Cumplir compromisos ambientales internacionales.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Garantizar el derecho a un ambiente sano.
        
    
        h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Funciones clave del Ministerio

        p.mb-5.mt-5 Estas funciones describen cómo el Ministerio asegura una adecuada gestión ambiental en Colombia:

        SlyderF(columnas="col-12 col-lg-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/27.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Política y planificación
            p.text-center Diseñar y formular políticas, planes y programas ambientales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/28.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Coordinación institucional
            p.text-center Coordinar el funcionamiento del Sistema Nacional Ambiental (SINA).
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/29.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Normatividad
            p.text-center Expedir normas y reglamentos ambientales
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/30.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Licenciamiento
            p.text-center Otorgar licencias ambientales de gran escala.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/31.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Protección de ecosistemas
            p.text-center Proteger ecosistemas estratégicos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/32.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Educación ambiental
            p.text-center Promover la educación y cultura ambiental.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/33.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Regulación de recursos
            p.text-center Regular el uso de recursos naturales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/34.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Control y vigilancia
            p.text-center Vigilar y sancionar infractores ambientales
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/35.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Participación ciudadana
            p.text-center Promover la participación ciudadana en temas ambientales.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema2/36.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Representación internacional
            p.text-center Representar a Colombia en tratados y convenios ambientales.

        .row.mb-5
          .col-lg-5.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/37.png", data-aos="zoom-in")
          .col-lg-7
            p(data-aos="fade-left") Estas funciones e instituciones son esenciales para que Colombia pueda:
            ul.lista-ul--color.mb-0.ms-3
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Proteger su riqueza natural.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Afrontar retos ambientales como el cambio climático y la deforestación.
              li.mb-3.d-flex
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Garantizar la sostenibilidad del desarrollo.
            p El Decreto 1076 de 2015 establece el marco normativo que organiza estas reglas, y el Ministerio es responsable de su aplicación y cumplimiento.

        separador
        
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 2.3	Impacto ambiental de la actividad agropecuaria en Colombia, medición del impacto e indicadores ambientales.
        
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/38.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 La actividad agropecuaria, si bien es esencial para el abastecimiento de alimentos, también representa una de las principales causas de alteración del medio ambiente en Colombia. A través de diferentes prácticas agrícolas y ganaderas, se generan presiones sobre los ecosistemas que afectan el equilibrio ecológico, la calidad del agua, del suelo y la biodiversidad.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Definición del impacto ambiental en la actividad agropecuaria en Colombia
    
    p.mb-5 El impacto ambiental de la actividad agropecuaria se ha intensificado en el país debido al uso de técnicas derivadas de la Revolución Verde, centradas en el aumento de la productividad sin considerar del todo sus consecuencias ecológicas. Estas prácticas, aunque aplicadas tanto por pequeños como por grandes productores, generan un mayor daño cuando se desarrollan a gran escala, como en los casos de:

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/39.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-1.tarjeta.p-4.mb-3(data-aos="fade-left")
          div
            ul.lista-ul--color.mb-0
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Ganadería extensiva.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Avicultura intensiva.
              li.mb-1.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Cultivos industriales de banano, palma de aceite, flores, cítricos, aguacate, entre otros.
        .bg-color-4.p-4.tarjeta
          p.mb-0 El uso intensivo de pesticidas, la deforestación para ampliar la frontera agrícola, el monocultivo y la mecanización excesiva son acciones justificadas bajo el argumento de “alimentar al mundo”, pero que en realidad tienen altos costos ecológicos y sociales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Principales impactos negativos de la actividad agropecuaria en Colombia
    
    p.mb-5 A continuación, se presentan los impactos más significativos que esta actividad genera sobre los ecosistemas:
    
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-color-white-1.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/40.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Deforestación
              p La expansión de la ganadería extensiva ha sido una de las principales causas de pérdida de cobertura boscosa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/41.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Contaminación de fuentes hídricas
              p El uso intensivo de agroquímicos contamina ríos, quebradas y acuíferos. La escorrentía arrastra estos productos afectando la vida acuática y la salud humana.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/42.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Degradación del suelo
              p El sobre laboreo, el uso de maquinaria pesada y el sobrepastoreo deterioran la estructura del suelo, reducen su fertilidad y provocan erosión y compactación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/43.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Emisión de gases de efecto invernadero (GEI)
              p La ganadería libera metano y el uso de fertilizantes emite óxidos de nitrógeno. Las quemas agrícolas también aumentan las emisiones de GEI.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/44.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Pérdida de biodiversidad
              p La transformación de hábitats en zonas de cultivo o pastoreo disminuye la presencia de especies nativas, incluidos polinizadores esenciales como las abejas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/45.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Uso excesivo del agua
              p Algunos cultivos demandan grandes cantidades de agua, lo que disminuye su disponibilidad para ecosistemas naturales. También hay desvío de fuentes para riego y desperdicio por técnicas ineficientes.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0.order-2
              figure
                img(src="@/assets/curso/tema2/46.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fragmentación de ecosistemas
              p Las actividades agropecuarias dividen hábitats, dificultando el tránsito y la reproducción de especies como el cóndor andino o el oso de anteojos, lo que incrementa su riesgo de extinción.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Estrategias para reducir el impacto ambiental agropecuario
    
    p.mb-5 Frente a estos desafíos, es fundamental adoptar prácticas más sostenibles que minimicen los efectos negativos sin sacrificar la productividad. Algunas estrategias clave son:

    .bg-full-width.bg-fondo-5.mb-5
      .px-4.px-md-5.py-4
        .row.mb-5.align-items-center
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/47.png", data-aos="zoom-in")
          .col-lg-8
            .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
              div
                ul.lista-ul--color.mb-0
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Fomentar la agricultura sostenible y agroecológica, que reduce el uso de insumos sintéticos y mejora la salud del suelo.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Disminuir el uso de químicos de síntesis e incorporar fertilizantes y pesticidas orgánicos.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Aplicar técnicas de conservación de suelos, como terrazas, barreras vivas y cobertura vegetal.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Implementar sistemas de riego eficientes, como el riego por goteo, que disminuye el desperdicio de agua.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Promover la ganadería regenerativa y silvopastoril, que integra árboles en los sistemas ganaderos y mejora la captura de carbono.
                  li.mb-2.d-flex.bg-white.tarjeta.p-2
                    i.fas.fa-leaf.bg-color-7
                    p.mb-0 Proteger y restaurar ecosistemas estratégicos, como páramos, bosques y humedales.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.svg")
        h3.titulo-con-imagen__texto Medición del impacto ambiental de la actividad agropecuaria en Colombia 
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/48.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-15.tarjeta.p-5(data-aos="fade-left")
          p.mb-0 Para entender y gestionar adecuadamente los efectos de la actividad agropecuaria sobre el ambiente, es necesario aplicar herramientas que permitan medir, predecir y hacer seguimiento a sus impactos. Estas herramientas combinan aspectos técnicos, normativos y científicos, y permiten conocer el estado de los ecosistemas y el grado de afectación causado por las prácticas productivas.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué es una Evaluación de Impacto Ambiental (EIA)?

    p.mb-5.mt-5 Antes de ejecutar un proyecto agropecuario de gran escala, es obligatorio realizar una Evaluación de Impacto Ambiental (EIA), especialmente cuando este puede generar afectaciones significativas en el medio ambiente.

    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/49.png", data-aos="zoom-in")
      .col-lg-8
        P Esta herramienta permite anticipar los posibles impactos negativos del proyecto y establecer medidas para prevenirlos, corregirlos o compensarlos.
        .bg-color-9.tarjeta.p-4.mb-3(data-aos="fade-left")
          P Aspectos clave de la EIA
          div
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Diagnóstico ambiental del área.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Identificación y valoración de impactos.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Propuesta de medidas de manejo ambiental.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Requiere licencia ambiental previa a la ejecución del proyecto.
              li.mb-2.d-flex.bg-white.tarjeta.p-2
                i.fas.fa-leaf.bg-color-7
                p.mb-0 Evaluada por la ANLA o por las CAR, según el tipo de proyecto.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué es el monitoreo ambiental?

    .row.mb-5.align-items-center.mt-5
      .col-lg-4.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema2/50.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p Una vez implementado un proyecto agropecuario, es necesario hacer monitoreos ambientales periódicos que permitan verificar los efectos reales de las actividades sobre el entorno. El monitoreo permite evaluar si las medidas de mitigación funcionan, y si se están cumpliendo los estándares ambientales establecidos.
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/51.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Calidad del agua
                  p.mb-0 Estaciones de monitoreo, pruebas de laboratorio
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/52.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Calidad del suelo
                  p.mb-0 Muestreo, análisis físico-químico
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/53.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Emisiones de gases
                  p.mb-0 Sensores, estaciones meteorológicas
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/54.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Biodiversidad y cobertura vegetal
                  p.mb-0 Imágenes satelitales, observación directa
        .row.mb-3
          .col-lg-6.mb-3.mb-lg-0
            .bg-color-25.p-3.tarjeta.h-100(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto.mb-3.mb-lg-0
                  img(src="@/assets/curso/tema2/55.svg", style="max-width: 90px").mx-auto
                .col-lg
                  h5 Manejo de residuos
                  p.mb-0 Registros internos, inspecciones técnicas
          .col-lg-6.mb-3.mb-lg-0
            img(src="@/assets/curso/tema2/56.svg").mx-auto

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta ¿Qué son los indicadores ambientales?

    p.mt-5 En una EIA o en procesos de monitoreo ambiental, se utilizan indicadores ambientales: valores medibles que permiten evaluar el estado del ambiente, los efectos de la actividad productiva y la efectividad de las acciones de manejo.

    p.mb-5 Estos indicadores pueden ser cuantitativos o cualitativos, y son fundamentales para tomar decisiones informadas.

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Indicadores 
        
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th.bg-color-11 Indicador
                th.bg-color-11 ¿Qué mide?
            tbody
              tr.bg-color-sintesis
                td Erosión del suelo (ton/ha/año)
                td Pérdida de tierra fértil.
              tr
                td Compactación del suelo
                td Reducción de la infiltración y aireación.
              tr.bg-color-sintesis
                td Materia orgánica en el suelo (%)
                td Calidad y fertilidad del suelo.
              tr
                td DBO (Demanda Bioquímica de Oxígeno)
                td Contaminación orgánica del agua.
              tr.bg-color-sintesis
                td Presencia de nitratos/fosfatos
                td Contaminación química del agua por fertilizantes.
              tr
                td Caudal de extracción vs. natural
                td Presión sobre el recurso hídrico.
              tr.bg-color-sintesis
                td Índice de calidad del agua (ICA)
                td Estado general del agua.
              tr
                td Emisiones de metano (CH₄)
                td Gases de efecto invernadero de la ganadería.
              tr.bg-color-sintesis
                td Olores ofensivos
                td Impacto sobre comunidades cercanas.
              tr
                td Número de especies afectadas
                td Pérdida de biodiversidad.
              tr.bg-color-sintesis
                td Fragmentación de hábitats
                td Alteración de ecosistemas naturales.
              tr
                td Cambios en cobertura vegetal
                td Transformación del paisaje.
              tr.bg-color-sintesis
                td Cantidad de residuos generados (kg/día)
                td Producción de desechos orgánicos.
              tr
                td % de residuos adecuadamente dispuestos
                td Eficiencia del tratamiento de residuos.

    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Tipos de huellas ecológicas utilizadas

    p.mb-5.mt-5 Además de los indicadores anteriores, existen metodologías específicas para medir el impacto de manera más integrada:

    .row.mb-5.justify-content-center
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/57.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Huella hídrica
            p Cuánta agua se utiliza en la producción agropecuaria.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0(data-aos="fade-up")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/58.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Huella de carbono
            p Emisiones de gases de efecto invernadero generadas.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        .tarjeta--boton.bg-color-24.p-4.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/tema2/59.svg', alt='Texto que describa la imagen')
          div.text-center
            h4 Huella ecológica
            p Impacto global sobre los ecosistemas, considerando uso de suelo, recursos y emisiones.
      .col-sm-6.col-lg-3.mb-4.mb-sm-0(data-aos="fade-down")
        figure
          img(src='@/assets/curso/tema2/60.png', alt='Texto que describa la imagen')
    
    h3.bg-color-21.d-flex.d-xl-inline.p-3.text-white.tarjeta Entidades y actores responsables de la medición ambiental

    p.mb-5.mt-5 Para que la medición del impacto sea objetiva, confiable y técnicamente válida, participan diferentes instituciones públicas, privadas y académicas, cada una con un rol específico.

    .bg-full-width.bg-fondo-4.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-8.mb-3.mb-lg-0.order-2
            SlyderF(columnas="col-12 col-lg-6").mb-3
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/62.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 IDEAM
                p.text-center Genera y suministra datos técnicos sobre clima, agua, suelos y uso del territorio.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/63.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Ministerio de Ambiente
                p.text-center Define políticas, estándares e instrumentos de medición ambiental.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/64.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 CAR y demás autoridades ambientales
                p.text-center Evalúan, hacen seguimiento y controlan el cumplimiento de las normas en el ámbito local o regional.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/65.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Universidades e institutos de investigación (Humboldt, SINCHI, IIAP, INVEMAR)
                p.text-center Realizan estudios científicos y diseñan indicadores específicos para ecosistemas estratégicos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/66.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Productores agropecuarios
                p.text-center Implementan sistemas internos de monitoreo y adoptan buenas prácticas ambientales.
              

          .col-lg-3.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/61.png', alt='')

        .row.justify-content-center 
          .col-lg-10
            .bg-color-6.tarjeta.mb-5
              .px-4.px-md-5.py-4
                p.mb-0 Es importante entender que no todo impacto ambiental agropecuario es necesariamente negativo. Cuando se implementan prácticas sostenibles, es posible lograr un efecto positivo sobre los indicadores ambientales, e incluso mejorar la calidad del entorno natural. Estas formas de producción respetuosas del ambiente, como la agricultura ecológica, la ganadería regenerativa o los sistemas silvopastoriles, serán abordadas en el siguiente apartado.


</template>

<script>
export default {
  name: 'Tema2',
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
