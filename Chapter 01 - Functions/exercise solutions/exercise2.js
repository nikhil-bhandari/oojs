//Outputs 2
var a = 1;
function f() {
    function n() {
        console.log(a);
    }
    var a = 2;
    n();
}
f();
