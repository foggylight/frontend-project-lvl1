/* eslint-disable default-case */
import getRandomInt from '../utils.js';
import engine from '../index.js';

const getGameData = () => {
  const firstNum = getRandomInt(2, 30);
  const secondNum = getRandomInt(2, 30);
  const operations = ['+', '-', '*'];
  const operation = operations[getRandomInt(0, operations.length - 1)];
  let correctAnswer;
  switch (operation) {
    case '+':
      correctAnswer = firstNum + secondNum;
      break;

    case '-':
      correctAnswer = firstNum - secondNum;
      break;

    case '*':
      correctAnswer = firstNum * secondNum;
      break;

    default:
  }
  const question = `${firstNum} ${operation} ${secondNum}`;
  return [question, correctAnswer.toString()];
};

const description = 'What is the result of the expression?';

const brainCalc = () => engine(description, getGameData);

export default brainCalc;
