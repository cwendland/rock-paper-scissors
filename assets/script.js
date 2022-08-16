var wins = 0;
var losses = 0;
var matchesPlayed = 0;


function playGame(player) {
    return;
}

alert("Lets play rock paper scissors, type [R, P, or S] to confirm your choice.")

while(1 != 0){
    var playerChoice = prompt("What is your choice?");

    if(!window.confirm("Wins:" + wins + "\nLosses: " + losses + "\nMatches Played: " + matchesPlayed + "\n\nDo you want to play again?")){
        break;
    }
}


