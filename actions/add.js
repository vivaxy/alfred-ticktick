/**
 * @since 2023-02-02 12:31
 * @author vivaxy
 */
import alfy from 'alfy';
import { formatDate, getDate } from '../helpers/date.js';
import generateId from '../helpers/id.js';

async function main() {
  const token = alfy.config.get('token');
  const cachedTodo = alfy.cache.get('todo');

  const title = alfy.input.slice('add '.length);

  try {
    const createdTime = formatDate(new Date());
    await alfy.fetch('https://api.dida365.com/api/v2/batch/task', {
      method: 'POST',
      headers: {
        Cookie: `t=${token}`,
      },
      json: {
        add: [
          {
            assignee: null,
            content: '',
            createdTime,
            dueDate: null,
            exDate: [],
            id: generateId(),
            isAllDay: true,
            isFloating: false,
            items: [],
            kind: null,
            modifiedTime: createdTime,
            priority: 0,
            progress: 0,
            projectId: cachedTodo.inboxId,
            sortOrder: 0,
            startDate: formatDate(getDate(new Date())),
            status: 0,
            tags: [],
            timeZone: 'Asia/Shanghai',
            title,
          },
        ],
        addAttachments: [],
        delete: [],
        deleteAttachments: [],
        update: [],
        updateAttachments: [],
      },
    });
    console.log('Add task successfully!');
  } catch (e) {
    console.log(e.stack);
  }
}

main();
