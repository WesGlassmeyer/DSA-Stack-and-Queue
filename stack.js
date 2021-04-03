class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
  }
  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

function peek(stack) {
  if (stack.top === null) {
    return null;
  } else {
    return console.log(stack.top.data);
  }
}

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}

function display(stack) {
  let node = stack.top;
  let order = 0;
  while (node !== null) {
    console.log(order, node.data);
    order++;
    node = node.next;
  }
}

// function main() {
//   let starTrek = new Stack();
//   starTrek.push("Kirk");
//   starTrek.push("Spock");
//   starTrek.push("McCoy");
//   starTrek.push("Scotty");
//   starTrek.pop();
//display(starTrek);
// isEmpty(starTrek);
// console.log(JSON.stringify(starTrek));
// peek(starTrek);
// console.log(isEmpty(starTrek));
// display(starTrek);
// }

// main();

function is_palindrome(string) {
  string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  let stack = new Stack();
  let compare = "";
  for (let i = 0; i < string.length; i++) {
    stack.push(string[i]);
  }
  for (let i = 0; i < string.length; i++) {
    compare += stack.pop();
  }
  return string === compare ? true : false;
}

// console.log(is_palindrome("dad"));
// console.log(is_palindrome("A man, a plan, a canal: Panama"));
// console.log(is_palindrome("1001"));
// console.log(is_palindrome("Tauhida"));

function matchingExpressions(str) {
  let allGood = true;
  let expressions = {
    "(": ")",
    "[": "]",
    "{": "}",
    "'": "'",
    '"': '"',
  };
  let tempStack = new Stack();
  for (let i = 0; i < str.length; i++) {
    let open = Object.keys(expressions).includes(str[i]);
    if (open) {
      console.log(`inputing => ${str[i]}${i}`);
      tempStack.push(`${str[i]}${i}`);
    } else {
      let close = Object.values(expressions).includes(str[i]);
      if (close && tempStack.top === null) {
        console.log(``);
        return false;
      } else if (close) {
        open = tempStack.pop();
        if (expressions[open[0]] !== str[i]) {
          console.log(
            `${open[0]} at pos ${open[1]}, does not match ${str[i]} at pos ${i}`
          );
          return false;
        }
      }
    }
    // if(str[i] === '('){
    //   console.log(`pushing "(" into tempStack`)
    //   tempStack.push(i)
    // }
    // else if((str[i] === ')') && (tempStack.top === null)){
    //   console.log(`missing "(" at position ${i}`)
    //   allGood = false
    //   return allGood
    // }
    // else if(str[i] === ')'){
    //   console.log(`popping "(" from tempStack`)
    //   tempStack.pop()
    // }
  }
  if (tempStack.top !== null) {
    while (tempStack.top !== null) {
      let open = tempStack.pop();
      console.log(`Extra "${open[0]}" at position ${open[1]}`);
    }
    allGood = false;
  }
  return allGood;
}

// console.log(matchingExpressions("()"));
// console.log(matchingExpressions("(){}"));
// console.log(matchingExpressions("({})}"));
// console.log(matchingExpressions("())"));
// console.log(matchingExpressions("(')'"));

function sortStack(stack) {
  if (!stack.top.next) return stack;
  display(stack);
  let sortStack = new Stack();
  while (stack.top) {
    let temp = stack.pop();
    while (sortStack.top && sortStack.top.data > temp) {
      stack.push(sortStack.pop());
    }
    console.log(sortStack);
    sortStack.push(temp);
  }
  display(sortStack);
  return sortStack;
}

let numStack = new Stack();
numStack.push(2);
numStack.push(4);
numStack.push(1);
numStack.push(3);
console.log(sortStack(numStack));
