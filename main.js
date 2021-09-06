const input = document.querySelector('#text-area');
let isDecimal = false;

//add a number to the input
const numbers = document.querySelectorAll('.number');

numbers.forEach(number => {
    number.addEventListener('click', (e) => {
        addNumber(e);
    });
});

function addNumber(e) {
    input.value = input.value.concat(e.target.innerText);
}

//add an operator to the input
const operators = document.querySelectorAll('.operator');

const operatorsList = {
    '+': true,
    '-': true,
    '*': true,
    '/': true
}

operators.forEach(operator => {
    operator.addEventListener('click', (e) => {

        if (input.value == '') { //if the input is empty
            input.value = '0' + e.target.getAttribute('value');
        } else {
            if (operatorsList[input.value[input.value.length - 1]] || input.value[input.value.length - 1] == '.') //if the last elemennt in the input is an operator or a dot, its is replced
                input.value = input.value.slice(0, input.value.length - 1) + e.target.getAttribute('value');
            else //else is added to the input
                input.value = input.value + e.target.getAttribute('value');
        }
        isDecimal = false;
    });
});

//Delete last input
const deleteLast = document.querySelector('.delete-last');

deleteLast.addEventListener('click', (e) => {
    if (input.value[input.value.length - 1] === '.') {
        isDecimal = false
    }
    input.value = input.value.slice(0, input.value.length - 1);

});

//Delete all input
const deleteAll = document.querySelector('.delete-all');

deleteAll.addEventListener('click', (e) => {
    isDecimal = false;
    input.value = '';
});

//Add a dot '.'
const dot = document.querySelector('.dot');

dot.addEventListener('click', (e) => {
    if (input.value == '') {
        input.value = '0';
    } else if (operatorsList[input.value[input.value.length - 1]]) { //if the las input element is an operator add a zero
        input.value = input.value + '0';
    }

    if (!isDecimal) {
        input.value = input.value + '.';
        isDecimal = true;
    }
});

//control input by keyboard
const allowedKeys = {
    '1': 'number',
    '2': 'number',
    '3': 'number',
    '4': 'number',
    '5': 'number',
    '6': 'number',
    '7': 'number',
    '8': 'number',
    '9': 'number',
    '0': 'number',
    '(': 'number',
    ')': 'number',
    '+': 'operator',
    '-': 'operator',
    '/': 'operator',
    '*': 'operator',
    '.': 'dot',
    '=': 'equal'
}
input.addEventListener("input", function(e) {
    console.log(allowedKeys[e.data])

    if (allowedKeys[e.data] === 'number') {

    } else if (allowedKeys[e.data] === 'operator') {

    } else if (allowedKeys[e.data] === 'dot') {

    } else if (allowedKeys[e.data] === 'equal') {

    }

})