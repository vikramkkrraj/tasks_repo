import { db } from "./firebase-config.js";
import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

document.addEventListener("DOMContentLoaded", async () => {
    const leaderboardBody = document.getElementById("leaderboard-body");

    try {
        const usersRef = collection(db, "users");

        // Firestore Query: Order first by highestScore (desc), then by quizzesTaken (asc)
        const q = query(usersRef, orderBy("highestScore", "desc"), orderBy("quizzesTaken", "asc"));
        const querySnapshot = await getDocs(q);

        let rank = 1;
        leaderboardBody.innerHTML = "";

        querySnapshot.forEach((doc) => {
            const userData = doc.data();
            leaderboardBody.innerHTML += `
                <tr>
                    <td>#${rank}</td>
                    <td>${userData.username || "Unknown"}</td>
                    <td>${userData.highestScore || 0}</td>
                    <td>${userData.quizzesTaken || 0}</td>
                    <td>${userData.badges?.length ? userData.badges.join(", ") : "No Badges"}</td>
                </tr>
            `;
            rank++;
        });

    } catch (error) {
        console.error("Error fetching leaderboard:", error);
        leaderboardBody.innerHTML = `<tr><td colspan="5">Failed to load leaderboard.</td></tr>`;
    }
});




