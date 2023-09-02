let stats = {
    correct: 0,
    total: 0
};

const correct = document.getElementById("correct-audio");
const wrong = document.getElementById("wrong-audio");
let operator = sessionStorage.getItem('operator')
let actualResult = 0;

setTask()

document.getElementById('operator').innerText = operator

let seconds = 20;
setInterval(function() {
    if(seconds != 1) {
        seconds--
        document.getElementById('timer').innerText = seconds + 's'
    } else {
        checkHighscore()
        document.getElementById('stats').innerText = `${stats.correct} out of ${stats.total} correct!`
        document.getElementById('timer').innerText = 'Finish!'
        clearInterval()
    }
}, 1000)

const inputField = document.getElementById('input-field')

inputField.addEventListener('keypress', (event) => {
    if(event.keyCode === 13) {
        let userResult = parseInt(document.getElementById("input-field").value)

        if(userResult === actualResult) {
            stats.correct++
            stats.total++
            correct.play()
            console.log("correct")
        } else {
            wrong.play()
            stats.total++
            console.log("wrong")
        }

        document.getElementById("input-field").value = ""

        setTask()

        console.log(userResult)
    }
})

function generateNumber(from, to) {
    return Math.round(Math.random() *to + from);
}

function setTask() {
   let x = generateNumber(1, 20)
   let y = generateNumber(1, 20)

   document.getElementById("operand-one").innerText = x
   document.getElementById("operand-two").innerText = y

    if(operator === "+") {
        actualResult = x + y
    } else if(operator === "-") {
        actualResult = x - y
    } else if(operator === "*") {
        actualResult = x * y
    }
}

function reset() {
    userResult = 0;
    actualResult = 0;
}

const backBtn = document.getElementById("back-btn")

backBtn.addEventListener("click", (event) => {
    window.location.href = 'landingpage.html';
})

function checkHighscore() {
    let currentHighscore = parseInt(sessionStorage.getItem("highscore"))

    if(stats.correct > currentHighscore) {
        sessionStorage.setItem("highscore", stats.correct)
        document.getElementById("highscore").innerText = `New Highscore of ${stats.correct}!`
    } else {
        document.getElementById("highscore").innerText = `No new highscore.`
    }
}