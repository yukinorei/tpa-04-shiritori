const http = require('http');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const setup = require('./setup');

app.use(bodyParser.json());

// if you want to serve the vue app in production mode, you would first want to run "npm run build"
// then serve the build artifacts using express static:
// app.use(express.static('dist'));

setup(app);

app.set('port', process.env.PORT || 3000);

const server = http.createServer(app);
server.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}...`);
});
