"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
  function Person() {
    var fullName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Anonymous";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Person);

    this.fullName = fullName;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGreeting",
    value: function getGreeting() {
      return "Hi, I am " + this.fullName + "!";
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      return this.fullName + " is " + this.age + " year(s) old.";
    }
  }]);

  return Person;
}();

var Student = function (_Person) {
  _inherits(Student, _Person);

  function Student(fullName, age, major) {
    _classCallCheck(this, Student);

    var _this = _possibleConstructorReturn(this, (Student.__proto__ || Object.getPrototypeOf(Student)).call(this, fullName, age));

    _this.major = major;
    return _this;
  }

  _createClass(Student, [{
    key: "hasMajor",
    value: function hasMajor() {
      return !!this.major;
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var description = _get(Student.prototype.__proto__ || Object.getPrototypeOf(Student.prototype), "getDescription", this).call(this);

      if (this.hasMajor()) {
        description += " Their major is " + this.major + ".";
      }

      return description;
    }
  }]);

  return Student;
}(Person);

var Traveler = function (_Person2) {
  _inherits(Traveler, _Person2);

  function Traveler(fullName, age, homeLocation) {
    _classCallCheck(this, Traveler);

    var _this2 = _possibleConstructorReturn(this, (Traveler.__proto__ || Object.getPrototypeOf(Traveler)).call(this, fullName, age));

    _this2.homeLocation = homeLocation;
    return _this2;
  }

  _createClass(Traveler, [{
    key: "getGreeting",
    value: function getGreeting() {
      var greeting = _get(Traveler.prototype.__proto__ || Object.getPrototypeOf(Traveler.prototype), "getGreeting", this).call(this);

      if (!!this.homeLocation) {
        greeting += " I'm visiting from " + this.homeLocation + ".";
      }

      return greeting;
    }
  }]);

  return Traveler;
}(Person);

var mePerson = new Person("Justin Chau", 26);
console.log(mePerson);
console.log(mePerson.getGreeting());
console.log(mePerson.getDescription());

var otherPerson = new Person();
console.log(otherPerson);
console.log(otherPerson.getGreeting());
console.log(otherPerson.getDescription());

var meStudent = new Student("Justin Chau", 26, "Computer Science");
console.log(meStudent);
console.log(meStudent.getGreeting());
console.log(meStudent.getDescription());
console.log(meStudent.hasMajor());

var otherStudent = new Student();
console.log(otherStudent);
console.log(otherStudent.getGreeting());
console.log(otherStudent.getDescription());
console.log(otherStudent.hasMajor());

var meTraveler = new Traveler("Justin Chau", 26, "Pleasanton");
console.log(meTraveler);
console.log(meTraveler.getGreeting());

var otherTraveler = new Traveler();
console.log(otherTraveler);
console.log(otherTraveler.getGreeting());
