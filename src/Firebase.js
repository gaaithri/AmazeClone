import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAiEmJKzSjTXrFvL3Ax2OnSJkbFjLSLUjg",
    authDomain: "shoppincart-333.firebaseapp.com",
    projectId: "shoppincart-333",
    storageBucket: "shoppincart-333.appspot.com",
    messagingSenderId: "761707803378",
    appId: "1:761707803378:web:bb7193e19ffa07e310166b"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;