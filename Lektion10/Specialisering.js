// opgave10.1.js
class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) {
        return p.constructor === Person && this.navn === p.navn;
    }
    static compare(p1, p2) {
        return p1.navn.localeCompare(p2.navn);
    }
}

class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; }
    equals(s) {
        return s.constructor === Studerende && this.navn === s.navn && this.id === s.id;
    }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

// Sorter listen på navn
liste.sort(Person.compare);

console.log(liste);

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
    static compare(k1, k2) {
        return k1.navn.localeCompare(k2.navn);
    }
}

let k1 = new Kat("Misser");
let k2 = new Kat("Felix");

liste.push(k1, k2);

// Sorter listen på navn igen
liste.sort((a, b) => {
    if (a.constructor === b.constructor) {
        return a.constructor.compare(a, b);
    }
    return a.constructor.name.localeCompare(b.constructor.name);
});

console.log(liste);

