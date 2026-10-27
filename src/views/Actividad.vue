<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Identificación del alcance del estudio de caudales ambientales.',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar el nivel de apropiación de los fundamentos relacionados con la Identificación del alcance del estudio de caudales ambientales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal de identificar el alcance de un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Determinar exclusivamente el volumen de agua destinado al consumo humano.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Establecer la cantidad máxima de agua que puede extraerse de un río.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Definir los objetivos, las necesidades de información, las metodologías y los recursos necesarios para evaluar los requerimientos ambientales del sistema hídrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Establecer únicamente los costos de construcción de una obra hidráulica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 2,
          texto:
            '¿Qué información permite caracterizar la demanda de agua de un sistema?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de agua que se almacena en un embalse durante la temporada de lluvias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El régimen de flujo necesario para contribuir a la conservación de los ecosistemas acuáticos y al mantenimiento de sus funciones ecológicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'El volumen de agua utilizado exclusivamente para actividades agrícolas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La cantidad máxima de agua que puede transportar un río durante una inundación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 3,
          texto:
            'Durante la planificación de un estudio de caudales ambientales, ¿cuál es una de las primeras actividades que debe realizarse?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Comprar todos los equipos de monitoreo disponibles en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Seleccionar una metodología avanzada sin revisar las características del río.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Establecer el caudal mínimo sin recopilar información previa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Delimitar el área de estudio, definir los objetivos y reconocer las características del sistema hídrico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 4,
          texto:
            'Una autoridad ambiental necesita estimar el caudal ambiental de un río que abastece a varias comunidades y alberga especies acuáticas. ¿Qué aspecto debe considerar al definir el alcance del estudio?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Únicamente el volumen de agua solicitado por las comunidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Las condiciones hidrológicas, ecológicas y los usos del agua relevantes para el sistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Exclusivamente las dimensiones del cauce.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Solamente los costos asociados con el aprovechamiento del recurso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es la principal función de la información hidrológica en un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Identificar únicamente las especies vegetales de la cuenca.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer los límites administrativos del municipio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Describir el comportamiento del flujo mediante datos como caudales, precipitaciones y variaciones temporales del régimen hídrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Determinar exclusivamente la composición química del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 6,
          texto:
            'Un equipo técnico dispone de registros históricos de caudal, pero no cuenta con información sobre las especies acuáticas del río. ¿Qué decisión es más adecuada?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Descartar todos los registros hidrológicos recopilados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asumir que el caudal histórico garantiza por sí solo la conservación ecológica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar la información ecológica faltante y evaluar la necesidad de complementarla según los objetivos del estudio.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Seleccionar automáticamente una metodología hidrológica básica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el propósito de revisar los requisitos técnicos y normativos antes de desarrollar el estudio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar la recopilación de información ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Sustituir los análisis técnicos por procedimientos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asegurar que el estudio considere las disposiciones aplicables y los criterios técnicos pertinentes.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Garantizar que todas las cuencas utilicen una metodología idéntica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 8,
          texto:
            '¿Qué caracteriza a una metodología hidrológica para la estimación del caudal ambiental?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utiliza registros de caudal y características del régimen hidrológico para establecer indicadores o estimaciones de flujo ambiental.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Se fundamenta exclusivamente en entrevistas a los habitantes de la cuenca.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Requiere siempre modelaciones detalladas de todas las especies acuáticas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Considera únicamente la calidad fisicoquímica del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 9,
          texto:
            '¿En qué situación podría ser necesario aplicar una metodología de mayor complejidad?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Cuando se dispone de abundante información y el estudio no requiere decisiones ambientales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Cuando el objetivo es únicamente describir la ubicación geográfica del río.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Cuando se necesita reducir el alcance del estudio sin justificarlo técnicamente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Cuando el sistema presenta alta complejidad ecológica, conflictos por el uso del agua o impactos importantes que requieren análisis detallados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la función de la información hidráulica en la estimación del caudal ambiental?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar exclusivamente los costos del proyecto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Analizar variables como la profundidad, la velocidad y los niveles del agua, relacionadas con las condiciones físicas del hábitat acuático.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Establecer únicamente la precipitación anual de la cuenca.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Identificar exclusivamente las actividades económicas de la población.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 11,
          texto:
            'Una cuenca presenta registros hidrológicos limitados y escasa información ecológica. ¿Qué debe hacer el equipo responsable del estudio?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar cualquier metodología sin evaluar sus limitaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Excluir del análisis las incertidumbres de la información disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Identificar las brechas de información, evaluar las alternativas metodológicas y establecer las necesidades de recopilación de datos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Adoptar los resultados de otra cuenca sin considerar sus diferencias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 12,
          texto:
            '¿Por qué es importante considerar los usos del agua al definir el alcance del estudio?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Porque los usos humanos reemplazan las necesidades de los ecosistemas.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Porque permiten determinar el caudal ambiental únicamente con información económica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Porque ayudan a reconocer las demandas y posibles conflictos entre el aprovechamiento del agua y la conservación del sistema hídrico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Porque eliminan la necesidad de realizar análisis hidrológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de los siguientes elementos permite justificar la selección de una metodología para estimar el caudal ambiental?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La preferencia personal del profesional responsable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La elección de la metodología de menor costo, independientemente de sus resultados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La utilización de una metodología únicamente porque fue aplicada en otra región.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La correspondencia entre los objetivos del estudio, las características de la cuenca, la información disponible y los recursos necesarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 14,
          texto:
            '¿Qué diferencia existe entre una metodología básica y una metodología avanzada para estimar el caudal ambiental?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La metodología básica siempre ofrece resultados más precisos que la avanzada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La metodología avanzada generalmente requiere análisis más detallados, mayor información y equipos interdisciplinarios, según las características del estudio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La metodología básica no utiliza información hidrológica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La metodología avanzada excluye los aspectos ecológicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es el aporte de la información geomorfológica en un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Determinar exclusivamente la demanda de agua potable.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Establecer únicamente la temperatura del agua.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Caracterizar la forma, la estructura y los procesos físicos del cauce que pueden influir en las condiciones del hábitat acuático.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Identificar exclusivamente las normas aplicables al proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 16,
          texto:
            'Un estudio busca determinar cómo las variaciones del caudal afectan los hábitats y las comunidades acuáticas. ¿Qué enfoque resulta más pertinente?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un enfoque exclusivamente presupuestal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un enfoque basado únicamente en los registros de precipitación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un enfoque que integre información hidrológica, hidráulica y ecológica, de acuerdo con los objetivos y las condiciones del sistema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Un enfoque limitado a la delimitación cartográfica de la cuenca.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 17,
          texto:
            '¿Qué papel cumple el equipo interdisciplinario en la identificación del alcance del estudio?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reemplazar la necesidad de contar con datos confiables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantizar que todas las decisiones se tomen desde una sola disciplina.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Reducir el estudio exclusivamente a variables económicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Integrar conocimientos de diferentes áreas para comprender el sistema hídrico y sustentar las decisiones metodológicas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 18,
          texto:
            '¿Cuál es la utilidad de establecer un plan de trabajo durante la planificación del estudio?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la necesidad de definir responsabilidades.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Organizar las actividades, los tiempos, los responsables y los recursos requeridos para desarrollar el estudio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir los objetivos técnicos por actividades administrativas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evitar el seguimiento de los avances del proyecto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 19,
          texto:
            'Durante la revisión del alcance, el equipo identifica que el presupuesto disponible no permite desarrollar todos los análisis inicialmente previstos. ¿Cuál es la actuación más apropiada?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Eliminar los componentes ecológicos sin evaluar sus consecuencias.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener todas las actividades sin considerar la disponibilidad de recursos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Revisar las alternativas metodológicas, priorizar las necesidades de información y ajustar el plan de trabajo sin comprometer los objetivos esenciales ni los requisitos aplicables.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Presentar resultados definitivos sin realizar las actividades necesarias.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
        {
          id: 20,
          texto:
            '¿Cuál de las siguientes afirmaciones resume mejor la importancia de identificar adecuadamente el alcance de un estudio de caudales ambientales?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Permite establecer un valor único de caudal aplicable a todos los ríos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Garantiza que el estudio requiera siempre la menor cantidad de recursos posible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Permite sustituir la evaluación ambiental por cálculos hidrológicos generales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Orienta la planificación técnica y metodológica para obtener resultados pertinentes, sustentados y acordes con las características y necesidades del sistema hídrico.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia conocimiento de los conceptos relacionados a la Identificación del alcance del estudio de caudales ambientales.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo Identificación del alcance del estudio de caudales ambientales.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la Identificación del alcance del estudio de caudales ambientales.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
