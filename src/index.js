#!/usr/bin/env node
import readline from 'readline-sync';

export const getUserName = () => readline.question('May I have your name?\n');

export const sayHi = (name) => {
  console.log(`Hello, ${name}!`);
};

export const getRandomNum = (max, min = 1) => {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};

export const startGame = (getTask, getQuestion, getRightAnswer, getUserAnswer, name) => {
  let count = 1;
  do {
    const task = getTask();
    const rightAnsw = getRightAnswer(task);

    console.log(`Question: ${getQuestion(task)}`);

    const userAnsw = getUserAnswer();
    if (rightAnsw === userAnsw) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${userAnsw}' is wrong answer ;(. Correct answer was '${rightAnsw}'.`);
      console.log(`Let's try again, ${name}!`);
      count = -1;
    }
  } while (count <= 3 && count > 0);

  if (count > 0) {
    console.log(`Congratulations, ${name}!`);
  }
};
