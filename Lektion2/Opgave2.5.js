
/*
Lav et array med en række person objekter.
Hver person skal have et navn, en e-mail og et mobilnummer.
Afprøv CRUD på dette array
*/
let p1 = {name : "tully", mail : "tully@mail.dk", telefon : 12312312};
let p2 = {name : "mikkel", mail : "mikkel@mail.dk", telefon : 12341234};
let persons = [p1, p2];
console.log(persons[0].name);
console.log(persons[0].mail);

persons[2] = {name : "Mathias", mail : "mathias@mail.dk, telefon : 12345678"};
console.log(persons[2].name);

for (let i = 0; i < persons.length; i++) {
    console.log(persons[i]);
}