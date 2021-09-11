import { resolve } from './resolve.js';

const input = document.querySelector('#text-area');
let isDecimal = false;
const operatorsList = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
}

export function number(number) {
    input.value = input.value.concat(number);
}

export function operator(operator) {
    if (input.value == '') { //if the input is empty
        input.value = '0' + operator;
    } else {
        if (operatorsList[input.value[input.value.length - 1]] || input.value[input.value.length - 1] == '.') //if the last elemennt in the input is an operator or a dot, its is replced
            input.value = input.value.slice(0, input.value.length - 1) + operator;
        else //else is added to the input
            input.value = input.value + operator;
    }
    isDecimal = false;
}

export function deleteLast() {
    if (input.value[input.value.length - 1] === '.') {
        isDecimal = false
    }
    input.value = input.value.slice(0, input.value.length - 1);
}

export function deleteAll() {
    isDecimal = false;
    input.value = '';
}

export function dot() {
    if (input.value == '') {
        input.value = '0';
    } else if (operatorsList[input.value[input.value.length - 1]]) { //if the las input element is an operator add a zero
        input.value = input.value + '0';
    }

    if (!isDecimal) {
        input.value = input.value + '.';
        isDecimal = true;
    }
}

export function processInput() {
    input.value = resolve(input.value);
}