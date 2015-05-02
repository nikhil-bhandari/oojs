function Animal() {
    this.color = "Blue";
    this.specialAnimalPower = "X";
}

function Fish() {
    this.color = "Green";
    this.specialFishPower = "Y";
}

function WhiteWhale() {
    this.color = "White";
    this.specialWhitePower = "Z";
}

Fish.prototype = new Animal();
WhiteWhale.prototype = new Fish();

var whale = new WhiteWhale();

console.log(whale.color);

console.log(whale.hasOwnProperty('color'))

delete whale.color;

console.log(whale.color);

console.log(whale.hasOwnProperty('color'))
