/* for (let i = 0 ; i < 10 ; i++ ){
     console.log(i)
} */


var arrayOfStates = ["AndhraPradesh","Telangana",1997,"TamilNadu","Kerala","Goa","Karnataka"];

/*  Here Assignment operator can give the value as Undefined 

for (let index = 0; index <= arrayOfStates.length; index++) {
    const element = arrayOfStates[index];
    console.log(element);
    
} */

/* ======================================================== */

/* for (let index = 0; index < arrayOfStates.length; index++) {
    const element = arrayOfStates[index];
    console.log(element);
    
} */


// Now I need to print only string not any numbers (1997) ?????

/* 
for (let index = 0; index < arrayOfStates.length; index++) {
    if(typeof arrayOfStates[index] !== "string") continue; 
    
    // If we use "===" it prints 1997
    // If we use "!==" if(typeof arrayOfStates[index] !== "string") break; It prints before 1997 number strings only 
    // Our case it prints AndhraPradesh and Telangana 

    const element = arrayOfStates[index];

    console.log(element);
    
} */

// While-loop---------------->>

/* let index = 0;
while (index<arrayOfStates.length) {
    // index++;  //if we are doing this we can rid of first element of an array
    console.log(arrayOfStates[index]);
    index++;
    
} */

// DO-while ---------------------->> In this case Eventhough , the condition is Wrong it will run and execute one time
let index = 0;
do{
    console.log(arrayOfStates[index]);
    index++;  
}while (index<arrayOfStates.length)