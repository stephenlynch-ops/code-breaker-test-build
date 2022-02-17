document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "start-game"){
                runLevelOne();
            } else {
                getUserAnswer();
            }
        })
    }

    // Allowing the user to submit the answer from either slot four or five with the enter key
    document.getElementById("slot-four").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            getUserAnswer()
        }
    })

    document.getElementById("slot-five").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            getUserAnswer();
        }
    })

    runLevelOne();

})

/**
 * Runs the Level one version of the game
 */
function runLevelOne() {

    document.getElementById("level").innerText = '1';

    let num1 = Math.floor(Math.random() * 3) + 1;
    let num2 = Math.floor(Math.random() * 3) + 1;

    let levelOneArray = new Array(5);

    levelOneArray[0] = num1;
    levelOneArray[1] = num1 + num2;
    levelOneArray[2] = levelOneArray[1] + num2;
    levelOneArray[3] = levelOneArray[2] + num2;
    levelOneArray[4] = levelOneArray[3] + num2;

    document.getElementById("slot-one").innerText = levelOneArray[0];
    document.getElementById("slot-two").innerText = levelOneArray[1];
    document.getElementById("slot-three").innerText = levelOneArray[2];

    
}

/**
 * Collects the users inputs and populates an array with them
 */
function getUserAnswer() {

    let usersAnswers = new Array(2)
    usersAnswers[0] = parseInt(document.getElementById("slot-four").value);
    usersAnswers[1] = parseInt(document.getElementById("slot-five").value);

}