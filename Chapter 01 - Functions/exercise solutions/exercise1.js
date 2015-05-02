console.log(parseInt(1e1)); //10

console.log(parseInt('1e1')); //1

console.log(parseFloat('1e1')); //10

console.log(isFinite(0/10)); //true

console.log(isFinite(20/0)); //false

console.log(isNaN(parseInt(NaN))); //true
