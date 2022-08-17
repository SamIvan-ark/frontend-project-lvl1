#!/usr/bin/env node
import { rules, generateRound } from '../src/games/brain-gcd.js';
import startGame from '../src/index.js';

startGame(rules, generateRound);
