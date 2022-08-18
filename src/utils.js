import readline from 'readline-sync';

export const askQuestionAndGetAnswer = (question) => readline.question(question);

export const getRandomNumber = (max, min = 1) => {
  const a = Math.ceil(min);
  const b = Math.floor(max);
  return Math.floor(Math.random() * (b - a + 1)) + a;
};
