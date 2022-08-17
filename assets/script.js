var wins = 0;
var losses = 0;
var ties = 0;
var matchesPlayed = 0;
var playChoice;
var choices = ["R", "P", "S"]
var computer;

function playerWins () {
    wins++;
    matchesPlayed++;
    alert("Computer chooses: " + computer + "\n" + "You win!");
    return;
}


function playGame(player) {
    computer = choices[Math.floor(Math.random()*choices.length)];
    if (computer === player) {
        ties++;
        matchesPlayed++;
        alert("Computer chooses: " + computer + "\n" + "There's a tie.")
    }
    else if (player === "R" && computer === "S") {
        playerWins(computer);
    } else if (player === "P" && computer === "R"){
        playerWins(computer);
    } else if (player === "S" && computer === "P"){
        playerWins(computer);
    } else {
        losses++;
        matchesPlayed++;
        alert("Computer chooses: " + computer + "\n" + "You lose.");
    }
    return;
}

function playerPrompt() {
    var playerChoice = prompt("What is your choice?").toUpperCase();
    console.log(playerChoice);
    if (playerChoice == "R" || playerChoice == "P" || playerChoice  == "S"){
        return playerChoice;
    }
    else {
        alert("Invalid choice. Choose R, P, or S.");
        playerPrompt();
    }
}

alert("Lets play rock paper scissors, type [R, P, or S] to confirm your choice.")

while(1 != 0){
    playChoice = playerPrompt();
    playGame(playChoice);

    if(!window.confirm("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties + "\nMatches Played: " + matchesPlayed + "\n\nDo you want to play again?")){
        break;
    }
}


