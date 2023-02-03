/**
 * @since 2023-02-02 12:59
 * @author vivaxy
 */
import alfy from 'alfy';
import getTodoList from '../helpers/get-todo-list.js';
import updateTodo from '../helpers/update-todo.js';

export default async function today() {
  const cachedTodo = alfy.cache.get('todo');

  try {
    alfy.output(
      getTodoList(cachedTodo).filter(function ({ variables }) {
        const dueDate = new Date(variables.dueDate);
        const now = new Date();
        return (
          dueDate.getFullYear() === now.getFullYear() &&
          dueDate.getMonth() === now.getMonth() &&
          dueDate.getDate() === now.getDate()
        );
      }),
      { rerunInterval: 1 }
    );
  } catch (e) {}

  await updateTodo();
}
