class Node{
    constructor(val){
        this.val=val;
        this.prev=null;
        this.next=null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val){
      let newNode =new Node(val);
      if (!this.length){
        this.head=newNode;
        this.tail=newNode;
      } else{
      this.tail.next=newNode;
      newNode.prev=this.tail;
      this.tail=newNode;
      }
      this.length++;
      return this;
    }

    pop(){
      if(!this.head) return undefined;
        let nodePop=this.tail;
        if (this.length===1){
            this.head=null;
            this.tail=null;
        }else{
          this.tail=nodePop.prev;
          nodePop.prev=null;
          this.tail.next=null;
        }
      this.length--;
      return nodePop;
    }
    shift() {
        if (!this.head) return undefined;
        let nodePop = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = nodePop.next;
            this.head.prev = null;
            nodePop.next = null;
        }
        this.length--;
        return nodePop;
    }
        unshift(val) {
            let newNode = new Node(val);
            if (!this.head) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                this.head.prev = newNode;
                newNode.next = this.head;
                this.head = newNode;
            }
            this.length++;
            return this;
        }
}