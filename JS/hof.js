//function statement
function javascript(){
    console.log("I am a funtion");
}

javascript();
//anonymous funtion => a funtion which does have any name
// function(){
//      console.log("I am a anonymous funtion");
// }

//function expression
var b = function(){
    console.log("I am a anonymous funtion")
}

function sum(a, b, c){
    console.log(a + b + c);
}

sum(1, 2, 3);

//a, b, c => parameter => value passed at function definition
//1, 2, 3 => argument => value passed at the time of invoking function


// call back function
function eat(item, dobrush) {
    dobrush();
    console.log("I will eat", item, "in breakfast");
}
eat("Dosa", dobrush);

function dobrush(){
    console.log("Do brush everyday");
}