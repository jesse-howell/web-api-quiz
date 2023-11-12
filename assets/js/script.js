// initializers
// updated initializer names
// removed some initializers
// changed initializer names
var startPage = document.querySelector('.start');
var quizPage = document.querySelector('.quiz');
var scorePage = document.querySelector('.score');

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

    
    

 

// removed eventlisteners

function init() {

}

init();
