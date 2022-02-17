/**
 * Code that loads when the DOM content has finished loading
 */

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                levelOne();
            }
        })
    }
})

function runGame() {


    let i = 1;
    let level = parseInt(document.getElementById("level").innerText);
    document.getElementById("level").innerText = i.valueOf;


    while (i < 6) {

        if (i = 1) {
            let levelArray = [1, 2, 3, 4, 5]
            levelOne(levelArray);
            button.addEventListener("click", function() {
                if (this.getAttribute("data-type") === "submit") {
                    checkAnswer(levelArray);
                }
            })
        } else {
            console.log("We're not ready for level 2 yet!");
            i++
        }
    }
}

function checkAnswer(levelArray) {

    console.log(levelArray[3]);

    // let userNumberOne = parseInt(document.getElementById("slot-four").value);
    // let userNumberTwo = parseInt(document.getElementById("slot-five").value);

    // if (userNumberOne === levelArray[3] && userNumberTwo === levelArray[4]) {
    //     alert("Correct let's move up a level")
    // } else {
    //     alert(`Sorry, but you got it wrong, the answers were ${levelArray[3]} and ${levelArray[4]}.`);
    // }
}

function levelOne(levelArray) {

    document.getElementById("slot-one").innerText = levelArray[0];
    document.getElementById("slot-two").innerText = levelArray[1];
    document.getElementById("slot-three").innerText = levelArray[2];
    
    document.getElementById("slot-four").focus;

}