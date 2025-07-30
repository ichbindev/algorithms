class Queue {
    constructor(queue = []) {
        this.items = [...queue];
        this.frontIndex = 0;
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const element = this.items[this.frontIndex];
        this.frontIndex++;
        return element;
    }

    isEmpty() {
        return this.frontIndex >= this.items.length;
    }

    length() {
        return this.items.length - this.frontIndex;
    }
}