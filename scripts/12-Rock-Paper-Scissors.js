 const scores = {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScores();

        // making autoplay function by using setInterval method

        let isAutoPlaying = false;
        let intervalId;

        function autoPlay() {
            if (!isAutoPlaying){
            intervalId = setInterval(function (){
                const playGame = pickComputerMove();
                playerMove(playGame, pickComputerMove());
            }, 1500);
            isAutoPlaying = true;
            }
            else {
                clearInterval(intervalId);
                isAutoPlaying = false;
            }
        }
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

        document.querySelector('.js-rock-button').addEventListener('click', () => {
            playerMove('rock', pickComputerMove());
        });

        document.querySelector('.js-paper-button').addEventListener('click', () => {
            playerMove('paper', pickComputerMove());
        });

        document.querySelector('.js-scissors-button').addEventListener('click', () => {
            playerMove('scissors', pickComputerMove());
        });

        document.body.addEventListener('keydown', (event) => {
            if (event.key === 'r'){playerMove('rock', pickComputerMove());}
            else if (event.key === 'p'){playerMove('paper', pickComputerMove());}
            else if (event.key === 's'){playerMove('scissors', pickComputerMove());}
            else if (event.key === 'a'){autoPlay();}
            else {
                alert('Invalid key! Please press R, P, S or A to play the game.');
                return;
            }
        });

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
        computer chose <img class="move-icon" src="images/${computerMove}-emoji.png" alt="This is scissors emoji picture">`;
        
        document.querySelector('.js-result').innerHTML = result;                   

        }
        function updateScores(){
            document.querySelector('.js-scores') .innerHTML = `Wins: ${scores.wins}, Losses: ${scores.losses}, Ties: ${scores.ties}`;
        }
            