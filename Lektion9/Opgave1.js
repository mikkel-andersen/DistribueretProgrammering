
let persons = [
    {
        navn : 'Mikkel',
        alder : 24,
        tlf : 12345678
    },
    {
        navn : 'Tully',
        alder : 16,
        tlf : 12341234
    },
    {
        navn : 'Mazza',
        alder : 13,
        tlf : 43214321
    },
    {
        navn : 'Rasmus',
        alder : 31,
        tlf : 88888888
    }
];

//Opgave 1.3
let id = 1;
persons = persons.map(person => ({ id: id++, ...person }));
console.log(persons);

//Opgave 1.1
let findPerson = (tlf) => persons.find(person => person.tlf === tlf);
console.log(findPerson(12345678));

//Opgave 1.2
let minAlder = persons.reduce((min, person) => person.alder < min ? person.alder : min, persons[0].alder);
console.log(minAlder);

//Opgave 1.4
let sorteretNavne = persons.map(person => person.navn).sort().join(', ');
console.log(sorteretNavne);

//Opgave 1.5
let under30 = persons.filter(person => person.alder < 30).map(person => ({ navn: person.navn, tlf: person.tlf }));
under30.forEach(p => console.log(p));