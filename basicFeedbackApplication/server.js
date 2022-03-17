var http = require('http');
var url = require('url');
var router = require('./router');

let serverPort = 8888;

function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request received for:' + pathName);
    router.route(pathName, request, response);
}
http.createServer(onRequest).listen(serverPort, function () {
    console.log('The server has started listening on port:' + serverPort);
})