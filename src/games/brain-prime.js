import getRandomInt from '../utils.js';
import engine from '../index.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const gameCore = () => {
  const number = getRandomInt(2, 50);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, correctAnswer];
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const result = engine(description, gameCore);
  console.log(result);
};

export default brainPrime;
