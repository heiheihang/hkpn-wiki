import express from 'express';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged }  from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import 'dotenv/config'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
}

const app = express();
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

onAuthStateChanged(auth, user => {
    if(user != null) {
        console.log("logged in!")
    } else {
        console.log("no user")
    }
})

app.get('/', (req, res) => {
    res.send('Well done!');
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})