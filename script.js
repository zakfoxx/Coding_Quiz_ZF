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
startGame.addEventListener("click", begin);
function begin() {
  // make button disappear, change text at top to first question after button is clicked
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
