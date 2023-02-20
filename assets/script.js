var result;

var wins = 0;
var loses = 0;
var ties = 0;

var options = ["Rock", "Paper", "Scissors"];

while (confirm) {
    let player = prompt("Rock, Paper, Scissors! Type R, P, or S!");

    let comp = options[Math.floor(Math.random() * options.length)];

    if (player.toLowerCase() === "r") {
        alert("You have chosen Rock. The computer chose " + comp + ".");
    } else if (player.toLowerCase() === "s") {
        alert("You have chosen Scissors. The computer chose " + comp + ".");
    } else if (player.toLowerCase() === "p") {
        alert("You have chosen Paper. The computer chose " + comp + ".");
    } else {
        alert("Hey, no cheating! Only rock, paper, and scissors are acceptable choices here.")
    }

    if (player.toLowerCase() === "r" && comp === "Rock") {
        result = "tie";
    } else if (player.toLowerCase() === "r" && comp === "Scissors") {
        result = "win";
    } else if (player.toLowerCase() === "r" && comp === "Paper") {
        result = "lose";
    } else if (player.toLowerCase() === "s" && comp === "Rock") {
        result = "lose";
    } else if (player.toLowerCase() === "s" && comp === "Scissors") {
        result = "tie";
    } else if (player.toLowerCase() === "s" && comp === "Paper") {
        result = "win";
    } else if (player.toLowerCase() === "p" && comp === "Rock") {
        result = "win";
    } else if (player.toLowerCase() === "p" && comp === "Scissors") {
        result = "lose";
    } else if (player.toLowerCase() === "p" && comp === "Paper") {
        result = "tie";
    } else {
        result = "null";
    }

    if (result === "tie") {
        alert("It's a draw!");
        ties++;
    } else if (result === "win") {
        alert("You win!");
        wins++;
    } else if (result === "lose") {
        alert("You lose.");
        loses++
    }

    alert("Stats:\nWins: " + wins + "\nLoses: " + loses + "\nTies: " + ties)

    confirm("Would you like to play again?");
}
