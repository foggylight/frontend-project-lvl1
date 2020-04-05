import readlineSync from 'readline-sync';

// for name (brain-games):
export const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'Anon',
});

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
  return userName;
};

// for engine:
export const getAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer :( Correct answer was ${correctAnswer}.`;
};

// for games:
export const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

// games engine:
export const engine = (gameCoreFunc) => {
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = gameCoreFunc();
    const userAnswer = getAnswer();
    const checkAnswerResult = checkAnswer(correctAnswer, userAnswer);
    console.log(checkAnswerResult);
    if (checkAnswerResult !== 'Correct!') {
      return false;
    }
  }
  return true;
};
