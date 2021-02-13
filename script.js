const gameEndDiv = document.querySelector('.game-end');
let gameEndResult = document.createElement('h3');

const game = (playerChoice) => {
    let computersChoice = Math.floor(Math.random() * 3);
    switch (computersChoice) {
        case 0:
            computersChoice = 'rock';
            break;
        case 1:
            computersChoice = 'paper';
            break;
        case 2:
            computersChoice = 'scissors';
            break;
    }
    if (playerChoice == 'rock' && computersChoice == 'paper') {
        winOrLose('loss', playerChoice, computersChoice);
    
    } else if (playerChoice == 'paper' && computersChoice == 'rock') {
        winOrLose('win', playerChoice, computersChoice);
    
    } else if (playerChoice == 'scissors' && computersChoice == 'rock') {
        winOrLose('loss', playerChoice, computersChoice);
    
    } else if (playerChoice == 'rock' && computersChoice == 'scissors') {
        winOrLose('win', playerChoice, computersChoice);
    
    } else if (playerChoice == 'paper' && computersChoice == 'scissors') {
        winOrLose('loss', playerChoice, computersChoice);
   
    } else if (playerChoice == 'scissors' && computersChoice == 'paper') {
        winOrLose('win', playerChoice, computersChoice);
    
    } else {
        gameEndResult.innerHTML = `It's a tie! You both picked ${playerChoice}.`;
        gameEndDiv.appendChild(gameEndResult);
    }
}

const winOrLose = (result, player, comp) => {
    if (result == 'win') {
        gameEndResult.innerHTML = `You win! Your choice was ${player} & the computer's was ${comp}.`;
        gameEndDiv.appendChild(gameEndResult);
    } else {
        gameEndResult.innerHTML = `You lose! Your choice was ${player} & the computer's was ${comp}.`;
        gameEndDiv.appendChild(gameEndResult);
    }
} 