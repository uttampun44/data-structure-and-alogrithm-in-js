"use strict";
// if the condition meet function will stop
function recursion(x) {
    let newNumber = x - 5;
    if (newNumber < 0) {
        recursion(newNumber);
        console.log(newNumber);
    }
    else {
        return false;
    }
}
recursion(30);
