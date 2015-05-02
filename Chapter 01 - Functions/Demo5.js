console.log("123", parseInt("123"));
console.log("abc123", parseInt("abc123"));
console.log("1abc23", parseInt("1abc23"));

//With radix
console.log("FF", parseInt("FF", 10));
console.log("FF", parseInt("FF", 16));

console.log("123", parseFloat("123"));
console.log("1.23", parseFloat("1.23"));
console.log("1.23.abc.00", parseFloat("1.23.abc.00"));
console.log("a.c.1.23.abc.00", parseFloat("a.c.1.23.abc.00"));

console.log("NaN", isNaN(NaN));
console.log("123", isNaN(123));
console.log("1.23", isNaN(1.23));

console.log("Infinity", isFinite(Infinity));
console.log("Infinity", isFinite(-Infinity));
console.log("12", isFinite(12));
console.log("1e308", isFinite(1e308));
console.log("1e309", isFinite(1e309));

var url = "http://www.packtpub.com/script.php?q=this and that"
console.log(uri + "\n\n", encodeURI(uri));
console.log(uri + "\n\n", encodeURIComponent(uri));
console.log(uri + "\n\n", decodeURI(uri));
console.log(uri + "\n\n", decodeURIComponent(uri));
