var Sails = require('sails'),
  sails;

global.DOMAIN = 'http://localhost';
global.PORT = 1420;
global.HOST = DOMAIN + ':' + PORT;

before(function(done) {
  Sails.lift({
    log: {
      level: 'warn'
    },
    connections: {
      localDiskDb: {
        adapter: 'sails-disk'
      }
    },
    models: {
      migrate: 'safe',
      connection: 'localDiskDb'
    },
    port: process.env.PORT || 1338,
    environment: 'test',
    csrf: false,
    hooks: {
      grunt: false,
      socket: false,
      pubsub: false
    },
    session: {
      adapter: 'memory'
    },

  }, function(err, server) {
    sails = server;
    if (err) return done(err);
    // here you can load fixtures, etc.
    done(err, sails);
  });
});

after(function(done) {
  // here you can clear fixtures, etc.
  sails.lower(done);
});