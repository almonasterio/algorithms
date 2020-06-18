class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    enqueue(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
        return this;
    }
    dequeue() {
        if (!this.first) return null;
        let tempNode = this.first;
        if (this.size == 1) {
            this.first = this.last = null;
        } else this.first = tempNode.next;
        this.size--;
        return tempNode.val;
    }

}