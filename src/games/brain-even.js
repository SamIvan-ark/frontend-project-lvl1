import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const generateRound = () => {
  const queston = getRandomNumber(1, 50);
  const answer = isEven(queston);

  return [answer, queston];
};

export default () => runEngine(rules, generateRound);
