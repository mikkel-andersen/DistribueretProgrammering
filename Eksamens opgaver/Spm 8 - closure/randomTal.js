
// Lav en funktion randomTal, der tager et tal som parameter og returnerer en funktion, der returnerer et
// tilfældigt tal mellem 0 og parameteren.
function randomTal(max) {
    return function () {
        return Math.floor(Math.random() * max)
    }
}


// Lav en anden funktion tilfaeldigAlder som en variabel ved at kalde randomTal med en passende parameter
// og gemme resultat-funktionen i variablen.

let tilfaeldigAlder = randomTal(10);
//console.log(tilfaeldigAlder()); log variablen med () for at få et tilfældigt tal

let randomAlder = randomTal(100);
let randomHoejde = randomTal(200);

// Lav en klasse Person med attributter Alder og Hoejde.
class Person {
    constructor(alder, hoejde) {
        this.alder = alder;
        this.hoejde = hoejde;
    }
}

// Lav en funktion LavTilfaeldigePersoner(), der tager to parametre: en funktion, der genererer tilfældige aldre
// og en funktion, der genererer tilfældige højder. Funktionen skal returnere et array med 20 tilfældige
// personer ved brug af de to funktioner, der kommer med som parametre.

function LavTilfaeldigePersoner(randomAlder, randomHoejde) {
    let personer = [];
    for (let i = 0; i < 20; i++) {
        let alder = randomAlder();
        let hoejde = randomHoejde();
        personer.push(new Person(alder, hoejde));
    }
    return personer;
}

// Test løbende det hele.
console.log(LavTilfaeldigePersoner(randomAlder, randomHoejde));



// Redegør for closure
//Closure er en funktion, som referer til variabler i et ydre scope, også efter den ydre funktion er afsluttet.
//Det vi kan se i opgaven her er at efter randomTal er kørt, har funktionerne tilfaeldigAlder, randomAlder og randomHoejde
//Stadig adgang til den max variable der er givet, så vi kan bruge den senere.
//Scope er konteksten hvor variabler er defineret og hvor de kan tilgås.
/*
let eksempel = randomTal(10) <-- Kalder ydreFunktion og gemmer det i en variable.
Den indre funktion er ikke kaldt endnu og den ydre er kort færdig.
ved at kalde console.log(eksempel()) har man adgang til den "max" variabel der givet til randomTal, selvom den er færdig.
Smart i dette eksempel, fordi vi ikke skal kalde random tal, hver gang, men vi kan nøjes med funktions variablen vi har lavet.
*/