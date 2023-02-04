/**
 * @since 2023-02-02 19:22
 * @author vivaxy
 */
import alfy from 'alfy';

export default function debug() {
  alfy.output(
    [
      {
        title: 'token',
        subtitle: alfy.config.get('token'),
      },
    ],
    { rerunInterval: 1 }
  );
}
