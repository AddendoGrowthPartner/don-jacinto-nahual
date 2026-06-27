// Datos por ciudad para las landings /ciudad/[slug].
// Cada ciudad tiene contenido ÚNICO (meta, intro, contexto local, señales,
// preguntas frecuentes, CTA) para evitar contenido duplicado y mejorar el SEO.
// Las imágenes se asignan por rotación en la plantilla [slug].astro.

export const ciudades = [
  {
    slug: 'los-angeles',
    ciudad: 'Los Ángeles',
    region: 'Centro de Los Ángeles',
    metaTitle: 'Curandero en Los Ángeles | Don Jacinto',
    metaDescription:
      'Brujo curandero de Catemaco en Los Ángeles. Limpias, amarres de amor, protección contra envidias y orientación espiritual con respeto y total confidencialidad.',
    heroSub: 'Tradición de Catemaco para el corazón de la ciudad',
    intro:
      'Si estás en Los Ángeles y sientes que algo en tu vida se torció sin razón — una relación que se enfrió de la noche a la mañana, un negocio que no despega aunque trabajas sin parar, una enfermedad que los médicos no encuentran — no estás solo. Miles de familias latinas en Los Ángeles han pasado por lo mismo. Don Jacinto Nahual lleva más de 30 años resolviendo casos que parecían no tener solución. Llama hoy.',
    intro2:
      'En esta ciudad hay personas que llegaron con sueños y encontraron puertas cerradas que no saben cómo abrir. Una madre de East LA que perdió a su hijo en las drogas. Un empresario de Boyle Heights cuyo negocio quebró tres veces sin razón. Una mujer que vio cómo su matrimonio se destruyó de la noche a la mañana. Don Jacinto los escuchó. Los acompañó. Y algo cambió. Si tú también sientes que necesitas ayuda, él está disponible hoy.',
    neighborhoods: ['Downtown', 'Boyle Heights', 'Pico-Union', 'Koreatown', 'MacArthur Park', 'South LA'],
    localAngle:
      'En una ciudad tan grande y acelerada como Los Ángeles, es fácil sentir que uno carga solo con sus penas mientras el ruido no para. Desde Boyle Heights hasta Pico-Union, muchas familias latinas llegan buscando un espacio tranquilo donde hablar de lo que les pesa sin sentirse juzgadas. Don Jacinto ofrece ese acompañamiento con la tradición ancestral de Catemaco, cerca de MacArthur Park.',
    signals: [
      'Sientes que la ciudad te consume y no encuentras paz',
      'Discusiones constantes en casa que antes no existían',
      'Malestares que los doctores no logran explicar',
      'Una mala racha que se repite sin razón aparente',
    ],
    faqs: [
      { q: '¿Atiende a personas de toda el área de Los Ángeles?', a: 'Sí, recibe a personas de Downtown, Koreatown, South LA y toda la ciudad en su consultorio sobre Venice Blvd, cerca de Pico-Union.' },
      { q: '¿La consulta es privada?', a: 'Totalmente. Lo que se habla en consulta queda en consulta; el respeto y la confidencialidad son la base del trabajo.' },
      { q: '¿Necesito creer en algo en particular?', a: 'No se le pide a nadie que crea por obligación. Don Jacinto recibe a cada persona con respeto, sin juicios y desde su tradición.' },
    ],
    areasIntro: 'Don Jacinto atiende a familias de todos los rincones de Los Ángeles, desde el centro hasta los barrios del sur.',
    ctaLine: 'Si en medio del bullicio de Los Ángeles sientes que necesitas orientación, da el primer paso y agenda tu consulta con honestidad y discreción.',
  },
  {
    slug: 'east-la',
    ciudad: 'East LA',
    region: 'Este de Los Ángeles',
    metaTitle: 'Brujo en East LA | Don Jacinto Nahual',
    metaDescription:
      'Curandero de raíces mexicanas en East Los Ángeles. Limpias, trabajos de amor y protección espiritual con la tradición de Catemaco, cerca de Whittier Blvd.',
    heroSub: 'Raíces mexicanas que entienden tu historia',
    intro:
      'East Los Ángeles es tierra de familias mexicanas que conocen el valor de la tradición. Y en la tradición de nuestros pueblos, hay fuerzas que la medicina no ve y que solo el curandero puede tratar. Si llevas tiempo sufriendo algo que no tiene nombre — en el amor, en los negocios, en la salud — Don Jacinto Nahual, nacido en Catemaco, Veracruz, está aquí para ayudarte.',
    intro2:
      'En East LA, la comunidad mexicana sabe que hay cosas que solo el curandero puede tratar. Don Jacinto Nahual es de los nuestros — nacido en Catemaco, formado en la tradición ancestral, viviendo entre la comunidad latina de Los Ángeles. Si llevas tiempo sufriendo algo que no tiene nombre, cuéntaselo a alguien que entiende de verdad.',
    neighborhoods: ['Whittier Blvd', 'City Terrace', 'Maravilla', 'Belvedere', 'East LA Civic Center'],
    localAngle:
      'East Los Ángeles late con orgullo mexicano: las panaderías, los murales y las fiestas familiares cuentan una historia que Don Jacinto comprende de cerca. Por las calles de Whittier Blvd y los barrios de City Terrace y Maravilla, la fe y las costumbres ancestrales siguen vivas de generación en generación. Aquí su trabajo conecta con esas mismas raíces de respeto a lo espiritual.',
    signals: [
      'Sientes que una envidia ronda a tu familia',
      'El amor de pareja se enfrió de la noche a la mañana',
      'Pesadillas o intranquilidad que no te dejan descansar',
      'Todo se complica justo cuando las cosas iban bien',
    ],
    faqs: [
      { q: '¿Comprende las costumbres de las familias mexicanas?', a: 'Sí. Don Jacinto viene de Catemaco, Veracruz, y trabaja desde la misma tradición ancestral que muchas familias de East LA conocen y respetan.' },
      { q: '¿Qué es una limpia y para qué sirve?', a: 'Es un trabajo espiritual de la tradición de Catemaco para ayudar a liberar cargas y energías pesadas; busca acompañar tu bienestar, sin prometer milagros.' },
    ],
    areasIntro: 'Desde Maravilla hasta Whittier Blvd, Don Jacinto acompaña a la comunidad de East Los Ángeles en sus distintas necesidades.',
    ctaLine: 'Si en East LA sientes que algo te detiene, acércate con confianza; aquí encontrarás escucha sincera y la tradición de Catemaco.',
  },
  {
    slug: 'huntington-park',
    ciudad: 'Huntington Park',
    region: 'Sureste de LA',
    metaTitle: 'Curandero en Huntington Park | Limpias',
    metaDescription:
      'Brujo curandero en Huntington Park para amor, salud, caminos cerrados y protección contra envidias. Tradición de Catemaco con respeto y discreción, cerca de Pacific Blvd.',
    heroSub: 'Acompañamiento espiritual para tu día a día',
    intro:
      'En Huntington Park, como en muchas ciudades latinas, hay cosas que no se hablan abiertamente pero que todos conocen: el mal de ojo, la envidia, el amarre. Cuando sientes que algo así te afecta — que tu relación se destruyó, que tu negocio no prospera, que tu salud no mejora — Don Jacinto Nahual puede ayudarte. Más de 30 años resolviendo casos difíciles. Confidencial.',
    intro2:
      'En Huntington Park hay madres que lloran en silencio por sus hijos. Hombres que no entienden por qué su negocio no prospera. Parejas que se destruyeron sin razón aparente. Don Jacinto Nahual ha acompañado a familias de esta comunidad durante años. No con promesas vacías — con trabajo espiritual real y honesto. Si estás en Huntington Park y necesitas ayuda, hoy es el momento de llamar.',
    neighborhoods: ['Pacific Blvd', 'Walnut Park', 'Florence', 'Vernon', 'South Gate'],
    localAngle:
      'En Huntington Park, donde Pacific Blvd reúne a familias mexicanas y centroamericanas entre tiendas, fondas y el ir y venir del trabajo diario, no faltan quienes cargan preocupaciones de salud, dinero o desamor. Esa comunidad trabajadora valora la fe y las tradiciones de sus países de origen. Don Jacinto pone su experiencia de Catemaco al servicio de quienes buscan un respiro espiritual.',
    signals: [
      'El dinero no rinde por más que trabajas',
      'Te sientes apagado sin motivo claro',
      'Una relación que se distanció sin explicación',
      'Sensación de que alguien te desea el mal',
    ],
    faqs: [
      { q: '¿Atiende temas de trabajo y dinero?', a: 'Sí, acompaña a quienes sienten los caminos cerrados en lo laboral o económico, con orientación honesta y sin prometer resultados garantizados.' },
      { q: '¿Está cerca de Pacific Blvd?', a: 'El consultorio está sobre Venice Blvd en Los Ángeles, a corta distancia de Huntington Park y de zonas como Walnut Park y South Gate.' },
    ],
    areasIntro: 'Don Jacinto recibe a la comunidad de Huntington Park y zonas vecinas como Walnut Park, Florence y South Gate.',
    ctaLine: 'Si en Huntington Park sientes que necesitas un cambio, conversa con Don Jacinto y déjate orientar paso a paso.',
  },
  {
    slug: 'montebello',
    ciudad: 'Montebello',
    region: 'Sureste de LA',
    metaTitle: 'Limpias y Amarres en Montebello',
    metaDescription:
      'Curandero de Catemaco en Montebello: trabajos de amor, limpias, protección y orientación para caminos cerrados. Atención respetuosa y confidencial cerca de Beverly Blvd.',
    heroSub: 'Calma y orientación para tu familia',
    intro:
      'Hay personas en Montebello que cargan con un peso que no eligieron. Una mala racha que no termina. Un amor que se fue sin razón. Una enfermedad que los doctores no encuentran. Si eso te suena conocido, Don Jacinto Nahual quiere escucharte. Curandero de Catemaco con décadas de experiencia resolviendo casos que parecían imposibles. Atención confidencial.',
    intro2:
      'En Montebello hay familias unidas que de repente empiezan a desmoronarse sin razón. Discordias que aparecen de la nada. Hijos que cambian de personalidad. Negocios que quiebran cuando todo iba bien. Don Jacinto Nahual reconoce esas señales. Las ha visto durante más de 30 años. Y sabe cómo trabajarlas con la tradición espiritual de Catemaco. Si tu familia está pasando por algo así, llámalo hoy.',
    neighborhoods: ['Beverly Blvd', 'Montebello Town Center', 'Whittier Blvd', 'Pico Rivera', 'Bell Gardens'],
    localAngle:
      'Montebello mezcla el ambiente tranquilo de barrio con la vida comercial de Beverly Blvd y el Montebello Town Center, donde las familias latinas se reúnen y echan raíces. En medio de esa rutina de hogar, escuela y trabajo, a veces aparecen tensiones que no se resuelven solas. Don Jacinto ofrece un espacio sereno para hablar de ellas desde la tradición de Catemaco.',
    signals: [
      'Pleitos en casa que se repiten sin fin',
      'Te cuesta concentrarte y todo se siente cuesta arriba',
      'Un proyecto importante que no termina de cuajar',
      'Mala vibra que sientes pegada desde hace tiempo',
    ],
    faqs: [
      { q: '¿Ayuda con problemas de pareja?', a: 'Acompaña a quienes viven distanciamiento o desamor, ofreciendo orientación honesta; nunca promete forzar voluntades ni resultados asegurados.' },
      { q: '¿Cómo es la primera consulta?', a: 'Es una conversación tranquila y privada donde escucha tu situación y te explica con claridad de qué manera puede acompañarte.' },
    ],
    areasIntro: 'Desde el Montebello Town Center hasta los barrios vecinos de Pico Rivera y Bell Gardens, Don Jacinto está cerca de ti.',
    ctaLine: 'Si en Montebello buscas recuperar la armonía en tu hogar, acércate con confianza y conversemos sin compromiso.',
  },
  {
    slug: 'monterey-park',
    ciudad: 'Monterey Park',
    region: 'Valle de San Gabriel',
    metaTitle: 'Brujo Curandero en Monterey Park',
    metaDescription:
      'Curandero de tradición de Catemaco en Monterey Park. Limpias espirituales, trabajos de amor y protección contra envidias con respeto y discreción, cerca de Atlantic Blvd.',
    heroSub: 'Un puente entre culturas y tradiciones',
    intro:
      '¿Sientes que en Monterey Park llevas demasiado tiempo sufriendo algo que no tiene explicación? Relaciones que se rompen solas. Negocios que no levantan. Enfermedades que no ceden. En la tradición curanderil mexicana, estos casos tienen nombre y tienen solución. Don Jacinto Nahual lleva más de 30 años acompañando a familias que habían perdido la esperanza. Llama hoy.',
    intro2:
      'En Monterey Park hay personas que llegaron a este país con sueños y encontraron obstáculos invisibles. Don Jacinto Nahual ha visto que a veces esos obstáculos tienen raíz espiritual — envidia de personas cercanas, daños puestos sin que uno se dé cuenta, caminos cerrados que no abren con esfuerzo solo. Si sientes que eso describe tu situación, él puede evaluarlo y decirte con honestidad qué puede hacer.',
    neighborhoods: ['Atlantic Blvd', 'Garvey Ave', 'East LA', 'Alhambra', 'Rosemead'],
    localAngle:
      'Monterey Park es un cruce de culturas, donde la comunidad asiática y la latina conviven a lo largo de Atlantic Blvd y Garvey Ave entre comercios y restaurantes de todo el mundo. En esa diversidad, las personas que buscan la tradición espiritual mexicana encuentran en Don Jacinto a alguien que las recibe con la calidez de Catemaco. Su trabajo respeta cada historia y cada creencia.',
    signals: [
      'Te sientes fuera de lugar y sin rumbo',
      'Cargas un cansancio que el descanso no quita',
      'Oportunidades que se te escapan una y otra vez',
      'Inquietud constante que no logras explicar',
    ],
    faqs: [
      { q: '¿Atiende a personas de cualquier origen?', a: 'Sí. Don Jacinto recibe a todos con respeto y sin juicios, sin importar de dónde vengan ni en qué crean.' },
      { q: '¿Qué tan lejos queda de Monterey Park?', a: 'El consultorio está sobre Venice Blvd en Los Ángeles, a poca distancia de Monterey Park y zonas como Alhambra y Rosemead.' },
    ],
    areasIntro: 'Don Jacinto atiende a quienes lo buscan en Monterey Park y comunidades cercanas como Alhambra y Rosemead.',
    ctaLine: 'Si en Monterey Park sientes que necesitas reencontrar tu equilibrio, acércate con confianza y hablemos de tu situación.',
  },
  {
    slug: 'commerce',
    ciudad: 'Commerce',
    region: 'Sureste de LA',
    metaTitle: 'Curandero en Commerce | Don Jacinto',
    metaDescription:
      'Brujo curandero de Catemaco en Commerce. Limpias, protección espiritual y orientación para amor, salud y caminos cerrados con discreción, cerca del Citadel Outlets.',
    heroSub: 'Fuerza espiritual para la gente que trabaja',
    intro:
      '¿Sientes que en Commerce todo lo que intentas fracasa? ¿Que hay una fuerza invisible bloqueando tu camino — en el amor, en los negocios, en la salud? Don Jacinto Nahual ha visto casos así durante más de 30 años. Y los ha resuelto. Brujo curandero de Catemaco, Veracruz. Atención confidencial, sin compromisos y sin promesas falsas.',
    intro2:
      'En Commerce y sus alrededores hay familias que viven pegadas al trabajo y aun así no avanzan. Don Jacinto Nahual dice que cuando el esfuerzo no da resultados proporcionales, hay que mirar más allá de lo visible. La envidia, el mal puesto y los caminos cerrados son fuerzas reales que él ha tratado durante décadas. Si estás en Commerce y sientes que algo invisible te bloquea, llámalo hoy.',
    neighborhoods: ['Citadel Outlets', 'Bandini', 'Rosewood', 'Bell', 'Maywood'],
    localAngle:
      'Commerce es tierra de bodegas, fábricas y trabajo duro, donde la comunidad obrera latina madruga día tras día y los visitantes pasan por el Citadel Outlets. En esa jornada constante, el cansancio del cuerpo a veces viene acompañado de cargas del alma que pocos se atreven a nombrar. Don Jacinto ofrece a esta gente trabajadora un espacio para soltar el peso, con la tradición de Catemaco.',
    signals: [
      'Llegas agotado y nada parece avanzar',
      'Sientes que el trabajo se te cierra sin motivo',
      'Tensiones en casa por el estrés del día a día',
      'Una sombra de mala suerte que te persigue',
    ],
    faqs: [
      { q: '¿Tiene horarios para quien trabaja todo el día?', a: 'Lo mejor es comunicarse para coordinar una cita; Don Jacinto busca acomodar a quienes tienen jornadas largas de trabajo.' },
      { q: '¿La protección espiritual cómo funciona?', a: 'Es un trabajo de la tradición de Catemaco que busca acompañarte frente a envidias y malas energías; orienta con honestidad, sin prometer milagros.' },
    ],
    areasIntro: 'Don Jacinto acompaña a la comunidad trabajadora de Commerce y zonas vecinas como Bell, Maywood y Bandini.',
    ctaLine: 'Si en Commerce el trabajo te tiene agotado por dentro, acércate y déjate acompañar con respeto y discreción.',
  },
  {
    slug: 'inglewood',
    ciudad: 'Inglewood',
    region: 'Sur de Los Ángeles',
    metaTitle: 'Brujo Curandero en Inglewood | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco en Inglewood. Limpias, trabajos de amor y protección contra la envidia con respeto y discreción para tu familia.',
    heroSub: 'Tradición de Catemaco cerca de ti',
    intro:
      '¿Tu vida en Inglewood cambió de repente para mal? ¿Sientes que alguien te hizo daño? ¿Que la mala suerte te persigue sin importar lo que hagas? Don Jacinto Nahual ha ayudado a cientos de personas en el sur de Los Ángeles que sentían exactamente eso. Brujo curandero de Catemaco con décadas de experiencia. Sin promesas falsas. Solo trabajo espiritual genuino. Llama hoy.',
    intro2:
      'En Inglewood hay personas fuertes que no se rinden — pero que llevan demasiado tiempo cargando un peso que no eligieron. Un mal puesto. Una racha que no termina. Un amor que se perdió sin razón. Don Jacinto Nahual dice que nadie debería cargar solo con eso. Que hay solución. Que la tradición de Catemaco tiene respuestas para lo que la medicina y la lógica no pueden resolver. Llámalo hoy.',
    neighborhoods: ['Morningside Park', 'North Inglewood', 'Centinela', 'Lennox', 'Hollywood Park', 'Crenshaw'],
    localAngle:
      'Inglewood vive un cambio constante entre estadios nuevos, alquileres que suben y familias que luchan por quedarse en su barrio de siempre. En medio de tanto movimiento, muchas personas sienten que algo las traba o que las energías de su hogar ya no fluyen igual. El trabajo espiritual de Don Jacinto busca devolverte calma y claridad cuando todo alrededor parece acelerado.',
    signals: [
      'Sientes que tu casa quedó pesada después de una discusión fuerte',
      'El dinero entra y se va sin explicación',
      'Una relación se enfrió de un día para otro',
      'Sueños repetidos que te dejan inquieto al despertar',
    ],
    faqs: [
      { q: '¿Atienden a personas de Inglewood que no hablan mucho español?', a: 'La consulta es en español, pero puedes venir acompañado de un familiar que traduzca. Lo importante es que te sientas cómodo y comprendido.' },
      { q: '¿Qué tan lejos queda la consulta de Inglewood?', a: 'El consultorio está en 1208 Venice Blvd, en Los Ángeles, a corta distancia en auto desde Inglewood. Muchas personas de la zona llegan sin problema.' },
    ],
    areasIntro: 'Desde Inglewood, Don Jacinto acompaña a quienes buscan orientación en estas áreas de trabajo.',
    ctaLine: 'Si algo en tu vida o en tu hogar de Inglewood no se siente bien, conversa con Don Jacinto. Una primera plática puede ayudarte a entender qué está pasando.',
  },
  {
    slug: 'gardena',
    ciudad: 'Gardena',
    region: 'South Bay',
    metaTitle: 'Brujo Curandero en Gardena | Don Jacinto',
    metaDescription:
      'Curandero de Catemaco para Gardena: limpias, amparo contra el mal de ojo y orientación en asuntos de amor y trabajo. Atención confidencial y sin juicios.',
    heroSub: 'Sabiduría ancestral para tu camino',
    intro:
      'Si en Gardena sientes que alguien te desea el mal — que tu vida cambió drásticamente sin razón, que la mala suerte no te suelta, que todo lo que construiste se está derrumbando — Don Jacinto Nahual puede ayudarte. La envidia y el daño espiritual son reales, y tienen solución. Más de 30 años de práctica curanderil de Catemaco. Atención confidencial.',
    intro2:
      'En Gardena hay personas que sospechan que alguien cercano les desea el mal. Un familiar envidioso. Un socio que traicionó. Un ex que no acepta el fin de la relación. Don Jacinto Nahual trabaja la protección espiritual con la misma seriedad que cualquier otro caso. Si sientes que hay energías negativas afectando tu vida en Gardena, llámalo hoy. Confidencial.',
    neighborhoods: ['Western Avenue', 'Moneta Gardens', 'El Camino Village', 'Strawberry Park', 'Harbor Gateway', 'Alondra Park'],
    localAngle:
      'Gardena es una ciudad de barrios tranquilos donde conviven familias latinas y japonesas-americanas que valoran el respeto y la tradición. Esa misma gente trabajadora a veces carga preocupaciones silenciosas: una enfermedad que no afloja, un negocio sobre Western Avenue que no levanta. Don Jacinto ofrece un espacio reservado para hablar de eso sin sentirse juzgado.',
    signals: [
      'Cansancio que no se quita aunque descanses',
      'Pleitos en casa que aparecen de la nada',
      'Sientes envidia a tu alrededor en el trabajo',
      'Te cuesta tomar decisiones que antes eran fáciles',
    ],
    faqs: [
      { q: '¿Hay que creer en algo para que una limpia ayude?', a: 'No se te pide ninguna creencia en particular. Basta con tu disposición a abrirte y participar con respeto durante la consulta.' },
      { q: '¿Puedo llevar a un familiar enfermo de Gardena?', a: 'Sí, pero el trabajo de Don Jacinto es un acompañamiento espiritual y nunca reemplaza al médico. Se recomienda seguir también el tratamiento de su doctor.' },
    ],
    areasIntro: 'Para las familias de Gardena, el trabajo de Don Jacinto abarca las siguientes áreas.',
    ctaLine: 'Vives en Gardena y sientes que necesitas orientación. Acércate a Don Jacinto y platica con tranquilidad lo que traes cargando.',
  },
  {
    slug: 'compton',
    ciudad: 'Compton',
    region: 'Sur de Los Ángeles',
    metaTitle: 'Brujo Curandero en Compton | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco al servicio de Compton. Limpias, protección contra la brujería y apoyo en caminos cerrados de trabajo y dinero.',
    heroSub: 'Fuerza espiritual para gente trabajadora',
    intro:
      'La vida a veces golpea sin razón aparente. Una relación destruida. Un negocio cerrado. Una enfermedad sin nombre. Si en Compton sientes que algo más que mala suerte está afectando tu vida, Don Jacinto Nahual tiene la experiencia y la tradición de Catemaco para ayudarte. Confidencial. Sin juicios. No sigas cargando ese peso solo.',
    intro2:
      'En Compton la gente es fuerte. Pero hay situaciones que la fuerza sola no puede resolver. Si llevas tiempo con una mala racha que no termina — en el amor, en el trabajo, en la salud — puede que necesites ayuda espiritual. Don Jacinto Nahual ofrece orientación genuina, sin promesas falsas y sin aprovecharse de quien más lo necesita. Llama hoy y cuéntale tu caso.',
    neighborhoods: ['Downtown Compton', 'Richland Farms', 'Sunny Cove', 'Rosewood', 'Willowbrook', 'East Rancho Dominguez'],
    localAngle:
      'Compton es una comunidad de gente recia que sale adelante a base de esfuerzo, donde cada quien conoce el valor de no rendirse. Pero hasta el más fuerte llega a sentir que su camino se cierra: un trabajo que se pierde, una racha de mala suerte que no termina. Don Jacinto trabaja para ayudarte a destrabar lo que parece atorado y recuperar tu ánimo.',
    signals: [
      'Una mala racha que se alarga más de lo normal',
      'Oportunidades de trabajo que se caen a último momento',
      'Sensación de que alguien te desea el mal',
      'Te sientes bloqueado aunque le echas todas las ganas',
    ],
    faqs: [
      { q: '¿El trabajo para abrir caminos garantiza un empleo?', a: 'No existen los resultados garantizados. El trabajo busca despejar lo que te estorba y darte claridad, pero el esfuerzo y las decisiones siguen siendo tuyos.' },
      { q: '¿Todo lo que hable queda entre nosotros?', a: 'Sí, cada consulta es totalmente confidencial. Lo que compartas con Don Jacinto se queda en ese espacio, sin juicios.' },
    ],
    areasIntro: 'Para la comunidad de Compton, estas son las áreas en las que Don Jacinto puede acompañarte.',
    ctaLine: 'Si en Compton sientes que las puertas se te cierran, da el primer paso y habla con Don Jacinto sobre tu situación.',
  },
  {
    slug: 'south-gate',
    ciudad: 'South Gate',
    region: 'Sureste de Los Ángeles',
    metaTitle: 'Brujo Curandero en South Gate | Don Jacinto',
    metaDescription:
      'Curandero de Catemaco para South Gate: limpias, trabajos de amor y protección contra la envidia. Tradición mexicana cercana, discreta y respetuosa contigo.',
    heroSub: 'Raíces mexicanas que te acompañan',
    intro:
      'En South Gate hay familias que trabajan duro y aun así sienten que algo invisible les impide prosperar. Si ese eres tú — si tu amor se enfrió, tu negocio no levanta o tu salud no mejora — Don Jacinto Nahual quiere escucharte. Curandero mexicano de Catemaco con décadas de experiencia resolviendo lo que la medicina y la lógica no pueden. Llama hoy.',
    intro2:
      'En South Gate hay trabajadores que se esfuerzan sin ver resultados. Emprendedores que abren negocios que se cierran solos. Personas que sienten que no importa cuánto trabajen, algo los frena. Don Jacinto Nahual conoce ese patrón — y sabe que a veces tiene raíz espiritual. Si estás en South Gate y te identificas con eso, habla con él.',
    neighborhoods: ['Tweedy Boulevard', 'Hollydale', 'South Gate Park', 'Firestone', 'Walnut Park', 'Cudahy'],
    localAngle:
      'South Gate late con sangre mexicana en cada cuadra, desde los negocios familiares de Tweedy Boulevard hasta las reuniones de fin de semana en South Gate Park. Aquí las costumbres del pueblo siguen vivas, y con ellas la confianza en el curanderismo de toda la vida. Don Jacinto continúa esa tradición de Catemaco para quienes prefieren un acompañamiento que entiende sus raíces.',
    signals: [
      'Sientes que te hicieron un trabajo de envidia',
      'El amor en tu relación se apagó sin razón clara',
      'Malestares que el doctor no logra explicar del todo',
      'Una pesadez que cargas desde hace tiempo',
    ],
    faqs: [
      { q: '¿Qué es una limpia y para qué sirve?', a: 'Es un ritual tradicional para retirar energías pesadas y ayudarte a sentir mayor claridad y tranquilidad. No sustituye atención médica ni psicológica.' },
      { q: '¿Atienden a familias completas de South Gate?', a: 'Sí, puedes venir solo o acompañado de tu familia. Don Jacinto te orientará sobre la mejor forma de trabajar tu caso.' },
    ],
    areasIntro: 'Para los vecinos de South Gate, el trabajo de Don Jacinto se enfoca en estas áreas.',
    ctaLine: 'Desde South Gate, si sientes que algo te pesa o te traba, acércate con confianza a platicar con Don Jacinto.',
  },
  {
    slug: 'downey',
    ciudad: 'Downey',
    region: 'Sureste de Los Ángeles',
    metaTitle: 'Brujo Curandero en Downey | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco para Downey. Orientación en amor y parejas, limpias y protección espiritual con discreción y trato cercano.',
    heroSub: 'Acompañamiento sereno para tu bienestar',
    intro:
      'En Downey, como en toda comunidad latina, hay situaciones que van más allá de lo que la ciencia puede explicar. Si sientes que algo invisible bloquea tu prosperidad, tu amor o tu salud, Don Jacinto Nahual puede ayudarte a encontrar la raíz espiritual del problema y el camino para resolverlo. Más de 30 años de práctica genuina. Sin promesas falsas. Llama hoy.',
    intro2:
      'En Downey hay personas que lo tienen todo en apariencia — trabajo, familia, casa — pero sienten un vacío o una angustia que no desaparece. A veces esa sensación tiene raíz espiritual. Don Jacinto Nahual puede ayudarte a identificar si hay algo más detrás de lo que estás viviendo. Sin compromisos. Solo una conversación honesta con alguien que lleva décadas ayudando a familias como la tuya.',
    neighborhoods: ['Downtown Downey', 'Stonewood', 'North Downey', 'Rancho Estates', 'Florence Avenue', 'Paramount'],
    localAngle:
      'Downey combina la comodidad de una ciudad bien establecida con familias latinas que han construido aquí estabilidad y orgullo, desde Stonewood Center hasta sus calles arboladas. Aun con esa tranquilidad aparente, no faltan las tensiones de pareja, el estrés o esa sensación de vacío que cuesta nombrar. Don Jacinto ofrece un espacio sereno para mirar esas cargas con calma.',
    signals: [
      'Distancia inexplicable con tu pareja',
      'Ansiedad o desánimo sin un motivo claro',
      'Sientes que perdiste el rumbo o la motivación',
      'Repites patrones que no logras romper',
    ],
    faqs: [
      { q: '¿Los trabajos de amor obligan a alguien a quererme?', a: 'No se trata de obligar a nadie. El trabajo busca armonizar tu energía y abrir caminos, siempre desde el respeto a la voluntad de las personas.' },
      { q: '¿Es necesario agendar antes de ir desde Downey?', a: 'Es recomendable llamar antes para coordinar tu visita y que Don Jacinto pueda dedicarte el tiempo que tu caso requiere.' },
    ],
    areasIntro: 'Para quienes viven en Downey, Don Jacinto brinda acompañamiento en las siguientes áreas.',
    ctaLine: 'Si en Downey cargas algo que no te deja estar en paz, una conversación con Don Jacinto puede ser el inicio de tu bienestar.',
  },
  {
    slug: 'san-pedro',
    ciudad: 'San Pedro',
    region: 'South Bay / Puerto de LA',
    metaTitle: 'Brujo Curandero en San Pedro | Don Jacinto',
    metaDescription:
      'Curandero de Catemaco para San Pedro: limpias, protección contra el mal de ojo y apoyo en caminos cerrados. Tradición ancestral cercana a la zona del puerto.',
    heroSub: 'Calma frente al vaivén del puerto',
    intro:
      '¿Llevas tiempo en San Pedro con una situación que no mejora sin importar lo que hagas? A veces el problema no está donde lo buscamos. Don Jacinto Nahual, brujo curandero de Catemaco con más de 30 años de práctica, ha ayudado a cientos de personas del sur de Los Ángeles con casos de amor, protección, salud y caminos cerrados. Llama hoy.',
    intro2:
      'En San Pedro, junto a la bahía, hay personas que sienten que el mar se llevó su suerte. Negocios que no prosperan. Relaciones que naufragaron. Salud que no mejora. Don Jacinto Nahual ha acompañado a familias de comunidades portuarias que llegaron sin esperanza y encontraron orientación. Si estás en San Pedro y necesitas ayuda espiritual, él está disponible.',
    neighborhoods: ['Downtown San Pedro', 'Point Fermin', 'Vinegar Hill', 'Barton Hill', 'Cabrillo Beach', 'Wilmington'],
    localAngle:
      'San Pedro vive al ritmo del Puerto de Los Ángeles, con familias de pescadores, trabajadores de los muelles e inmigrantes que llegaron buscando un futuro mejor. Ese vaivén de mareas y turnos largos desgasta el cuerpo y el espíritu, y a veces deja a la gente con una pesadez difícil de soltar. Don Jacinto ofrece un alto para limpiar esa carga y reencontrar la calma.',
    signals: [
      'Te sientes agotado por dentro aunque duermas',
      'Mala suerte que parece seguirte a todos lados',
      'Tensión con la familia que no logras resolver',
      'Sensación de que tu protección espiritual está baja',
    ],
    faqs: [
      { q: 'Trabajo turnos largos en el puerto, ¿hay horarios flexibles?', a: 'Lo mejor es llamar para acordar un horario que se ajuste a tu jornada. Don Jacinto procura recibir a cada persona con el tiempo que merece.' },
      { q: '¿Qué incluye una limpia de protección?', a: 'Es un ritual tradicional para retirar energías negativas y reforzar tu amparo espiritual. Es un acompañamiento y no sustituye atención médica.' },
    ],
    areasIntro: 'Para la comunidad de San Pedro y la zona del puerto, Don Jacinto trabaja en estas áreas.',
    ctaLine: 'Si en San Pedro sientes que el cansancio o la mala racha te superan, acércate a Don Jacinto y platica tu caso con confianza.',
  },
  {
    slug: 'santa-monica',
    ciudad: 'Santa Mónica',
    region: 'Costa de Los Ángeles / Westside',
    metaTitle: 'Brujo Curandero en Santa Mónica | Don Jacinto',
    metaDescription:
      'Don Jacinto, brujo curandero de Catemaco, atiende a la comunidad latina de Santa Mónica con limpias, amparo en el amor y trabajos de protección, con total discreción.',
    heroSub: 'Tradición de Catemaco con discreción junto al mar',
    intro:
      'A veces el sufrimiento no tiene explicación lógica. Una pareja que se fue de la noche a la mañana. Un proyecto que siempre falla justo cuando estaba por funcionar. Una angustia que no desaparece sin razón. Si en Santa Mónica llevas tiempo con algo que no puedes resolver, Don Jacinto Nahual puede orientarte. Atención discreta, confidencial y sin compromisos.',
    intro2:
      'En Santa Mónica hay personas exitosas que en privado sufren situaciones que no pueden explicar a nadie. Una relación que se destruyó cuando todo parecía bien. Una angustia que no desaparece sin importar cuánto trabajen. Don Jacinto Nahual ofrece total discreción. Nadie sabrá que consultaste con él. Solo tú y él, con décadas de experiencia espiritual puestas al servicio de tu caso.',
    neighborhoods: ['Downtown Santa Monica', 'Ocean Park', 'Pico', 'Mid-City', 'Sunset Park', 'Wilshire-Montana'],
    localAngle:
      'En una ciudad costera tan abierta y concurrida como Santa Mónica, muchas personas buscan un espacio reservado donde hablar de lo que les pesa sin sentirse expuestas. Don Jacinto recibe a quienes viven o trabajan cerca del Third Street Promenade y la playa con la misma calma y el respeto de la tradición de Catemaco.',
    signals: [
      'Sientes que algo te frena aunque todo parezca ir bien',
      'Cargas un malestar que ningún médico ha podido explicar',
      'El amor se enfrió sin un motivo claro',
      'Buscas orientación sin que nadie se entere',
    ],
    faqs: [
      { q: '¿La consulta es privada si vivo en Santa Mónica?', a: 'Sí. Cada consulta es confidencial y sin juicios. Lo que se conversa queda entre usted y Don Jacinto.' },
      { q: '¿Tengo que ir hasta Catemaco para una limpia?', a: 'No. Don Jacinto atiende de forma presencial en Los Ángeles, a corta distancia de Santa Mónica, y trae consigo la tradición de Catemaco.' },
    ],
    areasIntro: 'Don Jacinto acompaña a personas de Santa Mónica y todo el Westside en temas de amor, salud, caminos cerrados, protección y limpias.',
    ctaLine: 'Si llevas tiempo cargando algo en silencio, puedes acercarte a conversarlo. Llama y agenda una consulta privada con Don Jacinto.',
  },
  {
    slug: 'long-beach',
    ciudad: 'Long Beach',
    region: 'Puerto / Sur de Los Ángeles',
    metaTitle: 'Brujo Curandero en Long Beach | Don Jacinto',
    metaDescription:
      'Limpias, trabajos de amor y protección contra la envidia en Long Beach. Don Jacinto, curandero de Catemaco, acompaña con respeto a la comunidad latina del puerto.',
    heroSub: 'Acompañamiento espiritual cerca del puerto',
    intro:
      'Hay un tipo de sufrimiento que no se puede explicar con palabras. Una relación que se destruyó sola. Un negocio que nunca despega. Una enfermedad que los médicos de Long Beach no encuentran. Cuando sientes que algo invisible está bloqueando tu vida, Don Jacinto Nahual tiene respuestas. Curandero de Catemaco con más de 30 años de práctica. Atención confidencial y sin juicios. Llama hoy.',
    intro2:
      'En Long Beach hay historias que no se cuentan en voz alta. La mujer que siente que le pusieron un amarre para alejarla de su familia. El hombre que perdió su negocio y su matrimonio en el mismo año sin entender por qué. Don Jacinto Nahual ha escuchado esas historias — y ha ayudado a resolverlas. Si tienes una historia así, él quiere escucharte. Sin juicios. Con respeto. Con más de 30 años de experiencia.',
    neighborhoods: ['Downtown Long Beach', 'Wrigley', 'Cambodia Town', 'North Long Beach', 'Westside', 'Belmont Shore'],
    localAngle:
      'Long Beach es una ciudad de trabajo duro, de gente del puerto y de barrios donde conviven muchas culturas. Entre tantas jornadas largas, no es raro sentir que la energía se agota o que algo de afuera empezó a estorbar; Don Jacinto ofrece un lugar tranquilo para revisarlo desde la tradición de Catemaco.',
    signals: [
      'Te levantas cansado sin razón aparente',
      'Las puertas del trabajo o el dinero se cierran una tras otra',
      'Notas envidias o malas intenciones a tu alrededor',
      'Quieres proteger a tu familia y tu hogar',
    ],
    faqs: [
      { q: '¿Atienden temas de trabajo y dinero en Long Beach?', a: 'Sí. Muchas personas del puerto llegan por caminos cerrados en lo laboral o económico, y Don Jacinto puede orientarte y acompañarte en ese proceso.' },
      { q: '¿Hacen trabajos contra la envidia?', a: 'Sí, se realizan limpias y trabajos de protección frente a la envidia y las malas intenciones, siempre con honestidad sobre lo que puede ayudar.' },
    ],
    areasIntro: 'En Long Beach, Don Jacinto trabaja temas de amor y parejas, malestares sin diagnóstico, caminos cerrados, protección contra la envidia y limpias.',
    ctaLine: 'Si sientes que algo de afuera te está afectando, no lo cargues solo. Comunícate con Don Jacinto y agenda tu consulta.',
  },
  {
    slug: 'laguna-beach',
    ciudad: 'Laguna Beach',
    region: 'Costa de Orange County',
    metaTitle: 'Brujo Curandero en Laguna Beach | Don Jacinto',
    metaDescription:
      'Don Jacinto, curandero de Catemaco, atiende con discreción a quienes viven en Laguna Beach: limpias, orientación en el amor y trabajos de protección personal.',
    heroSub: 'Discreción y tradición en la costa de Orange',
    intro:
      'Hay un tipo de sufrimiento que no se habla en voz alta. Una relación que se destruyó sola. Una angustia que no desaparece. Una mala racha que no tiene fin. Si en Laguna Beach llevas tiempo con algo así, Don Jacinto Nahual puede escucharte sin juicios. Curandero de Catemaco con más de 30 años resolviendo casos difíciles. Atención completamente confidencial.',
    intro2:
      'En Laguna Beach hay personas que tienen todo lo material pero sienten que algo esencial falta o se perdió. Una relación que ya no funciona. Una paz interior que desapareció. Una salud que no responde. Don Jacinto Nahual ofrece orientación espiritual discreta para personas de Laguna Beach que buscan respuestas donde la medicina y la psicología no las tienen. Atención confidencial.',
    neighborhoods: ['Downtown Laguna', 'North Laguna', 'Laguna Village', 'Top of the World', 'Bluebird Canyon', 'South Laguna'],
    localAngle:
      'Laguna Beach es una comunidad pequeña, artística y muy unida, donde la privacidad se valora tanto como la belleza de sus acantilados. Quienes buscan a Don Jacinto desde esta zona suelen pedir, ante todo, discreción para tratar asuntos del corazón o de salud que prefieren no compartir con nadie más.',
    signals: [
      'Sientes un vacío que no logras nombrar',
      'Una relación importante se complicó de pronto',
      'Cargas tensión o angustia sin causa médica',
      'Quieres reservar tu intimidad por completo',
    ],
    faqs: [
      { q: 'Vivo en Laguna Beach, ¿la atención es discreta?', a: 'Sí. La discreción es parte del trabajo de Don Jacinto; cada consulta es confidencial y se trata con total respeto.' },
      { q: '¿Pueden ayudar con tristeza o angustia sin diagnóstico?', a: 'Don Jacinto puede acompañarte y orientarte cuando hay un malestar sin explicación médica; escucha y trabaja desde la tradición, sin prometer curas.' },
    ],
    areasIntro: 'Don Jacinto recibe a personas de Laguna Beach y la costa de Orange County para temas de amor, salud, caminos cerrados, protección y limpias.',
    ctaLine: 'Si quieres conversar algo en un espacio reservado y sin juicios, Don Jacinto está para escucharte. Llama para agendar.',
  },
  {
    slug: 'covina',
    ciudad: 'Covina',
    region: 'Valle de San Gabriel',
    metaTitle: 'Brujo Curandero en Covina | Don Jacinto',
    metaDescription:
      'Limpias, trabajos de amor y protección en Covina. Don Jacinto, curandero de Catemaco, acompaña con respeto a las familias latinas del Valle de San Gabriel.',
    heroSub: 'Raíces de Catemaco para las familias del valle',
    intro:
      'En Covina y el Valle de San Gabriel, hay personas que llevan años sufriendo algo que no pueden explicar. Una relación que se destruyó sola. Un negocio que nunca despega. Una enfermedad que no cede. Don Jacinto Nahual, curandero de Catemaco con más de 30 años de práctica, puede ayudarte a encontrar el origen espiritual de tu situación y el camino para resolverla. Llama hoy.',
    intro2:
      'En Covina hay personas que llegaron al Valle de San Gabriel buscando estabilidad y encontraron todo lo contrario. Relaciones inestables. Trabajos que no duran. Salud que no mejora. Si llevas tiempo en esa situación, Don Jacinto Nahual quiere escucharte. No para prometerte milagros — sino para evaluarte con honestidad y decirte si hay algo espiritual detrás de lo que estás viviendo.',
    neighborhoods: ['Downtown Covina', 'Charter Oak', 'Covina Hills', 'West Covina', 'Citrus', 'Barranca'],
    localAngle:
      'Covina es un rincón suburbano del Valle de San Gabriel donde muchas familias mexicanas han echado raíces a lo largo de varias generaciones. Esa cercanía familiar también trae sus cargas, y Don Jacinto acompaña a quienes buscan reencontrar la armonía en la casa o en sus relaciones, con la tradición que aprendió en Catemaco.',
    signals: [
      'Hay pleitos o distancia dentro de la familia',
      'Sientes que tu hogar perdió la tranquilidad',
      'El amor o el matrimonio están enfriándose',
      'Cargas un malestar que viene de tiempo atrás',
    ],
    faqs: [
      { q: '¿Don Jacinto ayuda con problemas de pareja en Covina?', a: 'Sí. Acompaña y orienta en temas de amor y matrimonio, sin prometer resultados garantizados, pero con trabajo serio desde la tradición de Catemaco.' },
      { q: '¿Tengo que pedir cita o puedo llegar?', a: 'Lo mejor es llamar antes para agendar tu consulta y que Don Jacinto pueda atenderte con calma y dedicarte el tiempo que necesitas.' },
    ],
    areasIntro: 'En Covina y el Valle de San Gabriel, Don Jacinto atiende temas de amor, salud, caminos cerrados, brujería y limpias.',
    ctaLine: 'Si la paz de tu hogar o de tu relación se ha movido, puedes buscar orientación. Llama y agenda tu consulta con Don Jacinto.',
  },
  {
    slug: 'san-fernando',
    ciudad: 'San Fernando',
    region: 'Valle de San Fernando',
    metaTitle: 'Brujo Curandero en San Fernando | Don Jacinto',
    metaDescription:
      'Don Jacinto, curandero de Catemaco, acompaña a la comunidad mexicana de San Fernando con limpias, trabajos de amor, protección y orientación en caminos cerrados.',
    heroSub: 'Tradición mexicana en el corazón del valle',
    intro:
      'El Valle de San Fernando es tierra de familias trabajadoras que no se rinden fácil. Pero hay situaciones que el trabajo y la voluntad no pueden resolver solos. Si en San Fernando llevas tiempo sufriendo algo que no puedes explicar — en el amor, en los negocios, en la salud o en la familia — Don Jacinto Nahual está aquí para ayudarte. Más de 30 años de práctica espiritual genuina.',
    intro2:
      'En el Valle hay una tradición que los abuelos conocen bien: cuando la medicina no puede, el curandero sí puede. Don Jacinto Nahual honra esa tradición con décadas de práctica real. Ha visto casos de familias de San Fernando que nadie más pudo resolver — amores recuperados, caminos abiertos, enfermedades que cedieron cuando todo lo demás había fallado. Si llevas tiempo buscando ayuda, aquí la encontrarás.',
    neighborhoods: ['Downtown San Fernando', 'Sylmar', 'Pacoima', 'Mission Hills', 'Lake View Terrace', 'Arleta'],
    localAngle:
      'San Fernando es una de las comunidades de raíz mexicana más arraigadas del valle, donde las tradiciones y la fe se viven de cerca día con día. Por eso muchas personas de aquí buscan a Don Jacinto: porque conocen el valor de una limpia y de la palabra de un curandero que respeta esas costumbres de Catemaco.',
    signals: [
      "Sientes que te 'echaron algo' o que cargas mala suerte",
      'El dinero no rinde y todo se traba',
      'Buscas proteger a tu familia de la envidia',
      'Quieres una limpia para empezar de nuevo',
    ],
    faqs: [
      { q: '¿Hacen limpias tradicionales para gente de San Fernando?', a: 'Sí. La limpia es una de las prácticas centrales de Don Jacinto, hecha con el respeto y la tradición de Catemaco.' },
      { q: '¿Puede ayudar si siento que me hicieron un trabajo?', a: 'Don Jacinto puede revisar tu caso y orientarte con honestidad sobre lo que percibe y cómo acompañarte, sin prometer milagros.' },
    ],
    areasIntro: 'Don Jacinto atiende a la comunidad de San Fernando y el valle en temas de amor, malestares sin diagnóstico, caminos cerrados, protección y limpias.',
    ctaLine: 'Si sientes que algo te pesa o te detiene, acércate a conversarlo con confianza. Llama para agendar tu consulta con Don Jacinto.',
  },
  {
    slug: 'santa-ana',
    ciudad: 'Santa Ana',
    region: 'Condado de Orange',
    metaTitle: 'Brujo Curandero en Santa Ana | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco en Santa Ana. Limpias, trabajos de amor y orientación espiritual con respeto y total confidencialidad.',
    heroSub: 'Tradición de Catemaco en el corazón latino',
    intro:
      '¿Sientes que alguien te hizo un daño? ¿Tu pareja se alejó sin razón? ¿Tu negocio en Santa Ana no prospera aunque haces todo bien? Cuando la lógica no tiene respuesta, la tradición espiritual de Catemaco sí la tiene. Don Jacinto Nahual atiende a familias del condado de Orange con casos difíciles — amor, protección, salud y caminos cerrados. Confidencial. Sin compromisos.',
    intro2:
      'En Santa Ana hay familias que llevan años rezando por un cambio que no llega. Parejas separadas que no entienden por qué el amor se fue. Personas que sienten que alguien del trabajo o la familia les desea el mal. Don Jacinto Nahual no juzga. No promete lo que no puede cumplir. Pero sí escucha, evalúa y trabaja con honestidad. Si estás en Santa Ana y necesitas orientación espiritual, hoy es el día de dar el primer paso.',
    neighborhoods: ['Downtown Santa Ana', 'Floral Park', 'French Park', 'Logan', 'Madison Park', 'Artesia Pilar'],
    localAngle:
      'Santa Ana late con raíz mexicana, y por sus calles del Downtown camina gente que carga preocupaciones de amor, salud y trabajo. Don Jacinto ofrece un espacio cercano donde esa herencia espiritual se honra sin prisa ni juicios, con la calidez de Catemaco.',
    signals: [
      'Sientes que algo te bloquea sin explicación',
      'El amor se enfrió de un día para otro',
      'Cargas con envidias del trabajo',
      'Buscas una limpia que te devuelva la calma',
    ],
    faqs: [
      { q: '¿Atienden en español en Santa Ana?', a: 'Sí, todas las consultas se realizan en español y con la calidez de la tradición de Catemaco.' },
      { q: '¿Puede ayudarme si no sé qué me pasa?', a: 'Sí, una limpia y una lectura pueden orientar cuando hay malestar sin causa clara; es un acompañamiento, no una promesa de resultados.' },
    ],
    areasIntro: 'En Santa Ana, Don Jacinto acompaña en asuntos de amor, salud sin diagnóstico, caminos cerrados, brujería y limpias.',
    ctaLine: 'Si vives en Santa Ana y sientes que necesitas orientación, comunícate con Don Jacinto para agendar tu consulta privada.',
  },
  {
    slug: 'anaheim',
    ciudad: 'Anaheim',
    region: 'Condado de Orange',
    metaTitle: 'Curandero en Anaheim | Don Jacinto Nahual',
    metaDescription:
      'Consulta con Don Jacinto Nahual en Anaheim: limpias, protección contra envidias y acompañamiento en asuntos de amor desde la tradición de Catemaco.',
    heroSub: 'Acompañamiento espiritual cerca de ti',
    intro:
      '¿Llevas meses o años con una situación que no mejora? ¿Sientes que en Anaheim todo lo que intentas fracasa — el amor, el trabajo, la salud? No sigas cargando ese peso solo. Don Jacinto Nahual, brujo curandero de Catemaco, ha acompañado a cientos de personas del condado de Orange que llegaron sin esperanza y encontraron el camino de regreso a su vida. Llama hoy.',
    intro2:
      'En Anaheim hay personas que han buscado ayuda en todos lados — médicos, psicólogos, consejeros — y siguen sufriendo. Si ese eres tú, Don Jacinto Nahual puede ofrecerte algo diferente: la sabiduría espiritual de Catemaco aplicada a tu caso específico. Sin fórmulas. Sin promesas vacías. Solo la experiencia de décadas al servicio de quien más lo necesita. Llama hoy y cuéntale tu situación.',
    neighborhoods: ['Anaheim Central', 'West Anaheim', 'Anaheim Colony', 'Downtown Anaheim', 'Ponderosa', 'Citrus District'],
    localAngle:
      'Más allá del bullicio turístico, Anaheim guarda una comunidad mexicana trabajadora que sostiene su fe y sus costumbres. Don Jacinto recibe a quienes buscan recuperar la tranquilidad cuando la vida diaria se llena de cargas invisibles, con el respeto de la tradición de Catemaco.',
    signals: [
      'Discusiones constantes en casa sin motivo',
      'Negocio o empleo que no avanza',
      'Pesadillas o intranquilidad nocturna',
      'Sensación de mala suerte que te persigue',
    ],
    faqs: [
      { q: '¿Cómo es una primera consulta?', a: 'Es una conversación tranquila donde escucha tu situación y valora qué trabajo o limpia puede ayudarte, siempre con respeto.' },
      { q: '¿Trabajan temas de dinero y negocios?', a: 'Sí, atiende caminos cerrados relacionados con el trabajo y el dinero, brindando orientación sin garantizar resultados.' },
    ],
    areasIntro: 'En Anaheim se atienden asuntos de pareja, enfermedades sin diagnóstico, prosperidad, protección contra envidias y limpias.',
    ctaLine: 'Desde cualquier punto de Anaheim puedes acercarte a Don Jacinto; escríbele o llama para reservar tu cita con discreción.',
  },
  {
    slug: 'irvine',
    ciudad: 'Irvine',
    region: 'Condado de Orange',
    metaTitle: 'Curandero Espiritual en Irvine | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual atiende en Irvine con total discreción: limpias, equilibrio personal y orientación en el amor desde la sabiduría de Catemaco.',
    heroSub: 'Discreción y equilibrio para tu camino',
    intro:
      'Irvine es una ciudad de personas que trabajan duro y esperan resultados. Pero hay situaciones que el esfuerzo solo no puede resolver — una relación que se destruyó sin razón, una salud que no mejora, una angustia que no desaparece. Don Jacinto Nahual ofrece orientación espiritual confidencial para personas de Irvine que buscan respuestas donde otros no las tienen.',
    intro2:
      'En Irvine hay profesionales exitosos que en privado sufren situaciones que no entienden. Una relación perfecta que se destruyó de la noche a la mañana. Un negocio próspero que empezó a fallar sin razón. Una angustia que no desaparece. Don Jacinto Nahual ofrece total discreción y confidencialidad para personas de Irvine que buscan orientación espiritual sin exponerse.',
    neighborhoods: ['Woodbridge', 'University Park', 'Turtle Rock', 'Northwood', 'Westpark', 'Quail Hill'],
    localAngle:
      'Irvine es una ciudad de profesionales y familias que valoran la privacidad por encima de todo. Para quienes viven con el ritmo exigente de esta zona, Don Jacinto ofrece un espacio reservado donde reencontrar calma interior y claridad, con la tradición de Catemaco.',
    signals: [
      'Estrés que no te deja descansar',
      'Sensación de estancamiento pese al esfuerzo',
      'Relaciones que se enfrían sin razón',
      'Necesidad de equilibrio y protección',
    ],
    faqs: [
      { q: '¿Se respeta mi privacidad?', a: 'Por completo. Cada consulta es confidencial y se maneja con la máxima discreción, sin juicios.' },
      { q: '¿Las limpias sirven para el estrés y la carga emocional?', a: 'Una limpia busca aliviar pesadez y renovar tu energía; es un acompañamiento espiritual, no un sustituto de atención médica.' },
    ],
    areasIntro: 'En Irvine, Don Jacinto orienta en equilibrio personal, asuntos de amor, caminos cerrados, protección y limpias.',
    ctaLine: 'Si en Irvine buscas un acompañamiento discreto y respetuoso, contacta a Don Jacinto para coordinar tu consulta privada.',
  },
  {
    slug: 'fullerton',
    ciudad: 'Fullerton',
    region: 'Condado de Orange',
    metaTitle: 'Brujo Curandero en Fullerton | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual en Fullerton: limpias, trabajos de amor y protección espiritual con la tradición de Catemaco, cerca de la comunidad latina.',
    heroSub: 'Raíces de Catemaco junto a tu comunidad',
    intro:
      '¿Llevas tiempo en Fullerton con una situación que parece no tener salida? Amor perdido. Negocio bloqueado. Salud que no mejora. Cuando la medicina y la lógica no tienen respuesta, la tradición curanderil de Catemaco sí puede tenerla. Don Jacinto Nahual lleva más de 30 años acompañando a familias del condado de Orange que habían perdido la esperanza.',
    intro2:
      'En Fullerton hay familias latinas que mantienen vivas sus tradiciones — incluyendo la de buscar orientación espiritual cuando la vida se pone difícil. Don Jacinto Nahual honra esa tradición con décadas de práctica real en la escuela de Catemaco. Si en Fullerton llevas tiempo con una situación que no mejora — en el amor, los negocios o la salud — él puede ayudarte. Llama hoy.',
    neighborhoods: ['Downtown Fullerton', 'Raymond Hills', 'Sunny Hills', 'Amerige Heights', 'Golden Hill', 'Fullerton College'],
    localAngle:
      'Fullerton reúne a estudiantes, familias latinas y vecinos coreanos en un ambiente diverso y abierto. En medio de esa mezcla, Don Jacinto mantiene viva una tradición curandera para quienes buscan apoyo espiritual genuino desde Catemaco.',
    signals: [
      'Ansiedad antes de decisiones importantes',
      'Amor que no termina de cuajar',
      'Mala racha que no se explica',
      'Sensación de envidia a tu alrededor',
    ],
    faqs: [
      { q: '¿Atienden a estudiantes y jóvenes?', a: 'Sí, recibe a personas de todas las edades que buscan orientación en el amor, los estudios o el bienestar personal.' },
      { q: '¿Qué incluye una limpia?', a: 'Una limpia tradicional busca despejar energías pesadas y renovar tu ánimo; cada caso se valora de manera personal.' },
    ],
    areasIntro: 'En Fullerton se acompaña en temas de amor, salud sin diagnóstico, caminos cerrados, brujería y limpias.',
    ctaLine: 'Vecino de Fullerton, si necesitas orientación espiritual, comunícate con Don Jacinto para agendar una cita tranquila y privada.',
  },
  {
    slug: 'garden-grove',
    ciudad: 'Garden Grove',
    region: 'Condado de Orange',
    metaTitle: 'Curandero en Garden Grove | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual atiende en Garden Grove: limpias, orientación en el amor y protección contra envidias con la tradición curandera de Catemaco.',
    heroSub: 'Apoyo espiritual para tu familia',
    intro:
      'En Garden Grove, como en toda comunidad latina, hay cosas que se sienten pero no se pueden explicar. Una mala racha que no termina. Un amor que se perdió de repente. Una enfermedad sin nombre. Don Jacinto Nahual, brujo curandero de Catemaco con décadas de experiencia, puede ayudarte a entender qué está pasando y qué se puede hacer. Confidencial.',
    intro2:
      'En Garden Grove hay una comunidad latina diversa que conoce el valor de la fe y la tradición espiritual. Don Jacinto Nahual ha acompañado a familias de Garden Grove con casos de amor, protección y salud que parecían no tener solución. Si llevas tiempo buscando ayuda y no la has encontrado, quizás es momento de intentar algo diferente.',
    neighborhoods: ['Garden Grove West', 'Little Saigon', 'Historic Main Street', 'West Grove', 'Buena-Clinton', 'Garden Park'],
    localAngle:
      'Garden Grove es un cruce de culturas, con Little Saigon y una sólida presencia latina conviviendo puerta con puerta. Don Jacinto recibe a las familias mexicanas que mantienen sus creencias y buscan paz en medio de la vida cotidiana, con la calidez de Catemaco.',
    signals: [
      'Pleitos familiares que no cesan',
      'Sensación de carga al entrar a casa',
      'El dinero se va sin saber a dónde',
      'Necesitas protección para los tuyos',
    ],
    faqs: [
      { q: '¿Pueden ayudar con problemas en el hogar?', a: 'Sí, atiende tensiones familiares y limpias del hogar para favorecer la armonía, siempre como acompañamiento espiritual.' },
      { q: '¿Es necesario creer para que funcione?', a: 'La fe ayuda, pero recibe a cada persona con respeto, sin presionar ni juzgar sus creencias.' },
    ],
    areasIntro: 'En Garden Grove, Don Jacinto trabaja asuntos de pareja, enfermedades sin diagnóstico, prosperidad, protección y limpias.',
    ctaLine: 'Si vives en Garden Grove y buscas tranquilidad para ti y tu familia, escribe o llama a Don Jacinto para tu consulta.',
  },
  {
    slug: 'mission-viejo',
    ciudad: 'Mission Viejo',
    region: 'Sur del Condado de Orange',
    metaTitle: 'Brujo Curandero en Mission Viejo | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco, atiende en Mission Viejo: limpias, amor y parejas, protección contra envidias. Acompañamiento discreto y respetuoso.',
    heroSub: 'Tradición de Catemaco con discreción y respeto',
    intro:
      'Hay situaciones que ningún médico, psicólogo o abogado puede resolver. Si en Mission Viejo sientes que algo espiritual está afectando tu vida — tu amor, tu prosperidad o tu salud — Don Jacinto Nahual puede orientarte. Curandero de Catemaco con más de 30 años de práctica genuina. Atención discreta y completamente confidencial.',
    intro2:
      'En Mission Viejo hay personas que buscan orientación espiritual con discreción. Don Jacinto Nahual entiende esa necesidad. Cada caso se trata con total confidencialidad — nadie sabrá que lo consultaste. Si en Mission Viejo llevas tiempo con una situación en el amor, los negocios o la salud que no encuentras cómo resolver, él puede orientarte. Sin compromisos.',
    neighborhoods: ['Aliso Viejo', 'Laguna Niguel', 'Lake Forest', 'Rancho Santa Margarita', 'Mission Viejo Lake', 'Coto de Caza'],
    localAngle:
      'En una comunidad tan tranquila y reservada como Mission Viejo, muchas familias buscan orientación espiritual sin perder su privacidad. Don Jacinto recibe a quienes llegan desde los alrededores de los lagos y vecindarios cercanos con la misma calidez y el mismo respeto a la confidencialidad. Aquí no hay juicios, solo acompañamiento.',
    signals: [
      'Cuando el corazón pesa y no sabes por qué',
      'Si sientes que algo bloquea tu camino',
      'Cuando una relación necesita claridad',
      'Si buscas tranquilidad para tu hogar',
    ],
    faqs: [
      { q: '¿Atiende a personas de Mission Viejo de forma privada?', a: 'Sí. Cada consulta se trata con total confidencialidad y sin juicios, respetando siempre la privacidad de quien llega desde Mission Viejo y sus alrededores.' },
      { q: '¿Necesito una cita previa?', a: 'Se recomienda comunicarse antes para acordar un horario, así Don Jacinto puede dedicarle el tiempo y la atención que merece.' },
    ],
    areasIntro: 'Don Jacinto acompaña a familias de Mission Viejo y del sur del condado en temas de amor, salud, caminos cerrados y protección.',
    ctaLine: 'Si vive en Mission Viejo y siente que necesita orientación, puede comunicarse con Don Jacinto para conversar con calma sobre su situación.',
  },
  {
    slug: 'san-clemente',
    ciudad: 'San Clemente',
    region: 'Costa Sur de Orange County',
    metaTitle: 'Curandero en San Clemente | Don Jacinto',
    metaDescription:
      '¿Buscas un brujo curandero en San Clemente? Don Jacinto ofrece limpias, ayuda en el amor y protección contra la envidia, con la tradición de Catemaco y total discreción.',
    heroSub: 'Calma frente al mar, raíces de Catemaco',
    intro:
      '¿Sientes que en San Clemente tu vida tomó un rumbo que no elegiste? Una relación destruida. Un camino bloqueado. Una salud que no responde. Don Jacinto Nahual, brujo curandero nacido en Catemaco, Veracruz, ha acompañado a cientos de personas de la costa sur del condado de Orange que llegaron sin esperanza. Hoy tienen su vida de regreso. Llama.',
    intro2:
      'En San Clemente y la costa sur del condado de Orange hay personas que viven bien en apariencia pero cargan con un sufrimiento que no pueden compartir con nadie. Don Jacinto Nahual es ese espacio seguro donde puedes contar lo que no le cuentas a nadie más. Con décadas de experiencia y total discreción, él puede ayudarte a entender qué está pasando y qué camino seguir. Llama hoy.',
    neighborhoods: ['Talega', 'San Clemente Pier', 'Capistrano Beach', 'Dana Point', 'Forster Ranch', 'Rancho San Clemente'],
    localAngle:
      'San Clemente vive al ritmo del mar y de su pueblo costero, pero detrás de esa calma también hay quien carga preocupaciones del corazón o del hogar. Don Jacinto recibe con discreción a personas de la zona del pier y los vecindarios cercanos que buscan reencontrar su paz. La cercanía al agua invita a soltar lo que ya no sirve.',
    signals: [
      'Cuando la calma de afuera no llega adentro',
      'Si una relación se siente a la deriva',
      'Cuando arrastras un peso que no se va',
      'Si sientes envidias rondando tu vida',
    ],
    faqs: [
      { q: '¿Trabaja temas de pareja para personas de San Clemente?', a: 'Sí. Don Jacinto ofrece acompañamiento y orientación en asuntos de amor y parejas, siempre con honestidad y sin prometer resultados garantizados.' },
      { q: '¿Qué es una limpia y para qué sirve?', a: 'Es un ritual tradicional de Catemaco para ayudar a despejar energías pesadas y buscar bienestar; es un acompañamiento, no una cura milagrosa.' },
    ],
    areasIntro: 'En San Clemente, Don Jacinto atiende consultas de amor, enfermedades sin diagnóstico, negocios estancados, brujería y limpias.',
    ctaLine: 'Desde San Clemente puede acercarse a Don Jacinto cuando sienta que necesita despejar el camino y recuperar su tranquilidad.',
  },
  {
    slug: 'ontario',
    ciudad: 'Ontario',
    region: 'Inland Empire',
    metaTitle: 'Brujo Curandero en Ontario CA | Don Jacinto',
    metaDescription:
      'Don Jacinto Nahual, curandero de Catemaco, atiende a la comunidad mexicana de Ontario: limpias, amor, caminos cerrados en negocios y protección contra envidias.',
    heroSub: 'Para la comunidad trabajadora del Inland Empire',
    intro:
      'En Ontario y el Inland Empire, hay personas que trabajan duro y aun así nada les sale bien. Negocios que no levantan. Relaciones que se destruyen solas. Salud que no mejora. Si sientes que hay una fuerza invisible bloqueando tu vida, Don Jacinto Nahual puede ayudarte. Viene de Catemaco, Veracruz — la tierra de los curanderos — y lleva décadas ayudando a familias que ya habían perdido la esperanza.',
    intro2:
      'En el Inland Empire hay familias que vinieron a este país a construir algo mejor — y sienten que una fuerza invisible se los impide. Don Jacinto Nahual conoce esa frustración. Ha acompañado a familias de Ontario, Fontana y Riverside que tocaron fondo y encontraron el camino de regreso. Si sientes que tu situación no tiene salida, llámalo.',
    neighborhoods: ['Ontario Ranch', 'Downtown Ontario', 'Creekside', 'Ontario Mills', 'Euclid', 'Montclair'],
    localAngle:
      'Ontario late al ritmo del trabajo: almacenes, logística y largas jornadas para sacar a la familia adelante. Entre tanto esfuerzo, a veces los caminos del dinero o del negocio parecen cerrarse sin razón. Don Jacinto entiende a la comunidad mexicana de la zona y la acompaña con la tradición de Catemaco y mucho respeto.',
    signals: [
      'Cuando el trabajo se traba sin explicación',
      'Si el dinero entra pero no rinde',
      'Cuando sientes envidia en el ambiente laboral',
      'Si el cansancio del cuerpo no se va',
    ],
    faqs: [
      { q: '¿Puede ayudar con caminos cerrados en el negocio?', a: 'Don Jacinto ofrece orientación y limpias para quienes sienten que su negocio o sus finanzas están estancados; es acompañamiento, sin garantizar resultados.' },
      { q: '¿Atiende a familias de habla hispana de Ontario?', a: 'Sí. La consulta es en español, con calidez y respeto a la comunidad mexicana y latina de Ontario y ciudades vecinas.' },
    ],
    areasIntro: 'Don Jacinto trabaja con la comunidad de Ontario en temas de amor, salud, caminos cerrados en negocios, protección y limpias.',
    ctaLine: 'Si en Ontario siente que los caminos se le han cerrado, puede comunicarse con Don Jacinto para buscar juntos un poco de claridad.',
  },
  {
    slug: 'san-bernardino',
    ciudad: 'San Bernardino',
    region: 'Inland Empire',
    metaTitle: 'Curandero en San Bernardino | Don Jacinto Nahual',
    metaDescription:
      'Don Jacinto Nahual atiende a la comunidad latina de San Bernardino con limpias, ayuda en el amor, protección contra la envidia y la tradición curandera de Catemaco.',
    heroSub: 'Acompañamiento honesto para la gente trabajadora',
    intro:
      'Si en San Bernardino sientes que la vida te cerró todas las puertas — en el amor, en el trabajo, en la salud — puede que haya algo espiritual detrás. La envidia, el mal puesto y los caminos cerrados son reales en la tradición mexicana. Don Jacinto Nahual los ha visto y los ha resuelto durante más de 30 años. No esperes más.',
    intro2:
      'En San Bernardino hay personas que han rezado sin cesar y sienten que sus oraciones no llegan. Don Jacinto Nahual cree que a veces hay obstáculos espirituales que bloquean incluso la oración. Su trabajo es identificar esos obstáculos y abrir el camino. Si en San Bernardino llevas tiempo pidiendo un cambio que no llega, quizás es momento de buscar ayuda espiritual de otra manera. Llama hoy.',
    neighborhoods: ['Downtown San Bernardino', 'Arrowhead', 'Del Rosa', 'Highland', 'Muscoy', 'Colton'],
    localAngle:
      'San Bernardino es una ciudad de gente trabajadora y de una amplia comunidad latina que conoce de cerca el sacrificio diario. Cuando las preocupaciones se acumulan, la salud no encuentra explicación o el corazón anda inquieto, muchos buscan orientación de raíz. Don Jacinto recibe a vecinos de toda la zona con honestidad y sin juzgar a nadie.',
    signals: [
      'Cuando un malestar no tiene diagnóstico claro',
      'Si una relación te quita la paz',
      'Cuando sientes que te desean el mal',
      'Si necesitas proteger a tu familia',
    ],
    faqs: [
      { q: '¿Ayuda con enfermedades que los médicos no explican?', a: 'Don Jacinto ofrece limpias y acompañamiento espiritual para malestares sin diagnóstico, siempre como complemento, sin reemplazar la atención médica.' },
      { q: '¿Cómo es la primera consulta para alguien de San Bernardino?', a: 'Es una conversación tranquila y confidencial donde usted cuenta su situación y Don Jacinto le orienta sobre cómo puede acompañarle.' },
    ],
    areasIntro: 'En San Bernardino, Don Jacinto atiende temas de amor y parejas, enfermedades sin diagnóstico, caminos cerrados, brujería y limpias.',
    ctaLine: 'Desde San Bernardino puede acercarse a Don Jacinto para hablar con confianza sobre lo que le inquieta y recibir orientación honesta.',
  },
  {
    slug: 'buena-park',
    ciudad: 'Buena Park',
    region: 'Condado de Orange',
    metaTitle: 'Brujo Curandero en Buena Park | Don Jacinto',
    metaDescription:
      'Consulta con Don Jacinto Nahual en Buena Park: limpias, trabajos de amor y protección espiritual desde la tradición de Catemaco, con respeto y discreción.',
    heroSub: 'Tradición curandera cerca de casa',
    intro:
      'En Buena Park, como en toda la comunidad latina del condado de Orange, hay personas que cargan con situaciones que nadie más puede resolver. Si sientes que alguien te hizo daño, que tu amor se perdió sin razón o que tus negocios no prosperan a pesar de todo tu esfuerzo, Don Jacinto Nahual puede ayudarte. Más de 30 años de práctica curanderil de Catemaco.',
    intro2:
      'En Buena Park hay familias que se preguntan por qué, a pesar de todo su esfuerzo, las cosas no mejoran. Don Jacinto Nahual ha visto ese patrón durante más de 30 años — y sabe que a veces hay una raíz espiritual detrás. Si en Buena Park sientes que una fuerza invisible frena tu prosperidad, tu amor o tu salud, él quiere escucharte. Sin compromisos.',
    neighborhoods: ['Buena Park Downtown', 'West Buena Park', 'Los Coyotes', 'Bellehurst', 'Crescent District', 'Knott Avenue'],
    localAngle:
      'Buena Park combina vida familiar y diversidad cultural, con comunidades latina y coreana que comparten el día a día. Don Jacinto ofrece a sus vecinos una guía espiritual cercana para los momentos en que el corazón pesa, con la tradición de Catemaco.',
    signals: [
      'Tristeza que no encuentra causa',
      'Relación que se desgasta sin motivo',
      'Puertas que se cierran una tras otra',
      'Inquietud por envidias o malas intenciones',
    ],
    faqs: [
      { q: '¿Cómo agendo una consulta desde Buena Park?', a: 'Puedes llamar o escribir para coordinar tu cita; se atiende de forma personal y confidencial.' },
      { q: '¿Las consultas son privadas?', a: 'Sí, cada consulta se trata con total discreción y sin emitir juicios sobre tu situación.' },
    ],
    areasIntro: 'En Buena Park se atienden temas de amor, salud sin diagnóstico, caminos cerrados, brujería, envidia y limpias.',
    ctaLine: 'Desde Buena Park, da el primer paso hacia tu tranquilidad contactando a Don Jacinto para una cita reservada.',
  },
];

// Áreas de trabajo (compartidas; el encabezado de cada ciudad usa areasIntro propio).
export const areasTrabajo = [
  {
    icon: '❤️‍🔥',
    title: 'Problemas del Corazón',
    desc: 'Rezo, oración e imposición de manos para parejas distanciadas, frialdad repentina, recuperación del ser amado y armonización de relaciones.',
  },
  {
    icon: '🌿',
    title: 'Enfermedades que no Ceden',
    desc: 'Acompañamiento espiritual para malestares prolongados sin diagnóstico claro y condiciones que los tratamientos convencionales no mejoran.',
  },
  {
    icon: '💼',
    title: 'Caminos Cerrados',
    desc: 'Trabajos espirituales para negocios que no prosperan, oportunidades que se pierden y problemas económicos sin explicación lógica.',
  },
  {
    icon: '🛡️',
    title: 'Brujería y Envidia',
    desc: 'Limpias, protección y defensa espiritual para víctimas de envidia, daños espirituales o energías puestas desde afuera.',
  },
];

// Pools de imágenes para rotar y dar variedad visual entre ciudades.
export const heroPool = [
  '/images/don-jacinto-rezo.webp',
  '/images/don-jacinto-invocacion.webp',
  '/images/ciudad-hero-curandero.webp',
  '/images/limpia-velas.webp',
  '/images/ciudad-hero-altar.webp',
];

export const sidePool = [
  '/images/don-jacinto-retrato.webp',
  '/images/don-jacinto-curandero.webp',
  '/images/ciudad-side-manos.webp',
  '/images/ritual-fuego.webp',
  '/images/don-jacinto-brujo-hook.webp',
  '/images/ciudad-side-pareja.webp',
  '/images/don-jacinto-amarres-credenciales.webp',
  '/images/don-jacinto-ritual.webp',
];

export const ctaPool = [
  '/images/altar-espiritual.webp',
  '/images/ciudad-hero-altar.webp',
  '/images/ritual-fuego.webp',
  '/images/ciudad-hero-curandero.webp',
  '/images/don-jacinto-invocacion.webp',
];
