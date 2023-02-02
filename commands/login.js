/**
 * @since 2023-02-02 12:31
 * @author vivaxy
 */
import alfy from 'alfy';

export default function login(input) {
  alfy.output([
    {
      title: 'Enter username and password.',
      subtitle: 'Press Enter to confirm. Split password with space.',
      arg: input,
    },
  ]);
}
