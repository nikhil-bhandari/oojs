// Call Example
var obj = {
    name: "Roni",
    say: function (prefix) {
        return prefix + this.name
    }
};
var anotherObj = {name: "Hitesh"}
//console.log(obj.say.call(anotherObj, "Hello ", "Nikhil"));

// Call Apply

var obj = {
    name: "Roni", say: function (prefix) {
        return prefix + this.name
    }
};
var anotherObj = {name: "Hitesh"};
obj.say.apply(anotherObj, ["Hello "]);
console.log(anotherObj);

function stealByCall() {
    console.log(obj.say.call(anotherObj, arguments[0], arguments[1], arguments[2]));

}

function stealByApply() {
    console.log(obj.say.apply(anotherObj, arguments))
}

stealByCall(1,2,3);
stealByApply(1,2,3,4);

