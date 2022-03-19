/*
Create a server. Take file name as query parameter. 
Return the content of the file if it exists.
else return 404.

Use: 
http://localhost:8090/?fileName=demoFile.html
http://localhost:8090/?fileName=otherFile
*/

const http = require('http');
const url = require('url');
const fs = require('fs')

http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    var fileName = __dirname + "/" + query.fileName;
    fs.readFile(fileName, function (err, fileContents) {
        if (err) {
            res.writeHead(404, { 'content-type': 'text.html' });
            return res.end("404 File Not Found")
        }
        res.writeHead(200, { 'content-type': 'text.html' });
        res.write(fileContents);
        res.end()

    });

}).listen(8090, function () {
    console.log("Server has started listening to 8090");
});
