import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anon',
  });
  console.log(`Hello, ${userName}!`);
  return userName;
};

export const checkAnswer = (correctAnswer, userAnswer) => {
  if (correctAnswer === userAnswer) {
    return 'Correct!';
  }
  return `${userAnswer} is wrong answer :( Correct answer was ${correctAnswer}.`;
};

// games engine:
export const engine = (str, gameCoreFunc) => {
  const userName = greeting();
  console.log(str);
  for (let i = 1; i <= 3; i += 1) {
    const correctAnswer = gameCoreFunc();
    const userAnswer = readlineSync.question('Your answer: ');
    const checkAnswerResult = checkAnswer(correctAnswer, userAnswer);
    console.log(checkAnswer(correctAnswer, userAnswer));
    if (checkAnswerResult !== 'Correct!') {
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};
