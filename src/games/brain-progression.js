import getRandomNumber from '../getRandomNumber.js';

export const rules = 'What number is missing in the progression?';

export const generateRound = () => {
  const generateProgression = () => {
    const elemsCount = getRandomNumber(5, 10);
    const step = getRandomNumber(2, 15);
    const startNum = getRandomNumber(1, 25);
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
    const index = getRandomNumber(0, (arr.length - 1));
    const answer = String(arr[index]);

    const task = arr;
    task[index] = '..';
    const normalizedTaskProgression = task.join(' ');

    return [answer, normalizedTaskProgression];
  };

  return getQuestionAndAnswer(progression);
};
