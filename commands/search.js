/**
 * @since 2023-02-02 20:02
 * @author vivaxy
 */
import alfy from 'alfy';
import getTodoList, {
  addDefaultResult,
  sortTodoList,
} from '../helpers/get-todo-list.js';
import updateTodo from '../helpers/update-todo.js';

export default async function search(input) {
  const cachedTodo = alfy.cache.get('todo');

  try {
    const todoList = addDefaultResult(
      sortTodoList(
        getTodoList(cachedTodo).filter(function ({ title }) {
          return title.includes(input);
        }),
      ),
    );
    alfy.output(todoList, { rerunInterval: 1 });
  } catch (e) {}

  await updateTodo();
}
