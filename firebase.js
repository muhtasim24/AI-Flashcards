// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireBase } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdX0MyOt3U5R5bQL6yW1k17KlchUg_sMc",
  authDomain: "flashcardsaas-181f2.firebaseapp.com",
  projectId: "flashcardsaas-181f2",
  storageBucket: "flashcardsaas-181f2.appspot.com",
  messagingSenderId: "525661168245",
  appId: "1:525661168245:web:0f80d4f78f968ecac98e3c",
  measurementId: "G-M0GXDS5XNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireBase(app);

export {db}