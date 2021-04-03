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
    return q.first.value;
  }
}

function isEmpty(q) {
  if (q.first === null) {
    return true;
  } else {
    return false;
  }
}

function display(q) {
  let node = q.first;
  let order = 0;
  while (node !== null) {
    console.log(order, node.value);
    order++;
    node = node.next;
  }
}

// function main() {
//   let starTrekQ = new Queue();
//   starTrekQ.enqueue("Kirk");
//   starTrekQ.enqueue("Spock");
//   starTrekQ.enqueue("Uhura");
//   starTrekQ.enqueue("Sulu");
//   starTrekQ.enqueue("Checkov");
// console.log(JSON.stringify(starTrekQ));
// console.log(peek(starTrekQ));
// console.log(isEmpty(starTrekQ));
//   starTrek.pop();
// display(starTrekQ);
// isEmpty(starTrek);
// console.log(JSON.stringify(starTrek));
// console.log(isEmpty(starTrek));
// display(starTrek);
// }

// main();

const queue = new Queue();

queue.enqueue({
  sex: "F",
  Name: "Jane",
});
queue.enqueue({
  sex: "M",
  Name: "Frank",
});
queue.enqueue({
  sex: "M",
  Name: "John",
});
queue.enqueue({
  sex: "M",
  Name: "Sherlock",
});
queue.enqueue({
  sex: "F",
  Name: "Madonna",
});
queue.enqueue({
  sex: "M",
  Name: "David",
});
queue.enqueue({
  sex: "M",
  Name: "Christopher",
});
queue.enqueue({
  sex: "F",
  Name: "Beyonce",
});

function pairPartner(queue) {
  const maleQueue = new Queue();
  const femaleQueue = new Queue();

  while (queue.last !== null) {
    const next = queue.dequeue();
    if (next.sex === "F") {
      femaleQueue.enqueue(next.Name);
    } else maleQueue.enqueue(next.Name);
  }
  while (femaleQueue.last !== null && maleQueue.last !== null) {
    console.log(
      femaleQueue.dequeue() + " will dance with " + maleQueue.dequeue()
    );
  }

  if (femaleQueue.last !== null) {
    console.log(`There are ${queueCount(femaleQueue)} women left to dance`);
  }

  if (maleQueue.last !== null) {
    console.log(`There are ${queueCount(maleQueue)} men left to dance`);
  }

  function queueCount(queue) {
    if (queue.last === null) {
      return 0;
    }

    let counter = 1;
    let tempNode = queue.first;

    while (tempNode.next !== null) {
      counter++;
      tempNode = tempNode.next;
    }
    return counter;
  }
}

// pairPartner(queue);

function bank(num) {
  let line = new Queue();

  for (let i = 0; i < num; i++) {
    line.enqueue(i);
  }

  while (line.first !== null) {
    let success = Math.floor(Math.random() * 4);

    if (success === 0) {
      console.log(peek(line), " did not have the correct paperwork.");

      line.enqueue(line.dequeue());
    } else {
      console.log(peek(line), " was served.");
      line.dequeue();
    }
  }

  return;
}

bank(10);
