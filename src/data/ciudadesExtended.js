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

  'montebello': {
    extended: [
      'Montebello es una de las ciudades de clase trabajadora mexicana más asentadas del sureste de Los Ángeles. Por Whittier Boulevard y Beverly Boulevard se ve esa mezcla de negocios familiares, panaderías y gente que llegó hace generaciones y echó raíces. Es una comunidad orgullosa de sus costumbres y, con ellas, de la fe y el curanderismo de toda la vida.',
      'Muchas personas de Montebello buscan a Don Jacinto cuando sienten que algo se les cerró sin explicación —el amor, el trabajo, la salud del ánimo— y quieren la orientación de alguien que entiende sus raíces. Él escucha cada caso con calma y honestidad, desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Montebello y el área de Whittier?', a: 'Sí. Llegan personas de Montebello, Pico Rivera, Whittier y todo el sureste de Los Ángeles. La consulta es presencial; lo mejor es coordinar por WhatsApp.' },
      { q: '¿La consulta es privada?', a: 'Totalmente. Lo que hables con Don Jacinto queda entre ustedes. Muchas personas valoran justamente esa discreción.' },
    ],
    extraNeighborhoods: ['Whittier Blvd', 'Beverly Blvd', 'Montebello Hills'],
  },

  'monterey-park': {
    extended: [
      'Monterey Park es conocida por su gran comunidad asiática, pero entre el Valle de San Gabriel también vive y trabaja mucha gente latina —en los negocios, los restaurantes y las familias de toda la vida. Para esa comunidad, encontrar a un curandero que respete sus costumbres mexicanas es un alivio en una zona donde no abunda.',
      'Don Jacinto atiende a quien llega de Monterey Park y los alrededores del Valle sintiendo que algo lo pesa o lo traba. Escucha sin juzgar y trabaja con la tradición de Catemaco, sea cual sea el origen de la persona.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas del Valle de San Gabriel?', a: 'Sí. Llegan personas de Monterey Park, Alhambra, San Gabriel y todo el valle. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Necesito creer en algo en particular?', a: 'No. Don Jacinto respeta la fe de cada quien. Lo importante es que cuentes tu situación con confianza.' },
    ],
    extraNeighborhoods: ['Atlantic Blvd', 'Garvey Ave', 'Monterey Highlands'],
  },

  'commerce': {
    extended: [
      'Commerce es una ciudad pequeña y muy trabajadora del sureste de Los Ángeles, rodeada de bodegas, fábricas y gente que sale adelante a base de turnos largos. Su comunidad es mayoritariamente mexicana y conserva de cerca las costumbres del pueblo, incluida la confianza en el curanderismo cuando algo no se explica.',
      'A Don Jacinto llegan personas de Commerce cansadas de cargar una mala racha que no termina, o que sienten que el trabajo y el dinero no rinden por más que se esfuerzan. Él evalúa cada caso con honestidad y orienta sobre qué se puede trabajar.',
    ],
    extraFaqs: [
      { q: '¿Atiende temas de trabajo y dinero?', a: 'Sí. Muchas personas de Commerce llegan sintiendo que por más que trabajan algo las frena. Don Jacinto evalúa si hay algo espiritual de por medio y orienta, sin prometer resultados.' },
      { q: '¿Trabajo mucho, hay forma de coordinar?', a: 'La atención es con cita. Escribe por WhatsApp, cuenta brevemente tu caso y se coordina un momento que te funcione.' },
    ],
    extraNeighborhoods: ['Bandini', 'Rosewood Park', 'Bristow'],
  },

  'gardena': {
    extended: [
      'Gardena es una ciudad diversa del South Bay donde conviven familias latinas, afroamericanas, japonesas y de muchos otros orígenes. En medio de esa mezcla, la comunidad latina mantiene vivas sus tradiciones y, con ellas, la costumbre de buscar una limpia o una orientación espiritual cuando la vida se complica.',
      'Don Jacinto recibe a personas de Gardena y el South Bay que sienten que algo invisible las traba —en el amor, la salud o la suerte— y prefieren un acompañamiento que entienda sus raíces. Lo hace con respeto y la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas del South Bay?', a: 'Sí. Llegan personas de Gardena, Torrance, Hawthorne y el South Bay. La consulta es presencial; lo mejor es coordinar por WhatsApp.' },
      { q: '¿Atiende aunque mezcle inglés y español?', a: 'Sí. Llega gente que creció aquí y mezcla los dos idiomas. Lo importante es que puedas contar lo que vives.' },
    ],
    extraNeighborhoods: ['Western Ave', 'Rosecrans', 'Moneta'],
  },

  'downey': {
    extended: [
      'Downey es una ciudad de clase media mexicana muy querida en el sureste de Los Ángeles: negocios familiares prósperos, casas cuidadas y gente que logró salir adelante sin olvidar de dónde viene. Esa comunidad conserva su fe y sus costumbres, y muchas familias acuden al curanderismo cuando algo en su vida se sale de lo normal.',
      'A Don Jacinto llegan personas de Downey que, aun teniéndolo "todo en orden", sienten un peso que no se explica —una relación que se enfrió, una racha de mala suerte, una preocupación que no se va. Él las escucha y trabaja su caso desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Downey y alrededores?', a: 'Sí. Llegan personas de Downey, Bellflower, Norwalk y el sureste de Los Ángeles. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Puede ayudar con problemas de pareja?', a: 'Sí, es uno de los temas más frecuentes. Don Jacinto escucha tu situación y te dice con honestidad qué se puede trabajar.' },
    ],
    extraNeighborhoods: ['Downtown Downey', 'Firestone Blvd', 'Rancho Estates'],
  },

  'san-pedro': {
    extended: [
      'San Pedro, junto al puerto de Los Ángeles, es un barrio de raíces obreras y de mar, con una comunidad latina fuerte mezclada con familias de tradición croata e italiana. Esa gente de trabajo duro —muchos ligados al puerto y la pesca— conserva sus creencias y busca orientación espiritual cuando la vida pega fuerte.',
      'Don Jacinto atiende a quien llega de San Pedro y el South Bay sintiendo que algo lo traba o que carga un peso que no se explica. Lo escucha sin juzgar y trabaja con la tradición de Catemaco, con total discreción.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de San Pedro y Wilmington?', a: 'Sí. Llegan personas de San Pedro, Wilmington, Harbor City y la zona del puerto. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿La consulta es confidencial?', a: 'Totalmente. Lo que hables queda entre tú y Don Jacinto.' },
    ],
    extraNeighborhoods: ['Downtown San Pedro', 'Point Fermin', 'Vinegar Hill'],
  },

  'santa-monica': {
    extended: [
      'Santa Mónica es una ciudad costera y acomodada del Westside, pero detrás de los hoteles y la playa hay una comunidad latina trabajadora enorme: las personas que sostienen los restaurantes, la limpieza, la construcción y los hogares de la zona. Esa gente, muchas veces lejos de su familia, también busca un espacio donde hablar de lo que le pesa.',
      'Don Jacinto recibe a quien llega de Santa Mónica y el Westside sintiendo que el ánimo, el amor o la suerte se le torcieron. Ofrece esa orientación espiritual cercana de la tradición de Catemaco, con respeto y sin juicios.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas que trabajan en Santa Mónica y el Westside?', a: 'Sí. Llegan personas de Santa Mónica, Venice, Culver City y todo el Westside. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Atienden en español?', a: 'Sí, la atención es en español. Puedes contar tu situación con confianza y con la tranquilidad de que te van a entender.' },
    ],
    extraNeighborhoods: ['Pico District', 'Ocean Park', 'Mid-City'],
  },

  'long-beach': {
    extended: [
      'Long Beach es una ciudad grande y diversa junto al puerto, con una de las comunidades latinas más numerosas del condado, además de fuerte presencia camboyana y afroamericana. Por el centro y el westside conviven negocios familiares, iglesias y la fe de toda la vida que muchas familias trajeron de México y Centroamérica.',
      'A Don Jacinto llegan personas de Long Beach con todo tipo de cargas —amor, trabajo, salud del ánimo, envidias— buscando una orientación honesta. Él escucha cada caso con calma y trabaja desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Long Beach?', a: 'Sí. Llegan personas de Long Beach, Lakewood, Signal Hill y la zona. La consulta es presencial; lo mejor es coordinar por WhatsApp.' },
      { q: '¿Puede ayudar si no sé qué me pasa?', a: 'Sí. Muchas personas llegan solo sintiendo que "algo no está bien". Don Jacinto escucha y te ayuda a poner nombre a lo que cargas.' },
    ],
    extraNeighborhoods: ['Downtown Long Beach', 'Cambodia Town', 'Westside', 'North Long Beach'],
  },

  'laguna-beach': {
    extended: [
      'Laguna Beach es una comunidad costera tranquila y acomodada del condado de Orange. Aun así, la vida no perdona a nadie: detrás de la postura, hay personas que cargan rupturas, pérdidas, ansiedad o una sensación de vacío que el dinero no llena, y que buscan un acompañamiento espiritual distinto al que conocían.',
      'Don Jacinto atiende a quien llega de Laguna Beach y la costa de Orange buscando claridad y calma desde la tradición de Catemaco. Escucha cada caso con respeto, sin prometer nada que no se pueda cumplir.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Laguna Beach y la costa de Orange?', a: 'Sí. Llegan personas de Laguna Beach, Dana Point y la costa sur del condado. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿La consulta es privada?', a: 'Totalmente. Lo que hables con Don Jacinto queda entre ustedes, con total discreción.' },
    ],
    extraNeighborhoods: ['Laguna Village', 'North Laguna', 'Top of the World'],
  },

  'covina': {
    extended: [
      'Covina, en el Valle de San Gabriel, es una comunidad de familias mexicanas asentadas, con su downtown de toda la vida y un fuerte sentido de tradición. Aquí las costumbres del pueblo —las fiestas, la fe, el respeto a lo espiritual— se viven de cerca, y con ellas la confianza en el curanderismo cuando algo se sale de lo común.',
      'A Don Jacinto llegan personas de Covina y el valle sintiendo que una mala racha no las suelta o que el amor se enfrió sin razón. Él evalúa cada caso con honestidad y trabaja desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas del Valle de San Gabriel?', a: 'Sí. Llegan personas de Covina, West Covina, Baldwin Park y todo el valle. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Qué es una limpia y para qué sirve?', a: 'Es un trabajo espiritual para retirar las energías pesadas que una persona carga. Don Jacinto la realiza con velas, hierbas y oración de la tradición de Catemaco.' },
    ],
    extraNeighborhoods: ['Downtown Covina', 'Charter Oak', 'Covina Hills'],
  },

  'anaheim': {
    extended: [
      'Más allá de los parques de diversiones, Anaheim es una de las ciudades con mayor población mexicana del condado de Orange. En barrios como Anaheim Anaheim y por la Anaheim Boulevard vive una comunidad trabajadora que conserva con fuerza sus tradiciones y su fe, y que recurre al curanderismo cuando la vida aprieta.',
      'A Don Jacinto llegan personas de Anaheim con preocupaciones de amor, trabajo y envidias, buscando la orientación de alguien que entiende sus raíces. Él escucha cada caso sin prisa y trabaja con la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Anaheim y el condado de Orange?', a: 'Sí. Llegan personas de Anaheim, Orange, Garden Grove y todo el condado. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Puede trabajar un caso de toda la familia?', a: 'Sí. Es común que una situación afecte a la pareja o a los hijos. Don Jacinto escucha el caso completo y orienta con honestidad.' },
    ],
    extraNeighborhoods: ['Anaheim Blvd', 'Ponderosa', 'Jeffrey-Lynne', 'West Anaheim'],
  },

  'irvine': {
    extended: [
      'Irvine es una ciudad planificada, próspera y muy diversa del condado de Orange, con grandes comunidades asiáticas y profesionales de todo el mundo. Entre tanta calma aparente, muchas personas —incluida la comunidad latina que trabaja y estudia en la zona— cargan estrés, soledad o relaciones que se rompieron, y buscan un acompañamiento espiritual con raíces.',
      'Don Jacinto atiende a quien llega de Irvine buscando claridad cuando la lógica y la rutina no alcanzan. Escucha cada caso con respeto, desde la tradición de Catemaco, sin prometer imposibles.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Irvine y el sur del condado de Orange?', a: 'Sí. Llegan personas de Irvine, Tustin, Lake Forest y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Necesito creer en algo en particular?', a: 'No. Don Jacinto respeta la fe de cada quien. Lo importante es que cuentes tu situación con confianza.' },
    ],
    extraNeighborhoods: ['Woodbridge', 'University Park', 'Northwood'],
  },

  'fullerton': {
    extended: [
      'Fullerton mezcla su universidad, su downtown histórico y barrios de familias trabajadoras mexicanas asentadas hace generaciones. Esa comunidad latina conserva sus costumbres y su fe, y muchas familias acuden al curanderismo de toda la vida cuando sienten que algo se les torció sin explicación.',
      'A Don Jacinto llegan personas de Fullerton buscando orientación cuando el amor, el trabajo o la salud del ánimo se complican. Él escucha cada caso con calma y honestidad, desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Fullerton y el norte del condado de Orange?', a: 'Sí. Llegan personas de Fullerton, Buena Park, La Habra y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿La consulta es confidencial?', a: 'Totalmente. Lo que hables con Don Jacinto queda entre ustedes.' },
    ],
    extraNeighborhoods: ['Downtown Fullerton', 'Raymond Hills', 'Sunny Hills'],
  },

  'garden-grove': {
    extended: [
      'Garden Grove es una ciudad muy diversa del condado de Orange, con una gran comunidad vietnamita junto a una población latina numerosa y trabajadora. Por sus calles conviven negocios familiares, templos y la fe de muchas familias mexicanas y centroamericanas que mantienen vivas sus tradiciones.',
      'A Don Jacinto llegan personas de Garden Grove con cargas de amor, trabajo y envidias, buscando una orientación honesta de alguien que entiende sus raíces. Él escucha cada caso y trabaja desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Garden Grove?', a: 'Sí. Llegan personas de Garden Grove, Westminster, Santa Ana y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Atienden en español?', a: 'Sí, la atención es en español, con la calidez de la tradición de Catemaco.' },
    ],
    extraNeighborhoods: ['Downtown Garden Grove', 'West Garden Grove', 'Garden Grove Blvd'],
  },

  'mission-viejo': {
    extended: [
      'Mission Viejo es una comunidad tranquila y acomodada del sur del condado de Orange. Aun en una zona así, la vida trae rupturas, pérdidas, ansiedad o esa sensación de que algo no fluye, y muchas personas buscan un acompañamiento espiritual distinto, con raíces, para entender lo que viven.',
      'Don Jacinto atiende a quien llega de Mission Viejo y el sur de Orange buscando claridad y calma desde la tradición de Catemaco. Escucha cada caso con respeto y sin prometer nada que no se pueda cumplir.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas del sur del condado de Orange?', a: 'Sí. Llegan personas de Mission Viejo, Lake Forest, Aliso Viejo y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿La consulta es privada?', a: 'Totalmente. Lo que hables con Don Jacinto queda entre ustedes, con total discreción.' },
    ],
    extraNeighborhoods: ['Lake Mission Viejo', 'La Paz', 'Aurora'],
  },

  'san-clemente': {
    extended: [
      'San Clemente es un pueblo costero de estilo español al sur del condado de Orange, tranquilo y acomodado. Detrás de esa calma, hay personas que cargan duelos, rupturas o una preocupación que no se va, y que buscan una orientación espiritual con raíces para encontrar paz.',
      'Don Jacinto recibe a quien llega de San Clemente y la costa sur buscando claridad desde la tradición de Catemaco. Escucha cada caso con respeto, con honestidad y total discreción.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de San Clemente y la costa sur?', a: 'Sí. Llegan personas de San Clemente, Dana Point, San Juan Capistrano y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Puede ayudar si no sé qué me pasa?', a: 'Sí. Muchas personas llegan solo sintiendo que algo no está bien. Don Jacinto escucha y te ayuda a entender lo que cargas.' },
    ],
    extraNeighborhoods: ['Pier Bowl', 'Talega', 'North Beach'],
  },

  'ontario': {
    extended: [
      'Ontario, en el Inland Empire, es una ciudad trabajadora con una gran comunidad mexicana ligada a las bodegas, el transporte y los negocios familiares que mueven la región. Es gente esforzada que conserva sus costumbres y su fe, y que confía en el curanderismo de toda la vida cuando algo se sale de lo común.',
      'A Don Jacinto llegan personas de Ontario sintiendo que el trabajo no rinde, que la mala suerte no las suelta o que el amor se enfrió. Él evalúa cada caso con honestidad y trabaja desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Ontario y el Inland Empire?', a: 'Sí. Llegan personas de Ontario, Pomona, Chino y el Inland Empire. La consulta es presencial; lo mejor es coordinar por WhatsApp.' },
      { q: '¿Atiende temas de trabajo y dinero?', a: 'Sí. Don Jacinto evalúa si hay algo espiritual frenando tu camino y orienta, sin prometer resultados.' },
    ],
    extraNeighborhoods: ['Downtown Ontario', 'Euclid Ave', 'Ontario Ranch'],
  },

  'san-bernardino': {
    extended: [
      'San Bernardino es una de las ciudades con mayor población latina del Inland Empire, una comunidad trabajadora y resistente que ha pasado por tiempos duros y sale adelante a base de esfuerzo. Esa gente conserva con fuerza su fe y sus tradiciones, incluida la confianza en el curandero cuando la vida pega.',
      'A Don Jacinto llegan personas de San Bernardino cargando mala racha, problemas de pareja o la sensación de que alguien les desea el mal. Él escucha cada caso con calma, evalúa con honestidad y trabaja desde la tradición de Catemaco.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de San Bernardino y el Inland Empire?', a: 'Sí. Llegan personas de San Bernardino, Rialto, Colton, Fontana y el Inland Empire. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Cómo sé si es envidia o solo mala suerte?', a: 'No siempre es fácil saberlo, y Don Jacinto no asusta a nadie. En la consulta escucha tu situación y evalúa con honestidad si hay algo espiritual detrás.' },
    ],
    extraNeighborhoods: ['Downtown San Bernardino', 'Arrowhead', 'Del Rosa', 'Muscoy'],
  },

  'buena-park': {
    extended: [
      'Buena Park es una ciudad diversa del norte del condado de Orange, con una comunidad latina numerosa junto a una fuerte presencia coreana. Entre sus barrios de familias trabajadoras se mantienen vivas las costumbres mexicanas y centroamericanas, y con ellas la confianza en el curanderismo de toda la vida.',
      'A Don Jacinto llegan personas de Buena Park buscando orientación cuando el amor, el trabajo o la salud del ánimo se complican. Él escucha cada caso con respeto y trabaja desde la tradición de Catemaco, con total discreción.',
    ],
    extraFaqs: [
      { q: '¿Atiende a personas de Buena Park y el norte del condado de Orange?', a: 'Sí. Llegan personas de Buena Park, Fullerton, La Palma y la zona. La consulta es presencial; coordina por WhatsApp.' },
      { q: '¿Puede ayudar con problemas de pareja?', a: 'Sí, es uno de los temas más frecuentes. Don Jacinto escucha tu situación y te dice con honestidad qué se puede trabajar.' },
    ],
    extraNeighborhoods: ['Downtown Buena Park', 'Los Coyotes', 'Crescent'],
  },
};
