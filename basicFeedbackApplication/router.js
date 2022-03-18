function route(handle, pathName, request, response) {
    console.log("Routing the request for:" + pathName);
    if(typeof handle[pathName] == 'function'){
        handle[pathName](request, response);
    } else {
        console.log("No handler found!!!")
        response.writeHead(400);
        response.end("No handler found");
    }
}
module.exports.route = route;