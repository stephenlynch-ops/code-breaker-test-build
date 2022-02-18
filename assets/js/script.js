document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    //  let button of buttons is the modern version of a for loop with i++ etc.
    for(let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                collectUsersAnswers();
            } else {
                alert(`Game Is Now Stopping`);
            }
        })
    }

    levelOne();
})

function runGame(number) {

    let ranNumOne = Math.floor(Math.random() * number) + 1;
    let ranNumTwo = Math.floor(Math.random() * number) + 1;

    // console.log(ranNumOne);
    // console.log(ranNumTwo);

    let levelArray = new Array(5);
    
    levelArray[0] = ranNumOne;
    levelArray[1] = ranNumOne + ranNumTwo;
    levelArray[2] = levelArray[1] + ranNumTwo;
    levelArray[3] = levelArray[2] + ranNumTwo;
    levelArray[4] = levelArray[3] + ranNumTwo;

    // console.log(levelArray);

    document.getElementById("slot-one").innerText = levelArray[0];
    document.getElementById("slot-two").innerText = levelArray[1];
    document.getElementById("slot-three").innerText = levelArray[2];

    
}

function levelOne() {
    
    var number = 3;
    runGame(number);

}

function collectUsersAnswers(passObject) {

    let usersAnswers = new Array(2);

    passObject[0] = parseInt(document.getElementById("slot-four").value);
    passObject[1] = parseInt(document.getElementById("slot-five").value);

    console.log(usersAnswers[0]);
    console.log(usersAnswers[1]);

    console.log(passObject);

    if (levelArray[3] === usersAnswers[0] && levelArray[4] === usersAnswers[1]) {
        alert(`You got it right, lets move on to the next level`);
    } else {
        alert(`You got it wrong, the correct answers were ${levelArray[3]} and ${levelArray[4]}. Better luck next time`)
    }

}

