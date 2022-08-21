import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, number2, operator) => {
  switch (operator) {
    case '+': {
      return String(number1 + number2);
    }
    case '-': {
      return String(number1 - number2);
    }
    default: {
      return String(number1 * number2);
    }
  }
};

const generateRound = () => {
  const leftOperand = getRandomNumber(1, 50);
  const rightOperand = getRandomNumber(1, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${leftOperand} ${operator} ${rightOperand}`;
  const answer = calculate(leftOperand, rightOperand, operator);

  return [answer, question];
};

export default () => runEngine(rules, generateRound);
