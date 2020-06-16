class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SingleList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;

        }
        this.length++;
        return this;

    }
        pop() {
            if (!this.length) return undefined;
            else {
                var current = this.head;
                var newTail = current;
                while (current.next) {
                    newTail = current;
                    current = current.next;
                }
                this.tail = newTail;
                this.tail.next = null;
                this.length--;
                if (this.length === 0) {
                    this.tail = null;
                    this.head = null;
                }
                return current;
            }
        }
         shift() {
             if (!this.length) return undefined;
             let currentHead = this.head;
             this.head = currentHead.next;
             this.length--;
             return currentHead;
         }
             unshift(val) {
                 let newNode = new Node(val);
                 if (!this.head) {
                     this.head = newNode;
                     this.tail = newNode;
                 }
                 newNode.next = this.head;
                 this.head = newNode;
                 this.length++;
                 return this;
             }
             
             get(index){
                 if (index<0 || index>=this.length) return null;
                 let count=0;
                 let nodeToGet =this.head;
                while (count!==index){
                    nodeToGet=nodeToGet.next;
                    count++;
                }
                return nodeToGet;
             }
            set(pos, value){
                let nodeInPos=this.get(pos);
                if (!nodeInPos) return false;
                nodeInPos.val=value;
                return true;

            }
        
}