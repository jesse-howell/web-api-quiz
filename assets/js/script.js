// initializers
// updated initializer names
// removed some initializers
// changed initializer names
// added startButton and quizButton var
// removed quizButton var, added answerButton and submitButton vars
var startPage = document.querySelector('.start');
var quizPage = document.querySelector('.quiz');
var scorePage = document.querySelector('.score');
var startButton = document.querySelector("#start_btn");
var answerButton = document.querySelector("#correct");
var submitButton = document.querySelector("#submit");

// if statements
// added functions
// fixed broken functions
function showStart() {
    startPage.style.display = null;
    quizPage.style.display = "none";
    scorePage.style.display = "none";

}

function showQuiz() {
    startPage.style.display = "none";
    quizPage.style.display = null;
    scorePage.style.display = "none";
 
}

function showScore() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = null;
    
}
// added startButton eventlistener
// added answer and submit EventListeners
startButton.addEventListener("click", showQuiz); 
answerButton.addEventListener("click" , showScore);
submitButton.addEventListener("click" , showStart);




function init() {
showStart();
}

init();
