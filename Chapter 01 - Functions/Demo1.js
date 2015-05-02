#Slide 10 and 11

function helloPerson(name) {
    console.log("Hello " + name);
}
helloPerson("Nikhil");



function hello() {
    console.log("Hello " + arguments[0]);
}
//hello("Roni", "Nikhil", "Rajan", "Ashu");

function hello() {
    for (var i = 0; i < arguments.length; i++) {
        console.log("Hello " + arguments[i]);
    }

}
//hello("Roni", "Nikhil", "Rajan", "Ashu");
