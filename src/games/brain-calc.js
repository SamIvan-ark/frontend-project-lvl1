import { getRandomNumber } from '../utils.js';

export const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

export const generateRound = () => {
  const getComponentsOfOpetarion = () => {
    const leftOperand = getRandomNumber(50, 1);
    const rightOperand = getRandomNumber(25, 1);
    const indexOfOperator = getRandomNumber(2, 0);

    return [leftOperand, operators[indexOfOperator], rightOperand];
  };

  const componentsOfOperation = getComponentsOfOpetarion();

  const getOperationString = (componentsColl) => componentsColl.join(' ');

  const getAnswer = ([leftOperand, operator, rightOperand]) => {
    if (operator === '+') {
      const answer = leftOperand + rightOperand;
      return String(answer);
    } if (operator === '-') {
      const answer = leftOperand - rightOperand;
      return String(answer);
    }
    const answer = leftOperand * rightOperand;
    return String(answer);
  };

  return [getAnswer(componentsOfOperation), getOperationString(componentsOfOperation)];
};
