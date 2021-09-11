import { Queue } from "./data-struct/queue.js";
import { Stack } from "./data-struct/stack.js";

const operators = {
    '+': 0,
    '-': 0,
    '/': 1,
    '*': 1
}

function isNumber(token) {
    return !isNaN(token)
}

function isOperator(token) {
    return operators[token] !== undefined;
}

export function resolve(input) {

    let posfix = infixToPosfix(input);
    let output;

    if (posfix instanceof Queue) { //isnt an error
        output = resolveRPN(posfix);
        if (isNaN(output)) {
            output = "syntax error"
        }
    } else
        output = posfix;

    return output;
}

function infixToPosfix(input) { //using the shunting yard algorithm
    //initialize the aux queues and stack
    let inputQueue = new Queue();
    let outputQueue = new Queue();
    let opStack = new Stack() //operator stack

    let result;
    let error = false;

    //copy de input into de input queue
    input = Array.from(input); //convert String into Array
    input.forEach(token => {
        inputQueue.enqueue(token);
    });

    let currentNum = '';
    let lastToken;

    while (!inputQueue.isEmpty() && !error) { //loop the queue
        let token = inputQueue.dequeue();
        if (isNumber(token)) { //verify if the token is a number
            currentNum += token;
        } else if (token == '-' && (isOperator(lastToken) || lastToken == '(')) { //know if is a negative num
            currentNum = '-';
        } else if (token == '.') {
            if (isNumber(lastToken)) {
                currentNum += '.'
            } else {
                result = "error, decimal error"
                let error = true;
            }
        } else {
            if (currentNum != '') {
                outputQueue.enqueue(currentNum); //store de current num string
                currentNum = ''; //clear the stored current num
            }
            if (isOperator(token)) {
                if (opStack.isEmpty()) {
                    opStack.push(token);
                } else {
                    while (!opStack.isEmpty() && operators[opStack.peek()] >= operators[token]) {
                        outputQueue.enqueue(opStack.pop());
                    }
                    opStack.push(token);
                }
            } else if (token == '(') {
                opStack.push(token);
            } else if (token == ')') {
                while (!opStack.isEmpty() && opStack.peek() !== '(') {
                    outputQueue.enqueue(opStack.pop());
                }
                if (opStack.isEmpty()) {
                    result = "error, parenthesis lost";
                    let error = true;
                } else {
                    opStack.pop();
                }
            }
        }
        lastToken = token;
    }
    if (currentNum != '') {
        outputQueue.enqueue(currentNum);
    }

    while (!opStack.isEmpty() && !error) {
        if (opStack.peek() == ')' || opStack.peek() == '(') {
            result = "error, parenthesis lost";
            error = true;
        } else {
            outputQueue.enqueue(opStack.pop())
        }
    }
    if (!error) result = outputQueue;

    return result;

}

function resolveRPN(posfix) { //resolve Reverse Polish Notation
    let result = new Stack();
    while (!posfix.isEmpty()) {
        let token = posfix.dequeue();
        if (isNumber(token)) {
            result.push(token)
        } else {
            let rightOp = Number.parseFloat(result.pop()); //right operand
            let leftOp = Number.parseFloat(result.pop()); //left operand

            switch (token) {
                case '-':
                    result.push(leftOp - rightOp);
                    break;
                case '+':
                    result.push(leftOp + rightOp);
                    break;
                case '*':
                    result.push(leftOp * rightOp);
                    break;
                case '/':
                    result.push(leftOp / rightOp);
                    break;
                default:
                    break;
            }
        }
    }
    return result.toArray()
}