// initializers
// updated initializer names
// removed some initializers
// changed initializer names
// added startButton and quizButton var
// removed quizButton var, added answerButton and submitButton vars
// added question vars
// changed question var querySelectors to #question
var startPage = document.querySelector('.start');
var quizPage = document.querySelector('.quiz');
var scorePage = document.querySelector('.score');
var firstQuestion = document.querySelector("#question-one");
var secondQuestion = document.querySelector("#question-two");
var thirdQuestion = document.querySelector("#question-three");
var fourthQuestion = document.querySelector("#question-four")
var startButton = document.querySelector("#start_btn");
var submitButton = document.querySelector("#submit");

// if statements
// added functions
// fixed broken functions
function showStart() {
    startPage.style.display = null;
    quizPage.style.display = "none";
    scorePage.style.display = "none";

}
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
