'use strict';

const runner = require('lab');
const code = require('code');
const api = require('../../api');


const lab = exports.lab = runner.script();


lab.experiment('API', () => {

  lab.test('is an object', (done) => {

    code.expect(api).to.be.an.object();
    done();
  });

  lab.test('has a property named ping that is an object', (done) => {

    code.expect(api.ping).to.be.an.object();
    done();
  });
});
