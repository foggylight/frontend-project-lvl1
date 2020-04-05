import { getRandomInt, engine } from '../index.js';

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
  console.log(`Question: ${number}`);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return correctAnswer;
};

const brainPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  const result = engine(gameCore);
  return result;
};

export default brainPrime;
