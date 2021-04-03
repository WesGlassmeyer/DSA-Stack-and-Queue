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

function peek(queue) {
  if (!queue.first) return null;
  console.log(queue.first);
  return queue.first;
}

function main() {
  let starTrekQ = new Queue();
  starTrekQ.enqueue("Kirk");
  starTrekQ.enqueue("Spock");
  starTrekQ.enqueue("Uhura");
  starTrekQ.enqueue("Sulu");
  starTrekQ.enqueue("Checkov");
  //console.log(JSON.stringify(starTrekQ));
  peek(starTrekQ);
  //   starTrek.pop();
  //display(starTrek);
  // isEmpty(starTrek);
  // console.log(JSON.stringify(starTrek));
  // console.log(isEmpty(starTrek));
  // display(starTrek);
}

main();
