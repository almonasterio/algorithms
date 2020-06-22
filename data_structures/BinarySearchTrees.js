class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        let newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let currentNode = this.root;
        while (true) {
            if (value == currentNode.val) return this;
            if (value > currentNode.val) {
                if (currentNode.right) {
                    currentNode = currentNode.right
                } else {
                    currentNode.right = newNode;
                    return this
                }
            } else if (value < currentNode.val) {
                if (currentNode.left) {
                    currentNode = currentNode.left
                } else {
                    currentNode.left = newNode;
                    return this
                }

            }
        }

    }
     search(value) {
         let current = this.root;
         while (current) {
             if (value == current.val) return current;
             else if (value > current.val) {
                 current = current.right;
             } else {
                 current = current.left;
             }
         }
         return false;
     }
     BSF(){
         let data=[];
         let queue=[];
         let node=this.root
         queue.push(node);
         while(queue.length){
             node=queue.shift();
             data.push(node.val);
             if (node.left) queue.push(node.left);
             if (node.right) queue.push(node.right);
         }
         return data;
     }
      DFSPreOrder() {
          let data = [];
          let current = this.root;
          let helperFunction = (node) => {
                data.push(node.val);
                if (node.left) helperFunction(node.left);
                if (node.right) helperFunction(node.right);

          }
             helperFunction(current);
          return data;
      }
       DFSPostOrder() {
           let data = [];
           let current = this.root;
           let helperFunction = (node) => {
               
               if (node.left) helperFunction(node.left);
               if (node.right) helperFunction(node.right);
               data.push(node.val);

           }
              helperFunction(current);
           return data;
       }
        DFSInOrder() {
            let data = [];
            let current = this.root;
            let helperFunction = (node) => {

                if (node.left) helperFunction(node.left);
                data.push(node.val);
                if (node.right) helperFunction(node.right);

            }
            helperFunction(current);
            return data;
        }

}

