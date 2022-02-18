document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(){
                alert(`You clicked to submit you answer`)
        })
    }

})



function runGame(number) {

    let ranNumOne = Math.floor(Math.random() * number) + 1;
    let ranNumTwo = Math.floor(Math.random() * number) + 1;

    console.log(ranNumOne);
    console.log(ranNumTwo);

    let levelArray = new Array(5);
    
    levelArray[0] = ranNumOne;
    levelArray[1] = ranNumOne + ranNumTwo;
    levelArray[2] = levelArray[1] + ranNumTwo;
    levelArray[3] = levelArray[2] + ranNumTwo;
    levelArray[4] = levelArray[3] + ranNumTwo;

    console.log(levelArray);

}

function levelOne() {
    
    var number = 3;
    runGame(number);

}