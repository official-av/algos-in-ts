export class LinkedList {
    head;

    constructor() {
        this.head = null;
    }

    // O(N) time
    traverseToEnd(cur) {
        if (this.head) {
            cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
        } else {
            cur = null;
        }
    }

    // O(N) time
    traverseToNode(cur, nodeVal) {
        if (this.head) {
            cur = this.head;
            let notFound = true;
            while (notFound && cur) {
                if (cur.value === nodeVal) {
                    notFound = false;
                    break;
                }
                cur = cur.next;
            }
            if (notFound) {
                console.log('no node with val ', nodeVal);
            }
        } else {
            console.log('list is empty');
            cur = null;
        }
    }

    // O(N) time
    traverseToPrevNode(cur, nodeVal) {
        let prev = null
        if (this.head) {
            cur = this.head;
            while (cur.next) {
                if (cur.next.value === nodeVal) {
                    prev = cur;
                    cur = cur.next;
                    break;
                }
                cur = cur.next;
            }
        }
        return prev;
    }

    // addition to end takes O(N) time
    addNodeToEnd(val) {
        const newNode = new Node(val);
        let currentNode;
        this.traverseToEnd(currentNode); // O(N)
        if (currentNode) {
            currentNode.next = newNode; // O(1)
        } else {
            this.head = newNode;
        }
    }

    // addition to start - O(1) time
    addNodeToStart(val) {
        // init new node
        const newNode = new Node(val);
        // set new node next to head
        newNode.next = this.head;
        // set head to new node
        this.head = newNode;
    }

    // O(N) time
    addNodeBeforeVal(before, val) {
        const newNode = new Node(val);
        let currentNode;
        // traverse LL until you find before
        this.traverseToNode(currentNode, before); // O(N)
        if (currentNode) { // O(1)
            // save link to after node
            const after = currentNode.next;
            // set current's next as newNode
            currentNode.next = newNode;
            // set newNode's next as after
            newNode.next = after;
        } else {
            console.log('no node with val ', before);
        }
    }

    // O(N) time
    deleteNode(val) {
        let currentNode;
        // traverse to currentNode's prev
        let prev = this.traverseToPrevNode(currentNode, val); // O(N)
        if (prev) {
            // set prev's next to currentNode's next
            prev.next = currentNode.next;
        } else { // since no prev value is present, hence first node
            this.deleteFirst();
        }
    }

    deleteFirst() {
        this.head = this.head.next;
    }

    deleteLast() {
        let currentNode;
        this.traverseToEnd()
    }


}

export class Node {
    value;
    next;

    constructor(val) {
        this.value = val;
        this.next = null;
    }
}
