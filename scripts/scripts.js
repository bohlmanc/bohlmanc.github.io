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
    if (gameBoard.getAttribute("backgroundColor") === "dimgray") {
        gameBoard.setAttribute("backgroundColor", "yellow");
        gameBoard.style.backgroundColor = gameBoard.getAttribute("backgroundColor");

    } else {
        gameBoard.setAttribute("backgroundColor", "dimgray");
        gameBoard.style.backgroundColor = gameBoard.getAttribute("backgroundColor");

    }
}

function hello(num) {
    confirm("" + num + " hours!");
}

var data = {
    codyHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    momHours: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
    dadHours: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
};

function addCell() {
    var user = document.getElementById("curUser");
    var newChild = document.createElement("td");
    var numHours = parseInt(prompt("Enter the number of hours"));
    var p = document.getElementById("test");
    var nextNum = user.childElementCount;
    p.setAttribute("style", "color:#32CD32");
    newChild.setAttribute("id", "cell" + nextNum + "");
    newChild.setAttribute("onclick", "removeCell(cell" + nextNum + ")");
    newChild.setAttribute("onmouseover", "myanimate(true,cell" + nextNum + ")");
    newChild.setAttribute("onmouseout", "myanimate(false,cell" + nextNum + ")");
    p.innerHTML = "HOURS ADDED";
    newChild.innerHTML = numHours;
    user.appendChild(newChild);
}

function showCodyHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var codyTr = document.createElement("tr");
    var p = document.getElementById("test");
    p.innerHTML = "Cody's Hours";
    p.setAttribute("style", "color:white");
    for (var i = 0; i < data.codyHours.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.codyHours[i];
        newTd.setAttribute("id", "cell" + i + "");
        newTd.setAttribute("onclick", "removeCell(cell" + i + ")");
        newTd.setAttribute("onmouseover", "myanimate(true,cell" + i + ")");
        newTd.setAttribute("onmouseout", "myanimate(false,cell" + i + ")");
        codyTr.appendChild(newTd);
    }
    codyTr.setAttribute("id", "curUser");
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
    p.setAttribute("style", "color:white");
    for (var i = 0; i < data.momHours.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.momHours[i];
        newTd.setAttribute("id", "cell" + i + "");
        newTd.setAttribute("onclick", "removeCell(cell" + i + ")");
        newTd.setAttribute("onmouseover", "myanimate(true,cell" + i + ")");
        newTd.setAttribute("onmouseout", "myanimate(false,cell" + i + ")");
        momTr.appendChild(newTd);
    }
    momTr.setAttribute("id", "curUser");
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
    p.setAttribute("style", "color:white");
    for (var i = 0; i < data.dadHours.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += data.dadHours[i];
        newTd.setAttribute("id", "cell" + i + "");
        newTd.setAttribute("onclick", "removeCell(cell" + i + ")");
        newTd.setAttribute("onmouseover", "myanimate(true,cell" + i + ")");
        newTd.setAttribute("onmouseout", "myanimate(false,cell" + i + ")");
        dadTr.appendChild(newTd);
    }
    dadTr.setAttribute("id", "curUser");
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
    p.setAttribute("style", "color:white");
}

function removeCell(id) {
    var table = document.getElementById("curUser");
    table.removeChild(id);
}

function myanimate(bool, id) {
    var table = document.getElementById("scores");
    if (bool) {
        id.setAttribute("style", "background-color: red");
    } else {
        id.setAttribute("style", "background-color: dimgray");
    }
}
