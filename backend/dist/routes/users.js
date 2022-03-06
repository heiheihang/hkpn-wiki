"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const firestore_1 = require("firebase/firestore");
const firebaseConfig_1 = __importDefault(require("../config/firebaseConfig"));
const app_1 = require("firebase/app");
const userRouter = express_1.default.Router();
const firebaseApp = (0, app_1.initializeApp)(firebaseConfig_1.default);
const firestore_2 = require("firebase/firestore");
const db = (0, firestore_2.getFirestore)(firebaseApp);
userRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("hi");
    console.log(req.body.firstName);
    const data = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        created: firestore_1.Timestamp.now(),
        updated: firestore_1.Timestamp.now()
    };
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(data);
    const userCollection = (0, firestore_2.collection)(db, 'user');
    const userSnapshot = yield (0, firestore_1.addDoc)(userCollection, data);
    // const cityList = citySnapshot.docs.map(doc => doc.data());
    res.json({ status: 'success', data: data, id: userSnapshot.id });
}));
exports.default = userRouter;
//# sourceMappingURL=users.js.map