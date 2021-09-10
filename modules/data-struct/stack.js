export class Stack {
    constructor() {
        this._items = [];
    }

    push(item) {
        //push item to the stack
        this._items.push(item);
        return this._items;

    }

    pop() {
        //pull out the topmost item (last item) from stack
        return this._items.pop()
    }

    peek() {
        // see what's the last item in stack
        return this._items[this._items.length - 1]
    }

    size() {
        //no. of items in stack
        return this._items.length
    }

    isEmpty() {
        // return whether the stack is empty or not
        return this._items.length == 0
    }

    print() {
        console.log(this._items);
    }

}