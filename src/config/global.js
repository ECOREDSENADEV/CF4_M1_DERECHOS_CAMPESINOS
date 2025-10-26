export default {
  global: {
    Name:
      'Desarrollemos nuestro quehacer agropecuario y nuestra vida campesina, al tiempo que cuidamos el medio ambiente',
    Description:
      'El componente formativo analiza los modos de producción agropecuaria en Colombia y sus impactos ambientales, revisando normativas vigentes y acuerdos internacionales. Destaca la importancia de la seguridad y soberanía alimentaria, junto con prácticas agroecológicas y sostenibles que protegen suelo, agua, biodiversidad y bienestar animal. Promueve alternativas productivas responsables para fortalecer la resiliencia climática, la autonomía campesina y la vida digna en el campo ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Tipos y/o modos de producción agropecuaria en Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Producción agropecuaria tradicional, campesina o familiar ',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Producción agropecuaria empresarial o tecnificada ',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Producción agroecológica o sostenible',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Producción agroindustrial',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Actividad agropecuaria en Colombia y su impacto ambiental  ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: '¿Qué es el impacto ambiental?',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Normatividad a cerca del medio ambiente y el impacto ambiental',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Impacto ambiental de la actividad agropecuaria en Colombia, medición del impacto e indicadores ambientales.',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Prácticas agropecuarias sostenibles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Fundamentos de la producción agroecológica ',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: '¿Que son las condiciones agroecológicas?',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Objetivos de las prácticas agropecuarias sostenibles',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Clasificación de las prácticas agropecuarias sostenibles',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo:
              'Alternativas de producción sustentable para el sector rural',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo:
              'Regulaciones frente al uso de semillas y material genético',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'La biopiratería y sus riesgos para las comunidades campesinas y la soberanía alimentaria',
            hash: 't_3_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tipos y/o modos de producción agropecuaria en Colombia',
      referencia:
        'El Espectador. (2022, julio 14). Comunidad de Paz de San José de Apartadó: 25 años de soberanía y resistencia [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=wecRNoQ6AJA',
    },
    {
      tema: 'Normatividad a cerca del medio ambiente y el impacto ambiental',
      referencia:
        'Instituto Colombiano Agropecuario. (2017, 28 de abril). Resolución 030021: Por medio de la cual se establecen los requisitos para la certificación en Buenas Prácticas Agrícolas en producción primaria de vegetales y otras especies para consumo humano. Diario Oficial No. 50.224.',
      tipo: 'PDF',
      link:
        'https://www.ica.gov.co/getattachment/9d8fe0fa-66d2-4feb-9513-cbba30dc4844/2017R30021.aspx',
    },
    {
      tema: 'Normatividad a cerca del medio ambiente y el impacto ambiental',
      referencia:
        'Instituto Colombiano Agropecuario. (2020, 29 de diciembre). Resolución 082394: Por medio de la cual se modifican los artículos 2, 3, 4, 12 y 14 de la Resolución 30021 de 2017. Diario Oficial No. 51.543.',
      tipo: 'PDF',
      link:
        'https://www.ica.gov.co/getattachment/446ac25a-0fd7-4fd8-ae9f-2e50f0047c8b/2020R82394.aspx',
    },
    {
      tema: 'Normatividad a cerca del medio ambiente y el impacto ambiental',
      referencia:
        'TVAgro. (2024, 22 de junio). Certifique su predio en buenas prácticas agrícolas – TvAgro por Juan Gonzalo Ángel Restrepo [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=l5A3UzBSCIY',
    },
    {
      tema: 'Normatividad a cerca del medio ambiente y el impacto ambiental',
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2024, 26 de diciembre). El ICA promueve las buenas prácticas ganaderas [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=GojL3UAng2M',
    },
    {
      tema: 'Prácticas agropecuarias sostenibles',
      referencia:
        'La Finca de Hoy. (2024, 17 de junio). ¿Cómo aplicar las buenas prácticas ganaderas y obtener el certificado del ICA? [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=o1h3GSX59aY',
    },
    {
      tema: 'Prácticas agropecuarias sostenibles',
      referencia:
        '@soyLizcano. (2025, 30 de julio). Experiencia del Cacao en la Finca Agroturística Casablanca ubicada en Gigante (Huila) [Video short]. YouTube.',
      tipo: 'Video short',
      link: 'https://youtube.com/shorts/urojILThH8g?si=iGe8TNe4lOI-gJDV',
    },
    {
      tema: 'Prácticas agropecuarias sostenibles',
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2024, 3 de octubre). Plan de acción para la conservación, multiplicación, uso e intercambio de semillas nativas y criollas II fase 2024–2028.',
      tipo: 'Libro',
      link:
        'https://www.ica.gov.co/getattachment/Modelo-de-P-y-G/Transparencia-Participacion-y-Servicio-al-Ciudada/Rendicion-de-Cuentas/Avance-Acuerdos-de-Paz/Plan-de-accion-de-semillas-Fase-II-1.pdf.aspx',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Disciplina que integra principios ecológicos y sociales en el diseño y manejo de sistemas agrícolas sostenibles.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de especies vivas en un ecosistema, que contribuye a su equilibrio y resiliencia.',
    },
    {
      termino: 'Buenas Prácticas Agrícolas (BPA)',
      significado:
        'Conjunto de acciones orientadas a garantizar la producción de alimentos sanos, seguros y respetuosos del ambiente.',
    },
    {
      termino: 'Captura de carbono',
      significado:
        'Proceso por el cual plantas, suelos, océanos y algunas tecnologías atrapan dióxido de carbono (CO₂) de la atmósfera y lo almacenan para evitar que contribuya al cambio climático.',
    },
    {
      termino: 'Especie nativa',
      significado:
        'Organismo (planta, animal, hongo, etc.) que se encuentra de manera natural en una región, sin haber sido introducido por el ser humano.',
    },
    {
      termino: 'Evaluación de Impacto Ambiental (EIA)',
      significado:
        'Estudio previo que analiza los efectos de un proyecto sobre el ambiente para prevenir, mitigar o compensar posibles daños.',
    },
    {
      termino: 'Inocuidad de los alimentos',
      significado:
        'Garantía de que los alimentos no causarán daño a la salud del consumidor cuando se preparan y consumen de acuerdo con su uso previsto.',
    },
    {
      termino: 'Soberanía alimentaria',
      significado:
        'Derecho de las comunidades a decidir cómo producir, distribuir y consumir alimentos respetando sus saberes, cultura y recursos.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de rastrear un alimento o producto agropecuario en cada etapa: desde su origen hasta que llega al consumidor.',
    },
    {
      termino: 'Zanjas de escorrentía',
      significado:
        'Canales o surcos excavados en el suelo que recogen y dirigen el agua de lluvia para evitar erosión o daños.',
    },
  ],
  referencias: [
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2017). <em>Buenas prácticas agrícolas en la producción primaria de vegetales y otras especies para el consumo humano</em> [Cartilla]. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2024, 3 de octubre). <em>Plan de acción para la conservación, multiplicación, uso e intercambio de semillas nativas y criollas II fase 2024–2028</em>. https://www.ica.gov.co/getattachment/Modelo-de-P-y-G/Transparencia-Participacion-y-Servicio-al-Ciudada/Rendicion-de-Cuentas/Avance-Acuerdos-de-Paz/Plan-de-accion-de-semillas-Fase-II-1.pdf.aspx',
      link:
        'https://www.ica.gov.co/getattachment/Modelo-de-P-y-G/Transparencia-Participacion-y-Servicio-al-Ciudada/Rendicion-de-Cuentas/Avance-Acuerdos-de-Paz/Plan-de-accion-de-semillas-Fase-II-1.pdf.aspx',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2012). <em>Lineamientos estratégicos de política pública: Agricultura campesina, familiar y comunitaria</em> [Libro]. Bogotá, Colombia. https://www.minagricultura.gov.co/noticias/Paginas/Agricultura-Familiar-y-Econom%C3%ADa-Campesina.aspx',
      link:
        'https://www.minagricultura.gov.co/noticias/Paginas/Agricultura-Familiar-y-Econom%C3%ADa-Campesina.aspx',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2024). <em>Manual de oferta institucional sector agropecuario y desarrollo rural</em> [Manual]. Bogotá, Colombia.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
