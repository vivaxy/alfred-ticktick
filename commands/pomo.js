/**
 * @since 2023-05-15
 * @author vivaxy
 */
import alfy from 'alfy';

export default async function pomo(input) {
  alfy.output([
    {
      title: 'Run Apple Shortcut to start a pomo.',
      subtitle: 'Press Enter to confirm.',
      arg: 'pomo',
    },
  ]);
}
