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

class Student extends Person {
  constructor(fullName, age, major) {
    super(fullName, age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += ` Their major is ${this.major}.`;
    }

    return description;
  }
}

class Traveler extends Person {
  constructor(fullName, age, homeLocation) {
    super(fullName, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();

    if (!!this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}.`;
    }

    return greeting;
  }
}

const mePerson = new Person("Justin Chau", 26);
console.log(mePerson);
console.log(mePerson.getGreeting());
console.log(mePerson.getDescription());

const otherPerson = new Person();
console.log(otherPerson);
console.log(otherPerson.getGreeting());
console.log(otherPerson.getDescription());

const meStudent = new Student("Justin Chau", 26, "Computer Science");
console.log(meStudent);
console.log(meStudent.getGreeting());
console.log(meStudent.getDescription());
console.log(meStudent.hasMajor());

const otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.getGreeting());
console.log(otherStudent.getDescription());
console.log(otherStudent.hasMajor());

const meTraveler = new Traveler("Justin Chau", 26, "Pleasanton");
console.log(meTraveler);
console.log(meTraveler.getGreeting());

const otherTraveler = new Traveler();
console.log(otherTraveler);
console.log(otherTraveler.getGreeting());
