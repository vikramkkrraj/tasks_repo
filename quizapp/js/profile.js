import { db, auth } from "./firebase-config.js";
import {
  doc,
  getDoc,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      alert("You need to log in first!");
      window.location.href = "index.html";
      return;
    }

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      document.getElementById("username").innerText = userData.username;
      document.getElementById("email").innerText = userData.email;
      document.getElementById("points").innerText = userData.points;
      document.getElementById("highestScore").innerText = userData.highestScore;
      document.getElementById("quizzesTaken").innerText = userData.quizzesTaken;
      document.getElementById("badges").innerText =
        userData.badges.join(", ") || "No Badges";
      document.getElementById("createdAt").innerText = new Date(
        userData.createdAt.toDate()
      ).toLocaleDateString();
    } else {
      alert("User profile not found!");
    }
  });
});
