import {
  db,
  auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  setDoc,
  doc,
} from "../js/firebase-config.js";

document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const loginForm = document.getElementById("login-form");
  const dashboard = document.getElementById("dashboard");
  const logout = document.getElementById("logout");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login Successuful!");
        window.location.href = "../html/dashboard.html";
      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        await updateProfile(user, { displayName: username });

        // Create user profile in firestore;
        await setDoc(doc(db, "users", user.uid), {
          username,
          email,
          points: 0,
          highestScore: 0, // Track the best score
          badges: [],
          quizzesTaken: 0, // To track the number of quizzes completed
          createdAt: new Date(), // Timestamp for user creation
        });

        alert("Signup Succesfull! Please login.");
        window.location.href = "../index.html";
      } catch (error) {
        console.log(error);
        alert(error);
      }
    });
  }

  if (dashboard) {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dashboard.innerText = user.displayName || "User";
      } else {
        window.location.href = "../index.html";
      }
    });
  }

  if (logout) {
    logout.addEventListener("click", () => {
      signOut(auth).then(() => {
        window.location.href = "../index.html";
      });
    });
  }
});
