//Rock-Paper-Scissor Logic

function game(user,computer) {
    if(user === computer) return "Draw";
    if(user === "rock" && computer === "scissor") return "User wins";
    if(user === "paper" && computer === "rock") return "User wins";
    if(user === "scissor" && computer === "paper") return "User wins";
    else return "Computer wins!";
}

console.log(game("scissor","rock"));