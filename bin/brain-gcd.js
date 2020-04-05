#!/usr/bin/env node

import { greeting } from '../src/index.js';
import brainGcd from '../src/games/brain-gcd.js';

const userName = greeting();
const result = brainGcd() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
