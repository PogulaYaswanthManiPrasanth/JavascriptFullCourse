// import User from "./06classjs";

const User = require("./06classjs.js");

const yaswanth = new User("Yaswanth", "yaswanth@abc.dev");

console.log(yaswanth.getInfo());
yaswanth.enrollCourse("React Bootcamp");
yaswanth.enrollCourse("javascript Bootcamp");

console.log(yaswanth.getCourseList());

let courses = yaswanth.getCourseList();

courses.forEach((c) => console.log(c));
