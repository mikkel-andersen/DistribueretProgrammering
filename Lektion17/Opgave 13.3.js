const express = require('express');
const app = express();
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore'

const port = 8080;

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdWMTrAmaLCR0oOp1krKIiABnfh2NAkSU",
  authDomain: "chatrum-94a41.firebaseapp.com",
  projectId: "chatrum-94a41",
  storageBucket: "chatrum-94a41.appspot.com",
  messagingSenderId: "667005616937",
  appId: "1:667005616937:web:77c768cd23298b9c056d38",
  measurementId: "G-055NJQ7JQR"
};

// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const db = getFirestore(firebase_app);

let beskeder = [
    { afsender: "Ole", tekst: "Min første besked", chatrum: "rum1", nummer: "1" },
    { afsender: "Ib", tekst: "Hallo, er der nogen?", chatrum: "rum2", nummer: "2" }
];

let chatRum = [
    { navn: "rum1" },
    { navn: "rum2" }
];

//Tillad cors requests
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
    next();
});
app.use(express.json());

app.get('/beskeder', async (request, response) => {
    response.status(200);
    response.send(await getAlleBeskeder());
});

app.get('/beskeder/:chatrum', async (request, response) => {
    response.status(200);
    response.send(await getBeskederForRum(request.params.chatrum));
});

app.get('/chatrum', async (request, response) => {
    response.status(200);
    response.send(await getChatRum());
});

app.post('/beskeder', (request, response) => {
    console.log(request.body);
    addDoc(collection(db, 'beskeder'), request.body);
    response.status(201);
    response.send("Added");
});

app.delete('/beskeder/:id', (request, response) => {
    deleteDoc(doc(db, 'beskeder', request.params.id));
    response.status(200);
    response.send("Deleted");
});

app.listen(port);

console.log('Lytter på port ' + port + ' ...');