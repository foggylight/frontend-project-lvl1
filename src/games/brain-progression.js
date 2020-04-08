import getRandomInt from '../utils.js';
import { engine } from '../index.js';

const gameCore = () => {
  const firstNum = getRandomInt(2, 10);
  const progression = [];
  const diff = getRandomInt(2, 10);
  for (let d = firstNum, i = 0; i < 10; d += diff, i += 1) {
    progression.push(d);
  }
  const progressionForUser = [...progression];
  const hiddenNumIndex = getRandomInt(0, 10);
  progressionForUser[hiddenNumIndex] = '..';
  console.log(`Question: ${progressionForUser.join(' ')}`);
  return progression[hiddenNumIndex].toString();
};

const brainProgression = () => {
  const gameRules = 'What number is missing in the progression?';
  const result = engine(gameRules, gameCore);
  console.log(result);
};

export default brainProgression;
