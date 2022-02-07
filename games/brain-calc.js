#!/usr/bin/env node
import readline from 'readline-sync';
import { getUserName, sayHi } from '../src/cli.js';
import { startGame, getRandomNum } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('What is the result of the expression?');

const operators = ['+', '-', '*'];
const getArr = () => {
  const a = getRandomNum(50, 1);
  const b = getRandomNum(25, 1);
  const i = getRandomNum(2, 0);

  return [`${a}`, operators[i], `${b}`];
};

const getRightAnswer = ([x, i, y]) => {
  const a = Number(x);
  const b = Number(y);
  if (i === '+') {
    return a + b;
  } if (i === '-') {
    return a - b;
  }
  return a * b;
};

const getAnswer = () => {
  const str = readline.question('Your answer: ');
  return Number(str);
};

const getQuestion = (arr) => arr.join(' ');

startGame(getArr, getQuestion, getRightAnswer, getAnswer, name);
