function gameofLuck() {
  var dicePlayerOne, dicePlayerTwo, winner;

  dicePlayerOne = Math.floor(Math.random() * (7 - 1) + 1);
  dicePlayerTwo = Math.floor(Math.random() * (7 - 1) + 1);

  document
    .getElementById("image1")
    .setAttribute("src", "images/dice" + dicePlayerOne + ".png");

  document
    .getElementById("image2")
    .setAttribute("src", "images/dice" + dicePlayerTwo + ".png");
  if (dicePlayerOne > dicePlayerTwo) {
    winner = "Player 1 wins!";
  } else if (dicePlayerOne < dicePlayerTwo) {
    winner = "Player 2 wins!";
  } else if (dicePlayerOne === dicePlayerTwo) {
    winner = "It's a Draw!";
  }
  return winner;
}

document.querySelector("h1").innerHTML = gameofLuck();

//console.log("dice of player 1: " + dicePlayerOne);
//   console.log("dice of player 2: " + dicePlayerTwo);
