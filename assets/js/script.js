// initializers
// updated initializer names
// removed some initializers
var startEl = document.querySelector('.start');
var quizEl = document.querySelector("quiz");
var mainEl = document.querySelector("main");

// if statements
// added functions
function showStart() {
    startEl.style.display = null;
    quizEl.style.display = none;
    submitEl.style.display = none;

}

function showQuiz() {
    startEl.style.display = none;
    quizEl.style.display = null;
    submitEl.style.display = none;
    
}

function showSubmit() {
    startEl.style.display = none;
    quizEl.style.display = none;
    submitEl.style.display = null;
    
}

    
    

 

// removed eventlisteners

function init() {
showStart();

}

init()
