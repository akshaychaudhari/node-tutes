var handler = require('./handler');

function route(pathName, request, response) {
    console.log("Routing the request for:" + pathName);
    if (pathName == '/home') {
        handler.home(request, response);
    } else if (pathName == '/review') {
        handler.review(request, response);
    } else {
        console.log("No handler found!!!")
        response.writeHead(400);
        response.end("No handler found");
    }
}
module.exports.route = route;