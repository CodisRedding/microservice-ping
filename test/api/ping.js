'use strict';

const runner = require('lab');
const code = require('code');
const ping = require('../../api/ping');


const lab = exports.lab = runner.script();


lab.experiment('ping()', () => {

  lab.test('ping is an function', (done) => {

    code.expect(ping).to.be.an.object();
    done();
  });


  lab.test('ping has a method named ping', (done) => {

    code.expect(ping.ping).to.be.a.function();
    done();
  });

  lab.test('ping takes four args', (done) => {

    code.expect(ping.ping.length).to.equal(4);
    done();
  });

  lab.test('pings first arg takes a callback', (done) => {

    const cb = (name, value) => {
      code.expect(name).to.equal('ping');
      code.expect(value).to.equal('ping pong');
      done();
    };

    ping.ping(cb, 'ping');
  });
});
