// app.js
import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set("views", __dirname + "/views");

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: false }));
app.use(express.static(__dirname + '/filer'));
app.use(express.json());

const products = [
    { id: 1, navn: 'Færdigrul - 1g (G13)', pris: 100 },
    { id: 2, navn: 'DIY-kit G3', pris: 75 },
    { id: 3, navn: 'Raket - 30cm G13', pris: 250 }
];

app.get('/index', (req, res) => {
    const orders = req.session.orders || [];
    res.render('index', { products, orders });
});

app.post('/order', (request, response) => {
    console.log('POST /order');
    const { id } = request.body; // get the product ID from the request body
    let orders = request.session.orders;
    if (orders == undefined) {
        orders = [];
        request.session.orders = orders;
    }
    const product = products.find(p => p.id === id); // find the product with the given ID
    if (product) {
        orders.push(product); // add the product to the orders
        response.status(201).send(['added']);
        console.log(orders);
    }
});

app.listen(8080);