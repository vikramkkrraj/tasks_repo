document.addEventListener("DOMContentLoaded", () => {
    let finalScore = parseInt(localStorage.getItem("quizScore") || "0", 10);
    let scoreElement = document.getElementById("animated-score");
    let feedbackMessage = document.getElementById("feedback-message");
    let badgeContainer = document.getElementById("badge-container");

    

    if (!scoreElement || !feedbackMessage || !badgeContainer) {
        console.error("Error: One or more elements not found in the DOM!");
        return;
    }

    let badgeImages = {
        Bronze: "https://img.freepik.com/premium-vector/bronze-award-sport-medal-with-usa-ribbons-star_599062-10692.jpg",
        Gold: "https://img.freepik.com/free-psd/medals-3d-render-champion-award-composition_314999-3094.jpg",
        "Quiz Enthusiast": "https://img.freepik.com/premium-vector/silver-award-medal-with-star-illustration-from-geometric-shapes_599062-9011.jpg"
    };

    let newBadges = JSON.parse(sessionStorage.getItem("newBadges") || "[]");

   
    let count = 0;
    let interval = setInterval(() => {
        if (count < finalScore) {
            count += 1;
            scoreElement.innerText = count;
        } else {
            clearInterval(interval);
            showFeedbackMessage(finalScore);
            showNewBadges(newBadges);
        }
    }, 20);

    function showFeedbackMessage(score) {
        if (score >= 80) {
            feedbackMessage.innerText = "🎉 Amazing! You are a Quiz Master!";
        } else if (score >= 50) {
            feedbackMessage.innerText = "👍 Great Job! Keep practicing!";
        } else {
            feedbackMessage.innerText = "😃 Good effort! Try again for a better score!";
        }
    }

    function showNewBadges(badges) {
        if (badges.length > 0) {
            badgeContainer.innerHTML = `<h3>🏅 New Achievements:</h3>`;
            badges.forEach(badge => {
                let badgeElement = document.createElement("div");
                badgeElement.classList.add("badge");
                console.log(badge);
                badgeElement.innerHTML = `<img src="${badgeImages[badge]}" alt="${badge}">`;
                badgeContainer.appendChild(badgeElement);

                setTimeout(() => {
                    badgeElement.classList.add("appear");
                }, 500);
            });

            // Ensure fireworks animation is properly added
            console.log("Adding fireworks...");
            document.body.insertAdjacentHTML("beforeend", `<div class="fireworks"></div>`);
        }
    }

    
});
