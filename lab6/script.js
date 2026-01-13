const questions = [
  {
    question: "What is the capital of Malaysia?",
    options: ["Kuala Lumpur", "Penang", "Johor Bahru", "Melaka"],
    answer: "Kuala Lumpur"
  },
  {
    question: "Which language is used for web styling?",
    options: ["HTML", "CSS", "JavaScript", "Python"],
    answer: "CSS"
  },
  {
    question: "What does JS stand for?",
    options: ["Java Source", "JavaScript", "Just Script", "Jumbo Style"],
    answer: "JavaScript"
  }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

function shuffleQuestions() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timeLeft = 30;
  document.getElementById("time").textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("time").textContent = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      checkAnswer(null); // No answer selected
    }
  }, 1000);
}

function displayQuestion() {
  const questionObj = shuffledQuestions[currentQuestionIndex];
  document.getElementById("question").textContent = questionObj.question;
  const optionsList = document.getElementById("options");
  optionsList.innerHTML = "";

  questionObj.options.forEach(option => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(option);
    optionsList.appendChild(li);
  });

  document.getElementById("feedback").textContent = "";
  startTimer();
}

function checkAnswer(selectedOption) {
  clearInterval(timer);
  const correct = shuffledQuestions[currentQuestionIndex].answer;
  const feedback = document.getElementById("feedback");

  if (selectedOption === correct) {
    score++;
    feedback.textContent = "Correct!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Wrong! Correct answer: ${correct}`;
    feedback.style.color = "red";
  }

  document.getElementById("score").textContent = score;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    displayQuestion();
  } else {
    document.getElementById("quiz").innerHTML = `<h3>Quiz Finished!</h3><p>Your final score is ${score} out of ${shuffledQuestions.length}.</p>`;
  }
}

function startQuiz() {
  shuffleQuestions();
  currentQuestionIndex = 0;
  score = 0;
  displayQuestion();
}

document.getElementById("next-btn").onclick = nextQuestion;
window.onload = startQuiz;