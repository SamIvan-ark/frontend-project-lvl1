#!/usr/bin/env node
import readline from 'readline-sync';
import {
  getUserName, sayHi, startGame, getRandomNum,
} from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('Find the greatest common divisor of given numbers.');

const getNumsColl = () => {
  const a = getRandomNum(100, 1);
  const b = getRandomNum(100, 1);

  return [a, b];
};

const getDivisor = ([x, y]) => {
  let divisor = (x >= y) ? y : x;
  while (x % divisor !== 0 || y % divisor !== 0) {
    divisor -= 1;
  }
  return divisor;
};

const getUserAnswer = () => {
  const str = readline.question('Your answer: ');
  return Number(str);
};

const getQuestionContent = (arr) => arr.join(' ');

startGame(
  getNumsColl,
  getQuestionContent,
  getDivisor,
  getUserAnswer,
  name,
);
