'use strict';

module.exports = {
    add,
    subtract,
    divide,
    multiply
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

function factorial(a){
    if (a <= 0) {
        return 1;
    }
    else{
        return a*factorial(a-1)
    }
}


module.exports.add = add;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.multiply = multiply;
module.exports.factorial = factorial;
