import { getRandomNumber } from '../utils.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomNumber(200, 1);

  const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const answer = isPrime(number) ? 'yes' : 'no';

  return [answer, number];
};
