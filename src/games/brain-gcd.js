import { getRandomInt, engine } from '../index.js';

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
  const firstNum = getRandomInt(100);
  const secondNum = getRandomInt(100);
  console.log(`Question: ${firstNum} ${secondNum}`);
  return gcd(firstNum, secondNum).toString();
};

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  const result = engine(gameCore);
  return result;
};

export default brainGcd;
