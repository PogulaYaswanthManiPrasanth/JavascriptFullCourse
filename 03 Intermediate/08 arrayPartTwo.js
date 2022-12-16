// Using Functions
/* function isEven(element){
    if(element%2===0){
        return true;
    }
    return false;
}
console.log(isEven(3)) */
// <---------------------------------------------------------->
// Using Variable Decleration Format

/* var isEven = function(element){
    if(element%2===0){
        return true;
    }
    return false;
}
console.log(isEven(2)) */

// <------------------------------------------------------------>

// Using arrow functions

var isEven = (element)=>{
    // if(element%2===0){
    //     return true;
    // }
    // return false;
    return element % 2===0;
}
// console.log(isEven(2))


// var result= [2,4,6,8].every(isEven);
// console.log(result);


var result= [2,3,6,8].every((e)=>{
return e % 2 === 0 ;

});
// console.log(result);


// If i dont want to use Return key word then use parentheses 

var result = [2,4,6,8].every((e)=>(e % 2 ===0))
console.log(result);




