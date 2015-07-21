"use strict";

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

var mydata = {
    codyHours: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
};

function addCell() {
    var user = document.getElementById("curUser"), newChild = document.createElement("td");
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
    for (var i = 0; i < mydata.codyHours.length; i++) {
        var newTd = document.createElement("td");
        newTd.innerHTML += mydata.codyHours[i];
        newTd.setAttribute("id", "cell" + i + "");
        newTd.setAttribute("onclick", "removeCell(cell" + i + ")");
        newTd.setAttribute("onmouseover", "myanimate(true,cell" + i + ")");
        newTd.setAttribute("onmouseout", "myanimate(false,cell" + i + ")");
        codyTr.appendChild(newTd);
    }
    codyTr.setAttribute("id", "curUser");
    table.appendChild(codyTr);
}

function reset() {
    showCodyHours();
    document.getElementById("test").innerHTML = "Hours Reset";
}

function clearHours() {
    var table = document.getElementById("scores");
    table.innerHTML = "";
    var child = document.createElement("tr");
    child.setAttribute("id", "curUser");
    table.appendChild(child);
    //var label = document.createElement("tr");
    //label.innerHTML = "Hours Cleared";
    //table.appendChild(label);
    var p = document.getElementById("test");
    p.innerHTML = "Hours cleared";
    p.setAttribute("style", "color:white");
}

function removeCell(id) {
    var table = document.getElementById("curUser");
    document.getElementById("test").innerHTML = id.innerHTML + " was removed.";
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


var data = {
    myData: [
        ["Cody Bohlman", true, "The son"],
        ["Oliver Bohlman", true, "The father"],
        ["Michelle Bohlman", false, "The mother"],
        ["Cody Bohlman", true, "The son"],
        ["Oliver Bohlman", true, "The father"],
        ["Michelle Bohlman", false, "The mother"]
    ],
    getNames: function () {
        var names = [];
        for (var i = 0; i < this.myData.length; i++) {
            console.log("Hi");
            names.push(this.myData[i][0]);
        }
        return names;
    },
    getGenders: function () {
        var genders = [];
        for (var i = 0; i < this.myData.length; i++) {
            genders.push(this.myData[i][1]);
        }
        return genders;
    },
    getDescriptions: function () {
        var descriptions = [];
        for (var i = 0; i < this.myData.length; i++) {
            descriptions.push(this.myData[i][2]);
        }
        return descriptions;
    }

}

function getId(name) {
    return document.getElementById(name);
}

function promptNumRows() {
    var num = prompt("How many rows would you like?", "Enter a positive integer");
    return num;
}

function depopulate() {
    var table = document.getElementById("list");
    table.removeAttribute("title");
    table.innerHTML = "<script src=\"scripts/scripts.js\">main()</script>\n<button onclick=\"depopulate()\">Depopulate</button>";
}

function main() {
    if (document.getElementById("list").hasAttribute("title")) {

    } else {
        document.getElementById("list").setAttribute("title", "grid");
        var rowNum = data.getNames().length;
        var names = data.getNames();
        var genders = data.getGenders();
        var descriptions = data.getDescriptions();
        for (var i = 0; i < rowNum; i++) {
            var name = document.createElement("p");
            name.innerHTML = names[i];
            if (genders[i]) {
                name.innerHTML += ": Male";
            } else {
                name.innerHTML += ": Female";
            }
            name.setAttribute("style", "color: white;");
            name.setAttribute("id", "title" + i + "");
            name.setAttribute("class", "bodyText");


            var description = document.createElement("p");
            description.innerHTML = descriptions[i];
            description.setAttribute("style", "font-size:16px ");
            description.setAttribute("id", "description" + i + "");
            description.setAttribute("class", "tableText");

            var textContainer = document.createElement("div");
            textContainer.setAttribute("id", "textContainer" + i + "");
            textContainer.setAttribute("style", "margin-left:15px;margin-right:15px;background:transparent");

            var descriptionContainer = document.createElement("div");
            descriptionContainer.setAttribute("id", "descriptionContainer" + i + "");
            descriptionContainer.setAttribute("style", "margin-left:15px;margin-right:15px;background:transparent;height:inherit;width:inherit");

            if (i > 0) {
                var lineBreak = document.createElement("hr");
                getId("list").appendChild(lineBreak);
            }

            getId("list").appendChild(textContainer);
            getId("list").appendChild(descriptionContainer);

            getId("textContainer" + i + "").appendChild(name);
            getId("descriptionContainer" + i + "").appendChild(description);
        }
    }

}

function test1() {
    var data1 = {
        first: "Cody",
        last: "Bohlman",
        age: 20,
        address: {
            street: "42 Climbing Vine",
            city: "Irvine",
            state: "California",
            zip: "92603"
        }
    }
    var s = "Name: " + "\n" + data1.first + " " + data1.last + "\n\nAddress: \n" + data1.address.street + "\n" + data1.address.city + ", " + data1.address.state + " " + data1.address.zip; 
    alert(s);
}

main();
