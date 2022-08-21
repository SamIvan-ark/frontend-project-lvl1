import getRandomNumber from '../getRandomNumber.js';

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const generateRound = () => {
  const taskNumber = getRandomNumber(1, 200);

  const isPrime = (num) => {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const answer = isPrime(taskNumber) ? 'yes' : 'no';

  return [answer, taskNumber];
};
