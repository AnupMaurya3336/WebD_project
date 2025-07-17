let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () => {
    console.log("game was draw."); //console me dikhega ise hata de to bhi koi problem nhi hoga
    msg.innerText="Game was Draw. Play again.";
    msg.style.backgroundColor="#081b31   ";

}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win!"); //console me dikhega ise hata de to bhi koi problem nhi hoga
        msg.innerText=`you win! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScorepara.innerText=compScore;
        console.log("you lose"); //console me dikhega ise hata de to bhi koi problem nhi hoga
        msg.innerText=`you lose. ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor="red";
    }
}

const playGame = (userChoice) => {
    console.log("user choise=", userChoice); //console me dikhega ise hata de to bhi koi problem nhi hoga

    const compChoice = genComputerChoice();
    console.log("comp choise=", compChoice);  //console me dikhega ise hata de to bhi koi problem nhi hoga

    if (userChoice === compChoice) {
        //draw game
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //scissors,rock
            userWin = compChoice === "scissors" ? false : true;
        }
        else if(userChoice==="scissors"){
            //paper ,rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }


};




choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice)

    });
});