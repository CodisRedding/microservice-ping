'use strict';

const net = require('net');
const os = require('os');
const adaptor = require('service-adapter');
const config = require('config');
const api = require('./api');


net
  .createServer((serverSocket) => {
    console.log('s onConnect');
    serverSocket
      .pipe(new adaptor(api.ping))
      .pipe(serverSocket);
  })
  .listen(config.get('port'), config.get('host'), (err) => {
    if (err != null) {
      // TODO: logging service
      console.log('[PING microservice] - error:', err);
    }

    // TODO: logging service
    console.log('[PING microservice] - started on port', config.get('host') + ':' + config.get('port'));
  });
