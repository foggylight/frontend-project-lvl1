#!/usr/bin/env node

import { greeting } from '../src/index.js';
import brainCalc from '../src/games/brain-calc.js';

const userName = greeting();
const result = brainCalc() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
