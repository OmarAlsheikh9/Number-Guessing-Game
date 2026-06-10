import readline from 'readline';
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
export function askQuestion(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

/////////////////////////
export function isValidChoice(choice){
  let choiceNum = parseInt(choice);
  return !isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= 3;
}
export function isValidGuess(guess){
  let guessNum = parseInt(guess);
  return !isNaN(guessNum) && guessNum >= 1 && guessNum <= 100;
}
export function welcomeMessage(){
  console.log(`
    ==========================================================================
        WELCOME TO THE NUMBER GUESSER GAME 
    ==========================================================================
    I'm thinking of a number between 1 and 100.
    You have 5 chances to guess the correct number.
    Please select the difficulty level:
    1. Easy (10 chances)
    2. Medium (5 chances)
    3. Hard (3 chances)
    `);
}