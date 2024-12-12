const netflix = ["lucky bhaskar"];
const prime = ["panchayat"];
prime.push(netflix)
console.log(prime);
console.table(prime);
const series=[...netflix , ...prime];
console.log(series);

