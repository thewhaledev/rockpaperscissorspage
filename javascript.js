function rock() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    let tabcontent = document.getElementsByClassName("result-image");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
    };

    document.getElementById("result-text").style.color = "black";

    if (computerChoice == 1) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("rock-image").style.display = "block";
        document.getElementById("result-text").innerHTML = "It's a draw!";
    } else if (computerChoice == 2) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("paper-image").style.display = "block";
        document.getElementById("result-text").style.color = "red";
        document.getElementById("result-text").innerHTML = "You lose!";
    } else {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("scissors-image").style.display = "block";
        document.getElementById("result-text").style.color = "green";
        document.getElementById("result-text").innerHTML = "You win!";
    };
};
function paper() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    let tabcontent = document.getElementsByClassName("result-image");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
    };

    document.getElementById("result-text").style.color = "black";
    
    if (computerChoice == 1) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("rock-image").style.display = "block";
        document.getElementById("result-text").style.color = "green";
        document.getElementById("result-text").innerHTML = "You win!";
    } else if (computerChoice == 2) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("paper-image").style.display = "block";
        document.getElementById("result-text").innerHTML = "It's a draw!";
    } else {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("scissors-image").style.display = "block";
        document.getElementById("result-text").style.color = "red";
        document.getElementById("result-text").innerHTML = "You lose!";
    };
};
function scissors() {
    let computerChoice = Math.floor(Math.random() * (3 - 1 + 1) + 1);

    let tabcontent = document.getElementsByClassName("result-image");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
    };

    document.getElementById("result-text").style.color = "black";
    
    if (computerChoice == 1) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("rock-image").style.display = "block";
        document.getElementById("result-text").style.color = "red";
        document.getElementById("result-text").innerHTML = "You lose!";
    } else if (computerChoice == 2) {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("paper-image").style.display = "block";
        document.getElementById("result-text").style.color = "green";
        document.getElementById("result-text").innerHTML = "You win!";
    } else {
        document.getElementById("statement").innerHTML = "The Computer chooses:";
        document.getElementById("scissors-image").style.display = "block";
        document.getElementById("result-text").innerHTML = "It's a draw!";
    };
};