/**
 * @since 2023-02-03 09:54
 * @author vivaxy
 */
import alfy from 'alfy';

export default async function updateTodo() {
  const token = alfy.config.get('token');
  const resp = await alfy.fetch(
    'https://api.dida365.com/api/v2/batch/check/0',
    {
      headers: {
        Cookie: `t=${token}`,
      },
    }
  );
  alfy.cache.set('todo', resp);
}
