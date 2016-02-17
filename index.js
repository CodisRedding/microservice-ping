'use strict';

const net = require('net');
const adaptor = require('service-adapter');
const config = require('config');
const api = require('./api');


net
  .createServer((serverSocket) => {
    serverSocket
      .pipe(new adaptor(api.ping))
      .pipe(serverSocket);
  })
  .listen(config.get('port'), config.get('host'), (err) => {
    if (err != null) {
      // TODO: logging service
    }

    // TODO: logging service
  });
