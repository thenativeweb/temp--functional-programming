// In ES kann man das Iterator-Protokoll verwenden:
class MyIterator {
  constructor() {
    this.items = [1,2,3];
  }

  // Das Ende wird per Value-Objekt angezeigt.
  next() {
    if (this.items.length === 0) {
      return {
        value: undefined,
        done: true
      }
    }

    return {
      value: this.items.shift(),
      done: false
    }
  }

  // [Symbol.iterator] gibt einen Iterator zurück, der z.B. in der Schleife
  // verwendet werden kann.
  [Symbol.iterator]() {
    return this;
  }
}

// Damit kann man dann auch die for-of Schleife nutzen:
const myIterable = new MyIterator();

for (const item of myIterable) {
  console.log(item);
}

// So kann man auch eigene Datenstrukturen iterierbar machen:
class LinkedListIterator {
  constructor(linkedList) {
    this.pointer = linkedList;
  }

  next() {
    if (this.pointer !== undefined && this.pointer.head !== undefined) {
      const nextValue = this.pointer.head;
      this.pointer = this.pointer.tail;

      return {
        value: nextValue,
        done: false
      };
    } else {
      return {
        value: undefined,
        done: true
      }
    }
  }
}

class LinkedList {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
  }

  push(element) {
    if (this.head === undefined) {
      this.head = element;
    } else {
      if (this.tail === undefined) {
        this.tail = new LinkedList();
      }
    
      this.tail.push(element);
    } 
  }

  [Symbol.iterator]() {
    return new LinkedListIterator(this);
  }
}

const myLinkedList = new LinkedList();
myLinkedList.push(5);
myLinkedList.push(4);
myLinkedList.push(3);
myLinkedList.push(2);
myLinkedList.push(1);

for (const element of myLinkedList) {
  console.log(element);
}

// Und da immer eine neue Iterator-Instanz erzeugt wird, kann man die
// Liste auch mehrmals iterieren!
for (const element of myLinkedList) {
  console.log(element);
}
