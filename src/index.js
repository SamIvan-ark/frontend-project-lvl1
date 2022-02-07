#!/usr/bin/env node
import _ from 'lodash';

export const getRandomNum = (max, min = 1) => _.random(max, min);

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
