const fs = require('fs')
var contents = fs.readFile('C:\\Users/Akshay/Desktop/Node/NodeTutorials/readFile', function(err, contents){
    console.log("contents: "+contents);
});
console.log('doing something else');