function myFunction() {  
    document.getElementById("output").innerHTML = ""
    var willPlay = confirm("Would you like to play?")

    if( willPlay) {
        var age = prompt("Ok, what's your age?")
        var string = "";
        document.getElementById("output").innerHTML += "You are " + age + "\n"

        var userAnswer = prompt("Do you want to race Bieber on stage?")
        if(prompt === "yes"){
            document.getElementById("output").innerHTML += "You raced Bieber!" + "\n"
        }
        else {
        }

        var feedback = prompt("How would you rate this game? (Out of 10)")
        if(feedback > 8) {
            document.getElementById("output").innerHTML += "\n\nThanks for playing!"
        }
        else {
            document.getElementById("output").innerHTML += "\n\nOk, I'll keep working on it!"
        }

    }
}
        
function clearText() {
    document.getElementById("output").innerHTML = "";
}

function myOtherFunction() {
    var square = document.getElementById("myCanvas");
    square.style.background = "blue";
    square.style.visibility = "visible";
}
function removeSquare() {
    var square = document.getElementById("myCanvas");
    square.style.background = "dimgray";
    square.style.visibility = "invisible";
}

function playGame() {
    var gameBoard = document.getElementById("game");
    if(gameBoard.getAttribute("backgroundColor") === "dimgray") {
        //confirm("Changing color ");
        gameBoard.setAttribute("backgroundColor","yellow");   
        gameBoard.style.backgroundColor = gameBoard.getAttribute("backgroundColor");

    }
    else {
        //confirm("Other color");
        gameBoard.setAttribute("backgroundColor","dimgray"); 
        gameBoard.style.backgroundColor = gameBoard.getAttribute("backgroundColor");

    }
}