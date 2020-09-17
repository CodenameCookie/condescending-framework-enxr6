import { collectionData } from "rxfire/firestore";
import { firebaseApp } from "./firebase.config";

import { throwError, of } from "rxjs";
import { catchError } from "rxjs/operators";

const fruitRef = firebaseApp.firestore().collection("fruits");

export default collectionData(fruitRef, "id");

console.log("hi me");
