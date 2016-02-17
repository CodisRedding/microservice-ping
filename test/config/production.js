'use strict';

const runner = require('lab');
const code = require('code');
const json = require('../../config/production.json');


const lab = exports.lab = runner.script();


lab.experiment('Production Environment Variables config', () => {

  lab.test('is valid JSON', (done) => {

    code.expect(JSON.parse(JSON.stringify(json))).to.be.an.object();
    done();
  });

  lab.test('has a port property', (done) => {

    code.expect(json.port).to.be.an.string();
    done();
  });

  lab.test('expected placeholder value for port', (done) => {

    code.expect(json.port).to.equal('NO_ENV_VAR_PROVIDED');
    done();
  });

  lab.test('has a host property', (done) => {

    code.expect(json.host).to.be.an.string();
    done();
  });

  lab.test('expected placeholder value for host', (done) => {

    code.expect(json.host).to.equal('NO_ENV_VAR_PROVIDED');
    done();
  });
});
