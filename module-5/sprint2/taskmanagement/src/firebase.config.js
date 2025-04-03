// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwHRvOQLQMtMDG50ARXBESyfAvrsxqHSs",
  authDomain: "react-task-fdcdc.firebaseapp.com",
  projectId: "react-task-fdcdc",
  storageBucket: "react-task-fdcdc.firebasestorage.app",
  messagingSenderId: "24486558067",
  appId: "1:24486558067:web:4f0362b263cc46fec86d06",
  measurementId: "G-FX3J3LERR2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const tasksCollection = collection(db, "tasks");

export { db, tasksCollection, addDoc, getDocs, updateDoc, deleteDoc, doc, onSnapshot };