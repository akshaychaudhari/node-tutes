var http = require('http');
var url = require('url');

let serverPort = 8888;

function onRequest(request, response) {
    var pathName = url.parse(request.url).pathname;
    console.log('Request received for:'+pathName);
}
http.createServer(onRequest).listen(serverPort, function () {
    console.log('The server has started listening on port:' + serverPort);
})