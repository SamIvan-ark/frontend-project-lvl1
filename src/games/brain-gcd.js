import getRandomNumber from '../getRandomNumber.js';

export const rules = 'Find the greatest common divisor of given numbers.';

export const generateRound = () => {
  const generateNumbers = () => {
    const firstNumber = getRandomNumber(100, 1);
    const secondNumber = getRandomNumber(100, 1);

    return [firstNumber, secondNumber];
  };

  const numbers = generateNumbers();

  const convertNumbersToString = (numbersColl) => numbersColl.join(' ');

  const getDivisor = ([x, y]) => {
    let divisor = (x >= y) ? y : x;
    while (x % divisor !== 0 || y % divisor !== 0) {
      divisor -= 1;
    }
    return divisor;
  };

  const numbersForTask = convertNumbersToString(numbers);

  const normalizedAnswer = String(getDivisor(numbers));

  return [normalizedAnswer, numbersForTask];
};
