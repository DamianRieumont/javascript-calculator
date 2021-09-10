import { Queue } from "./data-struct/queue.js";
import { Stack } from "./data-struct/stack.js";

export function resolve(input) {

    input = Array.from(input); //convert String into Array

    let inputQueue = new Queue();
    let outputQueue = new Queue();
    let opStack = new Stack() //operator stack
    inputQueue.print()
        //copy de input into de input queue
    input.forEach(token => {
        console.log(token)
        inputQueue.enqueue(token);
    });
    console.log(input)
    inputQueue.print()
    while (!inputQueue.isEmpty()) {

        //console.log(inputQueue.peek())
        inputQueue.dequeue()
    }
}