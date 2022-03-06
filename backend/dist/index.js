"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth");
const firestore_1 = require("firebase/firestore");
require("dotenv/config");
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};
const app = (0, express_1.default)();
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig);
const auth = (0, auth_1.getAuth)(firebaseApp);
const db = (0, firestore_1.getFirestore)(firebaseApp);
(0, auth_1.onAuthStateChanged)(auth, user => {
    if (user != null) {
        console.log("logged in!");
    }
    else {
        console.log("no user");
    }
});
app.get('/', (req, res) => {
    res.send('Well done!');
});
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
