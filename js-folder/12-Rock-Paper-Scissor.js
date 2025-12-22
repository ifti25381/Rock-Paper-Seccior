let score = JSON.parse(localStorage.getItem('score'));
      if (!score || typeof score !== 'object') {
        score = { wins: 0, losses: 0, ties: 0 };
      }

      updateScoreElement();

      let isAutoPlaying = false;
      let intervalid;

      function AutoPlay () 
      {
        if (!isAutoPlaying) {
          intervalid = setInterval(function () {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
        }
            else {
            clearInterval(intervalid);
            isAutoPlaying = false
          };
          
      }
      function playGame (playerMove) {
        const computerMove = pickComputerMove();
    
        let result = '';
            if (computerMove === playerMove) {
              result = 'Tie!';
            } else if (computerMove === 'Rock' && playerMove === 'Scissors' || computerMove === 'Paper' && playerMove === 'Rock' || computerMove === 'Scissors' && playerMove === 'Paper') {
              result = 'You lose!';
            } else {
          result = 'You win!';
          };
        console.log(result);

        if (result === 'Tie!') {
          score.ties += 1;
        } else if (result === 'You lose!') {
          score.losses += 1;
        } else {
          score.wins += 1;
        }
        localStorage.setItem('score', JSON.stringify(score)); // saving socre of the game to local stoge
            document.querySelector('.js-result').innerHTML = result;
            document.querySelector('.js-moves').innerHTML = `You = <img src="emoji/${playerMove}-emoji.png" alt="" class="move-icon"> Computer move = <img src="emoji/${computerMove}-emoji.png" alt="" class="move-icon">`;
            updateScoreElement();
            
        }
    
    function updateScoreElement () {
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;          
      
    }

   function pickComputerMove () {
          const randomNumber = Math.random();
          let computerMove = '';
        if (randomNumber >= 0 && randomNumber < 1/3) {
          computerMove = 'Rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
          computerMove = 'Paper';
        } else {
          computerMove = 'Scissors';
        }
        return computerMove;
       }