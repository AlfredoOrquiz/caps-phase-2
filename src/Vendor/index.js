'use strict';

require('dotenv').config();
const io = require('socket.io-client');
const vendorHandle = require('./vendorHandle.js');

const URL = process.env.CAPS_URL || 'http://localhost:3002/caps';
const socket = io.connect(URL);

socket.on('delivered', vendorHandle(socket));