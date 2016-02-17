'use strict';

const runner = require('lab');
const code = require('code');
const json = require('../../config/default.json');


const lab = exports.lab = runner.script();


lab.experiment('Default Environment Variables config', () => {

  lab.test('is valid JSON', (done) => {

    code.expect(JSON.parse(JSON.stringify(json))).to.be.an.object();
    done();
  });

  lab.test('has a port property', (done) => {

    code.expect(json.port).to.be.an.string();
    done();
  });

  lab.test('expected port value', (done) => {

    code.expect(json.port).to.equal('3060');
    done();
  });

  lab.test('has a host property', (done) => {

    code.expect(json.host).to.be.an.string();
    done();
  });

  lab.test('expected host value', (done) => {

    code.expect(json.host).to.equal('127.0.0.1');
    done();
  });
});

