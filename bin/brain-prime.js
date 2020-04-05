#!/usr/bin/env node

import { greeting } from '../src/index.js';
import brainPrime from '../src/games/brain-prime.js';

const userName = greeting();
const result = brainPrime() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
