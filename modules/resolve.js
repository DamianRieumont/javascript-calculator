import { Queue } from "./data-struct/queue.js";
import { Stack } from "./data-struct/stack.js";

export function resolve(input) {

    input = input.split(""); //convert String into Array

    let inputQueue = new Queue(input);
    let outputQueue = new Queue();
    let opStack = new Stack() //operator stack

    console.log(inputQueue.peek())
    while (!inputQueue.isEmpty()) {

        console.log(inputQueue.peek())
        inputQueue.dequeue()
    }
}