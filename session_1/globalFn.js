console.log("File Name is: "+__filename);

console.log("Directory Name is: "+__dirname);

//timeout value is in millisecond 

setTimeout(function(){
    console.log("3");
    console.log("this was from timeout");
}, 2000);

console.log("4");


function printStuffInterval(){
    console.log("this is from set interval")
}

// in loop calling
setInterval(printStuffInterval, 2000);
