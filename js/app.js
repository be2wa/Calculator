var displayScreen = document.querySelector('.display-screen');
var numberBtns = document.querySelectorAll('.numbers');
var clearBtn = document.querySelector('.clear-all');
var deleteBtn = document.querySelector('.delete-last');
var plusMinusBtn = document.querySelector('.plus-minus');
var comaBtn = document.querySelector('.coma');
var operandBtns = document.querySelectorAll('.operand');
var equalsBtn = document.querySelector('.equals');

var firstNumTemp = null;
var secondNumTemp = null;
var operandTemp = null;
var indexOfOperandTemp = null;
var resultNumTemp = null;

function onNumberBtnClick () {
    displayScreen.innerText += this.innerText;
}

function onClearBtnClick () {
    displayScreen.innerText = "";
    firstNumTemp = null;
    secondNumTemp = null;
    operandTemp = null;
    comaBtn.disabled = false;
    indexOfOperand = null;
}

function onDeleteBtnClick () {
    var displayAfterDelete = displayScreen.innerText.slice(0, -1);
    displayScreen.innerText = displayAfterDelete;
}

function onPlusMinusBtnClick () {
    var displayAfterSplit = displayScreen.innerText.split('');
    if (displayAfterSplit[0] == '-') {
        displayAfterSplit.shift('-');
    } else {
        displayAfterSplit.unshift('-');
    }
    displayScreen.innerText = displayAfterSplit.join('');
}

function onComaBtnClick () {
    displayScreen.innerText += '.';
    comaBtn.disabled = true;
}

function onOperandBtnsClick () {
    if (!operandTemp) {
        firstNumTemp = displayScreen.innerText;
        displayScreen.innerText += this.innerText;
        operandTemp = this.innerText;
        comaBtn.disabled = false;
        console.log(firstNumTemp);
        console.log(operandTemp);
    }
}

function onEqualsBtnClick () {
    if (firstNumTemp && operandTemp) {
        
        if (displayScreen.innerText.indexOf('+') !== -1) {
            indexOfOperand = displayScreen.innerText.indexOf('+');
        } else if (displayScreen.innerText.indexOf('-') !== -1) {
            indexOfOperand = displayScreen.innerText.indexOf('-');
        } else if (displayScreen.innerText.indexOf('*') !== -1) {
            indexOfOperand = displayScreen.innerText.indexOf('*');
        } else if (displayScreen.innerText.indexOf('/') !== -1) {
            indexOfOperand = displayScreen.innerText.indexOf('/');
        }
        secondNumTemp = displayScreen.innerText.substr(indexOfOperand+1);
        console.log(secondNumTemp);
        
        var parsedFirstNumTemp = Number(firstNumTemp);
        var parsedSecondNumTemp = Number(secondNumTemp);
        
        if (secondNumTemp) {
            switch (operandTemp) {
                case '+':
                    resultNumTemp = parsedFirstNumTemp + parsedSecondNumTemp;
                    break;
                case '-':
                    resultNumTemp = parsedFirstNumTemp - parsedSecondNumTemp;
                    break;
                case '*':
                    resultNumTemp = (parsedFirstNumTemp * parsedSecondNumTemp) * 10 / 10;
                    break;
                case '/':
                    resultNumTemp = (parsedFirstNumTemp / parsedSecondNumTemp) * 10 / 10;
                    break;
            }
            console.log(parsedFirstNumTemp);
            console.log(parsedSecondNumTemp);
            displayScreen.innerText = resultNumTemp;
        }
    }
    firstNumTemp = null;
    secondNumTemp = null;
    operandTemp = null;
    comaBtn.disabled = false;
    indexOfOperand = null;
}

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', onNumberBtnClick);
}

for (var i = 0; i < operandBtns.length; i++) {
    operandBtns[i].addEventListener('click', onOperandBtnsClick);
}

clearBtn.addEventListener('click', onClearBtnClick);

deleteBtn.addEventListener('click', onDeleteBtnClick);

plusMinusBtn.addEventListener('click', onPlusMinusBtnClick);

comaBtn.addEventListener('click', onComaBtnClick);

equalsBtn.addEventListener('click', onEqualsBtnClick);