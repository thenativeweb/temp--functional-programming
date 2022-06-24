'use strict';

function abs (x) {
  if (typeof x !== 'number') {
    throw new Error('abs() expects a number');
  }

  return x >= 0 ? x : -x;
}

function search (validCommands, actualCommand) {
  return validCommands.map(validCommand => {
    const quality = 1 / abs(validCommand.length - actualCommand.length) * 0.999;

    return {
      value: validCommand,
      quality: validCommand === actualCommand ?
        1 :
        quality === Number.POSITIVE_INFINITY ? 0.999 : quality
    };
  });
}

function getExactMatch (commandsResult) {
  const exactMatches = commandsResult.
    filter(commandResult => commandResult.quality === 1);

  return exactMatches.length > 0 ? exactMatches[0] : undefined;
}

function getSuggestions (commandsResult) {
  return commandsResult.
    filter(commandResult => commandResult.quality < 1).
    filter(commandResult => commandResult.quality > 0.5).
    map(commandsResult => commandsResult.value);
}

module.exports = { search, getExactMatch, getSuggestions };
