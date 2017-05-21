var displayScreen = document.querySelector('.display-screen');
var numberBtns = document.querySelectorAll('.numbers');
var clearBtn = document.querySelector('.clear-all');
var deleteBtn = document.querySelector('.delete-last');
var plusMinusBtn = document.querySelector('.plus-minus');
var comaBtn = document.querySelector('.coma');
var operandBtns = document.querySelectorAll('.operand');
var operandTemp = null;

function onNumberBtnClick () {
    displayScreen.innerText += this.innerText;
}

function onClearBtnClick () {
    displayScreen.innerText = "";
}

function onDeleteBtnClick () {
    var displayAfterDelete = displayScreen.innerText.split('').slice(0, -1).join('');
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
    if (displayScreen.innerText.indexOf('.') == -1) {
        displayScreen.innerText += '.';
    }
}

function onOperandBtnsClick () {
    if (!operandTemp) {
        displayScreen.innerText += this.innerText;
        operandTemp = this.innerText;
        console.log(operandTemp);
        
    }
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