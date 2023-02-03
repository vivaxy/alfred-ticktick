/**
 * @since 2023-02-02 12:31
 * @author vivaxy
 */
import alfy from 'alfy';

export default async function add(input) {
  alfy.output([
    {
      title: 'Enter title.',
      subtitle: 'Press Enter to confirm.',
      arg: `add ${input}`,
    },
  ]);
}
