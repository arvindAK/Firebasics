
// import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";

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
// const analytics = getAnalytics(app);
const auth = getAuth(app);

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const provider = new GoogleAuthProvider();

if( signInBtn && signOutBtn && whenSignedIn && whenSignedOut && userDetails ) {
  signInBtn.onclick = () => signInWithPopup( auth, provider )
  signOutBtn.onclick = () => auth.signOut();

  auth.onAuthStateChanged( user => {
    if( user ) {
      // signed in
      whenSignedIn.hidden = false;
      whenSignedOut.hidden = true;
      userDetails.innerHTML = `<p>Hello ${user.displayName}!</p> <p>User ID: ${user.uid}</p>`
      console.log( 'signed in' )
    } else {
      // not signed in
      whenSignedIn.hidden = true;
      whenSignedOut.hidden = false;
      userDetails.innerHTML = '';
      console.log( 'not signed in' )
    }
  })
}