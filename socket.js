'use strict';


const net = require('net');
const adaptor = require('microservice-adaptor');
const fc = require('./fc');


net
  .createServer((serverSocket) => {
    console.log('s onConnect');
    serverSocket
      .pipe(new adaptor(fc))
      .pipe(serverSocket);
  })
  .listen(8001, () => {console.log('ping microservice started');});
