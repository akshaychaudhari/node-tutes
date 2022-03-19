var handler = require('./handler')
var router = require('./router')
var server = require('./server')

var handle = {};

handle['/'] = handler.home;
handle['/home'] = handler.home;
handle['/review'] = handler.review;

server.startServer(router.route, handle);

