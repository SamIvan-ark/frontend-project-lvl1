import { getRandomNumber } from '../utils.js';

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const taskNumber = getRandomNumber(50, 1);

  const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

  const answer = isEven(taskNumber);

  return [answer, taskNumber];
};
