let person = {
  firtName: "sachin",
  lastName: "sharma",
  age: 50,
};

let { firtName: fname, lastName: lname, age = 30 } = person;
console.log(fname);
console.log(lname);
console.log(age);
