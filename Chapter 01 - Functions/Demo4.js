//Works Fine

(function (name) {
    console.log("Hello " + name);
})("Farid");


//Works Fine too
(function (name) {
    console.log("Hello " + name);
}("Farid"));


//Works fine three :D
var func = function (name) {
    console.log("Hello " + name);
}("Farid");

