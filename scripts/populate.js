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

function main() {
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


        var description = document.createElement("p");
        description.innerHTML = descriptions[i];
        description.setAttribute("style", "font-size:16px ");
        description.setAttribute("id", "description" + i + "");

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

main();
