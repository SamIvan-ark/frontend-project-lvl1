#!/usr/bin/env node
import readline from 'readline-sync';
import _ from 'lodash';
import { getUserName, sayHi } from '../src/cli.js';

console.log('Welcome to the Brain Gamas!');
const name = getUserName();
sayHi(name);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getNaturalInteger = () => _.random(50);

let counter = 1;
let isGame = true;
do {
  const number = getNaturalInteger();
  const rightAnswer = number % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${number}`);
  const answer = readline.question('Your answer: ').toLowerCase();

  if (rightAnswer === answer) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    isGame = false;
  }
} while (counter <= 3 && isGame);

if (isGame) {
  console.log(`Congratulations, ${name}!`);
}
