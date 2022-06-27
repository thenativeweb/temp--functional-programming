'use strict';

const { search, getExactMatch, getSuggestions } = require('./search');

console.log('My super app');
console.log('------------');

const actualCommand = process.argv[2];

// ------------------------------------------------------------

const validCommands = [ 'add', 'remove', 'intersect', 'union' ];
const commandResults = search(validCommands, actualCommand);
const exactCommand = getExactMatch(commandResults);
const suggestions = getSuggestions(commandResults);

// ------------------------------------------------------------

if (exactCommand !== undefined) {
  console.log(actualCommand);
} else {
  if (suggestions.length === 0) {
    console.log('Unknown command.');
  } else {
    console.log(`Unknown command, did you mean ${suggestions.join(',')}?`);
  }
  process.exit(1);
}

process.exit(0);
