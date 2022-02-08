#!/usr/bin/env node
import { sayHi, getUserName } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getUserName();
sayHi(name);
