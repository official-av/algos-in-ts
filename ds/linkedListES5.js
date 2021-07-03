/**
 * Initialize your data structure here.
 */
var MyLinkedList = function () {
    this.head = null; // type Node
};

var Node = function (val) {
    this.value = val;
    this.next = null; // type Node
}

/**
 * Get the reference to node by index
 * @param {number} index
 * @return {Node}
 */
MyLinkedList.prototype.getNodeByIndex = function (index) {
    var i;
    if (this.head) { // if has head
        i = 0;
        let current = this.head;
        while (i !== index && current.next) {
            current = current.next;
            i++;
        }
        ;
        if (i === index) {
            return current;
        } else {
            return null;
        }
    } else {
        // console.log('list is empty');
        return null;
    }

};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
    var nodeAtIndex = this.getNodeByIndex(index);
    return nodeAtIndex ? nodeAtIndex.value : -1;
};

/**
 * Get the ref to the last node in the linked list.
 * @return {Node}
 */
MyLinkedList.prototype.getLastNode = function () {
    if (this.head) { // if has head
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        ;
        return current;
    } else {
        // console.log('list is empty');
        return null;
    }

};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
    // init new node
    var newNode = new Node(val);
    // set new node's next to head
    newNode.next = this.head;
    // set head to new node
    this.head = newNode;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
    // init new node
    var newNode = new Node(val);
    var last = this.getLastNode();
    // console.log(last);
    if (last) {
        last.next = newNode;
    } else {
        this.head = newNode;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
    if (index === 0) {
        this.addAtHead(val);
    } else {
        // init node
        var newNode = new Node(val);
        // get index prev
        var prev = this.getNodeByIndex(index - 1);
        if (prev) {
            var cur = prev.next;
            prev.next = newNode;
            newNode.next = cur;
        } else {
            console.log('invalid index');
        }

    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
    if (index === 0) {
        if (this.head) {
            this.head = this.head.next;
        }
    } else {
        var prev = this.getNodeByIndex(index - 1);
        if (prev) {
            let cur = prev.next;
            prev.next = cur ? cur.next : null;
        }
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// var ll = new MyLinkedList();
// ll.addAtHead(1);
// ll.addAtTail(3);
// ll.addAtIndex(1,2);
// console.log(ll.get(1));
// ll.deleteAtIndex(0);
// console.log(ll.get(0));
