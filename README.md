ezGuild-website
===========

### Informations

![gnu-knight](https://raw.githubusercontent.com/laryakan/ezGuild-website/master/public/img/banner273x296.png)

A "ready to use" guild website for gamer communities. This website will be the simpliest you ever seen.

For now we only have the front-end. To launch the app, type `npm start` once you're in the app's directory.
  
The front-end static part will be launch on 127.0.0.1:3000 (using [express](http://expressjs.com/)).

I will develop the back-end part using node.js, features will be:
- Submit a request to guild master/officier
- Accept new member
- Registering guild members (after acceptation)
- Kick guild member

Then :
- Multi guild support
- Multi game support

All this through a rest API, maybe using something like elasticsearch.

Going forward, I'll maybe develop some more features like organizing event according to the GW2 public API (or other games) + elasticsearch. Depending on motivation.

Anyway, this site will be [KISS](http://en.wikipedia.org/wiki/KISS_principle)-like for any user on it.

Credits: 
 - [Gnu Knight by tonyk](https://openclipart.org/detail/14546/gnu-knight-by-tonyk)
 - Front-end powered by [Bootstrap](http://getbootstrap.com/) and [AngularJS](https://angularjs.org/)
 - Back-end will be powered by [node.js](http://nodejs.org/)
 - Data persistance will be provided by [elasticsearch](http://www.elasticsearch.org/) and/or [mongoDB](http://www.mongodb.org/)

Disclamer : I'm French, if you don't understand some commit, just ask me ;) 
