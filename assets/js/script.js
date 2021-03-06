// console.log("Connected!")


// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button")
    // document.getElementsByTagName("button") this code will return an array with all the button names in the console
    // HTMLCollection(5) [button.btn.btn--big.btn--green, button.btn.btn--big.btn--blue, button.btn.btn--big.btn--yellow, button.btn.btn--big.btn--red, button.btn.btn--gray]



    // this code will run upon every button click
    for (let button of buttons) {
        button.addEventListener("click", function () {
            // 'this' is the button that just have clicked
            if (this.getAttribute("data-type") === "submit") {
                // alert("You have clicked submit")
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                // alert(`You have clicked ${gameType}`) replaced this alert with the code below
                runGame(gameType);
            }

        })
    }
    //submits the answer upon the user pressing the enter key
        document.getElementById("answer-box").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })



    runGame("addition");

})

/**
 * The main game 'loop', called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {

    document.getElementById("answer-box").value = "";
    document.getElementById("answer-box").focus();

    // Created two random numbers betwwen 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2)

    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2)

    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2)

    } else if (gameType === "division") {
        displayDivisionQuestion(num1, num2)

    } else {
        alert(`Unknown game type ${gameType}`)
        throw `Unknown game type: ${gameType}. Aborting!`;
    }

}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey! You got it right :D");
        incrementScore();
    } else {
        alert(`Awwww... you answered ${userAnswer}. The correct Answer was ${calculatedAnswer[0]}!`);
        incrementWrongAnswer();

    }

    runGame(calculatedAnswer[1]);

}

// this is a helper function
/**
 * Gets the operands (the numbers) and the operator (plus, minus etc)
 * directly from the DOM, and returns the correct answer.
 */

// parseInt is used because by default it is returned as a string and we want number
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        // addition is for keeping the game type being addition until the user decides otherwise
        return [operand1 + operand2, "addition"];
    } else if (operator === "x") {
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "÷") {

        return [operand1 / operand2, "subtract"];
    }else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

}

/**
 * Gets the current score from the DOM and increments it by 1
 */
function incrementScore() {

    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

// if the user gets it wrong
/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand2 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

// My CHALLENGE solution is to multiply operand1 by operand 2 at first, to make sure they are always devisible
function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent =  operand1 % operand2  === 0 ? operand1 : operand1 *= operand2;
    document.getElementById('operand2').textContent =  operand2
    document.getElementById('operator').textContent = "÷";

}




