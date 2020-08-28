class QueueWithStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }
    enqueue(data) {
        for (let i = 0; i < this.stack2.length; ++i) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(data);
    }
    dequeue() {
        while (this.stack1.length > 0) {
            this.stack2.push(this.stack1.pop());
        }
        return this.stack2.pop();
    }
    peek() {
        if (this.stack1.length > 0) {
            return this.stack1[0];
        }
        return this.stack2[this.stack2.length - 1];
    }
}

var queue = new QueueWithStacks();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log(queue);
queue.dequeue();
console.log("dequeue: ");
console.log(queue);
queue.enqueue(6)
console.log("enqueue: ");
console.log(queue);
console.log("peek: ");
console.log(queue.peek());
queue.dequeue();
console.log("dequeue: ");
console.log(queue);
