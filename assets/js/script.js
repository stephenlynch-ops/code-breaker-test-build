
document.addEventListener("DOMContentLoaded", function() { 

    getPlayerName();
    
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                collectUsersAnswers();
            } else {
                resetGame();
            }
        })
    }

    document.getElementById("slot-three").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            collectUsersAnswers();
        }
    })
    document.getElementById("slot-four").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            collectUsersAnswers();
        }
    })
    document.getElementById("slot-five").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            collectUsersAnswers();
        }
    })

    document.getElementById("level").innerText = 1;
    document.getElementById("slot-three").focus();

    runGame();
})

/**
 * The runGame function generates the number pattern based on the level and populates the numbers
 * in the DOM.
 */
function runGame() {

    // Get the level number to calculate the required clues   
    let level = parseInt(document.getElementById("level").innerText);
    let levelNum = ++level;

    document.getElementById("slot-one").innerText = level;
    document.getElementById("slot-two").innerText = level + levelNum;
    
}

/**
 * The collectUserAnswers function collects the users inputs and compares them to the expected answers
 * There are 2 error loops. One has actions if the user enters the incorrect answers. The second handles
 * what to do if the user leaves one of the answer input boxes empty and clicks submit.
 */
function collectUsersAnswers() {

    // Calculate what the next two numbers should be

    let level = parseInt(document.getElementById("level").innerText);
    let levelNum = ++level;

    let slotThreeCorrect = level + (levelNum * 2);
    let slotFourCorrect = slotThreeCorrect + levelNum;
    let slotFiveCorrect = slotFourCorrect + levelNum;

    // Collect the users answer for comparison

    let slotThreeUserAnswer = parseInt(document.getElementById("slot-three").value);
    let slotFourUserAnswer = parseInt(document.getElementById("slot-four").value);
    let slotFiveUserAnswer = parseInt(document.getElementById("slot-five").value);

        if ((document.getElementById("slot-three").value) == "" || (document.getElementById("slot-four").value) == "" || (document.getElementById("slot-five").value) == "" ){
            throw `User failed to complete the code. Aborting!`;
        } else if (slotThreeCorrect === slotThreeUserAnswer && slotFourCorrect === slotFourUserAnswer && slotFiveCorrect === slotFiveUserAnswer) {
            alert(`Thats correct. Well done. Lets move on to level ${levelNum}.`);
            clearOldAnswers();
            levelUpdate();
        } else {
            alert(`Sorry thats not correct. The correct asnswers were ${slotThreeCorrect} , ${slotFourCorrect} and ${slotFiveCorrect}.`)
            gameFailed();
        }    
}

/**
 * The levelUpdate function prepares the game for the next level by updating the level marker in the DOM
 * and starts the runGame function.
 */
function levelUpdate() {

    let level = parseInt(document.getElementById("level").innerText);
    let newLevel = ++level;

    document.getElementById("level").innerText = newLevel;
    
    document.getElementById("slot-three").focus();

    runGame();
}

/**
 * This clears any old answers from the input boxes prior to a new game / level
 */
function clearOldAnswers() {

    document.getElementById("slot-three").value = "";
    document.getElementById("slot-four").value = "";
    document.getElementById("slot-five").value = "";

}

/**
 * This is the reset function that gives the user the option to reset the game
 */
function resetGame() {
    
    let warning = "Confirm RESET game request - NOTE: This will reset your game numbers as well";

    if (confirm(warning) == true) {
        gameFailed();
    } else {
        alert(`Reset request cancelled`);
    }

}

/**
 * This is the general reset function that is called when the player fails a level
 * or if the user clicks the reset game button.
 */
function gameFailed() {
    clearOldAnswers();

    updateLeaderBoard();

    getPlayerName();

    document.getElementById("level").innerText = 1;
    document.getElementById("slot-three").focus();

    runGame();
}

function getPlayerName() {

    var userName = prompt("Please enter you game name", "Anon");
    document.getElementById("player-name").innerText = userName;

}

function updateLeaderBoard() {

    let playerName = document.getElementById("player-name").innerText;
    let levelCompleted = parseInt(document.getElementById("level").innerText);

    // console.log("Players Name:", playerName);
    // console.log("Level Reached:", levelCompleted);

    var table = document.getElementById("game-history");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = playerName;
    cell2.innerHTML = levelCompleted;
    
}