import readlineSync from 'readline-sync';

// for name (brain-games):
export const getUserName = () => readlineSync.question('May I have your name? ', {
  defaultInput: 'Anon',
});

// for brain-even:
export const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getAnswer = () => readlineSync.question('Your answer: ');

export const checkAnswer = (number, answer) => {
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  if (correctAnswer === answer) {
    return 'Correct!';
  }
  return `${answer} is wrong answer :(. Correct answer was ${correctAnswer}`;
};
