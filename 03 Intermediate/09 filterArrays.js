var testArray = [1,2,3,4,5,6,7];
// console.log(testArray.fill("Yaswanth"));

var myNumbersList = [11,22,33,44,55,66,77,88,99];
// var result = myNumbersList.filter((numbers)=>{
//     return numbers > 22;
// })

var result = myNumbersList.filter((numbers)=>(numbers>11))

// console.log(result);


// Here In slice Method We are passing two values First value can be Included and the last value cannot be Included
var friends = ["Ishanth","Achyuth","Harsha","Vinod","Priya","Krishna","Lakshmi"];
// console.log(friends.slice(1,3));
// console.log(friends.slice(1));


//  Splice Method is having two values starting one for where u can start and 
//  second one is for upto how many value u can delete 
// and replace it with given value

friends.splice(1,3,"Yaswanth");
console.log(friends);











