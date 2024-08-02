// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYOQsGqROdrzKiedh145ArSR6hEZ4J-oc",
  authDomain: "react-notes-2-27fb1.firebaseapp.com",
  projectId: "react-notes-2-27fb1",
  storageBucket: "react-notes-2-27fb1.appspot.com",
  messagingSenderId: "247950271206",
  appId: "1:247950271206:web:74a3b0e867e851a27b5127"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")