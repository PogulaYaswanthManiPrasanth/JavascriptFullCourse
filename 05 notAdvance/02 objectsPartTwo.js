// For more things on objects read from MDN WEB DOCS 
//There are lot of things like methods , Properties and .......

var user = {
    name:"",
    getUserName :  function(){
        console.log(`My name is :${this.name}`)
    }
}

var yaswanth = Object.create(user)
console.log(yaswanth);
yaswanth.name = "Yaswanth"
yaswanth.getUserName();


var ishanth = Object.create(user,{
    name:{value:"IshanthNaidu"},
    courseCount:{value:3}
})

ishanth.getUserName();