/**
 * @since 2023-05-15
 * @author vivaxy
 */
import alfy from 'alfy';

export default async function newTask(input) {
  alfy.output([
    {
      title: 'Run Apple Shortcut to create a new task.',
      subtitle: 'Press Enter to confirm.',
      arg: 'new',
    },
  ]);
}
