#!/usr/bin/env node

import { greeting } from '../src/index.js';
import brainEven from '../src/games/brain-even.js';

const userName = greeting();
const result = brainEven() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
