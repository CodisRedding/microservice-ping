'use strict';

const runner = require('lab');
const code = require('code');
const json = require('../../config/custom-environment-variables.json');


const lab = exports.lab = runner.script();


lab.experiment('Custom Environment Variables config', () => {

  lab.test('is valid JSON', (done) => {

    code.expect(JSON.parse(JSON.stringify(json))).to.be.an.object();
    done();
  });

  lab.test('has a port property', (done) => {

    code.expect(json.port).to.be.an.string();
    done();
  });

  lab.test('port equals env var name', (done) => {

    code.expect(json.port).to.equal('MICROSERVICE_PING_TEST_PORT');
    done();
  });

  lab.test('has a host property', (done) => {

    code.expect(json.host).to.be.an.string();
    done();
  });

  lab.test('port equals env var name', (done) => {

    code.expect(json.host).to.equal('MICROSERVICE_PING_TEST_HOST');
    done();
  });
});
