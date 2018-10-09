const wanakana = require('wanakana');
const _ = require('lodash');

class Word {
  constructor(originalWord, data) {
    this.data = data;
    this.originalWord = originalWord;
    this.reading = wanakana.toHiragana(_.get(data, 'japanese[0].reading'));
    // this might be kanji, hiragana, or katakana.
    // It's the actual word in the correct character representation,
    // and it should match the originalWord passed in.
    this.trueWord = _.get(data, 'japanese[0].word');
  }

  isActualWord() {
    // ensures the input word actually matches the API result word
    return this.reading === this.originalWord || this.trueWord === this.originalWord;
  }

  doesNotEndWithN() {
    return this.getLastLetter() !== 'ん';
  }

  getFirstLetter() {
    return this.reading[0];
  }

  getLastLetter() {
    return this.reading[this.reading.length - 1];
  }
}

module.exports = Word;
