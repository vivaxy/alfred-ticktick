/**
 * @since 2023-02-02 20:13
 * @author vivaxy
 */
import alfy from 'alfy';
import { HOST } from '../helpers/config.js';

async function main() {
  const token = alfy.config.get('token');
  const cachedTodo = alfy.cache.get('todo');
  const { requestJSON, notification } = JSON.parse(alfy.input);

  try {
    const resp = await alfy.fetch(`${HOST}/api/v2/batch/task`, {
      method: 'POST',
      headers: {
        Cookie: `t=${token}`,
      },
      json: requestJSON,
    });
    console.log(notification);
  } catch (e) {
    console.log(e.stack);
  }
}

main();
