import readlineSync from 'readline-sync';

// games engine:
const engine = (str, gameCoreFunc) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anon',
  });
  console.log(`Hello, ${userName}!`);
  console.log(str);
  for (let i = 1; i <= 3; i += 1) {
    const gameData = gameCoreFunc();
    console.log(`Question: ${gameData[0]}`);
    const correctAnswer = gameData[1];
    const userAnswer = readlineSync.question('Your answer: ');
    const checkAnswerResult = correctAnswer === userAnswer ? 'Correct!' : `${userAnswer} is wrong answer :( Correct answer was ${correctAnswer}.`;
    console.log(checkAnswerResult);
    if (checkAnswerResult !== 'Correct!') {
      return `Let's try again, ${userName}!`;
    }
  }
  return `Congratulations, ${userName}!`;
};

export default engine;
