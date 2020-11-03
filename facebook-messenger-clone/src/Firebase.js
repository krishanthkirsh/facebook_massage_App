// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     
//   };

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
    apiKey: "AIzaSyB7NSULtu_JN3eJ6pDqFS65Igbpys3awl0",
    authDomain: "facebook-messenger-clone-59b0b.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-59b0b.firebaseio.com",
    projectId: "facebook-messenger-clone-59b0b",
    storageBucket: "facebook-messenger-clone-59b0b.appspot.com",
    messagingSenderId: "526077572913",
    appId: "1:526077572913:web:b6e73dda2bc7631b41a210",
    measurementId: "G-RCY4H0HC5S"
});

const db = firebase.firestore();
export default db;