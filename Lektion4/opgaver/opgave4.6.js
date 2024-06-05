const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

let h1 = document.createElement('h1')
h1.textContent = 'Mountains';
h1.style.color = 'red';
document.body.insertBefore(h1, document.body.firstChild);

let tabel = '<table>'

tabel += '<tr>' + '<th>' + 'name' + '</th>' + '<th>' + 'height' + '</th>' + '<th>' + 'place' + '</th>' + '</tr>'

for (let i = 0; i < MOUNTAINS.length; i++) {
    tabel += '<tr>' + '<td>' + MOUNTAINS[i].name + '</td>'
    tabel += '<td>' + MOUNTAINS[i].height + '</td>'
    tabel += '<td>' + MOUNTAINS[i].place + '</td>'
    tabel += '</tr>'
}
tabel += '</table>'


let tablediv = document.querySelector('#tablediv')
tablediv.innerHTML = tabel

// Now style the table
let table = tablediv.querySelector('table');
table.style.borderCollapse = 'collapse';
table.style.border = '3px solid blue';

let cells = table.querySelectorAll('td');
for (let i = 0; i < cells.length; i++) {
    cells[i].style.border = '3px solid blue';
    cells[i].style.padding = '10px';
    cells[i].style.textAlign = 'center';
}

let headers = table.querySelectorAll('th');
for (let i = 0; i < headers.length; i++) {
    headers[i].style.border = 'none';
    headers[i].style.textAlign = 'center'; // Center the text
}

