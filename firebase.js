// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoREFn8XegimsxfaaGNIx2HllKfnPRFNg",
  authDomain: "react-notes-3.firebaseapp.com",
  projectId: "react-notes-3",
  storageBucket: "react-notes-3.appspot.com",
  messagingSenderId: "126674436170",
  appId: "1:126674436170:web:cee4c49456194fb54f26b3"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")



