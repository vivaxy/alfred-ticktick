/**
 * @since 2023-02-02 20:02
 * @author vivaxy
 */
import alfy from 'alfy';

function getTodo(todo) {
  const todayList = todo.syncTaskBean.update.map(function (task) {
    const project = todo.projectProfiles.find(function (project) {
      return project.id === task.projectId;
    });
    return {
      title: task.title,
      subtitle: project ? project.name : 'Inbox',
      mods: {
        cmd: {
          arg: JSON.stringify({
            ...task,
            status: 2,
          }),
          subtitle: 'Press Enter to complete task.',
        },
      },
    };
  });
  return todayList.length
    ? todayList
    : [
        {
          title: '🎉',
          subtitle: 'All tasks completed!',
          valid: false,
        },
      ];
}

export default async function search(input) {
  const token = alfy.config.get('token');
  const cachedTodo = alfy.cache.get('todo');

  try {
    const todoList = getTodo(cachedTodo).filter(function ({ title }) {
      return title.includes(input);
    });
    alfy.output(todoList, { rerunInterval: 1 });
  } catch (e) {}

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
