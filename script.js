var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var randomnumber = Math.floor(Math.random() * 10) + 1
var score = document.getElementById("score")
var totalscore = 10
//console.log(randomnumber)

function check() {
    var enterednumber = guessnumber.value
    if (enterednumber == randomnumber) {
        result.textContent = "Right"
        console.log("Right")
        alert("You Won...!!")
    } else {
        totalscore = totalscore - 1
        score.textContent = "score:" + totalscore
        result.textContent = "wrong"
        console.log("Wrong")
    }
}