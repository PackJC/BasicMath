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


module.exports.add = add;
module.exports.subtract = subtract;
module.exports.divide = divide;
module.exports.multiply = multiply;