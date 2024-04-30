import { IActivityTwo } from "../../../models/activity-two.model";

export const QUESTIONS_1: IActivityTwo[] = [
    {
        id: 1,
        text: '¿Cuál es la diferencia fundamental entre un argumento deductivo y un argumento inductivo?',
        options: [
            'a. Los argumentos deductivos se basan en premisas que otorgan un grado de probabilidad a la conclusión, mientras que los argumentos inductivos garantizan la verdad de la conclusión.',
            'b. Los argumentos deductivos son siempre inválidos, mientras que los argumentos inductivos son siempre fuertes.',
            'c. La diferencia radica en que los argumentos deductivos no requieren premisas, mientras que los inductivos sí.',
            'd. Los argumentos deductivos aseguran que la verdad de las premisas conduce necesariamente a la verdad de la conclusión, mientras que los argumentos inductivos otorgan un grado de probabilidad a la conclusión.'
        ],
        answer: 'd. Los argumentos deductivos aseguran que la verdad de las premisas conduce necesariamente a la verdad de la conclusión, mientras que los argumentos inductivos otorgan un grado de probabilidad a la conclusión.',
        selected: null
    },
    { 
        id: 2,
        text: '¿Qué aspecto de los argumentos NO será evaluado en la prueba de comunicación escrita, sergún lo establecido en el texto?',
        options: [
            'a. La corrección de su presentación formal.',
            'b. La claridad de su expresión.',
            'c. La validez de los argumentos.',
            'd. La pertinencia de los argumentos para justificar el punto central del escrito.'
        ],
        answer: 'd. La pertinencia de los argumentos para justificar el punto central del escrito.',
        selected: null
    },
  ];