/**
 * @since 2023-02-02 12:59
 * @author vivaxy
 */
import alfy from 'alfy';

function getTodayTodo(todo) {
  const todayTodoList = todo.syncTaskBean.update
    .filter(function (task) {
      const dueDate = new Date(task.dueDate);
      const now = new Date();
      return (
        dueDate.getFullYear() === now.getFullYear() &&
        dueDate.getMonth() === now.getMonth() &&
        dueDate.getDate() === now.getDate()
      );
    })
    .map(function (task) {
      const project = todo.projectProfiles.find(function (project) {
        return project.id === task.projectId;
      });
      return {
        title: task.title,
        subtitle: project ? project.name : 'Inbox',
      };
    });
  return todayTodoList.length
    ? todayTodoList
    : [
        {
          title: '🎉',
          subtitle: 'All tasks completed!',
          valid: false,
        },
      ];
}

export default async function today() {
  const token = alfy.config.get('token');
  const cachedTodo = alfy.cache.get('todo');

  try {
    alfy.output(getTodayTodo(cachedTodo), { rerunInterval: 1 });
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
