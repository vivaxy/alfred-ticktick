/**
 * @since 2023-02-02 12:48
 * @author vivaxy
 */
import alfy from 'alfy';
import { HOST } from '../helpers/config.js';

async function main() {
  try {
    const [_login, username, password] = alfy.input.split(' ');
    alfy.config.set('username', username);
    alfy.config.set('password', password);

    const { token } = await alfy.fetch(
      `${HOST}/api/v2/user/signon?wc=true&remember=true`,
      {
        method: 'POST',
        json: { username, password },
      },
    );

    alfy.config.set('token', token);

    console.log('Login successfully!');
  } catch (e) {
    console.log(e.stack);
  }
}

if (alfy.input) {
  main();
}
