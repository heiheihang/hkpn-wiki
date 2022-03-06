"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firebaseConfig_1 = __importDefault(require("../config/firebaseConfig"));
const app_1 = require("firebase/app");
const answerRouter = express_1.default.Router();
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig_1.default);
const firestore_1 = require("firebase/firestore");
const db = (0, firestore_1.getFirestore)(firebaseApp);
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
//# sourceMappingURL=questions.js.map