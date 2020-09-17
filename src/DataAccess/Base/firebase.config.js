import * as firebase from "firebase/app";
import "firebase/firestore";

//console.log("firebase: ", firebase);

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA4vrpmUFMsMjLJyO2yGceBhyjeBWgnj2Q",
  authDomain: "rxfire-stencil-831e5.firebaseapp.com",
  databaseURL: "https://rxfire-stencil-831e5.firebaseio.com",
  projectId: "rxfire-stencil-831e5",
  storageBucket: "rxfire-stencil-831e5.appspot.com",
  messagingSenderId: "4165210710",
  appId: "1:4165210710:web:19420f513fd33d45af61f7",
  measurementId: "G-F6HW77LJQX"
});
