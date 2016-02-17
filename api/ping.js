'use strict';


module.exports = {
  /* eslint no-unused-vars: 0 */
  ping: (callback, header, body, data) => {
    callback('ping', `${header} pong`);
  }
};
