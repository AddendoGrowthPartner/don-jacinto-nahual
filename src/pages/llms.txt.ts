import { servicios, blogsDestacados } from '../data/links.js';
import { ciudades } from '../data/ciudades.js';

// /llms.txt — resumen estructurado del sitio para asistentes de IA (ChatGPT,
// Claude, Perplexity, Gemini). Estándar llmstxt.org. AUTOGENERADO desde los
// datos: al agregar ciudades/servicios/blogs, entran solos. Editar este .ts,
// NO crear un archivo estático en public/.
const SITE = 'https://www.donjacintonahual.com';

export async function GET() {
  const serviciosList = servicios
    .map((s) => `- [${s.name}](${SITE}/servicio/${s.slug}/)`)
    .join('\n');

  const ciudadesList = ciudades
    .map((c) => `- [Brujo curandero en ${c.ciudad}](${SITE}/ciudad/${c.slug}/)`)
    .join('\n');

  const blogList = blogsDestacados
    .map((b) => `- [${b.name}](${SITE}/blog/${b.slug}/)`)
    .join('\n');

  const body = `# Don Jacinto Nahual — Brujo Curandero y Guía Espiritual de la Tradición de Catemaco en Los Ángeles

> Don Jacinto Nahual es un curandero de Catemaco, Veracruz (México), con más de 30 años de práctica espiritual, que acompaña a la comunidad latina en Los Ángeles y todo el sur de California. Trabaja limpias espirituales, asuntos de amor y de pareja, protección contra la envidia y la brujería, y acompañamiento espiritual en enfermedades — todo desde la tradición curanderil ancestral. Atención presencial y por WhatsApp, de forma respetuosa y 100% confidencial.

## Datos clave
- Nombre: Don Jacinto Nahual.
- Origen: Catemaco, Veracruz, México (cuna de la tradición curanderil mexicana).
- Experiencia: más de 30 años de práctica espiritual.
- Zona de atención: Los Ángeles y el sur de California (más de 25 ciudades).
- Idioma: español.
- Contacto: llamadas y WhatsApp al (213) 598-1928. La primera llamada de orientación es sin costo.
- Importante: el trabajo de Don Jacinto es espiritual y complementario; no sustituye atención médica, psicológica ni profesional, y no garantiza resultados específicos. Cada caso es distinto.

## Servicios espirituales
${serviciosList}

## Ciudades que atiende en el sur de California
${ciudadesList}

## Guías y artículos
${blogList}

## Contacto
- Llamadas y WhatsApp: (213) 598-1928
- Sitio web: ${SITE}/
- Atención: Los Ángeles y todo el sur de California · en español · confidencial.
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
