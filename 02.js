// Symbol always return unique value 
let a = Symbol(10);
console.log(a);

let b = Symbol(10);
console.log(b);

console.log(a === b);
console.log(a==b);

console.log(typeof a);
console.log(typeof b);

let studs = ["abc", 24 , false];
console.log(studs);
console.log(typeof studs);
// console.table(studs)
console.log(studs[1]);

console.log(studs[-2]); //not work with -ve indexing

console.log(studs.push("Ram","Sita"));
console.log(studs.unshift("shyam"));
console.log(studs.pop());
console.log(studs.shift());
