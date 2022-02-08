#!/usr/bin/env node
import readline from 'readline-sync';
import { getUserName, sayHi } from '../src/cli.js';
import { startGame, getRandomNum } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
console.log('What number is missing in the progression?');

const getProgressionColl = () => {
  const elemsCount = getRandomNum(10, 5);
  const step = getRandomNum(15, 2);
  const startNum = getRandomNum(25, 1);
  const progressionColl = [];
  let i = 0;

  while (i < elemsCount) {
    const currentNum = startNum + (i * step);
    progressionColl.push(currentNum);
    i += 1;
  }

  return progressionColl;
};

const getRawProgression = () => {
  const progressionRawColl = getProgressionColl();
  const index = getRandomNum((progressionRawColl.length - 1), 0);
  const desiredNum = progressionRawColl[index];
  progressionRawColl[index] = '..';
  progressionRawColl.push(desiredNum);

  return progressionRawColl;
};

const getRightAnswer = (progression) => {
  const number = progression.pop();
  return number;
};

const getUserAnswer = () => {
  const str = readline.question('Your answer: ');
  return Number(str);
};

const getQuestionContent = (arr) => arr.join(' ');

startGame(
  getRawProgression,
  getQuestionContent,
  getRightAnswer,
  getUserAnswer,
  name,
);
