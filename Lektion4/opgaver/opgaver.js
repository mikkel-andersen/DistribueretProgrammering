// Tilføj kode for opgave 4.1 - 4.5 her!
let element = document.querySelectorAll('p')
for (let i = 0; i < element.length; i++) {
    element[i].style.color = 'red'
}

let e = document.querySelectorAll('h1 + * + *')
for (let i = 0; i < e.length; i++) {
    e[i].style.color = 'brown'
}

let list = document.querySelectorAll('li')
for (let i = 0; i < list.length; i++) {
    if (i % 2 == 0) {
    list[i].style.backgroundColor = 'lightgray'
    }
}

let afsnit = document.querySelectorAll('h1 + p')
for (let i = 0; i < afsnit.length; i++) {
    afsnit[i].outerHTML = '<h2>' + afsnit[i].innerHTML + '</h2>'
    afsnit[i].style.color = 'blue'
}

let headers = document.querySelectorAll('h1') 
let linksDiv = document.createElement('div');
document.body.insertBefore(linksDiv, document.body.firstChild);
for (let i = 0; i < headers.length; i++) {
    headers[i].id = 'header' + (i + 1)
    let a = document.createElement('a')
    a.href = '#header' + (i + 1)
    a.textContent = headers[i].textContent
    linksDiv.appendChild(a);
    linksDiv.appendChild(document.createElement('br'));
}

