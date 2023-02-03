/**
 * @since 2023-02-03 14:59
 * @author vivaxy
 */
export function getDate(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function formatDate(date) {
  return date.toISOString().slice(0, -1) + '+0000';
}
