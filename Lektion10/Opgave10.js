
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let a1 = new Animal("Hund", 3);
let a2 = new Animal("Kat",  4);

console.log(a1.name + " som er " + a1.age + " år gammel")
console.log(a2.name + " som er " + a2.age + " år gammel")

Animal.prototype.canRun = function() { console.log("I can run") };

a1.canRun();

class Human {
    constructor(name, age, money) {
        this.name = name;
        this.age = age;
        this.money = money;
    }
}

let h1 = new Human("Mikkel", 10, 100);
let h2 = new Human("Mathias", 5, 50);

console.log(h1.name + " alder: " + h1.age);

Human.prototype.canEarn = function() { console.log("I can earn") }

h1.canEarn();