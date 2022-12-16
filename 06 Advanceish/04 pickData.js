// const user = ["Yaswanth", 3, "Developer"];
// // var role = user[2];
// // var name = user[0];

// var [name, courseCount, role] = user;

//console.log(role);

const MyUser = {
    name: "Yaswanth",
    courseCount: 5,
    role: "Developer",
  };
  
  console.log(MyUser.courseCount);
  
  const { name, courseCount, role } = MyUser;
  console.log(role);