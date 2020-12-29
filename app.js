
const dice = document.createElement("div");
dice.textContent = "Roll here";
document.body.appendChild(dice);


class Game {
    constructor() {
        this.roll = function () {
            this.result = Math.floor(Math.random() * 6) + 1;
            return this.result;
        };
        this.checker = function(roll1,roll2){
            this.playerWin = 0;
            this.compWin = 0;
            if(roll1 > roll2){
                this.playerWin++;
                return "Player wins"
            }else if(roll1 < roll2){
                this.compWin++;
                return "Computer wins"
            }else{
                return "Draw"
            }
        };
    }
}
const game = new Game();
let playerWins = 0;
let compWins = 0;
dice.addEventListener("click", function(){
let playerRoll = game.roll();
let compRoll = game.roll();
let winner = game.checker(playerRoll,compRoll);

playerWins += game.playerWin;
compWins += game.compWin;

dice.innerHTML = `Player: ${playerRoll} points vs. Computer: ${compRoll}  points
<br> ${winner} <br>Total Player wins ${playerWins} Computer wins ${compWins}`;

})
