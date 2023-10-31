var wins = 0;
var ties = 0;
var losses = 0;
var options = ["R", "P", "S"];

var playGame = function () {
    var userChoice = window.prompt("Enter R, P, or S to play.");
    if (!userChoice) {
        return;
    };

    userChoice = userChoice.toUpperCase();
    var index = Math.floor(Math.random() * options.length);
    var computerChoice = options(index);

    window.alert("The computer chose " + computerChoice);

    // Player ties

    if (userChoice == computerChoice) {
        ties ++;
        window.alert("It's a tie!");
    } else if (
        // Player Wins
        userChoice === "R" && computerChoice === "S" ||
        userChoice === "S" && computerChoice === "P" ||
        userChoice === "P" && computerChoice === "R"
        ) {
            wins ++;
            window.alert("You Win!");
    } else {
        // Player Loses
        losses ++;
        window.alert("You Lost!");
    }
    window.alert(
        "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
    );

    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        function playGame();
    }
};





function playGame();