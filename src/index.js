import { askQuestionAndGetAnswer } from './utils.js';

const roundsCount = 3;

export default (rules, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const username = askQuestionAndGetAnswer('May I have your name?\n');
  console.log(`Hello, ${username}!\n${rules}`);

  for (let i = roundsCount; i > 0; i -= 1) {
    const [answer, question] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = askQuestionAndGetAnswer('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${username}!`);
      return;
    }
  }
  console.log(`Congratulations, ${username}!`);
};
