import getRandomNumber from '../getRandomNumber.js';
import runEngine from '../index.js';

const rules = 'What number is missing in the progression?';

const generateProgression = (length, step, initialValue) => {
  const progressionColl = [];
  let i = 0;
  while (i < length) {
    const currentNum = initialValue + (i * step);
    progressionColl.push(currentNum);
    i += 1;
  }
  return progressionColl;
};

const generateRound = () => {
  const elemsCount = getRandomNumber(5, 10);
  const step = getRandomNumber(2, 15);
  const initialNumber = getRandomNumber(1, 25);

  const progression = generateProgression(elemsCount, step, initialNumber);
  const indexOfAnswer = getRandomNumber(0, (progression.length - 1));

  const answer = String(progression[indexOfAnswer]);

  progression[indexOfAnswer] = '..';
  const question = progression.join(' ');

  return [answer, question];
};

export default () => runEngine(rules, generateRound);
