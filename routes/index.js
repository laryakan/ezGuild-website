var express = require('express');
module.exports = function(server) {
  //datasets
  var members = {
    'henry': {
      a: 45,
      s: 'male',
      v: 'Paris'
    },
    'francis': {
      a: 35,
      s: 'male',
      v: 'Paris'
    },
    'pascal': {
      a: 38,
      s: 'male',
      v: 'Metz'
    }
  };

  server.get('/members', function(req, res, next) {
    res.json(members);
  });
};