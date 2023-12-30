let userScore = 0;
let pcScore = 0;

// sare choices ko select karlenge
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const pcScorePara = document.querySelector("#pc-score");

// we will create a function to generate random choice of computer
const genComputerChoice = () => {
    const options = ["rock","paper","scissor"];
    const pcChoice = Math.floor(Math.random()*3);
    return options[pcChoice];
};
const drawGame = () => {
    console.log("game Draw");
    msg.textContent = "Round Draw";
    msg.style.backgroundColor = "#081b31";

};
const showWinner = (userWin) => {
    if(userWin === true)
    {
        console.log("user win");
        msg.textContent = "You Win !!!";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.textContent = userScore;
    }
    else
    {
        console.log("you lose");
        msg.textContent = "You Lost :-<";
        msg.style.backgroundColor = "red";
        pcScore++;
        pcScorePara.textContent = pcScore;
    }
}
// main function to play game
const playgame = (userChoice) => {
    console.log("user - ", userChoice);

    const pcChoice = genComputerChoice();
    console.log("pc - ",pcChoice);

    // let us assume that user will win
    if(userChoice === pcChoice)
    drawGame();
    else{
        let userWin = true;
        if(userChoice === "rock")
        {
            if(pcChoice === "paper")
                userWin = false;
        }
        else if(userChoice === "paper")
        {
            if(pcChoice === "scissor")
                userWin = false;
        }
        else
        {
            if(pcChoice === "rock")
                userWin = false;
        }
        showWinner(userWin);
    }
};


// query selector all humko array dega isliye foreach loop use krke
// ab har choice pr event listner laga denge
choices.forEach((choice) => {
    // choice pr event listner add kro
    choice.addEventListener("click", () => {
        // ab jab bhi kisi choice pr click hoga to humko uski id chahiye isliye get attribue se id nikal lenge
        const userChoice = choice.getAttribute("id");

        // ab humko user ki choice pata chal gyi isliye ab usko ek function mai pass kardenge jisse aage ka game chale
        playgame(userChoice);
    });
});