'use strict';

const global = require('./globalHandle.js');
const { datetime1, datetime2, datetime3 } = require('../Date/dateHandle.js');

setInterval(() => {
  global.emit('pick-up', {
    event: 'pick-up',
    time: datetime1,
    payload:
    {
      store: '1-800-flowers',
      orderID: '',
      customer: 'Franklin Ignacios',
      address: 'Paris, TX',
    },
  });
  global.emit('pick-up', {
    event: 'pick-up',
    time: datetime2,
    payload:
    {
      store: '1-800-flowers',
      orderID: '',
      customer: 'Franklin Ignacios',
      address: 'Paris, TX',
    },
  });
  global.emit('pick-up', {
    event: 'pick-up',
    time: datetime3,
    payload:
    {
      store: '1-800-flowers',
      orderID: '',
      customer: 'Franklin Ignacios',
      address: 'Paris, TX',
    },
  });
}, 20000);