<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Producción agropecuaria y sostenibilidad ambiental en Colombia',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave relacionados con los modos de producción agropecuaria en Colombia, su impacto ambiental y las prácticas sostenibles para preservar la soberanía alimentaria y los recursos naturales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es una característica principal de la producción agropecuaria campesina o familiar en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La mecanización intensiva del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El uso exclusivo de semillas transgénicas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La transmisión de conocimientos ancestrales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La orientación exclusiva al mercado internacional.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto: '¿Qué objetivo tiene la soberanía alimentaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Fomentar el consumo de alimentos ultraprocesados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar la autonomía en la producción y consumo de alimentos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Depender del mercado global para abastecimiento.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centralizar las decisiones alimentarias en el gobierno.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una desventaja de la producción agropecuaria convencional?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Contaminación de suelos y aguas.',
              esCorrecta: true,
            },
            { id: 'b', texto: 'Mayor diversidad agrícola.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Fomento de la soberanía alimentaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la productividad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué práctica es parte de la manipulación segura de alimentos por los campesinos?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cosecha en condiciones secas y con utensilios limpios.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Almacenamiento en espacios húmedos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transporte de alimentos junto con fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el lavado de productos antes del transporte.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es una de las funciones del Ministerio de Ambiente y Desarrollo Sostenible?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Coordinar políticas de defensa nacional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Promover el desarrollo sostenible y la educación ambiental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Establecer precios de productos agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exportar productos del sector extractivo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto: '¿Qué representa la producción agroecológica o sostenible?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un modelo que respeta los principios ecológicos y sociales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El uso intensivo de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La importación masiva de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El monocultivo mecanizado a gran escala.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué es la Evaluación de Impacto Ambiental (EIA)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un estudio para mejorar la exportación de productos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un análisis previo para prever impactos ambientales de un proyecto.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un control fiscal de las actividades ganaderas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una campaña de promoción agrícola.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una estrategia para proteger la soberanía alimentaria campesina?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la importación de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fomentar mercados locales y ferias campesinas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación de semillas nativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducción de la diversidad de cultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál de los siguientes es un impacto ambiental negativo de la actividad agropecuaria intensiva?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Pérdida de biodiversidad.', esCorrecta: true },
            {
              id: 'b',
              texto: 'Reforestación con especies nativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Protección de fuentes hídricas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento de materia orgánica en el suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué es una condición agroecológica esencial para definir cultivos sostenibles?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Participación política del campesinado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tipo de suelo y disponibilidad de agua.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Tasa de natalidad regional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Exportaciones agroindustriales del país.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La seguridad alimentaria y la soberanía alimentaria son conceptos idénticos.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'La Ley 99 de 1993 creó el Ministerio de Ambiente y el Sistema Nacional Ambiental (SINA).',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'La producción intensiva busca maximizar rendimientos sin considerar el impacto ecológico.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las prácticas agropecuarias sostenibles promueven el uso de agroquímicos sintéticos.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'El uso de abonos orgánicos es una técnica para conservar la fertilidad del suelo.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
