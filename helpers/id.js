/**
 * @since 2023-02-03 15:28
 * @author vivaxy
 * @ref https://github.com/jedy/alfred-tick/blob/master/tick.py#L131
 */
function random() {
  return Math.floor(Math.random() * 16777215);
}

export default function generateId() {
  return `${Date.now().toString(16).slice(-8)}${random()
    .toString(16)
    .slice(-6)}${random().toString(16).slice(-4)}${random()
    .toString(16)
    .slice(-6)}`;
}
