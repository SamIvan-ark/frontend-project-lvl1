#!/usr/bin/env node
import readline from 'readline-sync';
import {
  getUserName, sayHi, startGame, getRandomNum,
} from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];
const getOperationColl = () => {
  const a = getRandomNum(50, 1);
  const b = getRandomNum(25, 1);
  const i = getRandomNum(2, 0);

  return [a, operators[i], b];
};

const getRightAnswer = ([x, i, y]) => {
  if (i === '+') {
    return x + y;
  } if (i === '-') {
    return x - y;
  }
  return x * y;
};

const getUserAnswer = () => {
  const str = readline.question('Your answer: ');
  return Number(str);
};

const getQuestionContent = (arr) => arr.join(' ');

startGame(
  getOperationColl,
  getQuestionContent,
  getRightAnswer,
  getUserAnswer,
  name,
);
