import express from 'express';
import { Firestore, Timestamp } from 'firebase/firestore'
import  firebaseConfig  from '../config/firebaseConfig';
import { initializeApp } from "firebase/app";


const answerRouter = express.Router();
const firebaseApp = initializeApp(firebaseConfig)
import { getAuth, onAuthStateChanged }  from "firebase/auth"
import { getFirestore } from "firebase/firestore"
const db = getFirestore(firebaseApp)
// import { QuestionType } from '../types/QuestionType';

// const questionRouter = express.Router();
// const db = new Firestore();

// questionRouter.get("/recent", async (request, response) => {
//     const query = db
//         .collection("questions")
//         .orderBy("created", "desc")
//         .limit(10)
//     const querySnapshot = await query.get();
//     let jsonArray = []
//     querySnapshot.forEach(documentSnapshot => {
//         jsonArray.push(documentSnapshot.data())
//     })
//     response.json({ status: 'success', 'data': jsonArray });
// })

// questionRouter.get('/id/:questionId', async (request, response) => {
//     const questionId = request.params.questionId;
//     const query = db.collection('questions').where('name', '==', questionId);
//     const querySnapshot = await query.get();

//     if (querySnapshot.size > 0) {
//         response.json({ status: "success", "data": querySnapshot.docs[0].data()});
//     }
//     else {
//         response.json({ status: 'failure' });
//     }
// })

// questionRouter.post('/', async (req, res) => {
//     console.log("in question post")
//     const data: QuestionType = {
//         questionText: req.body.questionText,
//         answerOptions: [],
//         created: Timestamp.now(),
//         tags: [],
//         updated: Timestamp.now()
//     }
//     const docref = await db.collection('questions').add(data);
//     res.json({ status: 'success', data: data, id: docref.id });
// })

// export default questionRouter;