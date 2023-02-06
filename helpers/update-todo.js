/**
 * @since 2023-02-03 09:54
 * @author vivaxy
 */
import alfy from 'alfy';
import { HOST } from './config.js';

export default async function updateTodo() {
  const token = alfy.config.get('token');
  const resp = await alfy.fetch(`${HOST}/api/v2/batch/check/0`, {
    headers: {
      Cookie: `t=${token}`,
    },
  });
  alfy.cache.set('todo', resp);
}
