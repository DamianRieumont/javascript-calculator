import * as add from './modules/add.js';

//using the webpage calculator buttons
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
    } else if (classList.contains('equal')) {
        add.processInput(); //resolve the input
    } else if (classList.contains('negative')) {

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
    'Backspace': 'Backspace',
    '=': 'equal',
    'Enter': 'Enter'
}

//using the keyboard
input.onkeydown = (e) => {
    if (allowedKeys[e.key] === 'number') {
        add.number(e.key); //add a number to the input
    } else if (allowedKeys[e.key] === 'operator') {
        add.operator(e.key); //add an operator to the input
    } else if (allowedKeys[e.key] === 'dot') {
        add.dot(); //Add a dot '.'
    } else if (allowedKeys[e.key] === 'Backspace') {
        add.deleteLast();
    } else if (allowedKeys[e.key] === 'equal' || allowedKeys[e.key] === 'Enter') {
        document.querySelector('#text-area').value = resolve(document.querySelector('#text-area').value); //resolve the input
    }
    e.preventDefault();

};