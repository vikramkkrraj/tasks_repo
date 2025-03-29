
import { db, auth,doc, getDoc, updateDoc } from "./firebase-config.js";


document.addEventListener("DOMContentLoaded", () => {
    let questions = JSON.parse(sessionStorage.getItem("quizQuestions")) || [];
    let timeLeft = parseInt(sessionStorage.getItem("quizTime")) || 60;
    let currentQuestionIndex = 0;
    let score = 0;
    let timer;
    let userAnswers = new Array(questions.length).fill(null); // Store user-selected answers

    const timerDisplay = document.getElementById("timer");
    const questionContainer = document.getElementById("question-container");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");
    const submitButton = document.getElementById("submit-btn");

    // Progress bar
    const progressBarContainer = document.createElement("div");
    progressBarContainer.classList.add("progress-bar-container");
    progressBarContainer.innerHTML = `<div class="progress-bar"></div>`;
    document.getElementById("quiz-container").prepend(progressBarContainer);
    const progressBar = document.querySelector(".progress-bar");

    function startTimer() {
        timer = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(timer);
                submitQuiz();
            } else {
                timeLeft--;
                timerDisplay.innerText = `Time Left: ${timeLeft}s`;
            }
        }, 1000);
    }

    function displayQuestion() {
        let questionData = questions[currentQuestionIndex];
        let allAnswers = [...questionData.incorrect_answers, questionData.correct_answer];
        allAnswers.sort(() => Math.random() - 0.5); // Shuffle answers

        questionContainer.innerHTML = `
            <h3 class="fade-in">${questionData.question}</h3>
            <form id="answer-form" class="fade-in">
                ${allAnswers
                    .map(answer => `
                        <label class="option">
                            <input type="radio" name="answer" value="${answer}" 
                                ${userAnswers[currentQuestionIndex] !== null ? "disabled" : ""} 
                                ${userAnswers[currentQuestionIndex] === answer ? "checked" : ""}>
                            <span class="answer-text">${answer}</span>
                        </label>
                    `)
                    .join("")}
            </form>
        `;

        document.querySelectorAll("input[name='answer']").forEach(input => {
            input.addEventListener("change", (event) => selectAnswer(event.target));
        });

        updatePaginationButtons();
        updateProgressBar();
    }



    function selectAnswer(selectedInput) {
        let selectedAnswer = selectedInput.value;
        userAnswers[currentQuestionIndex] = selectedAnswer;
    
        // Disable all radio buttons after selection
        document.querySelectorAll("input[name='answer']").forEach(input => {
            input.disabled = true;
        });
    
        // Apply color feedback
        document.querySelectorAll(".option").forEach(option => {
            let optionInput = option.querySelector("input");
            let isCorrect = optionInput.value === questions[currentQuestionIndex].correct_answer;
            
            // Reset previous styles
            option.classList.remove("correct", "incorrect");
    
            // Mark correct and incorrect answers
            if (isCorrect) {
                option.classList.add("correct"); // Green for correct
            }
            if (optionInput.checked && !isCorrect) {
                option.classList.add("incorrect"); // Red for incorrect
            }
        });
    }
    

    function updatePaginationButtons() {
        prevButton.disabled = currentQuestionIndex === 0;
        nextButton.disabled = currentQuestionIndex === questions.length - 1;
    }

    function updateProgressBar() {
        let progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;
        progressBar.style.width = `${progressPercent}%`;
    }

    prevButton.addEventListener("click", () => {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        }
    });

    submitButton.addEventListener("click", submitQuiz);

    async function submitQuiz() {
        clearInterval(timer);
        score = userAnswers.reduce((total, answer, index) => {
            return answer === questions[index].correct_answer ? total + 10 : total;
        }, 0);
    
        const user = auth.currentUser;
        if (user) {
            const userRef = doc(db, "users", user.uid);
            const userSnap = await getDoc(userRef);
    
            if (userSnap.exists()) {
                const userData = userSnap.data();
                let totalPoints = (userData.points || 0) + score;
                let quizzesTaken = (userData.quizzesTaken || 0) + 1;
                let newBadges = [...(userData.badges || [])];
    
                // Award badges based on total points
                if (totalPoints >= 100 && !newBadges.includes("Bronze")) newBadges.push("Bronze");
                if (totalPoints >= 500 && !newBadges.includes("Gold")) newBadges.push("Gold");
    
                // Award badges based on quizzes taken
                if (quizzesTaken >= 10 && !newBadges.includes("Quiz Enthusiast")) newBadges.push("Quiz Enthusiast");
    
                await updateDoc(userRef, {
                    points: totalPoints,
                    highestScore: Math.max(userData.highestScore || 0, score),
                    quizzesTaken,
                    badges: newBadges
                });
    
                // Store badge info in sessionStorage for animation
                sessionStorage.setItem("newBadges", JSON.stringify(newBadges));
            }
        }
    
        localStorage.setItem("quizScore", score);
        window.location.href = "result.html";
    }
    

    startTimer();
    displayQuestion();
});


