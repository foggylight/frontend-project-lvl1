import { getRandomInt, getRandomOperation, engine } from '../index.js';

const gameCore = () => {
  const firstNum = getRandomInt(30);
  const secondNum = getRandomInt(30);
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
  console.log('What is the result of the expression?');
  const result = engine(gameCore);
  return result;
};

export default brainCalc;
