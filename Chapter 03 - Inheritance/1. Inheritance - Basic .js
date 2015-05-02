//Class Parent
function Parent(nm) {
    this.nm = name;
}
//Class Parent
function Child() {
    // properties

}

//Child inherits parents properties
Child.prototype = Parent;

// create child object
var child = new Child();

console.log(child.nm);
console.log(Child.prototype);
console.log(Parent.prototype);
//console.log(.prototype)