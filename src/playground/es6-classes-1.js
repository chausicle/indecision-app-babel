class Person {
  constructor(fullName = "Anonymous", age = 0) {
    this.fullName = fullName;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.fullName}!`;
  }

  getDescription() {
    return `${this.fullName} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Justin Chau", 26);
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());
