/*
*   author: Wieb MG1A
*/

const question = document.querySelector('.question_output');
const answer = document.querySelector('.answer');
const img = document.querySelector('img');
let num1;
let num2;
let correctAnswer;

// right and wrong answer output & input
const output_exercise = document.querySelector('.exercise');
const output_correct = document.querySelector('.correct');
const output_wrong = document.querySelector('.wrong');
let exercise = 0;
let correct = 0;
let wrong = 0;

const output_time = document.querySelector('.time');
let time = 0;

// sounds
let sound = new Audio();

document.addEventListener('keyup', function(e) {
    let key = e.which || e.keyCode;
    if (key === 13) { // check if 'enter' is pressed
        checkInput();
    }
});

function newQuestion() { // create new question
    let i = 0;
    let x = setInterval(function() {
        i++;

        num1 = Math.floor(Math.random() * 10 + 1);
        num2 = Math.floor(Math.random() * 10 + 1);
        question.innerHTML = num1 + " x " + num2; // show question

        if (i >= 4) {
            num1 = Math.floor(Math.random() * 10 + 1);
            num2 = Math.floor(Math.random() * 10 + 1);

            correctAnswer = num1 * num2; // create answer

            question.innerHTML = num1 + " x " + num2;
            clearInterval(x);
        }
    }, 100);
}

function checkInput() {
    if (answer.value != '') {
        if (correctAnswer == parseInt(answer.value)) {
            addCorrect();
        } else {
            addWrong();
        }
        addExercise();
    }

    answer.value = '';
}

function addCorrect() {
    clearTimeout(x);
    correct += 1;
    output_correct.innerHTML = correct;
    img.src = '';
    img.src = "https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.phonebrain.org.uk%2Fassets%2Fimg%2Fquiz%2Fcorrect-male.png&f=1";
    showTime();
    sound.src = "correctSound.mp3";
    sound.play();
    resetTimer();
    var x = setTimeout(function() {
        img.src="";
        newQuestion();
    }, 1000);
}

function addWrong() {
    clearTimeout(x);
    wrong += 1;
    output_wrong.innerHTML = wrong;
    img.src = '';
    img.src = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.shareicon.net%2Fdata%2F2016%2F08%2F20%2F817729_close_395x512.png&f=1";
    showTime();
    sound.src = "wrongSound.mp3";
    sound.play();
    resetTimer();
    var x = setTimeout(function() {
        img.src="";
        newQuestion();
    }, 1000);
}

function addExercise() {
    exercise += 1;
    output_exercise.innerHTML = exercise;
}

function showTime() {
    output_time.innerHTML = time + "s over de som gedaan";
}


// timer
var t = setInterval(function() {
    time += 1;
    console.log(time);
},1000);

function resetTimer() {
    time = -1;
}

newQuestion();