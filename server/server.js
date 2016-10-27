/**
 * Client app server.
 */

var path = require('path');

var compression = require('compression');
var express = require('express');

var labels = require('./labels');

var server = express();

var assets = express.static(__dirname + '/../dist');

server
  .set('port', process.env.PORT || 3000)
  .set('x-powered-by', false);

server
  .use(compression())
  .use(labels.serverHeader)
  .use('/', assets)
  .get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/../dist/index.html'));
  });

if (!module.parent) {
  server.listen(server.get('port'), labels.serverStart);
} else {
  module.exports = server;
}
