#!/usr/bin/env node

import { greeting } from '../src/index.js';
import brainProgression from '../src/games/brain-progression.js';

const userName = greeting();
const result = brainProgression() ? `Congratulations, ${userName}!` : `Let's try again, ${userName}!`;
console.log(result);
