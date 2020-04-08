import getRandomInt from '../utils.js';
import { engine } from '../index.js';

const getRandomOperation = (arr) => {
  const randomIndex = getRandomInt(0, arr.length);
  return arr[randomIndex];
};

const gameCore = () => {
  const firstNum = getRandomInt(2, 30);
  const secondNum = getRandomInt(2, 30);
  const operation = getRandomOperation(['+', '-', '*']);
  console.log(`Question: ${firstNum} ${operation} ${secondNum}`);
  let correctAnswer;
  if (operation === '+') {
    correctAnswer = firstNum + secondNum;
  } else if (operation === '-') {
    correctAnswer = firstNum - secondNum;
  } else if (operation === '*') {
    correctAnswer = firstNum * secondNum;
  }
  return correctAnswer.toString();
};

const brainCalc = () => {
  const gameRules = 'What is the result of the expression?';
  const result = engine(gameRules, gameCore);
  console.log(result);
};

export default brainCalc;
