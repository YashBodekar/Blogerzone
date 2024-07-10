import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const app = firebase.initializeApp({
    apiKey: "AIzaSyCoLJiXJ8oxhLyU_rgoiWE2qj2fVybZt_4",
    authDomain: "bloggers-zone.firebaseapp.com",
    projectId: "bloggers-zone",
    storageBucket: "bloggers-zone.appspot.com",
    messagingSenderId: "10538943445",
    appId: "1:10538943445:web:c99f4e28a72554fec6335c",
    measurementId: "G-62Z1PS9P1B"
});

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth, app };