let running = true;
let attempts = 0;
const minimum = 1;
const maximum = 100;
const answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
let guess;

console.log("Game started. The correct answer is: " + answer);

document.addEventListener('DOMContentLoaded', guessNumberGame);

function guessNumberGame(){

  while (running) {
  guess = window.prompt(`Guess a number between ${minimum}-${maximum}`);
  
  // Check if the user canceled the prompt or left it empty
  if (guess === null || guess === '') {
    running = false;
    alert("Game canceled.");
    console.log("Game ended.");
    return;
  }
  // A new conditional begins
  guess = Number(guess);

  // Check if the input is not a number
  if (isNaN(guess)) {
    window.alert("Enter a valid number.");
  }
  // Check if the guess is out of the valid range
  else if (guess < minimum || guess > maximum) {
    alert(`Enter a number between ${minimum} and ${maximum}.`);
  }
  // If the input is a valid number, proceed
  else {
    attempts++;
    if (guess < answer) {
      alert("TOO LOW! Try again....");
    } else if (guess > answer) {
      window.alert("TOO HIGH! Try again....");
    } else {
      window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
      running = false;
    }} 
  console.log("Game ended.");
}
}
