function playGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const userGuess = prompt("Enter a number between 1 and 10:");

  if (userGuess === null) {
    alert("Game cancelled.");
    return;
  }

  const guess = parseInt(userGuess);

  if (isNaN(guess) || guess < 1 || guess > 10) {
    alert("Please enter a valid number between 1 and 10.");
  } else if (guess === randomNumber) {
    alert("Congratulations! You guessed the correct number.");
  } else {
    alert(`Not matched . The correct number was ${randomNumber}.`);
  }
}
