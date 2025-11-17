const questions = [
  {
    question: "what does html stands for?",
    answers: [
      { text: "hypertext markup language", correct: true },
      { text: "Hightext machine language", correct: false },
      { text: "Hyperlink markup language", correct: false }
    ]
  },

  {
    question: "What is the capital of nigeria?",
    answers: [
      { text: "Abuja", correct: true },
      { text: "Lagos", correct: false },
      { text: "Ibadan", correct: false }
    ]
  },

  {
    question: "What language runs in a web browser?",
    answers: [
      { text: "Python", correct: false },
      { text: "Javascript", correct: true },
      { text: "Java", correct: false }
    ]
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.textContent = "Next";
  showQuestion();
}
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.style.background = "#28a745";
    score++;
  } else {
    selectedBtn.style.background = "#dc3545";
  }

  Array.from(answerButtons.children).forEach(button => {
    button.disabled = true;
    if (button.dataset.correct === "true") {
      button.style.background = "#28a745";
    }
  })

  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  questionElement.textContent = `You Scored ${score} out of ${questions.length} `;
  nextButton.textContent = "Play again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
