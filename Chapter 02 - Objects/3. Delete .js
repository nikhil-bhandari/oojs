var p1 = {
    name: "Nikhil Bhandari",
    age: 25,
    isOfLegalAge: function(){
        return this.age > 18
    },
    sayHello: function(){
        console.log(this.name + ": Hello World!")
    }
}

p1.sayHello();
delete p1.name;
p1.sayHello();
