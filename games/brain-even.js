#!/usr/bin/env node
import readline from 'readline-sync';
import { getUserName, sayHi } from '../src/cli.js';
import { startGame, getRandomNum } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getNumForTask = () => getRandomNum(50, 1);

const getRightAnswer = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const getAnswer = () => readline.question('Your answer: ');

const getQuestion = (num) => num;

startGame(getNumForTask, getQuestion, getRightAnswer, getAnswer, name);
