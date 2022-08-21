import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(1, 200);
  const answer = isPrime(question) ? 'yes' : 'no';

  return [answer, question];
};

export default () => runEngine(rules, generateRound);
