function Parent() {
    this.firstName = "Amitabh";
    this.lastName = "Bachan";

    this.fullName = function () {
        return this.firstName + " " +  this.lastName;
    }

    this.wealth = function () {
        return 10000;
    }

}

function Child() {
    var parentsWealth = this.wealth;

    this.firstName = "Abhishek";
    this.wealth = function () {
        return parentsWealth() + 1;
    }
}

Child.prototype = new Parent();

var child = new Child();

console.log(child.fullName());
console.log(child.wealth());