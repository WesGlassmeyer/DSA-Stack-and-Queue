class _Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }

    this.last = node;
  }

  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;

    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}

function peek(q) {
  if (q.first === null) {
    return null;
  } else {
    return q.first;
  }
}

function isEmpty(q) {
  if (q.first === null) {
    return true;
  } else {
    return false;
  }
}

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  // console.log(JSON.stringify(starTrekQ));
  console.log(peek(starTrekQ));
  console.log(isEmpty(starTrekQ));
  //   starTrek.pop();
  //display(starTrek);
  // isEmpty(starTrek);
  // console.log(JSON.stringify(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);
}

main();
