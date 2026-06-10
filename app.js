import { Command } from "commander";
import {isValidChoice,isValidGuess,askQuestion,welcomeMessage} from './utils.js'
import fs from 'fs'
const program = new Command();
program.name('number-guessing-game').description('A fun number guessing game').version('1.0.0');
program.parse(process.argv);
let highScores = fs.readFileSync('scores.json','utf-8');
highScores=JSON.parse(highScores);
welcomeMessage();

let chances = await askQuestion('Enter your choice: '),mode;
if(!isValidChoice(chances)){
  console.log('InValid choice.Enter number between 1 and 3');
  process.exit(1);
}
if(chances==='1')
  chances=10,mode='Easy';
else if(chances==='2')
  chances=5,mode='Medium';
else
  chances=3,mode='Hard';
console.log(`Great! You have selected the ${mode} difficulty level.`);
console.log(`Let's start the game!`);
console.log(`=====================================`);

let wantPlay = true;
while(wantPlay){
  wantPlay = await play(mode);
}
async function play (mode){
  let startTime = Date.now(),endTime,totalTime;
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let guess=0,attemps=0,isWin=false,gameChances=chances;
  while(gameChances){
    guess = await askQuestion('Enter your guess: ');
    if(!isValidGuess(guess)){
      console.log('InValid guess.Enter number between 1 and 100');
      continue;
    }
    attemps++;
    guess = parseInt(guess);
    if (guess === randomNumber) {
      console.log(`Congratulations! You guessed the correct number in ${attemps} attempts.`);
      isWin=true;
      if(!highScores[mode]||highScores[mode]>attemps)
        highScores[mode]=attemps;
      fs.writeFileSync('scores.json',JSON.stringify(highScores));
      break;
    } 
    else if (guess < randomNumber) 
      console.log('Too low! Try again.');
    else 
      console.log('Too high! Try again.');
    // hint user if stuck 
    let diffrence = Math.abs(guess - randomNumber);
    console.log(`Hint: ${diffrence>=30?"You're very cold!":(diffrence>=10&&diffrence<=30)?"You're getting warmer!":"You're very close!"}`);
    console.log(`You have ${--gameChances} chances left.`);
  }
  if(!isWin)
    console.log(`Sorry, you've run out of chances. The correct number was ${randomNumber}.`);
  endTime = Date.now();
  totalTime = (endTime - startTime)/1000;
  console.log(`you take ${totalTime.toFixed(2)}s to end round of game`);
  console.log(`your high score for ${mode}: ${highScores[mode] ?? 'No score yet'}`);
  console.log(`=====================================`);
  let wantContinue = await askQuestion('Want to play again? (y/n): ');
  console.log(`=====================================`);
  return wantContinue.toLowerCase() === 'y';
}