function gameofLuck() {
  var dicePlayerOne, dicePlayerTwo;
  var dice = [];

  dicePlayerOne = Math.floor(Math.random() * (7 - 1) + 1);
  dicePlayerTwo = Math.floor(Math.random() * (7 - 1) + 1);
  console.log("dice of player 1: " + dicePlayerOne);
  console.log("dice of player 2: " + dicePlayerTwo);
  if (dicePlayerOne > dicePlayerTwo) {
    console.log("Player 1 wins!");
  } else if (dicePlayerOne < dicePlayerTwo) {
    console.log("Player 2 wins!");
  } else if (dicePlayerOne === dicePlayerTwo) {
    console.log("It's a Draw!");
  }
}
gameofLuck();
