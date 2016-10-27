/**
 * Server decoration.
 * http://getemoji.com/
 */

var util = require('util');

var pkg = require('../package.json');

function serverHeader(req, res, next) {
  res.header('Server', util.format('%s %s',
    pkg.name,
    pkg.version));
  next();
}

function serverStart() {
  console.log('🔮 %s v%s listening on port %d', // eslint-disable-line
    pkg.name,
    pkg.version,
    process.env.PORT || 3000);
}

function shutdown() {
  console.log('🔮 %s v%s shutting down on port %d', // eslint-disable-line
    pkg.name,
    pkg.version,
    process.env.PORT || 3000);
  process.exit();
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);

module.exports = {
  serverHeader: serverHeader,
  serverStart: serverStart,
};
