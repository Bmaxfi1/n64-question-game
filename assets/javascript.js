//True or False questions only
//List of question objects
var question1 = {
  q: "There are 150 total stars to collect in Super Mario 64.",
  a: false
};

var question2 = {
  q: "Three different versions of Mario Party were released on the N64.",
  a: true
};

var question3 = {
  q:
    "In the original Smash Bros. 64, there were a total of 8 fighters to choose from.",
  a: false
};

var question4 = {
  q: "There were no Pokemon titles released on the N64.",
  a: false
};

var question5 = {
  q: "There is only one button on the back of a N64 controller.",
  a: true
};

var question6 = {
  q: "Paper Mario was the first RPG in the Mario series.",
  a: false
};

var question7 = {
  q:
    "In 'Zelda: Ocarina of Time', you are able to collect up to five empty bottles in total.",
  a: false
};

var question8 = {
  q:
    "If you removed the game cartridge while a game was running, the N64 would continue running the game.",
  a: false
};

var question9 = {
  q:
    "Mario Kart 64 features the 'Blue Shell' powerup, that targets the player currently in first place.",
  a: true
};

var question10 = {
  q:
    "In Banjo-Kazooie, Kazooie is the name of the red bird companion on your back.",
  a: true
};

var questionArray = [
  question1,
  question2,
  question3,
  question4,
  question5,
  question6,
  question7,
  question8,
  question9,
  question10
];
//This is where I will assign the variables to the html ID's
var startButtonEl = document.getElementById("start-button");
var currentQuestionEl = document.getElementById("current-question");
var answerButtonsEl = document.getElementsByClassName("answer-buttons")[0];
var trueButtonEl = document.getElementById("true-button");
var falseButtonEl = document.getElementById("false-button");
var currentScoreEl = document.getElementById("current-score");
var initiateGameEl = document.getElementById("initiate-game");
var restartGameEl = document.getElementById("restart-game");

//The following functions will be used to change the HTML
function displayCurrentQuestion() {
  currentQuestionEl.textContent = currentQuestion;
}
function displayCurrentScore() {
  currentScoreEl.textContent = currentScore;
}

//Game mechanism
var currentQuestion;
var currentAnswer;
var currentScore = 0;
var q = 0;
var a = 0;

function showElement(e) {
  e.style.display = "flex";
}

function hideElement(e) {
  e.style.display = "none";
}
function initiateGame() {
  var q = 0;
  var a = 0;
  currentQuestion = questionArray[q].q;
  currentAnswer = questionArray[a].a;
  displayCurrentQuestion();
  showElement(answerButtonsEl);
  currentScore = 0;
  displayCurrentScore();
  hideElement(initiateGameEl);
}
function restartGame() {
  location.reload(true);
}

function buttonPress(answer) {
  if (currentAnswer === answer) {
    currentScore++;
    displayCurrentScore();
  }
  if (q < questionArray.length - 1) {
    q++;
    a++;
    currentQuestion = questionArray[q].q;
    currentAnswer = questionArray[a].a;
    displayCurrentQuestion();
  } else {
    hideElement(answerButtonsEl);
    hideElement(currentQuestionEl);
    showElement(restartGameEl);
  }
}

//Runs when the page is loaded
hideElement(answerButtonsEl);
hideElement(restartGameEl);
