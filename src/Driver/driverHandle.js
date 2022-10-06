'use strict';

const handleDriver = (socket) => (payload) => {
  socket.emit('global', payload);
  if (payload.event === 'pick-up') {
    console.log('DRIVER: picked up the package');
  } else {
    console.log('DRIVER: delivered up the package');
  }
};

module.exports = handleDriver;