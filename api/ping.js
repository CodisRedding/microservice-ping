'use strict';


module.exports = {
  ping: (callback, header, body, data) => {
    callback('ping', `${header} pong`);
  }
};
