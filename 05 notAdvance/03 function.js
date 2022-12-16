/* var sayHello = function(){
    console.log("I say Hello");
    console.log("I say Again Hello")
}

sayHello(); */


// ()=>{}----------------->Definetely we can use Return keyword

// ()=>()----------------->Easy way to written the syntax and executing the things

//==============SELF EXECUTING ANONYMOUS FUNCTION==============================//


//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. 


/* Syntax:   
(function () {
.....statements........
})(); */


(function(){
    console.log("I say Hello");
    console.log("I say Again Hello")
}()); 