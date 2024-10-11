import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let round = 0 ;
let choices = ['rock', 'paper', 'scissors'];
let computerChoice = choices[Math.floor(Math.random()*choices.length)];


while(round <= 2){
    if(computerChoice == 'rock'){
        console.log('you chose for the big ' + computerChoice)
     } else if(computerChoice == 'scissors'){
        console.log('you chose for the little ' + computerChoice);
    } else {
        console.log('you chose for the wide ' + computerChoice );
    }
 round++
        
}

process.exit()