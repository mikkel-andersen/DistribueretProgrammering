// expressServer.js
const express = require('express');
const app = express();

app.all('/', (request, response) => {
    let array = [request.method, request.url];
    response.send(array);
});

app.get('/soegnavn/:navn', (request, response) => {
    let array = ["soegnavn:" + request.method, request.url, request.params.navn];
    response.send(array);
});

app.listen(8080);

console.log('Lytter på port 8080 ...');