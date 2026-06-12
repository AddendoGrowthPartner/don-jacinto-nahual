// Enlaces internos compartidos para el footer y los bloques de enlazado
// interno (internal linking) en todo el dominio.

export const servicios = [
  { slug: 'amarres-de-amor', name: 'Amarres de Amor' },
  { slug: 'regreso-de-pareja', name: 'Regreso de Pareja' },
  { slug: 'ayuda-espiritual-amor', name: 'Ayuda Espiritual en el Amor' },
  { slug: 'brujo-curandero', name: 'Brujo Curandero' },
  { slug: 'limpias-espirituales', name: 'Limpias Espirituales' },
  { slug: 'mal-de-ojo', name: 'Mal de Ojo' },
  { slug: 'proteccion-espiritual', name: 'Protección Espiritual' },
  { slug: 'curaciones-espirituales', name: 'Curaciones Espirituales' },
];

// Blogs destacados (contenido perenne) para enlazar desde footer y bloques.
export const blogsDestacados = [
  { slug: 'limpia-espiritual', name: 'Qué es una limpia espiritual' },
  { slug: 'amarres-de-amor', name: 'Amarres de amor: qué son' },
  { slug: 'brujeria', name: 'Cómo saber si te afecta la brujería' },
  { slug: 'brujo-cerca-de-mi', name: 'Brujo cerca de mí' },
  { slug: 'hechizos-de-amor', name: 'Hechizos de amor' },
  { slug: 'lectura-de-cartas', name: 'Lectura de cartas' },
  { slug: 'santeria', name: 'Santería: la tradición espiritual' },
  { slug: 'tradicion-curanderil-catemaco', name: 'La tradición de Catemaco' },
];

// Mapeo de cada área de trabajo (mismo orden que areasTrabajo en ciudades.js)
// al servicio más relacionado, para enlazar las tarjetas de las landings de ciudad.
export const areaServicio = [
  '/servicio/amarres-de-amor/',
  '/servicio/curaciones-espirituales/',
  '/servicio/limpias-espirituales/',
  '/servicio/proteccion-espiritual/',
];

// Blogs perennes más relevantes para las landings de ciudad.
export const blogsCiudad = [
  { slug: 'limpia-espiritual', name: 'Qué es una limpia espiritual y cuándo considerarla' },
  { slug: 'brujeria', name: 'Cómo reconocer si la brujería te afecta' },
  { slug: 'tradicion-curanderil-catemaco', name: 'La tradición curanderil de Catemaco' },
];
