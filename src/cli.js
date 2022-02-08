import readline from 'readline-sync';

export const getUserName = () => readline.question('May I have your name?\n');

export const sayHi = (name) => {
  console.log(`Hello, ${name}!`);
};
