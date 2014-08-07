#!/usr/bin/env node

"use strict";

var arg = require('minimist')(process.argv.slice(2));

if (arg._['help']) {
  console.log('usage: ./run-forever.js <help start stop>');
  process.exit(0);
}

var forever = require('forever-monitor');

var fs = require('fs');

if (!fs.existsSync('./log'))
  fs.mkdirSync('./log');
if (!fs.existsSync('./pid'))
  fs.mkdirSync('./pid');

var child = new(forever.Monitor)('./node_modules/node-static/bin/cli.js', {
  max: 3,
  silent: true,
  options: ['./'],
  pidFile: './pid/view.pid',
  killTree: true,
  uid: '1337'
});
child.on('exit', function() {
  console.log('node-static failed to reboot 3 times.');
});
child.on('stop', function() {
  console.log('node-static stopped.');
});
child.on('start', function() {
  console.log('node-static started.');
});

if (arg._[0] == 'start') {
  child.start();
}

if (arg._[0] == 'stop') {
  child.stop();
}