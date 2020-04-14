import getRandomInt from '../utils.js';
import engine from '../index.js';

const getRandomOperation = (arr) => {
  const randomIndex = getRandomInt(0, arr.length - 1);
  return arr[randomIndex];
};

const gameCore = () => {
  const firstNum = getRandomInt(2, 30);
  const secondNum = getRandomInt(2, 30);
  const operation = getRandomOperation(['+', '-', '*']);
  let correctAnswer;
  if (operation === '+') {
    correctAnswer = firstNum + secondNum;
  } else if (operation === '-') {
    correctAnswer = firstNum - secondNum;
  } else if (operation === '*') {
    correctAnswer = firstNum * secondNum;
  }
  return [`${firstNum} ${operation} ${secondNum}`, correctAnswer.toString()];
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  const result = engine(description, gameCore);
  console.log(result);
};

export default brainCalc;
