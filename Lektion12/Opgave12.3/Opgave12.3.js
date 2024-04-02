

function getNumber() {
    return new Promise(function (resolve, reject) {
        let num = Math.floor(Math.random() * 11);
        if (num === 10) throw new Error('fejl');
        setTimeout(afslut, 500);
        function afslut() {
            if (num < 7) {
                resolve(`OK!`);
            } else {
                reject('Ikke OK!');
            }
        }
    });
}

// Promise.all tager en iterabel (f.eks. et array) af promises og returnerer et nyt promise, 
// der opfyldes, når alle de givne promises er opfyldt, eller afvises, så snart et af de givne promises afvises.
Promise.all([getNumber(), getNumber(), getNumber(), getNumber()])
    .then(resultater => console.log('Resultater: ' + resultater))
    .catch(fejl => console.log('Fejl/exception: ' + fejl));

// Promise.any tager en iterabel af promises og returnerer et nyt promise, 
// der opfyldes, så snart et af de givne promises er opfyldt, eller afvises, hvis alle de givne promises afvises.
Promise.any([getNumber(), getNumber(), getNumber(), getNumber()])
    .then(resultat => console.log('Resultat: ' + resultat))
    .catch(fejl => console.log('Fejl/exception: ' + fejl));

// Promise.allSettled tager en iterabel af promises og returnerer et nyt promise, 
// der altid opfyldes, når alle de givne promises er afgjort, uanset om de er opfyldt eller afvist.
Promise.allSettled([getNumber(), getNumber(), getNumber(), getNumber()])
    .then(resultater => console.log('Resultater: ' + resultater));