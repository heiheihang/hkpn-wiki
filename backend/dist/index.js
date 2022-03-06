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
const firebaseConfig_1 = __importDefault(require("./config/firebaseConfig"));
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig_1.default);
const auth = (0, auth_1.getAuth)(firebaseApp);
const db = (0, firestore_1.getFirestore)(firebaseApp);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
app.use('/user', users_1.default);
app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
});
//# sourceMappingURL=index.js.map