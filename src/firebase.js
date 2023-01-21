// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/compat/app';
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5R-S_fKWYUvF-dy9wvnVfHbN2gqd6418",
  authDomain: "discord-ac3c3.firebaseapp.com",
  projectId: "discord-ac3c3",
  storageBucket: "discord-ac3c3.appspot.com",
  messagingSenderId: "1033458437325",
  appId: "1:1033458437325:web:30bb1257c7c36425d52d84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)