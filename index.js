/**
 * @since 2023-02-02 11:23
 * @author vivaxy
 */
import alfy from 'alfy';
import login from './commands/login.js';
import add from './commands/add.js';
import done from './commands/done.js';
import today from './commands/today.js';
import debug from './commands/debug.js';
import search from './commands/search.js';

const commands = {
  login,
  add,
  done,
  today,
  debug,
};

const command = Object.keys(commands).find(function (command) {
  return alfy.input.startsWith(`${command}`);
});

if (command) {
  await commands[command](alfy.input.slice(`${command} `.length));
} else {
  await search(alfy.input);
}
