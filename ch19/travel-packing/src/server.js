const {createServer} = require('https');
const {readFileSync} = require('fs');

import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

const {json} = require('body-parser');

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const options = {
  key: readFileSync('key.pem'),
  cert: readFileSync('cert.pem')
};

const {handler} = polka().use(
  compression({ threshold: 0 }),
  sirv('static', { dev }),
  sapper.middleware()
);

createServer(options, handler).listen(PORT, err => {
  if (err) {
    console.log('error', err);
  } else {
    console.info('listening for HTTPS requests on', PORT);
  }
});