var userInput = '';

function getInput(value) {
    if (value === 'DEL') {
        userInput = userInput.slice(0, -1);
    } else if (value === 'RESET') {
        userInput = '';
    } else if (value === '=') {
        userInput = eval(userInput).toString();
    } else {
        userInput += value;
    }
    updateDisplay();
}

function updateDisplay() {
    var displayElement = document.querySelector('.text1');
    displayElement.textContent = userInput;
}
