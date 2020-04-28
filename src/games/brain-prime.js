import getRandomInt from '../utils.js';
import engine from '../index.js';

const isPrime = (number) => {
  for (let i = 2; i <= number / 2; i += 1) {
    if (number < 2) {
      return false;
    }
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const getGameData = () => {
  const question = getRandomInt(2, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const brainPrime = () => engine(description, getGameData);

export default brainPrime;
