
import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKgyVGde4SPUQPgS2IRCV62pkyAwmfhhE",
  authDomain: "seo-lighthouse-22d54.firebaseapp.com",
  projectId: "seo-lighthouse-22d54",
  storageBucket: "seo-lighthouse-22d54.appspot.com",
  messagingSenderId: "703489962429",
  appId: "1:703489962429:web:1ce083842b70e9738722d4",
  measurementId: "G-TRWCS9M3S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
console.log({app, analytics, auth})