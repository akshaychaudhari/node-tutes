function home(request, response) {
    console.log("Executing home handler");
    response.writeHead(200);
    response.end("Home handler...");
}

function review(request, response) {
    console.log("Executing review handler");
    response.writeHead(200);
    response.end("Review handler...");
}

module.exports.home = home;
module.exports.review = review;