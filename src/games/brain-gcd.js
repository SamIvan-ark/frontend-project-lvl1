import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getDivisor = (x, y) => {
  let divisor = (x >= y) ? y : x;
  while (x % divisor !== 0 || y % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);

  const question = `${number1} ${number2}`;
  const answer = String(getDivisor(number1, number2));

  return [answer, question];
};

export default () => runEngine(rules, generateRound);
