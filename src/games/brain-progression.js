import getRandomInt from '../utils.js';
import engine from '../index.js';

const getGameData = () => {
  const firstNum = getRandomInt(2, 9);
  const progression = [];
  const diff = getRandomInt(2, 9);
  const progressionLength = 10;
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + diff * i);
  }
  const progressionForUser = [...progression];
  const hiddenNumIndex = getRandomInt(0, progressionLength - 1);
  progressionForUser[hiddenNumIndex] = '..';
  const question = progressionForUser.join(' ');
  return [question, progression[hiddenNumIndex].toString()];
};

const description = 'What number is missing in the progression?';

const brainProgression = () => engine(description, getGameData);

export default brainProgression;
