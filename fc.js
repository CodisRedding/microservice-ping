'use strict';


module.exports = {
  ping: (callback, header, body, data) => {
    console.log('ping called', header);
    callback('ping', `${header} pong`);
  }
};
