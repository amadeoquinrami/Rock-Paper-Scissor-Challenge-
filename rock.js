
function playGame() {
    let userChoice = document.getElementById("userInput").value.toLowerCase();

    const choices = ["rock", "paper", "scissors"];


    if (!choices.includes(userChoice)) {
        document.getElementById("result").innerText = 
            `Error! Type: Rock, Paper or Scissors.`;
        return; 
    }
    
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computerChoice)  {
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




