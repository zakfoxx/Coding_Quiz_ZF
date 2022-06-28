var headerElement = document.querySelector(".quiz-header");
var contentElement = document.querySelector(".quiz-content");
var footerElement = document.querySelector(".quiz-footer");
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
];
var timeLeft = 75;

const startGame = document.getElementById("start-button");
const timerEl = document.getElementById("timer");
//startGame.addEventListener("click", begin);
function begin() {
  console.log("game started");
  countdown();
}

function countdown() {
  timeLeft = 75;
  writeTime();
  console.log(timeLeft);

  setInterval(function () {
    if (timeLeft > 0) {
      timeLeft--;
      writeTime();
    }
  }, 1000);
}
function writeTime() {
  timerEl.textContent = "Time Remaining: " + timeLeft;
}
function quizFunction(event) {
  console.log(event.target);
  if (event.target.getAttribute("id") === "start-button") {
    //console.log("start-game");
    begin();
    setQuestion(questionBankObj[questionTracker]);
  }
  // check if last qustion is finsihed and move on to end
  if (questionTracker >= questionBankObj.length) {
  } else {
    // next question
  }
}
function setQuestion(object) {
  headerElement.textContent = object.question;
  // building answers
  var orderedListEl = document.createElement("ol");
  for (var i = 0; i < object.choice.length; i++) {
    var listElement = document.createElement("li");
    listElement.setAttribute("id", i);
    listElement.textContent = object.choice[i];
    orderedListEl.appendChild(listElement);
  }
  contentElement.replaceChildren(orderedListEl);
}

// 

contentElement.addEventListener("click", quizFunction);
// start game

// start timer/loads first questions

// wrong answer = time decreases, footer tells if answer is correct - next question

// correct answer, footer tells if answer is correct = next question
