const _ = require('lodash');

const Word = require('./Word');
const jisho = require('../api/jisho');

class Game {
  constructor() {
    this.playedWords = new Map();
    this.lastWordString = '';
    this.gameOver = false;
  }

  isOver() {
    return this.gameOver;
  }

  addWord(wordString) {
    return jisho.search(wordString)
      .then((data) => {
        const word = new Word(wordString, data);
        this.playedWords.set(wordString, word);

        const status = this.isValidWord(wordString);
        if (status.valid) {
          this.lastWordString = wordString;
        } else {
          this.gameOver = true;
        }

        return {
          valid: status.valid,
          validations: status.validations,
        };
      });
  }

  hasWordBeenPlayed(wordString) {
    return this.playedWords.has(wordString);
  }

  isValidWord(wordString) {
    const word = this.playedWords.get(wordString);
    const lastWord = this.playedWords.get(this.lastWordString);

    const status = {
      valid: false,
      validations: {
        isActualWord: word.isActualWord(),
        doesNotEndWithN: word.doesNotEndWithN(),
        startsWithCorrectCharacter: lastWord && word.getFirstLetter() === lastWord.getLastLetter(),
      },
    };

    if (!lastWord) {
      status.valid = status.validations.isActualWord && status.validations.doesNotEndWithN;
      return status;
    }

    status.valid = _.every(status.validations, value => value);
    return status;
  }

  getUsedWords() {
    return Array.from(this.playedWords).map(([wordStr]) => wordStr);
  }
}

module.exports = Game;
