import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPJJXG3tYsgujxpRoHLzgMj4QzoUXx6rw",
  authDomain: "task-manager-4cd30.firebaseapp.com",
  projectId: "task-manager-4cd30",
  storageBucket: "task-manager-4cd30.firebasestorage.app",
  messagingSenderId: "854379555414",
  appId: "1:854379555414:web:5ebf5835917f304923a9f7",
  measurementId: "G-QTBVE8P4LF"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

export { database, auth };