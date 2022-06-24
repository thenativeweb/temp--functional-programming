'use strict';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  marry (newLastName) {
    return new Person(this.firstName, newLastName);
  }
}

const person = new Person('John', 'Doe');
const marriedPerson = person.marry('Smith');
