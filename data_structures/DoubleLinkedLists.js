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
         get(index) {
             if (index < 0 || index >= this.length) return null;
             let midpoint = Math.floor(this.length / 2)
             let count;
             let nodeGet;
             if (index <= midpoint) {
                 nodeGet = this.head;
                 count = 0;
                 while (count < index) {
                     nodeGet = nodeGet.next;
                     count++;
                 }
             } else {
                 nodeGet = this.tail;
                 count = this.length - 1;
                 while (count > index) {
                     nodeGet = nodeGet.prev;
                     count--;
                 }
             }
             return nodeGet;
         }
           set(index, value) {
               let nodeToSet = this.get(index);
               if (nodeToSet) {
                   nodeToSet.val = value;
                   return true
               }
               return false
           }
           class Node {
               constructor(val) {
                   this.val = val;
                   this.prev = null;
                   this.next = null;
               }
           }

           class DoubleLinkedList {
               constructor() {
                   this.length = 0;
                   this.head = null;
                   this.tail = null;
               }
               push(val) {
                   let newNode = new Node(val);
                   if (!this.length) {
                       this.head = newNode;
                       this.tail = newNode;
                   } else {
                       this.tail.next = newNode;
                       newNode.prev = this.tail;
                       this.tail = newNode;
                   }
                   this.length++;
                   return this;
               }

               pop() {
                   if (!this.head) return undefined;
                   let nodePop = this.tail;
                   if (this.length === 1) {
                       this.head = null;
                       this.tail = null;
                   } else {
                       this.tail = nodePop.prev;
                       nodePop.prev = null;
                       this.tail.next = null;
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
               get(index) {
                   if (index < 0 || index >= this.length) return null;
                   let midpoint = Math.floor(this.length / 2)
                   let count;
                   let nodeGet;
                   if (index <= midpoint) {
                       nodeGet = this.head;
                       count = 0;
                       while (count < index) {
                           nodeGet = nodeGet.next;
                           count++;
                       }
                   } else {
                       nodeGet = this.tail;
                       count = this.length - 1;
                       while (count > index) {
                           nodeGet = nodeGet.prev;
                           count--;
                       }
                   }
                   return nodeGet;
               }

               set(index, value) {
                   let nodeToSet = this.get(index);
                   if (nodeToSet) {
                       nodeToSet.val = value;
                       return true
                   }
                   return false
               }
               insert(index, value) {
                   if (index < 0 || index > this.length) return false;
                   if (index == 0) return this.unshift(value);
                   if (index == this.length) return this.push(value);
                   let newNode = new Node(value);
                   let prevNode = this.get(index - 1);
                   let afterNode = prevNode.next;
                   newNode.next = afterNode;
                   afterNode.prev = newNode;
                   newNode.prev = prevNode;
                   prevNode.next = newNode;

                   this.length++;
                   return true;
               }
           }
}