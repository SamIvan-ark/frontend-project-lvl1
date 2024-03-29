import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 50);
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  const question = String(randomNumber);

  return [answer, question];
};

export default () => runEngine(rules, generateRound);
