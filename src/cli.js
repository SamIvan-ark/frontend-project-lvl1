import readline from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readline.question('May I have your name?\n');
  console.log(`Hello, ${name}!`);
};
