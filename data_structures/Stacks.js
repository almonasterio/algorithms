class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }
    push(value) {
        let newNode = new Node(value);
        if (!this.first) {
            this.first = this.last = newNode;
        } else {
            let previousFirstNode = this.first;
            this.first = newNode;
            newNode.next = previousFirstNode;
        }
        this.size++;
        return this;
    }
    pop() {
        if (!this.first) return null;
        let tempNode = this.first;
        if (this.size == 1) {
            this.first = this.temp = null;
        } else this.first = tempNode.next;
        this.size--;
        return tempNode.val;



    }

}