/**
 * @since 2023-02-02 12:59
 * @author vivaxy
 */
import alfy from 'alfy';
import getTodoList, {
  addDefaultResult,
  sortTodoList,
} from '../helpers/get-todo-list.js';
import updateTodo from '../helpers/update-todo.js';
import { getDate } from '../helpers/date.js';

export default async function today() {
  const cachedTodo = alfy.cache.get('todo');

  try {
    alfy.output(
      addDefaultResult(
        sortTodoList(
          getTodoList(cachedTodo).filter(function ({ variables }) {
            const dueDate = getDate(new Date(variables.dueDate));
            const now = getDate(new Date());
            return dueDate.getTime() <= now.getTime();
          }),
        ),
      ),
      { rerunInterval: 1 },
    );
  } catch (e) {}

  await updateTodo();
}
