function City(name) {
    var self = this,
        state;

    this.name = name;

    this.getName = function () {
        return self.name
    };

    this.setName = function (name) {
        if (typeof name === "undefined") {
            console.log("Name of city cannot be null.");
        } else {
            self.name = name;
        }
    };

    this.setState = function (state) {
        if (typeof state !== "undefined") {
            self.state = state;
        }
    };

    this.getState = function () {
        return state;
    };

    this.toString = function() {
        return self.name
    };
}

function State(name) {
    var self = this,
        cities = [];

    this.name = name;

    this.getName = function () {
        return self.name
    };

    this.setName = function (name) {
        if (typeof name === "undefined") {
            console.log("Name of city cannot be null.");
        } else {
            self.name = name;
        }
    };

    this.getCities = function () {
        return cities;
    };

    this.addToCities = function (city) {
        city.setState(self);
        cities.push(city);
    };
    this.toString = function() {
        return self.name
    };
}

var state = new State("Delhi");

state.addToCities(new City("New Delhi"));
state.addToCities(new City("Old Delhi"));

console.log("" + state.getCities()[0])