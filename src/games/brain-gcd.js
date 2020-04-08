import getRandomInt from '../utils.js';
import { engine } from '../index.js';

const gcd = (a, b) => {
  let divisible = a;
  let divisor = b;
  if (a < b) {
    [divisible, divisor] = [b, a];
  }
  while (divisible % divisor !== 0) {
    [divisible, divisor] = [divisor, divisible % divisor];
  }
  return divisor;
};

const gameCore = () => {
  const firstNum = getRandomInt(5, 100);
  const secondNum = getRandomInt(5, 100);
  console.log(`Question: ${firstNum} ${secondNum}`);
  return gcd(firstNum, secondNum).toString();
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const result = engine(gameRules, gameCore);
  console.log(result);
};

export default brainGcd;
