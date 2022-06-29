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
function setQuestion(object) {
  headerElement.textContent = object.question;
  // building answers
  var orderedListEl = document.createElement("ol");
  for (var i = 0; i < object.choice.length; i++) {
    var listElement = document.createElement("button");
    listElement.setAttribute("id", i);
    listElement.textContent = object.choice[i];
    orderedListEl.appendChild(listElement);
  }
  contentElement.replaceChildren(orderedListEl);
}
function quizFunction(event) {
  if (event.target.getAttribute("id") === "start-button") {
    //console.log("start-game");
    begin();
    setQuestion(questionBankObj[questionTracker]);
  }
  console.log(questionBankObj[questionTracker].answer);
  event.target.setAttribute("data-answer", event.target.textContent);
  console.log(event.target.getAttribute("data-answer"));

  if (
    event.target.getAttribute("data-answer") ==
    questionBankObj[questionTracker].answer
  ) {
    console.log("questionRight");
    questionTracker++;
    setQuestion(questionBankObj[questionTracker]);
    console.log(questionTracker);
  } else {
    console.log("questionWrong");
    timeLeft - 10;
  }
  if (questionTracker >= questionBankObj.length) {
    // check if last qustion is finsihed and move on to end
  } else {
    // next question
  }
}

contentElement.addEventListener("click", quizFunction);
// start game

// start timer/loads first questions

// wrong answer = time decreases, footer tells if answer is correct - next question

// correct answer, footer tells if answer is correct = next question
