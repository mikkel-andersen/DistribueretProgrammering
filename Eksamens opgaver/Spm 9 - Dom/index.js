// Lav indtastningsfelter til fornavn og efternavn og en tilføj - knap, der tilføjer et person(f.eks. {fornavn:”Ole”, efternavn:”Olsen"}} objekt til en liste af personer.
//Listen af personer skal vises nedenunder i en ul - liste eller en tabel ved brug af client - side javascript.
// Tilret, så hver række får tilføjet en eventhandler, der markerer rækken ved at farve den rød.

let personer = [];

document.getElementById('tilfoj').addEventListener('click', function () {
    let fornavn = document.getElementById('fornavn').value; //Det ene felt har "fornavn" som id
    let efternavn = document.getElementById('efternavn').value; //Det andet felt har "efternavn" som id

    let person = { fornavn: fornavn, efternavn: efternavn };
    personer.push(person);

    document.getElementById('fornavn').value = '';
    document.getElementById('efternavn').value = '';

    // Update the table
    let table = document.getElementById('personTable');
    let row = document.createElement('tr');
    let cell1 = document.createElement('td');
    let cell2 = document.createElement('td');

    cell1.textContent = person.fornavn;
    cell2.textContent = person.efternavn;

    row.appendChild(cell1);
    row.appendChild(cell2);

    table.appendChild(row);

    // Add event listener to the row
    row.addEventListener('click', function () {
        this.style.backgroundColor = 'red';
    });
});

//Redegør for DOM
/*
Dom står for document object model. Repræsenterer DOM som et objekt, hvor de forskellige dele kan tilgås via document.***
getElementById, som lader os tage værdierne i felterne og ændre, hvad der står i dem.
Lader os også lave event listeners -> Events click, hover osv. havd der skal ske ved en handling.
Kan også tilgå specifikke elementer, ved at give dem en klasse eller id, som gør det muligt at håndtere flere elementer på forskellige dele af en side på en gang.
*/