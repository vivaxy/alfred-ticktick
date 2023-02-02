/**
 * @since 2023-02-02 19:22
 * @author vivaxy
 */
import alfy from 'alfy';
export default function debug() {
  const username = alfy.config.get('username');
  const password = alfy.config.get('password');
  alfy.output([
    {
      title: username,
      subtitle: password,
    },
  ]);
}
