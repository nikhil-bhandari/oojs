var p1 = {
    name: "Nikhil Bhandari",
    age: 25,
    isOfLegalAge: function(){
        return this.age > 18
    }
}

console.log(p1.isOfLegalAge());

var p2 = {
    name: "Roni C Thomas",
    age: 17,
    isOfLegalAge: function(){
        return this.age > 18
    }
}

console.log(p2.isOfLegalAge());