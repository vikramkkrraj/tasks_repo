let timeLeft;


document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });

  const startQuiz = document.getElementById("startQuiz");

  if (startQuiz) {
    startQuiz.addEventListener("click", async () => {
      const level = document.getElementById("level").value;
      const category = document.getElementById("category").value;
      const numOfQuestions = document.getElementById("numOfQuestions").value;
      timeLeft = parseInt(document.getElementById("quizTimer").value);
      let api_url = `https://opentdb.com/api.php?amount=${numOfQuestions}&category=${category}&difficulty=${level}&type=multiple`;

      try {
        const res = await fetch(api_url);
        const data = await res.json();
        console.log(data.results);
      
        sessionStorage.setItem("quizQuestions", JSON.stringify(data.results));
        sessionStorage.setItem("quizTime", timeLeft);
        window.location.href = "quiz.html";
      } catch (error) {
        console.log(error);
      }
    });
  }
});
