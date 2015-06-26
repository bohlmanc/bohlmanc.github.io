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

var data = {
    codyHours: [1,2,3,4,5,6,7,8,9,10],
    momHours: [10,9,8,7,6,5,4,3,2,1],
    dadHours: [5,5,5,5,5,5,5,5,5,5]
};

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
    //data[name].append(numHours);
}

function showCodyHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var codyTr = document.createElement("tr");
    var p = document.getElementById("test");
    p.innerHTML = "Cody's Hours";
    p.setAttribute("style","color:white");
    for(var i = 0;i<data.codyHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.codyHours[i];
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
    for(var i = 0;i<data.momHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.momHours[i];
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
    for(var i = 0;i<data.dadHours.length;i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.dadHours[i];
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