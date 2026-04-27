let playerScore = 0;
let clankerScore = 0;
let draw = 0;
function clankerChoice (){
    const min = 1;
    const max = 3;
    let random = Math.floor(Math.random()*(max-min+1)+min);
    if (random=== 1)
        return "rock"
    else if(random===2)
        return "paper"
    else 
        return "scissors"
}


function playRound(cHuman, cClanker){
    if(cHuman==="rock" && cClanker==="scissors"){
        playerScore += 1;
        humanScore.textContent = playerScore
        result.textContent = "Rock shatters the scissor. human wins"
    }
    else if(cHuman==="paper" && cClanker==="rock"){
        playerScore += 1;
        humanScore.textContent = playerScore
        result.textContent = "paper grabs the rock. human wins"
    }
    else if(cHuman==="scissors" && cClanker==="paper"){
        playerScore += 1;
        humanScore.textContent = playerScore
        result.textContent = "scissors shreds the paper. human wins"
    }


    else if(cClanker=== "rock" && cHuman=== "scissors"){
        clankerScore += 1;
        machineScore.textContent = clankerScore
        result.textContent = "Rock shatters the scissor. Clanker wins"
    }
    else if(cClanker=== "paper" && cHuman=== "rock"){
        clankerScore += 1;
        machineScore.textContent = clankerScore
        result.textContent = "paper grabs the rock. Clanker wins"
    }
    else if(cClanker=== "scissors" && cHuman=== "paper"){
        clankerScore += 1;
        machineScore.textContent = clankerScore
        result.textContent = "scissors shreds the paper. Clanker wins"
    }
    

    else{
        draw += 1;
        dDraw.textContent = draw
        result.textContent = "Its a draw."
    }
}
 /*option is outside the loop, so it would act like a reverse do while i think lol, cuz it will play one more game before stopping, */




/* set of code which waits for button click and then calls for playGame function*/

    let option = document.querySelector("#rock")
    let humanShow = document.querySelector("#humanShow")
    let humanScore = document.querySelector("#humanScore")
    let machineScore = document.querySelector("#machineScore")
    let dDraw = document.querySelector("#draws")
    let result = document.querySelector("#result")
    let clankerShow = document.querySelector("#machineShow")
    option.addEventListener("click", () => {
        let machine = clankerChoice()
        clankerShow.textContent = machine.toUpperCase()
        playRound("rock", machine)
        humanShow.textContent = "ROCK"
    })

    option = document.querySelector("#paper")
    option.addEventListener("click", () => {
        let machine = clankerChoice()
        clankerShow.textContent = machine.toUpperCase()
        playRound("paper", machine)
        humanShow.textContent = "PAPER"
    })

    option = document.querySelector("#scissors")
    option.addEventListener("click", () => {
        let machine = clankerChoice()
        clankerShow.textContent = machine.toUpperCase()
        playRound("scissors", machine)
        humanShow.textContent = "SCISSORS"
    })



/* set of code which updates the choices on the front-end side*/


    let display = document.querySelector("#display")
    let winDisplay = document.querySelector("#result")
        option.addEventListener("click", () => {
        if (playerScore>clankerScore){
            display.textContent = playerScore
            winDisplay.textContent = "Player won"
        }
        else if (playerScore<clankerScore){
            display.textContent = clankerScore
            winDisplay.textContent = "Clanker won"
        }
        else{
            display.textContent = draw
            winDisplay.textContent = "Draw"
        }
    })