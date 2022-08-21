import readline from 'readline-sync';

const roundsCount = 3;

export default (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const username = readline.question('May I have your name?\n');
  console.log(`Hello, ${username}!\n${rules}`);

  for (let i = 0; i < roundsCount; i += 1) {
    const [answer, question] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readline.question('Your answer: ');
    if (userAnswer.toLowerCase() === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
