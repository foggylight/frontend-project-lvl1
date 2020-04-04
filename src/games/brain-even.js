import { getRandomInt, engine } from '../index.js';

const gameCore = () => {
  const number = getRandomInt(100);
  console.log(`Question: ${number}`);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  return correctAnswer;
};

const brainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const result = engine(gameCore);
  return result;
};

export default brainEven;
