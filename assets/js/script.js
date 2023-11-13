// initializers
// updated initializer names
// removed some initializers
// changed initializer names
// added startButton and quizButton var
// removed quizButton var, added answerButton and submitButton vars
// added question vars
var startPage = document.querySelector('.start');
var quizPage = document.querySelector('.quiz');
var scorePage = document.querySelector('.score');
var firstQuestion = document.querySelector("#correct");
var secondQuestion = document.querySelector("#correct");
var thirdQuestion = document.querySelector("#correct");
var fourthQuestion = document.querySelector("#correct")
var startButton = document.querySelector("#start_btn");
// var answerButton = document.querySelector("#correct");
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
// added showQuestion functions
function showfirstQuestion() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = "none";
    firstQuestion.style.display = null;
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = "none";
}

function showsecondQuestion() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = "none";
    firstQuestion.style.display = "none";
    secondQuestion.style.display = null;
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = "none";
}

function showthirdQuestion() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = "none";
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = null;
    fourthQuestion.style.display = "none";
}

function showfourthQuestion() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = "none";
    firstQuestion.style.display = "none";
    secondQuestion.style.display = "none";
    thirdQuestion.style.display = "none";
    fourthQuestion.style.display = null;
}


function showScore() {
    startPage.style.display = "none";
    quizPage.style.display = "none";
    scorePage.style.display = null;
    
}
// added startButton eventlistener
// added answer and submit EventListeners
startButton.addEventListener("click" , "clicked" , showQuiz); 
// firstQuestion.addEventListener("click" , function(event) {
//     var correctAnswer = "C. Application Programming Interface";
//     event.correctAnswer.addEventListener(event , correctAnswer);
// });

submitButton.addEventListener("click" , showStart);




function init() {
showStart();
}

init();
