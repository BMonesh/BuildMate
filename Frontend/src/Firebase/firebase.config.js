// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqWHUflEsphFdnGcxO6U1-T6VolmCXZBg",
  authDomain: "buildmatefb.firebaseapp.com",
  projectId: "buildmatefb",
  storageBucket: "buildmatefb.appspot.com",
  messagingSenderId: "157972631427",
  appId: "1:157972631427:web:5ae43268c4379755b470b6",
  measurementId: "G-BCDWMGC1QV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db =getFirestore(app)
export{app,db}