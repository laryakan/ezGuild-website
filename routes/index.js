"use strict";



module.exports = function(server) {
  //datasets
  var members = [{
    i: './img/avatars/A01.png',
    n: 'henry',
    a: 45,
    s: 'male',
    v: 'Paris'
  }, {
    i: './img/avatars/A02.png',
    n: 'francis',
    a: 35,
    s: 'male',
    v: 'Paris'
  }, {
    i: './img/avatars/A03.png',
    n: 'pascal',
    a: 38,
    s: 'male',
    v: 'Metz'
  }];

  server.get('/api/members', function(req, res, next) {
    res.json(members);
  });
};