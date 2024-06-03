
//Lav et array med biler, hvor hver bil er beskrevet ved nummerplade, vægt, mærke og antal hjul.
let biler = [{ nummerplade : "xx123", vægt : 1200, mærke : "audi", antalHjul : 4},
     { nummerplade : "ab423", vægt : 2000, mærke : "toyota", antalHjul : 8},
     { nummerplade : "aa234", vægt : 2400, mærke : "kia", antalHjul : 8},
     { nummerplade : "ks523", vægt : 900, mærke : "audi", antalHjul : 12},
     { nummerplade : "as523", vægt : 9200, mærke : "ford", antalHjul : 12}]

console.log("Opgave 1");
biler.forEach(biler => console.log(biler));
console.log("------------")

//Nedenstående skal løses ved hjælp af nogle af de indbyggede højere ordens funktioner som f.eks. map,
//filter, reduce, foreach

//Lav et array med de biler, der har netop 8 hjul.
har8Hjul = (numWheels) => numWheels === 8; //Alternativ løsning
bilerMedOtteHjul = [];
for (let i = 0; i < biler.length; i++) {
    if (har8Hjul(biler[i].antalHjul)) {
        bilerMedOtteHjul.push(biler[i]);
    }
}
// console.log("Opgave 2");
// console.log(JSON.stringify(bilerMedOtteHjul));
// console.log("------------")

Ottehjul = biler.filter(bil => bil.antalHjul === 8)
console.log("Opgave 2");
Ottehjul.forEach(Ottehjul => (console.log(Ottehjul)));
console.log("------------")


//Lav et array med alle nummerpladernes numre.
nummerplader = biler.map(bil => bil.nummerplade);

console.log("Opgave 3");
console.log("Nummerplader: " + JSON.stringify(nummerplader));
console.log("------------")

//Find den mindste vægt.
mindsteVægt = biler.reduce((min, bil) => bil.vægt < min ? bil.vægt : min, Number.MAX_SAFE_INTEGER);
console.log("Opgave 4");
console.log("Mindste vægt: " + mindsteVægt);
console.log("------------")


//Lav et array med alle biler, der har størst antal hjul.
let maxHjul = biler.reduce((max, bil) => bil.antalHjul > max ? bil.antalHjul : max, Number.MIN_SAFE_INTEGER ); //Finder det største antal hjul
let størsteAntalHjul = biler.filter(bil => bil.antalHjul === maxHjul); //Filtrer de biler fra, som ikke opfylder betingelsen

console.log("Opgave 5");
størsteAntalHjul.forEach(størsteAntalHjul => console.log(størsteAntalHjul));
console.log("------------")

//Lav et array af objekter, der giver antal biler for hvert antal hjul, altså f.eks. 7 biler med 4 hjul, 4 biler med 6 hjul osv.
let antalBilerPerHjul = biler.reduce((acc, bil) => {
    if (!acc[bil.antalHjul]) {
        acc[bil.antalHjul] = 0;
    }
    acc[bil.antalHjul]++;
    return acc;
}, {});

let result = Object.entries(antalBilerPerHjul).map(([antalHjul, antalBiler]) => ({
    antalHjul: Number(antalHjul),
    antalBiler
}));

console.log(result); // [{ antalHjul: 4, antalBiler: 2 }, { antalHjul: 6, antalBiler: 1 }, ...]

//Redegør for højere ordens funktioner i Javascript
/*
En højere orden funktion er en funktion der enten tager en(eller flere) funktion(er)
som argument og eller returnerer en funktion

Map, reduce, filter og forEach er alle eksempler på højere ordens funktioner.

Filter: Tager en funktion, som returnerer en boolsk værdi.
        Gennemløber elementer i et array, og tilføjer de 
        elementer, der returnerer true til et nyt array og returnerer det.

Map:    Tager en funktion og bruger den på hvert element i et array
        og returnerer et nyt array med resultaterne. 
        Eksempel på, hvordan det kan gøres:
        getMærke = (bil) => bil.mærke;
        mærker = biler.map(getMærke);
        console.log(mærker)

reduce: Tager en funktion og anvender det på hvert element
        resultatet bruges som et element til det næste løb
        Bruges ved at skulle finde min / max

forEach: Tager en funktion og anvender det på hvert element i et array
         Dette returnerer ikke et nyt array


*/
