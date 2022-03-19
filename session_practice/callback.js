// console.log("user 1 made request for data");
// console.log("Queried database for 2 sec");
// console.log("Data delivered to user 1");

// console.log("user 2 made request for data");
// console.log("Queried database for 2 sec");
// console.log("Data delivered to user 2");

// console.log("user 3 made request for data");
// console.log("Queried database for 2 sec");
// console.log("Data delivered to user 3");

function callback(user){
    console.log("Queried database and Data delivered to user"+user);
}

console.log("user 1 made request for data");
setTimeout(callback,5000,"user 1"); 
console.log("user 2 made request for data");
setTimeout(callback,3000,"user 2"); 
console.log("user 3 made request for data");
setTimeout(callback,4000,"user 3"); 