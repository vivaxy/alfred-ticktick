/**
 * @since 2023-02-02 12:48
 * @author vivaxy
 */
import alfy from 'alfy';

async function main() {
  try {
    const [username, password] = alfy.input.split(' ');
    alfy.config.set('username', username);
    alfy.config.set('password', password);

    const { token } = await alfy.fetch(
      'https://api.dida365.com/api/v2/user/signon?wc=true&remember=true',
      {
        method: 'POST',
        json: { username, password },
      }
    );

    console.log('Login successfully!');
  } catch (e) {
    console.log(e.stack);
  }
}

if (alfy.input) {
  main();
}
