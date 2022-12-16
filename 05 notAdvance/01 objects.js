var user = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount= courseCount;
    this.getCouseCount = function(){
        console.log(`course Count is :${this.courseCount}`)
    };

};


user.prototype.getFirstName = function(){
    console.log(`My first Name is : ${this.firstName}`);
}





// If we are not using the "new" key word you will get "undefined" 
var yaswanth = new user("yaswanth--------",6);
// console.log(yaswanth);
yaswanth.getCouseCount();

// Not only hasOwnProperty there lot of properties available just open the browser console
//write some code like declaring one object after running the code u will get some __proto__
//in that __proto__ method there are lot of properties available learn from it

if (yaswanth.hasOwnProperty("firstName")){
    yaswanth.getFirstName();
}


var maniPrasanth = new user("ManiPrasanth",7);
// console.log(maniPrasanth);

maniPrasanth.getCouseCount();
maniPrasanth.getFirstName();













