const { Service } = require('aws-sdk');
var http = require('http');
var url = require('url');

let serverPort = 8888;

function startServer(route, handle) {
    function onRequest(request, response) {
        var pathName = url.parse(request.url).pathname;
        console.log('Request received for:' + pathName);
        route(handle, pathName, request, response);
    }
    http.createServer(onRequest).listen(serverPort, function () {
        console.log('The server has started listening on port:' + serverPort);
    })
}

module.exports.startServer = startServer;
