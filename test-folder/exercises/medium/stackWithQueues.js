class StackWithQueues {
    constructor() {
        this.queue1 = [];
        this.queue2 = [];
        this.currSize = 0;
    }
    push(data) {
        debugger;
        ++this.currSize;
        this.queue2.push(data);
        while (!this.queue1.length == 0) {
            this.queue2.push(this.queue1.shift());
        }
        var queue3 = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = queue3;
    }
    pop() {
        if (this.queue1.length == 0) return;
        this.queue1.pop();
        --this.currSize;
    }
    top() {
        if (this.queue1.length == 0) return -1;
        this.queue1[this.queue1.length - 1];
    }
    size() {
        return this.currSize;
    }
}

var stackWithQueues = new StackWithQueues();
stackWithQueues.push(1);
stackWithQueues.push(2);
stackWithQueues.push(3);
stackWithQueues.push(4);
console.log('stack push: ');
console.log(stackWithQueues);
stackWithQueues.pop();
console.log('stack pop: ');
console.log(stackWithQueues);
stackWithQueues.push(5);
console.log('stack push: ');
console.log(stackWithQueues);