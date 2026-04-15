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

function humanChoice(){
    let option = prompt("Enter yo choice gang");
    return option.toLowerCase();
}

function playRound(cHuman, cClanker){
    if(cHuman==="rock" && cClanker==="scissors"){
        playerScore += 1;
        console.log("Rock shatters the scissor. human wins")
    }
    if(cHuman==="paper" && cClanker==="rock"){
        playerScore += 1;
        console.log("paper grabs the rock. human wins")
    }
    if(cHuman==="scissors" && cClanker==="paper"){
        playerScore += 1;
        console.log("scissors shreds the paper. human wins")
    }


    if(cClanker=== "rock" && cHuman=== "scissors"){
        clankerScore += 1;
        console.log("Rock shatters the scissor. Clanker wins")
    }
    if(cClanker=== "paper" && cHuman=== "rock"){
        clankerScore += 1;
        console.log("paper grabs the rock. Clanker wins")
    }
    if(cClanker=== "scissors" && cHuman=== "paper"){
        clankerScore += 1;
        console.log("scissors shreds the paper. Clanker wins")
    }
    

    else{
        draw += 1;
        console.log("Its a draw.")
    }
}
 /*option is outside the loop, so it would act like a reverse do while i think lol, cuz it will play one more game before stopping, */
function playGame(){
    for (let i=1; i<=5; i++){
        playRound(clankerChoice() ,humanChoice())
    }
    if (playerScore>clankerScore)
        alert ("Player won. Score= " + playerScore)
    else if (playerScore<clankerScore)
        alert("Clanker won. Score =" + clankerScore)
    else
        alert ("its a draw. Score =" + draw)
}

playGame();