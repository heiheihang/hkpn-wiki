import express from 'express';
import { Firestore, Timestamp, getDocs, setDoc, addDoc} from 'firebase/firestore'
import  firebaseConfig  from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";


const userRouter = express.Router();
const firebaseApp = initializeApp(firebaseConfig)
import { getAuth, onAuthStateChanged }  from "firebase/auth"
import { getFirestore, collection, doc } from "firebase/firestore"
import { UserType } from '../types/UserType';
const db = getFirestore(firebaseApp)

userRouter.post('/', async (req, res) => {
    console.log("hi")
    console.log(req.body.firstName)

    const data: UserType = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        created: Timestamp.now(),
        updated: Timestamp.now()
    }
    console.log(req.body.firstName)
    console.log(req.body.lastName)

    console.log(data)
    const userCollection = collection(db, 'user');
    const userSnapshot = await addDoc(userCollection, data);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    
    res.json({ status: 'success', data: data, id: userSnapshot.id });
})

export default userRouter;