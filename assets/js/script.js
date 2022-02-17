/**
 * Code that loads when the DOM content has finished loading
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") !== "start-game") {
                alert("You need to click Start Game to begin");
            } else {
                runGame();
            }
        })
    }
})

function runGame() {

    let i = 1;
    while (i < 6) {

        if (i = 1) {
            levelOne();
        } else {
            console.log("We're not ready for level 2 yet!");
        }
    }
}

function checkAnswer() {

}

function levelOne() {

    let levelOneArray = [1, 2, 3, 4, 5];

    let playersClueLevelOneArray = [1, 2, 3, "x", "x"];

    document.getElementById("slot-one").innerText = playersClueLevelOneArray[0];
    document.getElementById("slot-one").innerText = playersClueLevelOneArray[1];
    document.getElementById("slot-one").innerText = playersClueLevelOneArray[2];
    document.getElementById("slot-one").innerText = playersClueLevelOneArray[3];
    document.getElementById("slot-one").innerText = playersClueLevelOneArray[4];

}