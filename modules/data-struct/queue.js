export class Queue {
    constructor() {
        //initialize the items in queue
        this._items = []
    }

    enqueue(item) {
        //push item into the queue
        this._items.push(item);
        return this._items;
    }

    dequeue(count = 1) {
        //pull out the first item from the queue
        this._items.splice(0, count);
        return this._items;
    }

    peek() {
        //peek at the first item from the queue
        return this._items[0]
    }

    size() {
        //get the length of queue
        return this._items.length
    }

    isEmpty() {
        //find whether the queue is empty or no
        return this._items.length === 0
    }

    print() {
        console.log(this._items);
    }
}