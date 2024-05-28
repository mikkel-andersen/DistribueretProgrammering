import express from 'express';
const app = express();
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, doc, deleteDoc, addDoc, getDoc, query, where } from 'firebase/firestore';
const port = 8070;



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_ffxn4MELB-OQoIb_jKZzHMxQQJG7k-I",
  authDomain: "chat-a3975.firebaseapp.com",
  projectId: "chat-a3975",
  storageBucket: "chat-a3975.appspot.com",
  messagingSenderId: "343393496565",
  appId: "1:343393496565:web:3e58dedf1c67714e4b44bc",
  measurementId: "G-06N8R29E33"
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

async function getAlleBeskeder() {
    let beskedCol=collection(db, 'beskeder');
    let beskedSnapshot = await getDocs(beskedCol);

    let retur = beskedSnapshot.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return beskeder;
}

async function getBeskederForRum(chatrum) {
    let beskedCol=collection(db, 'beskeder');
    let q = query(beskedCol, where('chatrum', '==', chatrum));
    let beskedSnapshot = await getDocs(q);

    let retur = beskedSnapshot.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return retur;
}

async function getChatRum() {
    let chatrumCol=collection(db, 'chatrum');
    let chatrumSnapshot = await getDocs(chatrumCol);

    let retur = chatrumSnapshot.docs.map(doc => {
        let data = doc.data();
        data.docID = doc.id;
        return data;
    })
    return retur;
}

async function gemBesked() {
    
}

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