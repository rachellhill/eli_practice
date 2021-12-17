//

class Student {
  constructor() {
    this.name = '';
    this.age = 0;
    this.isAwesome = false;
  }
  updateAge(age) {
    this.age = age;
  }
  updateName(name) {
    this.name = name;
  }
  updateAwesome() {
    this.isAwesome = true;
  }
  sayHappyBirthday() {
    this.age++;
    if (this.isAwesome === true) {
      var awesomeString = 'And you are awesome!';
    } else {
      var awesomeString = 'however, you\'re not awesome';
    }
    console.log(`Happy birthday ${this.name} you are now ${this.age} years old ${awesomeString}`);
  }
}
var students = [];
students.push(new Student);
students.push(new Student);
students.push(new Student);
students.push(new Student);
console.log(students[0]);

students[0].updateName('Rachel');
console.log(students[0]);

students[0].updateAge(23);
console.log(students[0]);

students[0].sayHappyBirthday();
students[0].updateAwesome();
students[0].sayHappyBirthday();
console.log(students);
