import getRandomNumber from '../getRandomNumber.js';

export const rules = 'What number is missing in the progression?';

export const generateRound = () => {
  const generateProgression = () => {
    const elemsCount = getRandomNumber(10, 5);
    const step = getRandomNumber(15, 2);
    const startNum = getRandomNumber(25, 1);
    const progressionColl = [];
    let i = 0;
    while (i < elemsCount) {
      const currentNum = startNum + (i * step);
      progressionColl.push(currentNum);
      i += 1;
    }
    return progressionColl;
  };

  const progression = generateProgression();

  const getQuestionAndAnswer = (arr) => {
    const index = getRandomNumber((arr.length - 1), 0);
    const answer = String(arr[index]);

    const task = arr;
    task[index] = '..';
    const normalizedTaskProgression = task.join(' ');

    return [answer, normalizedTaskProgression];
  };

  return getQuestionAndAnswer(progression);
};
