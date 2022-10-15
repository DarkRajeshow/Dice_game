let player1 = "Player 1";
let player2 = "Player 2";

function changename() {

    a = prompt("Enter Player 1 Name :");
    b = prompt("Enter Player 1 Name :");

    if (a == null || b == null) {
        document.querySelector(".pl1").innerHTML = player1;
        document.querySelector(".pl2").innerHTML = player2;
    }

    else{
        document.querySelector(".pl1").innerHTML = a;
        document.querySelector(".pl2").innerHTML = b;
        player1 = a;
        player2 = b;
    }
}

function play() {
    let randomnumber1 = Math.floor(Math.random() * 6) + 1;
    let randomnumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".dicc1").setAttribute("src", `images/dice${randomnumber1}.png`);
    document.querySelector(".dicc2").setAttribute("src", `images/dice${randomnumber2}.png`);

    if (randomnumber1 > randomnumber2) {
        document.querySelector("h1").innerHTML = `${player1} Wins 🚩`
    }

    else if (randomnumber1 < randomnumber2) {
        document.querySelector("h1").innerHTML = `🚩 ${player2} Wins `
    }

    else {
        document.querySelector("h1").innerHTML = "!! Draw !!"
    }
}

function mouseout() {
    document.querySelector("body").style.transition = "1s";
}