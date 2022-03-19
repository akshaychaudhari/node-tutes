const fs = require('fs')
var contents = fs.readFile('readFile', function (err, contents) {
    console.log("contents: " + contents);
});
console.log('doing something else');