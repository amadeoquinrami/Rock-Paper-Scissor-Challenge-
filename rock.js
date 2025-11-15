
function playGame() {
    let userChoice = document.getElementById("userInput").value.toLowerCase();

    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").innerText =
        `You chose: ${userChoice}
Computer chose: ${computerChoice}
${result}`;
}






// document.getElementById("result").innerText = 
// "You chose: " + userChoice + "\n" +
// "Computer chose: " + computerChoice + "\n" +
// result;

