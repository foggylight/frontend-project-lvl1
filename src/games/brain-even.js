import getRandomInt from '../utils.js';
import engine from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameCore = () => {
  const number = getRandomInt(2, 100);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = engine(description, gameCore);
  console.log(result);
};

export default brainEven;
