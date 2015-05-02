var hello = function (name) {
    console.log("Hello" + name);
};
function welcome(callback) {
    var name = "Nikhil";
    callback(name);
}
welcome(hello);