var events = require('events');
var eventEmitter = new events.EventEmitter();

var ringBell = function(){
    console.log("the bell goes ring ring");
}

eventEmitter.on('doorOpens',ringBell);

console.log("the door is opened")
eventEmitter.emit('doorOpens');

eventEmitter.on('BellRing',function(msg){
    console.log(msg);
});

eventEmitter.emit('BellRing',"Hello I am Ankita");
