import { getRandomInt, getAnswer, checkAnswer } from './index.js';

const brainEven = () => {
  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomInt(100);
    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();
    const checkAnswerResult = checkAnswer(number, userAnswer);
    console.log(checkAnswerResult);
    if (checkAnswerResult !== 'Correct!') {
      return false;
    }
  }
  return true;
};

export default brainEven;
