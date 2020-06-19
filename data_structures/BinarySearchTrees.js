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

}

