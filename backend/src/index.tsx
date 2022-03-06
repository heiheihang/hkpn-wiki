import express from 'express';
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged }  from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import 'dotenv/config'
import  firebaseConfig  from './config/firebaseConfig';
import userRouter from './routes/users';

const app = express();
const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)
app.use(express.json())
app.use(express.urlencoded({extended: true}));
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
app.use('/user', userRouter);
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})