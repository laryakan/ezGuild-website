"user strict";
/*ERROR HANDLERS*/
var errHandler = function(app) {
  // Handler d'erreur
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  // Dèv handler
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500).send('error', {
        message: err.message,
        error: err
      });
    });
  }
  // Prod handler
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).send('error', {
      message: err.message,
      error: {}
    });
  });
}

module.exports = errHandler;