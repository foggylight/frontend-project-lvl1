import getRandomInt from '../utils.js';
import engine from '../index.js';

const isEven = (number) => number % 2 === 0;

const doGameLogic = () => {
  const question = getRandomInt(2, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const brainEven = () => {
  engine(description, doGameLogic);
};

export default brainEven;
