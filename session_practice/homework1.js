//HOMEWORK

//What is callback Hell?
//Callback hell is a block where the use of function callbacks in asynchronous code becomes obscure or difficult to follow

console.log("Calling some function 5 times every 2 secs.");
let callNumber = 1
function theHomeworkFunction() {
    console.log("This is the Homework Function, call #" + callNumber)
    callNumber++
}

// function multiplierfunction(){
//     console.log("This is the Multiplier Function")
//     for (let index = 0; index < 5; index++) {
//         theHomeworkFunction();       
//     }
//     console.log("Done for the time");
// }

//setInterval(multiplierfunction, 2000);
// setInterval(multiplierfunction(theHomeworkFunction), 2000);

//Using setTimeOut
//setTimeout(theHomeworkFunction,10000,"user A"); 

var intervalId = setInterval(theHomeworkFunction, 2000);
setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared. Thank you!!!");
}, 11000);
