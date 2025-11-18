// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCxFLD1PwJokja-RF-NUCzkqHQ5ME5D5n0",
  authDomain: "belajar-crud-sr.firebaseapp.com",
  databaseURL: "https://belajar-crud-sr-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "belajar-crud-sr",
  storageBucket: "belajar-crud-sr.appspot.com",
  messagingSenderId: "248678786334",
  appId: "1:248678786334:web:1bd8d9eb33d5f5b8b8d50f",
  measurementId: "G-E493HTB8ES"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };