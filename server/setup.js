const express = require('express');
const {
  getUsedWords,
  playWord,
  resetGame,
} = require('./controller');

module.exports = function(app) {
  const shiritoriRouter = express.Router();

  shiritoriRouter.get('/used-words', getUsedWords);
  shiritoriRouter.post('/play-word', playWord);
  shiritoriRouter.post('/reset-game', resetGame);

  app.use('/api', shiritoriRouter);
};
