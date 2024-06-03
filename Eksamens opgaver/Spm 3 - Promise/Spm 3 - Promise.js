function gaetTalISyttenTabel() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 2001);
            if (num % 17 === 0) {
                resolve(num);
            } else {
                reject('17 kan ikke dividere ' + num);
            }
        }, Math.random() * 2000 + 1000);
    });
}

async function proevFlereGange(forsoeg) {
    let error;
    for (let i = 0; i < forsoeg; i++) {
        try {
            const num = await gaetTalISyttenTabel();
            console.log(`forsøg ${i+1}: ${num} kan divideres med 17`);
            return num;
        } catch (err) {
            console.log(`forsøg ${i+1}: ${err}`);
            error = err;
        }
    }
    throw new Error(`Failed to find a number divisible by 17 after ${forsoeg} attempts: ${error}`);
}

proevFlereGange(100)
    .then(num => console.log(num))
    .catch(error => console.log(error));
// Redegør for Promise.
/*
En Promise i JavaScript er et objekt, der repræsenterer det endelige resultat af en asynkron operation. 
Den kan være i en af tre tilstande:

1. Pending: Dette er den indledende tilstand, hverken opfyldt eller afvist.
2. Fulfilled: Betyder, at operationen blev gennemført med succes.
3. Rejected: Betyder, at operationen mislykkedes.

En Promise er "settled", hvis den er enten opfyldt eller afvist.

Vi opretter en Promise ved hjælp af `new Promise` konstruktøren, som tager en "executor" funktion som argument. 
Denne executor funktion tager to funktioner som parametre, normalt kaldet `resolve` og `reject`, som bruges til at indikere, 
at operationen er blevet gennemført med succes eller fejl.

Vi kan bruge `then` metoden til at planlægge kode, der skal køres, når Promisen er "settled". 
`then` tager to valgfrie funktioner som argumenter: den første kaldes, når Promisen er opfyldt, og den anden kaldes, når Promisen er afvist.

Vi kan også bruge `catch` metoden til at håndtere eventuelle fejl, der opstår under operationen eller i opfyldelseshåndteringen.
*/