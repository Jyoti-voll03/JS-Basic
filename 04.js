//OBJECT
let stud = {
    gender: "male",
    "full name": "Romesh sharma",       //if the key is more than 1 word then we use "" to write that word
    email: "romesh@gmail.com",
    age: 18,
    location: "Ghaziabad",
    loginDays: ["Sat", "Sun", "Tues"],
    isLogin: false,             //anything except false, null is true in java
    t1:{},
};
// console.log(stud);
// console.log(typeof stud);

stud.name = "Romesh sharma";
console.log(stud.name);
stud["full name"]
stud["name"]

if(!stud.isLogin){
    console.log(stud.loginDays)
}
// if(stud.mobile) {
//     console.log("mobile is given");
// }
if(stud.email){
    console.log(stud.email);
}
if(stud.t1){
    console.log("t1 hai");
    
}

// console.log(stud);
// console.table(stud);
// console.log(stud.age);
// console.log(stud["full name"]);
// console.log(stud["email"]);

function sayhi(){
    console.log("your name");
    
}
sayhi()

let a
let b
function sum(a, b){
    console.log(a + b);
}
sum(5, 10);



