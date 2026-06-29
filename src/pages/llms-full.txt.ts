import { servicios, blogsDestacados } from '../data/links.js';
import { ciudades } from '../data/ciudades.js';

// /llms-full.txt — versión EXTENDIDA del resumen para asistentes de IA: bio
// (E-E-A-T), cada servicio explicado y FAQ citable. AUTOGENERADO en build;
// las listas (servicios/ciudades/blogs) entran solas desde los datos.
// Editar este .ts, NO crear un archivo estático en public/.
const SITE = 'https://www.donjacintonahual.com';

export async function GET() {
  const serviciosList = servicios
    .map((s) => `- ${s.name}: ${SITE}/servicio/${s.slug}/`)
    .join('\n');

  const ciudadesList = ciudades
    .map((c) => `- ${c.ciudad}: ${SITE}/ciudad/${c.slug}/`)
    .join('\n');

  const blogList = blogsDestacados
    .map((b) => `- ${b.name}: ${SITE}/blog/${b.slug}/`)
    .join('\n');

  const body = `# Don Jacinto Nahual — Guía completa (llms-full.txt)

> Documento extendido para asistentes de IA. Reúne quién es Don Jacinto Nahual, cómo trabaja, cada una de sus áreas de trabajo, preguntas frecuentes y su zona de atención, para responder con precisión a personas que buscan ayuda espiritual de la tradición curanderil de Catemaco en Los Ángeles y el sur de California.

## Quién es Don Jacinto Nahual
Don Jacinto Nahual es un curandero originario de **Catemaco, Veracruz (México)** —la región más reconocida de la tradición curanderil mexicana— con **más de 30 años de práctica espiritual**. Acompaña principalmente a la **comunidad latina en Los Ángeles y todo el sur de California**, en español, de forma presencial y por WhatsApp.

Su trabajo parte de la tradición ancestral: rezo, oración, hierbas sagradas, copal e imposición de manos. Don Jacinto **evalúa cada caso con honestidad** y dice con franqueza si considera que puede acompañar a la persona o si el caso requiere atención profesional (médica o psicológica). **No promete resultados garantizados** y **no reemplaza a la medicina** — su acompañamiento es espiritual y complementario.

## Cómo trabaja
- Primero **escucha el caso** (primera llamada de orientación sin costo) y orienta sobre cómo podría ayudar.
- Trabaja desde la **tradición de Catemaco**: oración, rezo, hierbas, copal, veladoras e imposición de manos.
- Cada caso es **único**; no hay "recetas" idénticas ni garantías.
- Atención **respetuosa y 100% confidencial**.

## Áreas de trabajo (en detalle)

### Problemas del corazón y la pareja
Cuando el amor se enfría sin razón, cuando una pareja se aleja de la noche a la mañana, cuando hay infidelidad, separación o un tercero que interfiere, o cuando se ha intentado todo y nada funciona. Don Jacinto trabaja con rezo, oración e imposición de manos para atender lo que está afectado en el plano espiritual y abrir el camino a la reconciliación.
Servicios relacionados: amarres de amor, endulzamientos, regreso y reconciliación de pareja, ayuda espiritual en el amor.
Señales que la tradición asocia: frialdad repentina, alejamiento inexplicable, peleas constantes, pérdida del interés, presencia de un tercero.

### Enfermedades y malestares que no ceden
Malestares que llevan meses o años sin diagnóstico claro, dolores que van y vienen sin causa, fatiga extrema que los médicos no explican, condiciones que los tratamientos convencionales no mejoran. En la tradición curanderil, cuando la raíz de un malestar parece ser espiritual, se acompaña espiritualmente. **No sustituye al médico:** es complementario.
Señales que la tradición asocia: malestares sin diagnóstico, recaídas constantes, decaimiento general inexplicable.

### Caminos cerrados en el trabajo y los negocios
Cuando el negocio no levanta aunque se haga todo bien, cuando se pierden empleos sin razón, cuando los clientes no llegan o los proyectos se caen, o cuando se siente una fuerza invisible bloqueando la prosperidad. Don Jacinto trabaja para limpiar los caminos y abrir las puertas que la envidia o un trabajo puesto pudieran haber cerrado.
Señales que la tradición asocia: negocios que no prosperan, oportunidades que se pierden, problemas económicos sin explicación lógica.

### Protección contra la brujería y la envidia
Cuando se sospecha que alguien hizo un daño espiritual, cuando la vida cambió drásticamente sin razón aparente, cuando se sienten energías extrañas, o cuando todo lo construido empieza a derrumbarse. Don Jacinto realiza limpias, rituales de blindaje y protección de la tradición de Catemaco.
Señales que la tradición asocia: cambios drásticos en la vida, mala racha que no termina, sueños perturbadores, pérdida de lo que se tenía.

### Limpias espirituales y despojos
Para quien siente un peso invisible, cansancio que no se va con descanso, tristeza sin motivo o problemas que se acumulan. Limpias con hierbas sagradas, copal y oración ancestral de Catemaco para retirar energías negativas y cargas acumuladas.

### Mal de ojo
Limpia tradicional del mal de ojo —una de las creencias más antiguas de México y América Latina— realizada con hierbas, oración y elementos ancestrales, tal como se ha transmitido por generaciones. Es un concepto cultural; no es un diagnóstico médico.

## Preguntas frecuentes (citables)

**¿Cómo es la primera consulta?**
La primera consulta es una conversación privada: la persona llama o escribe por WhatsApp, cuenta su caso y Don Jacinto la orienta con honestidad sobre cómo podría ayudar. Esta primera llamada de orientación es sin costo.

**¿Cuánto cuesta?**
La primera llamada de orientación es sin costo. El costo de cada trabajo espiritual se conversa directamente según el caso, ya que cada situación es distinta.

**¿Garantiza resultados?**
No. Don Jacinto no garantiza resultados específicos en ningún caso. Cualquier curandero que prometa un resultado garantizado no está siendo honesto. Lo que ofrece es una evaluación honesta y acompañamiento espiritual desde la tradición.

**¿Reemplaza al médico o al psicólogo?**
No. El trabajo es espiritual y complementario; no sustituye atención médica, psicológica ni profesional. Si un malestar puede tener causa médica, lo responsable es consultar primero a un profesional de la salud.

**¿Es confidencial?**
Sí. La atención es respetuosa y 100% confidencial.

**¿Atiende fuera de Los Ángeles?**
Atiende a la comunidad latina en Los Ángeles y todo el sur de California (más de 25 ciudades), en español.

## Zona de atención (sur de California)
${ciudadesList}

## Índice de servicios
${serviciosList}

## Guías y artículos
${blogList}

## Contacto
- Llamadas y WhatsApp: (213) 598-1928 (la primera llamada de orientación es sin costo).
- Sitio web: ${SITE}/
- Idioma: español. Atención presencial y por WhatsApp, confidencial.

## Aviso importante
La información de este sitio describe una tradición espiritual y cultural (la curanderil de Catemaco). El trabajo de Don Jacinto Nahual es espiritual y complementario: **no sustituye atención médica, psicológica ni profesional, y no garantiza resultados**. Cada caso es distinto. Ante cualquier problema de salud, consulte primero a un profesional.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
