//setItem
// const last = "khayot";
// let age = 25;
// localStorage.setItem("name", last);
// localStorage.setItem("age", age);

//getItem
// const getAge = localStorage.getItem("age");
// console.log(getAge);

//clear
// localStorage.clear();

const names = ["Khayot", "Sardor", "Donyor"];
localStorage.setItem("names", JSON.stringify(names));

const getNames = JSON.parse(localStorage.getItem("names"));
console.log(getNames);
