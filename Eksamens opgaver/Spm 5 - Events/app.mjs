
import express from 'express';
const app = express();
import sessions from 'express-session';
import pug from 'pug';
import path from 'path';
import { fileURLToPath } from 'url';
import session from 'express-session';
const port = 6543

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
app.set('view engine', 'pug');
app.set("views", __dirname + "/views");

app.use(sessions({ secret: 'hemmelig', saveUninitialized: true, cookie: { maxAge: 1000 * 60 * 20 }, resave: false }));
app.use(express.static(__dirname));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


let kontakter = [
    { navn: "Mikkel", tlf: "31362810" },
    { navn: "Mathias", tlf: "12341234"},
    { navn: "Tully", tlf: "12345678"}
];

//Get på index, som sender kontakter array med.
app.get('/index', (req, res) => {
    res.render('index', { kontakter });
});

// Opdaterer kontakt
app.post('/updateKontakt', (req, res) => {
    const navn = req.body.navn; //Gemmer navn og telefonnummer i variabler
    const nytTelefonNummer = req.body.nytTlf;

    // Tjekker om telefonummeret er et tal
    if (isNaN(nytTelefonNummer)) {
        res.status(400).send('Telefonnummer skal være tal'); //Sender en besked, om at telefonnummer ikke er et tal
        return;
    }
    
    //Finder kontakt, som er lig med navn
    const kon = kontakter.find(kontakt => kontakt.navn === navn);

    if (kon) {
        //Opdater telefonnummeret for den givne kontakt
        kon.tlf = nytTelefonNummer;
        //Går tilbage til index siden
        res.redirect('/index');
    } else {
        //Besked hvis kontakten ikke findes.
        res.status(404).send('Kontakt ikke fundet');
    }
});
app.listen(port)
console.log(`Lytter på port ${port} ...`);


//Redegør for events