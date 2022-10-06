'use strict';

const vendorHandle = (socket) => (payload) => {
  console.log('VENDOR: Thank you for delivering the package');
  socket.emit('global', payload);
}

module.exports = vendorHandle;