
document.addEventListener("DOMContentLoaded", function() { 
    let buttons = document.getElementsByTagName("button");

    //  let button of buttons is the modern version of a for loop with i++ etc.
    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                collectUsersAnswers();
            } else {
                alert(`This is here in the event future buttons are added later on i.e. a button to change the difficulty`)
            }
        })
    }

    document.getElementById("slot-four").focus();

    levelOne();
})

function runGame(number) {

    let ranNumOne = Math.floor(Math.random() * number) + 1;
    let ranNumTwo = Math.floor(Math.random() * number) + 1;

    console.log("Ran Num 1",ranNumOne);
    console.log("Ran Num 2", ranNumTwo);

    let levelArray = new Array(5);
    
    levelArray[0] = ranNumOne;
    levelArray[1] = ranNumOne + ranNumTwo;
    levelArray[2] = levelArray[1] + ranNumTwo;
    levelArray[3] = levelArray[2] + ranNumTwo;
    levelArray[4] = levelArray[3] + ranNumTwo;

    console.log("Level Array", levelArray);

    document.getElementById("slot-one").innerText = levelArray[0];
    document.getElementById("slot-two").innerText = levelArray[1];
    document.getElementById("slot-three").innerText = levelArray[2];

    let missingNums = new Array(2);
    missingNums[0] = levelArray[3];
    missingNums[1] = levelArray[4];

    console.log("Missing Nums", missingNums);

    return missingNums;
}

/**
 * Level One Number Criteria
 */
function levelOne() {
    
    var number = 3;
    runGame(number);

}

/**
 * Level Two Number Criteria
 */
function levelTwo() {
    
    var number = 5;
    runGame(number);

}

/**
 * Level Three Number Criteria
 */
function levelThree() {
    
    var number = 7;
    runGame(number);

}

/**
 * Level Four Number Criteria
 */
function levelFour() {
    
    var number = 9;
    runGame(number);

}

/**
 * Level Five Number Criteria
 */
function levelFive() {
    
    var number = 11;
    runGame(number);

}

function collectUsersAnswers(missingNums) {

        let usersAnswers = new Array(2);

        usersAnswers[0] = parseInt(document.getElementById("slot-four").value);
        usersAnswers[1] = parseInt(document.getElementById("slot-five").value);

        if ((document.getElementById("slot-four").value) == "" || (document.getElementById("slot-five").value) == "") {
            throw `User failed to complete the code. Aborting!`;
        } else {
            console.log("User Answers", usersAnswers[0]);
            console.log("User Answers", usersAnswers[1]);

            console.log("Users Ans Array", usersAnswers);

            if (missingNums = usersAnswers) {
                alert(`You got it right, lets move on to the next level`);
            } else {
                alert(`You got it wrong, the correct answers were ${missingNums[0]} and ${missingNums[1]}. Better luck next time`)
            }

            levelUpdate();
    }
}

function levelUpdate() {

    

    let level = 1;
    let newLevel = level++

    if (newLevel = 2) {
        levelTwo();
    } else if (newLevel = 3) {
        levelThree();
    } else if (newLevel = 3) {
        levelFour();
    } else {
        levelFive();
    }
}

function clearOldAnswers() {
    document.getElementById("slot-four").value = "";
    document.getElementById("slot-five").value = "";
}