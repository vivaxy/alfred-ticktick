/**
 * @since 2023-02-02 20:13
 * @author vivaxy
 */
import alfy from 'alfy';

async function main() {
  const token = alfy.config.get('token');
  const cachedTodo = alfy.cache.get('todo');

  try {
    const resp = await alfy.fetch(`https://api.dida365.com/api/v2/batch/task`, {
      method: 'POST',
      headers: {
        Cookie: `t=${token}`,
      },
      json: {
        // add: [],
        // addAttachments: [],
        // delete: [],
        // deleteAttachments: [],
        // updateAttachments: [],
        update: [JSON.parse(alfy.input)],
      },
    });
    console.log('Task completed!');
  } catch (e) {
    console.log(e.stack);
  }
}

main();
