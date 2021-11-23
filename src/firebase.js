import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHwOLYJfpeGNhj9evRDZqpvxt0zCqaa64",
    authDomain: "clone-app-ea25e.firebaseapp.com",
    projectId: "clone-app-ea25e",
    storageBucket: "clone-app-ea25e.appspot.com",
    messagingSenderId: "645994740111",
    appId: "1:645994740111:web:1994aa446a48e9f21373fa",
    measurementId: "G-PW6ELV047K"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };