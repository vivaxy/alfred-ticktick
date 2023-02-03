/**
 * @since 2023-02-03 09:51
 * @author vivaxy
 */
function pad(value, length, char = ' ') {
  value = String(value);
  while (value.length < length) {
    value = char + value;
  }
  return value;
}

function getDueDate(task) {
  const dueDate = new Date(task.dueDate);
  return `${dueDate.getFullYear()}-${pad(dueDate.getMonth(), 2, '0')}-${pad(
    dueDate.getDate(),
    2,
    '0'
  )}`;
}

function getProject(task, todo) {
  const project = todo.projectProfiles.find(function (project) {
    return project.id === task.projectId;
  });
  return project ? project.name : 'Inbox';
}

function getPriority(task) {
  switch (task.priority) {
    case 5:
      return '🔴';
    case 3:
      return '🟡';
    case 1:
      return '🔵';
    case 0:
      return '◻️';
  }
}

function getSubtitle(task, todo) {
  return `${getPriority(task)} | ${getProject(task, todo)} | ${getDueDate(
    task
  )}`;
}

export default function getTodoList(todo) {
  const todoList = todo.syncTaskBean.update.map(function (task) {
    return {
      title: task.title,
      subtitle: getSubtitle(task, todo),
      mods: {
        cmd: {
          arg: JSON.stringify({
            ...task,
            status: 2,
          }),
          subtitle: 'Press Enter to complete task.',
        },
      },
      variables: task,
    };
  });
  return todoList;
}

export function addDefaultResult(todoList) {
  return todoList.length
    ? todoList
    : [
        {
          title: '🎉',
          subtitle: 'All tasks completed!',
          valid: false,
        },
      ];
}
