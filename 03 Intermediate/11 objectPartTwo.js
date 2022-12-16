var details = {
    name : "Yaswanth",
    age : 25,
    email : "abc1234@gmail.com",
    role : "developer",
    isLoggedInToGoogle : true,
    courseListArray : [],
    buyCourses  : function (courseName){
        this.courseListArray.push(courseName)
    },
    getCourseCount : function (){
        return `${this.name} is enrolled for ${this.courseListArray.length} courses`
    },
};

var courseListArray = true;
console.log(details.getCourseCount());

details.buyCourses("React Js");
details.buyCourses("Angular course");

console.log(details.getCourseCount());

console.info(details)




