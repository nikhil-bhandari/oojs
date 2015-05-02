var Person = function(options){
    var name = options.name;
    var age = options.age;
    this.nameAndAge = function(){
        return name + ", " + age;
    }
}

var p1 = new Person({
    name: "nikhil",
    age: 25
});


console.log(p1.name);
console.log(p1.nameAndAge());
