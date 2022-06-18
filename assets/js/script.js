// console.log("Connected!")


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button")
    // document.getElementsByTagName("button") this code will return an array with all the button names in the console
// HTMLCollection(5) [button.btn.btn--big.btn--green, button.btn.btn--big.btn--blue, button.btn.btn--big.btn--yellow, button.btn.btn--big.btn--red, button.btn.btn--gray]



// this code will run upon every button click
    for (let button of buttons) {
        button.addEventListener("click", function(){
            // 'this' is the button that just have clicked
            if (this.getAttribute("data-type") === "submit") {
                alert("You have clicked submit")
            }
            else {
                let gameType = this.getAttribute("data-type");
                // alert(`You have clicked ${gameType}`) replaced this alert with the code below
                runGame(gameType);
            }

        })
    }

    runGame("addition");

})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType){

    // Created two random numbers betwwen 1 and 25
    let num1 = Math.floor(Math.random() * 25) +1;
    let num2 = Math.floor(Math.random() * 25) +1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)
    } else {
        alert(`Unknown game type ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}


function checkAnswer(){
    
}

// this is a helper function
function calculateAnswer(){
    
}

function incrementScore(){
    
}

// if the user gets it wrong
function incrementWrongAnswer(){
    
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}

// function displayDivideQuestion(){
    
// }