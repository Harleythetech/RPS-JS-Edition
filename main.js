//JS Imports
const prompt = require('prompt-sync')();
const os = require ("os");
const {execSync} = require('child_process');

// Data Required
const version = "v3.5.r4-JS Stable Release";
const clap = "                    clap                                                 \r\n                                          clap                           \r\n                                                                         \r\n                         Clap      clap                                  \r\n                  clap                                                   \r\n          clap              clap    clap      Clap                       \r\n                      clap                                               \r\n                  clap       clap         clap                           \r\n                          ,         clap                                 \r\n                 clap   clap   Clap        clap                          \r\n           clap                 .  \\  `                                  \r\n                  Clap   \\ ( (\\  ) /                                     \r\n                       `  ` / _\\      ,                                  \r\n                            \\(\")                                         \r\n                  ___    .-  )=|                                         \r\n                 (`  ') ' _  /'|                                         \r\n                 |-n___n '  (/\\|                                         \r\n  a:f____________|_L___J__ <   L _______________________ ";
const RPS = "  _____            _      _____                         _____      _                        \r\n |  __ \\          | |    |  __ \\                       / ____|    (_)                       \r\n | |__) |___   ___| | __ | |__) |_ _ _ __   ___ _ __  | (___   ___ _ ___ ___  ___  _ __ ___ \r\n |  _  // _ \\ / __| |/ / |  ___/ _` | '_ \\ / _ \\ '__|  \\___ \\ / __| / __/ __|/ _ \\| '__/ __|\r\n | | \\ \\ (_) | (__|   <  | |  | (_| | |_) |  __/ |     ____) | (__| \\__ \\__ \\ (_) | |  \\__ \\\r\n |_|  \\_\\___/ \\___|_|\\_\\ |_|   \\__,_| .__/ \\___|_|    |_____/ \\___|_|___/___/\\___/|_|  |___/ {relver}\r\n                                    | |                                                     \r\n                                    |_|                                                     ";
const asciirps = "    _______               _______                     _______\r\n---'   ____)         ---'    ____)____            ---'   ____)____\r\n      (_____)                   ______)                     ______)\r\n      (_____)                  _______)                 __________)\r\n      (____)                  _______)                  (____)\r\n---.__(___)           ---.__________)             ---.__(___)\r\nROCK                  PAPER                       Scissors";
const error = "Error: Invalid input. Please try again.";
const exit = "Exiting...";
// Scoring
let cpuid = "";
let PC = 0;
let P1 = 0;
let P2 = 0;
let CPU = 0;
let modesel = 0;
// Delay function
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))


// Main Code
async function main() {
    try {
        if(os.platform() == "win32"){
            cpuid = `${os.cpus()[0].model.trim()}`;
        }else{
            cpuid = "Unknown";
        }


        console.clear();
        console.log(`Initializing Rock Paper Scissors.... \nCreated by Group 9 - ${version} \n\nRelease: https://github.com/Harleythetech/RPS-Game/releases/latest`);

        do{
        console.clear();
        console.log(RPS.replace("{relver}", version));
        console.log(`Player VS CPU: ${cpuid} | SCORE: ${PC} - ${CPU} \nPlayer 1 VS Player 2: ${P1} - ${P2}`);
        console.log("\nSelect Game Mode:\n1. Player VS CPU \n2. Player VS Player \n3. Exit\n");
        modesel = prompt("Enter Value: ");


        if (!modesel || modesel == "" || modesel >=4){
            console.clear();
            console.log(error);
            await delay(2000);
            main();
        }else if(modesel == 3){
            console.clear();
            console.log(exit);
            await delay(2000);
            process.exit();
        }

        while(modesel == 1){
            // Clear for new game
            console.clear();
            console.log(RPS.replace("{relver}", version));
            console.log(`Player VS CPU: ${cpuid} | SCORE: ${PC} - ${CPU}`);

            // Game Logic
            const choices = ["rock", "paper", "scissors"];
            const random = Math.floor(Math.random() * choices.length);
            const cpu = choices[random];
            console.log(`DEBUG: CPU Choice: ${cpu}`);

            console.log(`\nPick your Hand: \n${asciirps}`);
            const player = prompt("Enter Value: ").trim().toLowerCase();

            if (player == "exit"){
                break;
            }

            if (!player || player == "" || !choices.includes(player)){
                console.clear();
                console.log(error);
                await delay(2000);
                continue;
            }else if (player == cpu){
                console.clear();
                console.log("It's a tie!");
                await delay(2000);
                continue;
            }else if (player == "rock" && cpu == "scissors" || player == "paper" && cpu == "rock" || player == "scissors" && cpu == "paper"){
                console.clear();
                console.log(`${clap} \n Player 1 Wins!`);
                PC++;
                await delay(2000);
                continue;
            }else{
                console.clear();
                console.log("You lose!");
                CPU++;
                await delay(2000);
                continue;
            }
        }

        //PLayer VS Player

        while(modesel == 2){
            // Clear for new game
            console.clear();
            console.log(RPS.replace("{relver}", version));
            console.log(`Player 1 VS Player 2: ${P1} - ${P2}`);

            // Game Logic
            console.log(`\nPlayer 1, Pick your Hand: \n${asciirps}`);
            const player1 = prompt("Enter Value: ").trim().toLowerCase();
            if (player1 == "exit"){
                break;
            }
            console.clear();
            console.log(`\nPlayer 2, Pick your Hand: \n${asciirps}`);
            const player2 = prompt("Enter Value: ").trim().toLowerCase();
            console.log(`DEBUG: player1 = ${player1}, player2 = ${player2}`);
            if (player2 == "exit"){
                break;
            }


            if (!player1 || player1 == ""){
                console.clear();
                console.log(error);
                await delay(2000);
                continue;
            }else if(!player2 || player2 == ""){
                console.clear();
                console.log(error);
                await delay(2000);
                continue;
            }
            else if (player1 == player2){
                console.clear();
                console.log("It's a tie!");
                await delay(2000);
                continue;
            }else if (player1 == "rock" && player2 == "scissors" || player1 == "paper" && player2 == "rock" || player1 == "scissors" && player2 == "paper"){
                console.clear();
                console.log(`${clap} \n Player 1 Wins!`);
                P1++;
                await delay(2000);
                continue;
            }else{
                console.clear();
                console.log(`${clap} \n Player 2 Wins!`);
                P2++;
                await delay(2000);
                continue;
            }
        }
    }while (modesel != 3);

    } catch (e) {
        console.log(e);
    }
}

main();