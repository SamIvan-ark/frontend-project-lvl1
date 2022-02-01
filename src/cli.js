import readline from 'readline-sync';

const getUserName = () => readline.question('May I have your name?\n');

const sayHi = () => {
  const name = getUserName();
  console.log(`Hello, ${name}!`);
};

export default sayHi;
