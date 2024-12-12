// function sayhi{
//     log("your name")
// }
const sayhi = () => {
    console.log("your name")
}
sayhi()

const sum = (a, b) => {
    console.log(a + b);
    console.log(a*b);
    
  
}  //if we use {} then return should be used
// console.log(sum(5,20));

function findSum(...num) {
    console.log(num);
}
findSum(10, 120);
findSum(10);
findSum(10,1,2,3,4,5,6);
findSum();

//  IIFE = Immediately Invoked Function Expression

(() => {
    console.log("I am iife");
    
})();

((uname) => {
        console.log(`${uname} is logged in`);
    })("John");