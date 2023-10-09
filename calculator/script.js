
const display = document.getElementById("display");
const clearButton = document.getElementById("clear");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let currentOperator = "";
let previousInput = "";


function updateDisplay() {
    display.value = currentInput;
}


function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonText = clickedButton.textContent;

    if (/\d/.test(buttonText) || buttonText === ".") {
        currentInput += buttonText;
    } else if (/\+|-|\*|\//.test(buttonText)) {
        
        if (currentInput !== "") {
            if (currentOperator !== "") {
                calculateResult();
            }
            previousInput = currentInput;
            currentInput = "";
        }
        currentOperator = buttonText;
    } else if (buttonText === "=") {
        
        calculateResult();
        currentOperator = "";
    } else if (buttonText === "C") {
        
        currentInput = "";
        currentOperator = "";
        previousInput = "";
    }

    updateDisplay();
}


function calculateResult() {
    if (currentOperator === "+") {
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
    } else if (currentOperator === "-") {
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
    } else if (currentOperator === "*") {
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
    } else if (currentOperator === "/") {
        if (parseFloat(currentInput) === 0) {
            currentInput = "Error";
        } else {
            currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        }
    }
}


buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});

updateDisplay();
