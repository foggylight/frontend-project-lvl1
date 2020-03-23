#!/usr/bin/env node

import { getUserName } from '../src/index.js';
import brainEven from '../src/brain-even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello, ${userName}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const result = brainEven() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
