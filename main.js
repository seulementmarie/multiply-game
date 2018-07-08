var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var score = document.getElementById("score");
var result = document.getElementById("result");
var currentScore = 0;
var val1 = 0;
var val2 = 0;
var timerId;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function decreaseScore() {
    currentScore = currentScore>0 ? --currentScore : 0;
    score.innerHTML = currentScore;
    play();
}

function play() {
    result.value = "";
    val1 = getRandomInt(0, 10);
    num1.innerHTML = val1;
    val2 = getRandomInt(0, 10);
    num2.innerHTML = val2;
    timerId = setTimeout(decreaseScore, 4000);
}

function checkResult(value) {
    clearTimeout(timerId);
    if (val1*val2 === value)
        ++currentScore;
    else
        decreaseScore(currentScore);
    score.innerHTML = currentScore;
    play();
}

result.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        checkResult(+event.target.value);
    }
})

play();
