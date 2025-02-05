let user_score = 0;
let comp_score = 0;

const choices = document.querySelectorAll(".choice");
const userScorePara = document.querySelector("#userScore");
const compScorePara = document.querySelector("#compScore");
const msgPara = document.querySelector("#msg");

function genCompChoice(){
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

function drawGame(){
    msgPara.innerText = "It's Draw";
}
function resetGame() {
    user_score = 0;
    comp_score = 0;
    userScorePara.innerText = "0";
    compScorePara.innerText = "0";
    msgPara.innerText = "Play A Move";
    msgPara.style.backgroundColor = "black";
}

function playGame(user_choice){
    const comp_choice = genCompChoice();
    let userWin = true;
        if(user_choice === comp_choice){
            drawGame();
        }else{
            if(user_choice === "rock"){
               userWin = comp_choice == "paper" ? false : true;
            }else if(user_choice === "paper"){
               userWin = comp_choice == "scissor" ? false : true;
            }else{
               userWin = comp_choice == "rock" ? false : true;
            }
        }
    if(userWin == true){
        user_score++;
        userScorePara.innerText = user_score;
        msgPara.innerText = `You win !! your ${user_choice} beats ${comp_choice}`;
        msgPara.style.backgroundColor = "Green";
    }else{
        comp_score++;
        compScorePara.innerText = comp_score;
        msgPara.innerText = `You lost !! ${comp_choice} beats your ${user_choice}`;
        msgPara.style.backgroundColor = "red";
    }
    
    if (user_score === 10) {
        msgPara.innerText = `You win !! your ${user_choice} beats ${comp_choice}`;
        msgPara.style.backgroundColor = "Green";
        alert("Congratulations! You won the game!");
        resetGame();
    } else if (comp_score === 10) {
        msgPara.innerText = `You lost !! ${comp_choice} beats your ${user_choice}`;
        msgPara.style.backgroundColor = "red";
        alert("Game over! The computer won.");
        resetGame();
    }
}




choices.forEach((choice) => {
    choice.addEventListener("click",() =>{
        const user_choice = choice.getAttribute("id");
        console.log(`${user_choice} is clicked`);
        const comp_choice = genCompChoice();
        console.log(`${comp_choice} is computer choice`);
        playGame(user_choice);
    })
});