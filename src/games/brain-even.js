import getRandomInt from '../utils.js';
import { engine } from '../index.js';

const isEven = (num) => num % 2 === 0;

const gameCore = () => {
  const number = getRandomInt(2, 100);
  console.log(`Question: ${number}`);
  const correctAnswer = isEven(number) ? 'yes' : 'no';
  return correctAnswer;
};

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const result = engine(gameRules, gameCore);
  console.log(result);
};

export default brainEven;
