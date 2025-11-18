 const scores = {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScores();

        function pickComputerMove() {
            let randomNumber = Math.random();
            if (randomNumber < 0.34) {
                return 'rock';
            } else if(randomNumber <= 0.67) {
                return 'paper';
            } else {
                return 'scissors';
            } return randomNumber;
        }

            function playerMove(playerMove, computerMove) {

            if (playerMove === computerMove){
                result = "Tie";
            } else if (playerMove === 'rock' && computerMove === 'scissors' ||
                    playerMove === 'paper' && computerMove === 'rock' ||
                    playerMove === 'scissors' && computerMove === 'paper')
            { result = 'You win!';}

            else{
                result = 'You lose';
            }
            if (result === 'You win!'){
                scores.wins += 1;
            } else if (result === 'You lose'){
                scores.losses += 1;
            } else {
                scores.ties += 1;
            }
            console.log(scores);

            updateScores();
            
            document.querySelector('.js-moves').innerHTML = `You Chose <img class="move-icon" src="images/${playerMove}-emoji.png" alt="This is rock emoji picture"> 
            omputer chose <img class="move-icon" src="images/${computerMove}-emoji.png" alt="This is scissors emoji picture">`;
            
            document.querySelector('.js-result').innerHTML = result;                   

        }
        function updateScores(){
            document.querySelector('.js-scores') .innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
        }
            