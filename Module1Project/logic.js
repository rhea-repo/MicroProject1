document.addEventListener("DOMContentLoaded", function() {
  const moves = ['rock', 'paper', 'scissors'];
  let playerWon = false;
  let playerScore = parseInt(localStorage.getItem('playerScore')) || 0;
  let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
 

  document.getElementById("openButton").addEventListener("click", function() {
    document.getElementById("hiddenBox").style.display = "block";
  });

  document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("hiddenBox").style.display = "none";
  });

  document.getElementById('rockcircle').addEventListener('click', () => playGame('rock'));
  document.getElementById('scissorscircle').addEventListener('click', () => playGame('scissors'));
  document.getElementById('papercircle').addEventListener('click', () => playGame('paper'));
  document.getElementById('nextbutton').addEventListener('click', displayResult);

  function playGame(playerMove) {
    const computerMove = moves[Math.floor(Math.random() * moves.length)];

    console.log(`Your move: ${playerMove}`);
    console.log(`Computer's move: ${computerMove}`);

    const result = determineWinner(playerMove, computerMove);
    

    document.getElementById('playerScore').textContent = playerScore;
    document.getElementById('computerScore').textContent = computerScore;

    document.getElementById('nextbutton').style.display = playerWon ? 'block' : 'none';
    localStorage.setItem('playerScore', playerScore);
    localStorage.setItem('computerScore', computerScore);
    console.log(result);
    const resultTextElement = document.getElementById('resultText');
    resultTextElement.style.display = 'block';
    resultTextElement.textContent = result;

   
    document.getElementById('rockcircle').style.display = 'none';
    document.getElementById('scissorscircle').style.display = 'none';
    document.getElementById('papercircle').style.display = 'none';

   
    document.getElementById('playAgain').style.display = 'block';
  }

  document.getElementById('playAgain').addEventListener('click', function() {
    
    resetGame();
  });

  function resetGame() {
  
    playerWon = false;

  
    document.getElementById('rockcircle').style.display = 'block';
    document.getElementById('scissorscircle').style.display = 'block';
    document.getElementById('papercircle').style.display = 'block';

   
    document.getElementById('resultText').style.display = 'none';
    document.getElementById('playAgain').style.display = 'none';
  }

  function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
      return "It's a tie!";
    } else if (
      (playerMove === 'rock' && computerMove === 'scissors') ||
      (playerMove === 'scissors' && computerMove === 'paper') ||
      (playerMove === 'paper' && computerMove === 'rock')
    ) {
      playerWon = true;
      playerScore++;
      return 'You Win!';
    } else {
      playerWon = false;
      computerScore++;
      return 'Computer wins!';
    }
  }

  function displayResult() {
    if (playerWon) {
      window.location.href = 'win.html';
    } else {
      console.log('Next button pressed, but you haven\'t won yet.');
    }
  }

  document.getElementById('goback').addEventListener('click', function() {
    window.location.href = 'index.html';
});
});
