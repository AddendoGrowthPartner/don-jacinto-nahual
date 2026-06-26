// Enriquecimiento de contenido para las ciudades PRIORITARIAS (zona de anuncios +
// mayor comunidad latina trabajadora cerca del consultorio de Venice Blvd).
// Se fusiona con ciudades.js dentro de /ciudad/[slug].astro: añade párrafos de
// profundidad local, FAQs y zonas. Contenido ÚNICO por ciudad (no plantilla),
// sin promesas ni garantías — enfoque consulta / orientación honesta.
export const ciudadesExtended = {
  'los-angeles': {
    extended: [
      'Los Ángeles es punto de llegada de familias de todo el continente: paisanos de Michoacán, Oaxaca y Jalisco, pero también de El Salvador, Guatemala y Honduras, cada uno con sus propias costumbres de fe. Lo que comparten es la sensación de cargar solos, lejos de la tierra y de los abuelos que antes los orientaban. Don Jacinto Nahual ofrece ese punto de apoyo que muchos perdieron al emigrar: alguien que entiende de dónde vienen y respeta lo que creen, desde la tradición de Catemaco.',
      'Su consulta queda en la zona central de la ciudad, cerca de MacArthur Park, fácil de alcanzar desde Koreatown, Westlake, el Eastside o el sur de Los Ángeles. No importa en qué rincón del condado vivas: si sientes que una relación, tu salud o tu trabajo se torcieron sin explicación, puedes acercarte a contar tu caso con calma y en total privacidad.',
    ],
    extraFaqs: [
      { q: '¿Atiende también a personas de Centroamérica y no solo de México?', a: 'Sí. A Don Jacinto llegan personas de México, El Salvador, Guatemala, Honduras y otros países. La tradición de Catemaco respeta la fe de cada quien; lo importante es escuchar tu situación, vengas de donde vengas.' },
      { q: '¿Desde qué zonas de Los Ángeles llega la gente a consultarlo?', a: 'Llegan personas de Downtown, Boyle Heights, Pico-Union, Koreatown, South LA y de todo el condado. La consulta es presencial y queda en zona central, fácil de alcanzar desde casi cualquier punto de la ciudad.' },
      { q: '¿Cuánto suele durar una consulta?', a: 'Cada caso es distinto. Don Jacinto se toma el tiempo de escucharte sin prisa para entender bien tu situación antes de orientarte. Por eso se atiende con cita, para dedicarle a cada persona la atención que merece.' },
    ],
    extraNeighborhoods: ['Westlake', 'Echo Park', 'Historic Filipinotown', 'Highland Park'],
  },

  'east-la': {
    extended: [
      'En East LA el curanderismo no es algo lejano: muchas familias crecieron viendo a la abuela barrer con un huevo el susto de un niño o prender una veladora cuando algo andaba mal. Esa memoria sigue viva en Whittier Blvd y en los barrios de City Terrace, Maravilla y Belvedere. Don Jacinto Nahual continúa esa misma línea —la del curandero del pueblo— pero con la formación profunda de Catemaco, para quienes quieren algo más que un remedio casero.',
      'Hoy son también los hijos y nietos, ya nacidos aquí, quienes vuelven a buscar esas raíces cuando la vida los rebasa. No siempre saben explicar lo que sienten; solo saben que algo no está bien. Don Jacinto los recibe sin juzgar, en español o como se sientan cómodos, y les ayuda a poner nombre a lo que cargan.',
    ],
    extraFaqs: [
      { q: '¿Lo que hace es parecido a las limpias que hacía mi abuela?', a: 'Nace de la misma raíz, sí. La diferencia es la formación: Don Jacinto se formó en la tradición de Catemaco, Veracruz, con décadas de práctica. Respeta esas costumbres familiares y las trabaja con seriedad y honestidad.' },
      { q: '¿Atiende temas de protección para los hijos y la familia?', a: 'Sí. Muchas familias de East LA llegan preocupadas por un hijo, por el ambiente del hogar o por una mala racha que afecta a todos. Don Jacinto evalúa cada caso y orienta sobre qué se puede trabajar.' },
      { q: '¿Tengo que hablar español perfecto para la consulta?', a: 'No. Llegan personas que crecieron aquí y mezclan los dos idiomas. Lo importante es que puedas contar lo que vives; el entendimiento y el respeto van por delante.' },
    ],
    extraNeighborhoods: ['Atlantic Blvd', 'Bandini', 'Garfield'],
  },

  'huntington-park': {
    extended: [
      'Huntington Park es una de las comunidades más mexicanas y centroamericanas del sureste de Los Ángeles. En Pacific Blvd se mezclan los acentos de Jalisco, de Usulután y de Huehuetenango, y con ellos llegan también las creencias de cada pueblo. Para muchos salvadoreños y guatemaltecos, lejos de su gente, encontrar a alguien que respete lo espiritual es un alivio. Don Jacinto Nahual atiende a todos por igual, sin importar de qué país vengan.',
      'Es una comunidad que trabaja duro: dobles turnos, fábricas, negocios familiares, dinero que se manda al país. Ese desgaste también pesa en el ánimo y en la fe. Cuando el cansancio se vuelve algo más profundo —una tristeza que no se va, una racha que no cede— vale la pena buscar orientación. Don Jacinto escucha sin prisa a quien siente que ya no puede más.',
    ],
    extraFaqs: [
      { q: 'Soy de El Salvador o Guatemala, ¿también me puede atender?', a: 'Por supuesto. A Don Jacinto llegan personas de toda Centroamérica. La tradición de Catemaco acompaña a quien la busca con respeto, sin importar su país de origen ni sus creencias.' },
      { q: 'Trabajo todo el día, ¿cómo hago para la consulta?', a: 'La atención es con cita para dedicarle tiempo a cada persona. Lo mejor es llamar o escribir por WhatsApp, contar brevemente tu situación y coordinar un momento que te funcione.' },
      { q: '¿Atiende temas de dinero y trabajo?', a: 'Sí. Muchas personas de Huntington Park llegan sintiendo que por más que trabajan, el dinero no rinde o las puertas se cierran. Don Jacinto evalúa el caso y orienta sobre qué se puede trabajar espiritualmente, sin prometer resultados.' },
    ],
    extraNeighborhoods: ['Maywood', 'Bell', 'Cudahy'],
  },

  'santa-ana': {
    extended: [
      'Santa Ana es el corazón latino del condado de Orange: una ciudad de mayoría mexicana rodeada de zonas mucho más acomodadas. Esa diferencia se siente, y muchas familias trabajadoras cargan no solo sus penas sino la sensación de remar contra la corriente. Don Jacinto Nahual ofrece un espacio donde esa herencia mexicana se honra sin prisa, con la calidez de la tradición de Catemaco.',
      'Aquí es común que varias generaciones vivan bajo el mismo techo, y que un problema —una separación, una enfermedad, una envidia— termine afectando a toda la familia. Don Jacinto entiende esa dinámica y escucha el caso completo, porque sabe que lo que le pasa a uno muchas veces pesa sobre todos.',
    ],
    extraFaqs: [
      { q: '¿Tengo que ir hasta Los Ángeles o atiende más cerca de Santa Ana?', a: 'La consulta es presencial. Muchas personas del condado de Orange hacen el viaje porque buscan a un curandero formado en la tradición de Catemaco. Lo mejor es escribir por WhatsApp para coordinar.' },
      { q: '¿Puede trabajar un caso que afecta a toda la familia?', a: 'Sí. Es común que una situación afecte a la pareja, a los hijos o al hogar entero. Don Jacinto escucha el caso completo y orienta con honestidad sobre lo que se puede hacer.' },
      { q: '¿Cómo reservo una consulta desde Santa Ana?', a: 'Puedes llamar o escribir por WhatsApp, contar brevemente lo que estás viviendo y coordinar tu cita. La atención es privada y sin compromiso.' },
    ],
    extraNeighborhoods: ['Delhi', 'Santa Anita', 'Willard'],
  },

  'compton': {
    extended: [
      'Compton cambió mucho en los últimos años: hoy es una comunidad de mayoría latina donde conviven familias mexicanas y centroamericanas con las raíces afroamericanas de siempre. Mucha gente llega buscando abrir camino —un mejor trabajo, un negocio propio, estabilidad— y a veces siente que algo invisible le cierra esas puertas una y otra vez.',
      'Don Jacinto Nahual conoce ese patrón: el de la persona esforzada a la que todo se le traba sin explicación. No promete milagros ni se aprovecha de quien sufre; escucha el caso, lo evalúa con honestidad y orienta sobre qué se puede trabajar desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Cómo sé si es envidia o solo mala suerte normal?', a: 'No siempre es fácil saberlo, y Don Jacinto no asusta a nadie con eso. En la consulta escucha tu situación con calma y evalúa, con honestidad, si detrás hay algo espiritual o no.' },
      { q: '¿Atiende a personas que no hablan mucho español?', a: 'Sí. Llega gente que mezcla inglés y español o que entiende más de lo que habla. Lo importante es que puedas contar lo que vives; el respeto va por delante.' },
      { q: '¿Qué tan lejos queda la consulta de Compton?', a: 'La consulta es presencial, en zona central de Los Ángeles, a un trayecto corto desde Compton. Lo mejor es coordinar por WhatsApp antes de ir.' },
    ],
    extraNeighborhoods: ['West Compton', 'Leland', 'Rancho Dominguez'],
  },

  'south-gate': {
    extended: [
      'South Gate es una ciudad de emprendedores: negocios familiares en Tweedy Boulevard, talleres, fondas, gente que apuesta sus ahorros por salir adelante. Cuando un negocio que arrancó con fuerza empieza a frenarse sin razón —clientes que dejan de llegar, deudas que se acumulan— muchos sienten que no es solo cosa de números.',
      'Aquí la confianza en el curanderismo viene del pueblo, de los padres y abuelos que llegaron de México. Don Jacinto Nahual continúa esa tradición de Catemaco para quienes prefieren un acompañamiento que entiende sus raíces y no los hace sentir raros por creer.',
    ],
    extraFaqs: [
      { q: 'Tengo un negocio que no levanta, ¿esto puede ayudar?', a: 'Don Jacinto escucha tu situación y evalúa si hay algo espiritual de por medio. No garantiza resultados de negocio; ofrece orientación honesta y trabajo espiritual para destrabar lo que sientes cerrado.' },
      { q: '¿Cómo coordino una consulta desde South Gate?', a: 'Llama o escribe por WhatsApp, cuenta brevemente lo que estás viviendo y se coordina la cita. La atención es privada, sin compromiso y con respeto.' },
    ],
    extraNeighborhoods: ['Bell Gardens', 'Lynwood', 'South San Gabriel'],
  },

  'inglewood': {
    extended: [
      'Inglewood vive una transformación acelerada: estadios nuevos, rentas que suben, vecinos de toda la vida que luchan por no tener que irse. En medio de tanto cambio, mucha gente siente que su casa ya no se siente igual, que las energías del hogar se enturbiaron o que algo los tiene inquietos sin saber por qué.',
      'Es una comunidad trabajadora y diversa, donde familias latinas y afroamericanas comparten las mismas preocupaciones: el trabajo, la salud, el techo. Don Jacinto Nahual ofrece un trabajo espiritual que busca devolver calma y claridad, especialmente a quien acaba de mudarse o siente que su espacio necesita una limpia.',
    ],
    extraFaqs: [
      { q: 'Me acabo de mudar y siento algo raro en mi casa, ¿puede hacer una limpia del hogar?', a: 'Sí. Es común sentir que un espacio nuevo "no se siente bien". Don Jacinto orienta sobre limpias del hogar para despejar el ambiente; primero escucha tu caso para entender qué conviene.' },
      { q: '¿Cómo sé si necesito una limpia o es solo estrés?', a: 'No siempre es fácil distinguirlo, y Don Jacinto no asusta a nadie. En la consulta escucha con calma y te dice con honestidad si ve algo espiritual o si es otra cosa.' },
    ],
    extraNeighborhoods: ['Fairview Heights', 'Darby Park', 'Inglewood Knolls'],
  },

  'san-fernando': {
    extended: [
      'El nordeste del Valle —San Fernando, Pacoima, Sylmar— es una de las zonas de raíz mexicana más arraigadas de Los Ángeles. Aquí las tradiciones se viven de cerca: las fiestas, los santos, las costumbres que llegaron del rancho y se quedaron. Por eso muchas familias del Valle confían en el curanderismo de toda la vida cuando algo se sale de lo común.',
      'Cuando alguien siente que le hicieron un trabajo —una mala racha que apareció de golpe, un amor que se enfrió sin motivo, una salud que no mejora— Don Jacinto Nahual primero escucha y evalúa con calma, sin alarmar. Solo entonces orienta sobre qué se puede trabajar, con la seriedad de la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Cómo sé si me hicieron un trabajo?', a: 'No siempre se sabe, y Don Jacinto nunca asusta para convencer. En la consulta escucha tu situación y evalúa con honestidad si detrás hay algo espiritual o no.' },
      { q: '¿Atiende a gente de Pacoima, Sylmar y el resto del Valle?', a: 'Sí. Llegan personas de San Fernando, Pacoima, Sylmar, Mission Hills y todo el nordeste del Valle. La consulta es presencial; lo mejor es coordinar por WhatsApp.' },
    ],
    extraNeighborhoods: ['San Fernando Mission', 'Maclay', 'Brand Park'],
  },
};
