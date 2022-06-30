var headerElement = document.querySelector(".quiz-header");
var contentElement = document.querySelector(".quiz-content");
var footerElement = document.querySelector(".quiz-footer");

const results = document.createElement("div");
const score = document.createElement("p");
const inputArea = document.createElement("div");
const inputPrompt = document.createElement("p");
const inputSubmit = document.createElement("div");
const inputBox = document.createElement("input");
const submitButton = document.createElement("button");
const initialList = document.createElement("ol");
const goBack = document.createElement("button");
inputPrompt.textContent = "Enter your initials";
inputSubmit.appendChild(inputBox);
inputSubmit.appendChild(submitButton);
inputArea.appendChild(inputPrompt);
inputArea.appendChild(inputSubmit);

results.appendChild(score);
results.appendChild(inputArea);
results.appendChild(initialList);
results.appendChild(goBack);
// var setQuizHeader = function;
var questionTracker = 0;
var questionBankObj = [
  {
    //object contains the question, the index of the answer from choices, will give an Id to each choice associated to its position within the array.
    question: "Arrays in JavaScript can be used to store __",
    answer: 2,
    choice: ["numbers and strings", "2", "3", "4"],
  },
  {
    question: "Commonly used data types",
    answer: 2,
    choice: ["1", "2", "3", "4"],
  },
  {
    question: "This is a question",
    answer: 2,
    choice: ["1", "2", "3", "4"],
  },
  {
    question: "question 3",
    answer: 2,
    choice: ["1", "2", "3", "4"],
  },
  {
    question: "question 4",
    answer: 2,
    choice: ["1", "2", "3", "4"],
  },
];
var timeLeft = 75;
let answers = [];
let initials = [];

const startGame = document.getElementById("start-button");
const timerEl = document.getElementById("timer");
//startGame.addEventListener("click", begin);
function begin() {
  countdown();
  console.log("game started");
  startGame.style.display = "none";
  setQuestion(questionBankObj[questionTracker]);
  console.log("game finished");
}

function countdown() {
  // writeTime();
  console.log(timeLeft);

  setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      timerEl.textContent = "Time Remaining: " + timeLeft;
      // writeTime();
    }
  }, 1000);
}
//function writeTime() {}
function setQuestion(object) {
  headerElement.textContent = object.question;
  // building answers
  var orderedListEl = document.createElement("ol");
  for (var i = 0; i < object.choice.length; i++) {
    var listElement = document.createElement("button");
    listElement.setAttribute("id", i);
    listElement.textContent = object.choice[i];
    if (questionTracker < questionBankObj.length) {
      listElement.onclick = (event) => quizFunction(event);
    }
    orderedListEl.appendChild(listElement);
  }
  contentElement.replaceChildren(orderedListEl);
}

function quizFunction(event) {
  console.log(questionBankObj[questionTracker].answer);
  event.target.setAttribute("data-answer", event.target.textContent);
  console.log(event.target.getAttribute("data-answer"));

  if (
    event.target.getAttribute("data-answer") ==
    questionBankObj[questionTracker].answer
  ) {
    console.log("questionRight", timeLeft);
    questionTracker++;
    answers.push(2);
    checkStatus();
    console.log(questionTracker);
  } else {
    console.log("questionWrong");
    questionTracker++;
    answers.push(1);
    checkStatus();
    timeLeft -= 10;
    //writeTime();
  }
}
startGame.addEventListener("click", begin);

function checkStatus() {
  if (questionTracker === questionBankObj.length) {
    headerElement.textContent = "Quiz Results";

    score.textContent = answers.reduce((a, b) => a + b, 0);

    submitButton.textContent = "Submit";
    submitButton.onclick = () => {
      initials.push(inputBox.value);
      var listElement = document.createElement("li");
      listElement.setAttribute("id", initials.length);
      listElement.textContent = inputBox.value;
      initialList.appendChild(listElement);
      inputBox.value = "";
    };
    console.log(initials);

    goBack.textContent = "Start Over";
    goBack.onclick = () => {
      questionTracker = 0;
      answers = [];
      countdown();
      setQuestion(questionBankObj[questionTracker]);
    };

    contentElement.replaceChildren(results);
    return;
  } else {
    setQuestion(questionBankObj[questionTracker]);
  }
}
// start game

// start timer/loads first questions

// wrong answer = time decreases, footer tells if answer is correct - next question

// correct answer, footer tells if answer is correct = next question

// caluculate score with timeRemaining

// have a endQuiz function to display a text field for users info and redisplay startQuiz button
