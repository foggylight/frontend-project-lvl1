import getRandomInt from '../utils.js';
import engine from '../index.js';

const gameCore = () => {
  const firstNum = getRandomInt(2, 9);
  const progression = [];
  const diff = getRandomInt(2, 9);
  for (let d = firstNum, i = 0; i < 10; d += diff, i += 1) {
    progression.push(d);
  }
  const progressionForUser = [...progression];
  const hiddenNumIndex = getRandomInt(0, 9);
  progressionForUser[hiddenNumIndex] = '..';
  return [`${progressionForUser.join(' ')}`, progression[hiddenNumIndex].toString()];
};

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  const result = engine(description, gameCore);
  console.log(result);
};

export default brainProgression;
