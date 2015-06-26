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

function hello() {
    confirm("You pressed the table!");   
}

var codyHours = [1,2,3,4,5,6,7,8,9,10];
var momHours = [10,9,8,7,6,5,4,3,2,1];
var dadHours = [5,5,5,5,5,5,5,5,5,5];

function addCell() {
    var user = document.getElementById("curUser");
    var newChild = document.createElement("td");
    var newCell = document.createElement("tr");
    var numHours = parseInt(prompt("Enter the number of hours"));
    var p = document.getElementById("test");
    p.setAttribute("style","color:#32CD32");
    p.innerHTML = "HOURS ADDED";
    newCell.innerHTML = numHours;
    newChild.appendChild(newCell);
    user.appendChild(newChild);
    
}

function showCodyHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var codyTr = document.createElement("tr");
    var p = document.getElementById("test");
    p.innerHTML = "Cody's Hours";
    p.setAttribute("style","color:white");
    for(var i = 0;i<codyHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += codyHours[i];
        codyTr.appendChild(newTd);
    }
    codyTr.setAttribute("id","curUser");
    table.appendChild(codyTr);
}

function showMomHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var label = document.createElement("tr");
    label.innerHTML = "Mom's Hours";
    var momTr = document.createElement("tr");
    var p = document.getElementById("test");
    p.innerHTML = "Mom's Hours";
    p.setAttribute("style","color:white");
    for(var i = 0;i<momHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += momHours[i];
        momTr.appendChild(newTd);
    }
    momTr.setAttribute("id","curUser");
    table.appendChild(momTr);
}

function showDadHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var label = document.createElement("tr");
    label.innerHTML = "Dad's Hours";
    var dadTr = document.createElement("tr");
    var p = document.getElementById("test");
    p.innerHTML = "Dad's Hours";
    p.setAttribute("style","color:white");
    for(var i = 0;i<dadHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += dadHours[i];
        dadTr.appendChild(newTd);
    }
    dadTr.setAttribute("id","curUser");
    table.appendChild(dadTr);
}

function clearHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var label = document.createElement("tr");
    label.innerHTML = "No hours";
    table.appendChild(label);
    var p = document.getElementById("test");
    p.innerHTML = "Hours cleared";
    p.setAttribute("style","color:white");
}