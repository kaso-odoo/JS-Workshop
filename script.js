var randomNumber = Math.floor(Math.random() * 10) + 1;
var attempts = 0;

function checkNumber() {
    var number = parseInt(document.getElementById("input").value);
    attempts++;

    if (isNaN(number) || number < 1 || number > 10) {
        document.getElementById("result").innerHTML = "Please enter a valid number between 1 and 10.";
        return;
    }

    if (number > randomNumber) {
        document.getElementById("result").innerHTML = "HIGH";
        document.getElementById("result").style.color = "red";
    } else if (number < randomNumber) {
        document.getElementById("result").innerHTML = "LOW";
        document.getElementById("result").style.color = "red";
    } else {
        document.getElementById("result").innerHTML = "CORRECT GUESS - " + attempts + " Trials";
        document.getElementById("result").style.color = "green";
    }
}