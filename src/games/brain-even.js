import { getRandomNumber } from '../utils.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomNumber(50, 1);

  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  return [isEven(number), number];
};
