'use strict';

function globalHandle(payload) {
  console.log('EVENT', payload);
}

require('dotenv').config();
const io = require('socket.io');
const PORT = process.env.PORT || 3002;
const eventPool = require('../eventPool.js');

const server = io(PORT);
const global = server.of('/caps');

global.on('connection', (socket) => {
  console.log('User connected!');
  eventPool.forEach(event => {
    socket.on(event, (payload) => {
      console.log('EVENT', payload);
    });
  });
  socket.on('pick-up', (payload) => socket.broadcast.emit('pick-up', payload));
  socket.on('in-transit', (payload) => socket.broadcast.emit('in-transit', payload));
  socket.on('delivered', (payload) => socket.broadcast.emit('delivered', payload));
});

module.exports = {
  global,
  globalHandle
};