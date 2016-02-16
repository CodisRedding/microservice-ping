'use strict';

const cluster = require('cluster');
const net = require('net');
const os = require('os');
const adaptor = require('service-adapter');
const config = require('config');
const api = require('./api');


const ping = new adaptor(api.ping);

if (cluster.isMaster === true) {
  let cnt = 0;
  os.cpus().forEach((cpu) => {
    console.log('forking on cpu #%s', ++cnt);
    cluster.fork();
  });

  cluster.on('exit', (worker) => {
    console.log('(worker #%s is finished', worker.id);
  });
} else {
  net
    .createServer((serverSocket) => {
      console.log('s onConnect');
      serverSocket
        .pipe(ping)
        .pipe(serverSocket);
    })
    .listen(config.get('port'), config.get('host'), (err) => {
      if (err != null) {
        // TODO: logging service
        console.log('[PING microservice] - error:', err);
      }

      // TODO: logging service
      console.log(`[PING microservice] - started on worker #${cluster.worker.id}`);
    });
}

