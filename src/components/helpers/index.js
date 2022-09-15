/**
 * Toma una cadena de fecha y devuelve una cadena de fecha formateada.
 * @returns Función que toma una fecha y devuelve una cadena con la fecha en español.
 */
export const formatearFecha = fecha => {
  const nuevaFecha = new Date(fecha);
  const opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return nuevaFecha.toLocaleDateString('es-ES', opciones);
};
