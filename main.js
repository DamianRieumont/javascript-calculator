import * as add from './add.js';

document.addEventListener('click', (e) => {

    const classList = e.target.classList;
    if (classList.contains('number')) {
        add.number(e.target.innerText); //add a number to the input
    } else if (classList.contains('operator')) {
        add.operator(e.target.getAttribute('value')); //add an operator to the input
    } else if (classList.contains('delete-last')) {
        add.deleteLast(); //Delete last input
    } else if (classList.contains('delete-all')) {
        add.deleteAll(); //Delete all input
    } else if (classList.contains('dot')) {
        add.dot(); //Add a dot '.'
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
    console.log(e)

    if (allowedKeys[e.data] === 'number') {

    } else if (allowedKeys[e.data] === 'operator') {

    } else if (allowedKeys[e.data] === 'dot') {

    } else if (allowedKeys[e.data] === 'equal') {

    }

})