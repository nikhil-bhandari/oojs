String.prototype.reverse = function() {
    return this.split("").reverse().join("")
}

String.prototype.toProperCase = function() {
    return this.charAt(0).toUpperCase() + this.substring(1).toLowerCase()
}

String.prototype.trim = function(length) {
    return this.substring(0, length) + "..."
}

console.log("hello world".reverse())
console.log("hello world".toProperCase())
console.log("hello world".trim(5))