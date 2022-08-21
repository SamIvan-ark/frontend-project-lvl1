import getRandomNumber from '../getRandomNumber.js';

export const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const generateRound = () => {
  const leftOperand = getRandomNumber(1, 50);
  const rightOperand = getRandomNumber(1, 25);
  const operator = operators[getRandomNumber(0, operators.length - 1)];

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

  const answer = getAnswer(componentsOfOperation);
  const operationForTask = getOperationString(componentsOfOperation);

  return [answer, operationForTask];
};
