class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityHeap {
    constructor() {
        this.values = [];
    }
    enqueue(value, priority) {
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        this.bubbleUp();


    }
    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (true && idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent.priority <= element.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;

        }
    }
    dequeue() {
        const MAX = this.values[0];
        const END = this.values.pop();
        if (this.values.length > 0) {
            this.values[0] = END;
            this.sinkDown();
        }
        return MAX;


    }
    sinkDown() {
        let idx = 0;
        const LENGTH = this.values.length;
        const element = this.values[0];
        while (true) {
            let rightChildIdx = 2 * idx + 1;
            let leftChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if (leftChildIdx < LENGTH) {
                leftChild = this.values[leftChildIdx];
                if (leftChild.priority > element.priority) {
                    swap = leftChildIdx;
                }
            }
            if (rightChildIdx < LENGTH) {
                rightChild = this.values[rightChildIdx];
                if (
                    (swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)
                ) {
                    swap = rightChildIdx;
                }
            }
            if (swap == null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;



        }

    }


}