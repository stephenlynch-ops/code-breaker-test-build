
document.addEventListener("DOMContentLoaded", function() { 
    let buttons = document.getElementsByTagName("button");

    //  let button of buttons is the modern version of a for loop with i++ etc.
    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                collectUsersAnswers();
            } else {
                resetGame();
            }
        })
    }
    document.getElementById("level").innerText = 1;
    document.getElementById("slot-four").focus();

    runGame();
})

function runGame() {

    console.log("---------------------New Game-------------------------");
    // Get the level number to calculate the required clues   
    let level = parseInt(document.getElementById("level").innerText);
    let levelNum = ++level;

    console.log("Start No:", level);
    console.log("Adding this each time:", levelNum);

    document.getElementById("slot-one").innerText = level;
    document.getElementById("slot-two").innerText = level + levelNum;
    document.getElementById("slot-three").innerText = parseInt(document.getElementById("slot-two").innerText) + levelNum;

    let slotFourExpected = level + (levelNum * 3);
    let slotFiveExpected = slotFourExpected + levelNum;

    console.log("Slor Four Expected ", slotFourExpected);
    console.log("Slor Five Expected ", slotFiveExpected);
}

function collectUsersAnswers() {

    // Calculate what the next two numbers should be

    let level = parseInt(document.getElementById("level").innerText);
    let levelNum = ++level;

    console.log("CUA Start No.:", level);
    console.log("CUA increase by:",levelNum);

    let slotFourCorrect = level + (levelNum * 3);
    let slotFiveCorrect = slotFourCorrect + levelNum;

    // Collect the users answer for comparison

    let slotFourUserAnswer = parseInt(document.getElementById("slot-four").value);
    let slotFiveUserAnswer = parseInt(document.getElementById("slot-five").value);

        if ((document.getElementById("slot-four").value) == "" || (document.getElementById("slot-five").value) == "") {
            throw `User failed to complete the code. Aborting!`;
        } else if (slotFourCorrect === slotFourUserAnswer && slotFiveCorrect === slotFiveUserAnswer) {
            alert(`Thats correct. Well done. Lets move on to level ${levelNum}.`);
            clearOldAnswers();
            levelUpdate();
        } else {
            alert(`Sorry thats not correct. The correct asnswers were ${slotFourCorrect} and ${slotFiveCorrect}.`)
            gameFailed();
        }    
}

function levelUpdate() {

    let level = parseInt(document.getElementById("level").innerText);
    let newLevel = ++level;

    document.getElementById("level").innerText = newLevel;

    console.log("New Level", newLevel);
    
    runGame();
}

/**
 * This clears any old answers from the input boxes prior to a new game / level
 */
function clearOldAnswers() {
    document.getElementById("slot-four").value = "";
    document.getElementById("slot-five").value = "";
}

/**
 * This is the reset function that gives the user the option to reset the game
 */
function resetGame() {
    
    let warning = "Confirm RESET game request";

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

    document.getElementById("level").innerText = 1;
    document.getElementById("slot-four").focus();

    runGame();
}