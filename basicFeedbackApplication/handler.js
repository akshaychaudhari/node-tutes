var fs = require('fs');

function home(request, response) {
    console.log("Executing home handler");
    fs.readFile('review.html', function (err, data) {
        if (err) {
            console.log("Error reading the review file");
            response.writeHead(500);
            response.end("Review handler...");
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.write(data);
            response.end()
        }
    });
}

function review(request, response) {
    console.log("Executing review handler");
    var reviewData = "";

    request.on('data', function (chunk) {
        reviewData = reviewData + chunk;
    });
    request.on('end', function () {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.write(reviewData);
        response.end();
    })

}

module.exports.home = home;
module.exports.review = review;