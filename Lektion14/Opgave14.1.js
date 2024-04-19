const express = require('express');
const app = express();
const fs = require('fs').promises;
const port = 8080;

app.use(express.static(__dirname + '/filer'));

function genererLinks(filnavne) {
    let html = '';
    for (let filnavn of filnavne) {
        html += '<a href="' + filnavn + '">' + filnavn + '</a><br>\n';
    }
    return html;
}

app.get('/', async (request, response) => {
    let filnavne = await fs.readdir(__dirname + '/');
    let html = genererLinks(filnavne);
    response.send(html);
});

app.listen(port);

console.log('Lytter på port ' + port + ' ...');

