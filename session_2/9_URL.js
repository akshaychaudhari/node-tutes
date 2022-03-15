var http  =require('http');
var url = require('url');
http.createServer(function(req, res){
    res.writeHead(200,{'content-type':'text.html'});
    var q = url.parse(req.url, true).query;
    res.write(q.year + "-"+q.month+" username: "+q.userName);
    res.end()
}).listen(8888);

//http://localhost:8888/?year=2022&month=March&userName=Akshay