function Node(newValue) {
  return {
    value: newValue || null,
    nextNode: null,
  };
}

function LinkedList() {
  let head = null;
  let length = 0;

  function append(value) {
    const newNode = Node(value);

    if (head === null) {
      head = newNode;
    } else {
      let currentNode = head;

      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }

      currentNode.nextNode = newNode;
    }

    length++;
  }

  function prepend(value) {
    const newNode = Node(value);

    if (head === null) {
      head = newNode;
    } else {
      newNode.nextNode = head;
      head = newNode;
    }

    length++;
  }

  function size() {
    if (!head) return null;
    return length;
  }

  function findHead() {
    if (!head) return null;

    return head.value;
  }

  function tail() {
    if (!head) return null;

    let currentNode = head;

    while (currentNode.nextNode !== null) {
      currentNode = currentNode.nextNode;
    }

    return currentNode.value;
  }

  function at(index) {
    if (!head) return null;

    let currentNode = head;

    for (let i = 0; i < index; i++) {
      currentNode = currentNode.nextNode;
    }

    return currentNode;
  }

  function pop() {
    if (!head) return null;

    if (head.nextNode === null) {
      head = null;
    }

    // Find the node before the last one, remove it's nextNode
    at(size() - 2).nextNode = null;
    length--;
  }

  function contains(value) {
    if (!head) return null;

    let currentNode = head;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) return true;

      currentNode = currentNode.nextNode;
    }

    // Check the last node too
    return currentNode.value === value ? true : false;
  }

  function find(value) {
    if (!head) return null;

    let currentNode = head;
    let index = 0;

    while (currentNode.nextNode !== null) {
      if (currentNode.value === value) return index;

      currentNode = currentNode.nextNode;
      index++;
    }

    // Check the last node too
    return currentNode.value === value ? index : null;
  }

  function toString() {
    if (!head) return null;

    let currentNode = head;
    let stringResult = "";

    while (currentNode.nextNode !== null) {
      stringResult = stringResult.concat(`( ${currentNode.value} ) -> `);
      currentNode = currentNode.nextNode;
    }

    stringResult = stringResult.concat(`( ${currentNode.value} ) -> null`);

    console.log(stringResult);
    return stringResult;
  }

  function insertAt(value, index) {
    if (!head) return null;

    const newNode = Node(value);
    let currentNode = head;

    for (let i = 0; i < index - 1; i++) {
      currentNode = currentNode.nextNode;
    }

    const copyNextNode = currentNode.nextNode;

    currentNode.nextNode = newNode;
    newNode.nextNode = copyNextNode;

    length++;
  }

  function removeAt(index) {
    if (!head) return null;
    if (index > length || index < 0) return;

    if (index === 0) {
      head = head.nextNode;
    } else {
      const beforeNode = at(index - 1);
      beforeNode.nextNode = beforeNode.nextNode.nextNode;
    }

    length--;
  }

  return {
    append,
    prepend,
    size,
    findHead,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

const list = LinkedList();
list.append(2);
list.prepend(1);
list.prepend("0");
list.append(4);
list.append(3);
list.append(5);
console.log("Size:", list.size());
console.log("Head:", list.findHead());
console.log("Tail:", list.tail());
console.log("At index 1:", list.at(3));
list.pop();
console.log("Size:", list.size());
console.log("Contains value 4:", list.contains(4));
console.log("Find value 4 index:", list.find(4));
list.toString();
list.insertAt("insert", 3);
list.toString();
list.removeAt(4);
list.toString();
