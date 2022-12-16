// console.log(name);

var name = "Yaswanth";
//  Var is  Global Scope 

/* if(true){
    var fullName = "ManiPrasanth"
}
console.log(fullName) */


// See" for" loop automatically intialising the variable with "let" keryword

/* for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
} */


// To overcome this kind of scope issues then let keyword comes into picture

if(true){
    let fullName = "ManiPrasanth"
}
// console.log is outside the scope so we are getting the ReferenceError: fullName is not defined with using of let
console.log(fullName)



