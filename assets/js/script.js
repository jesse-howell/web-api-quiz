// initializers
// updated initializer names
// removed some initializers
// changed initializer names
// added startButton and quizButton var
// removed quizButton var, added answerButton and submitButton vars
// added question vars
// changed question var querySelectors to #question
// added timerEl and timeLeft vars
var startPage = document.querySelector('.start');
var quizPage = document.querySelector('.quiz');
var scorePage = document.querySelector('.score');
var firstQuestion = document.querySelector("#question-one");
var secondQuestion = document.querySelector("#question-two");
var thirdQuestion = document.querySelector("#question-three");
var fourthQuestion = document.querySelector("#question-four")
var startButton = document.querySelector("#start_btn");
var submitButton = document.querySelector("#submit");
var timerEl = document.getElementById("timer");
var timeLeft = 60;
var score = 0;

// if statements
// added functions
// fixed broken functions
function showStart() {
    startPage.style.display = null;
    quizPage.style.display = "none";
    scorePage.style.display = "none";

}


// added functions for timer
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = time % 60;
  
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
  
    return minutes + ":" + seconds;
  }

function updateTimer() {
    timeLeft--;
    if (timeLeft >= 0) {
      // Clear the interval and display a message
      timerEl.innerHTML = formatTime(timeLeft);
    } else {
      clearInterval(timerInterval);
      timerEl.innerHTML = "Time's up!";
    }
  }
  var timerInterval = setInterval(updateTimer, 1000);

// removed showQuestion functions
// added quizPage event listener, var answer event.target and if else statements for the questions
function showQuiz() {
    startPage.style.display = "none";
    quizPage.style.display = null;
    firstQuestion.style.display = "block";
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = "none";
    scorePage.style.display = "none";
    quizPage.addEventListener("click", function(event) {
     var answer = event.target
     if (answer.matches(".answer")) {
        if (firstQuestion.style.display === "block") {
            firstQuestion.style.display = "none";
            secondQuestion.style.display = "block";    
        } else if (secondQuestion.style.display === "block") {
                    secondQuestion.style.display = "none";
                    thirdQuestion.style.display = "block";
                
        } else if (thirdQuestion.style.display === "block") {
                    thirdQuestion.style.display = "none";
                    fourthQuestion.style.display = "block";
        } else if (fourthQuestion.style.display === "block") {
                    fourthQuestion.style.display = "none";
                    showScore();
        }

     }
    })
}

function showScore() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = null;
    
}
// added startButton eventlistener
// added answer and submit EventListeners
startButton.addEventListener("click", showQuiz); 
submitButton.addEventListener("click", showScore);

function init() {
showStart();
}

init();
