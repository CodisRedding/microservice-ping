'use strict';


const net = require('net');
const adaptor = require('microservice-adaptor');
const fc = require('./fc');


const ping = new adaptor(fc);

net
  .createServer((serverSocket) => {
    console.log('s onConnect');
    serverSocket
      .pipe(ping)
      .pipe(serverSocket);
  })
  .listen(8001, () => {
    console.log('ping microservice started');
  });
