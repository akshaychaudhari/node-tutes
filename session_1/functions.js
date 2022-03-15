// 1) Normal function

function printStuff(stuff)
{
    console.log(stuff);
}

printStuff("The Dog is running");


// 2) function as a parameter 

function mainfunction(anotherfunction , value)
{
    anotherfunction(value);
}

mainfunction(printStuff, "The dog is still running.")

// 3) Assign function to the variable. 
//Here the function does not have anyname and called anonymous function
 var printFunction= function(stuff){
     console.log(stuff);
 }

 mainfunction(printFunction, "The dog is still running and not tired");


 // 4) we can directly pass the fucntion inside other function

 mainfunction(function(stuff){
     console.log(stuff)
 }, "This dog is so fit that he is still running without getting tired. ")

