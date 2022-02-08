#!/usr/bin/env node
import readline from 'readline-sync';
import { getUserName, sayHi } from '../src/cli.js';
import { startGame, getRandomNum } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const getNumForTask = () => getRandomNum(200, 1);

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRightAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const getAnswer = () => readline.question('Your answer: ');

const getQuestion = (num) => num;

startGame(getNumForTask, getQuestion, getRightAnswer, getAnswer, name);
