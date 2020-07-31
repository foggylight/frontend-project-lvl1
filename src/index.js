import readlineSync from 'readline-sync';

const engine = (description, getGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ', {
    defaultInput: 'Anon',
  });
  console.log(`Hello, ${userName}!`);
  console.log(description);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = getGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else if (correctAnswer !== userAnswer) {
      console.log(`${userAnswer} is wrong answer :( Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default engine;
