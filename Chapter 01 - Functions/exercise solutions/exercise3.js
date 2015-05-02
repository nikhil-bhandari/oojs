function isLegalAge(age, successCallback, errorCallback) {
    if (age > 18) {
        successCallback(age - 18);
    } else {
        errorCallback(18 - age);
    }
}

isLegalAge(20, function (diff) {
        console.log("Yes: D", diff);
    },
    function (diff) {
        console.log("No: short by D", diff);
    });