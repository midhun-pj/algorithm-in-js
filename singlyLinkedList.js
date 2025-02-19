class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  remove(data) {
    if (!this.head) {
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }

      current = current.next;
    }
  }

  find(data) {
    let current = this.head;

    while (current) {
      if (current.data === data) {
        return current;
      }

      current = current.next;
    }

    return null;
  }

  isEmpty() {
    return this.head === null;
  }

  print() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }
}

const sll = new SinglyLinkedList();
sll.prepend(1);
sll.prepend(2);
sll.prepend(3);
sll.append(4);
sll.print();
sll.remove(3);
sll.print();