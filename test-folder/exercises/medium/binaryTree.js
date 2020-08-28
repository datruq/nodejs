class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Binary Search tree class 
class BinaryTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
        this.size = 0;
    }

    // function to be implemented 
    insert(data) {
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data);

        // root is null then node will 
        // be added to the tree and made root. 
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode);
    }
    insertNode(node, newNode) {
        node.next(newNode);
        this.size++;
    }
    remove(data) {
        // root is re-initialized with 
        // root of a modified tree. 
        this.root = this.removeNode(this.root, data);
    }
    // Method to remove node with a  
    // given data 
    // it recur over the tree to find the 
    // data and removes it 
    removeNode(node, key) {



    }

    // Helper functions
    findMinNode(node) {
        // if left of a node is null 
        // then it must be minimum node 
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    getRootNode() {
        return this.root;
    }
    inorder(node) {
        if (node !== null) {
            this.inorder(node.left);
            console.log(node.data);
            this.inorder(node.right);
        }
    }
    preorder(node) {
        if (node !== null) {
            console.log(node.data);
            this.preorder(node.left);
            this.preorder(node.right);
        }
    }
    postorder(node) {
        if (node !== null) {
            this.postorder(node.left);
            this.postorder(node.right);
            console.log(node.data);
        }
    }

    search(node, data) {
        // if trees is empty return null 
        if (node === null)
            return null;

        // if data is less than node's data 
        // move left 
        else if (data < node.data)
            return this.search(node.left, data);

        // if data is less than node's data 
        // move left 
        else if (data > node.data)
            return this.search(node.right, data);

        // if data is equal to the node data  
        // return node 
        else
            return node;
    }
}


var BST = new BinarySearchTree();
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();
console.log('print roots: ');
BST.inorder(root);
console.log('print postorder: ');
BST.postorder(root);
console.log('print preorder: ');
BST.preorder(root);
