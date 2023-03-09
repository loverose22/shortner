import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgleJeF2N_rNMtuOXj21ZT9iId5UVytfM",
  authDomain: "jessica-745f3.firebaseapp.com",
  projectId: "jessica-745f3",
  storageBucket: "jessica-745f3.appspot.com",
  messagingSenderId: "531109172656",
  appId: "1:531109172656:web:6877325da3391d5845b275",
  measurementId: "G-C3N8FT0M7Z"
};

const app = firebase.initializeApp(firebaseConfig);
export const db = app.firestore();


