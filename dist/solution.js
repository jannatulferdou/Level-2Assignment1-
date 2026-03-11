"use strict";
// !
Object.defineProperty(exports, "__esModule", { value: true });
function formatValue(value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    else if (typeof value === 'number') {
        return value * 10;
    }
    else if (typeof value === 'boolean') {
        return !value;
    }
    return value;
}
console.log(formatValue('hello'));
console.log(formatValue(5));
console.log(formatValue(true));
// !
function getLength(value) {
    if (typeof value === 'string') {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
// !
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());
const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
//# sourceMappingURL=solution.js.map