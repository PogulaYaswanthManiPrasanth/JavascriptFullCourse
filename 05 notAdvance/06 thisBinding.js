const user= {
    firstName : "Yaswanth",
    lastName : "maniPrasanth",
    role:"Developer",
    courseCount:4,
    getinfo : function(){
        console.log(`
        First name is : ${this.firstName}
        Last name is : ${this.lastName}
        Role is : ${this.role}
        and I have learned ${this.courseCount} courses
        
        `);
    },
};

// write now this keyword is pointing towards "user" some how this keyword can point to "user2"
//there comes the binding comes into  picture 



const user2 = {
    firstName : "ishanth",
    lastName : "Naidu",
    role : "developer in school",
    courseCount : 5,
}

// user.getinfo();
// user2.getinfo();

// user.getinfo.bind(user2)();// This is one way of getting the result 

let user2Info = user.getinfo.bind(user2);
user2Info();
//bind gives you a reference back manually call a method
console.log("=========================")
//call directly calls it
user.getinfo.call(user2);




//========================================If you do it in browser console then u will get all the properties======================================================================================//

/* const user= {
    firstName : "Yaswanth",
    lastName : "maniPrasanth",
    role:"Developer",
    courseCount:4,
    getinfo : function(){
        console.log(`
        First name is : ${this.firstName}
        Last name is : ${this.lastName}
        Role is : ${this.role}
        and I have learned ${this.courseCount} courses
        
        `);
    },
}; */