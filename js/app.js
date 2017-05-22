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

function onNumberBtnClick () {
    displayScreen.innerText += this.innerText;
    shouldDisableComa();
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
    if ((displayScreen.innerText.indexOf('.') == -1 || displayScreen.innerText.indexOf('+') !== -1 || displayScreen.innerText.indexOf('-') !== -1 || displayScreen.innerText.indexOf('*') !== -1 || displayScreen.innerText.indexOf('/') !== -1) ) {
        
        displayScreen.innerText += '.';
    }
    shouldDisableComa();
}

function shouldDisableComa () {
    if (displayScreen.innerText.replace(/[^\.]/g, "").length >= 2) {
        comaBtn.disabled = true;
    }
}

function onOperandBtnsClick () {
    if (!operandTemp) {
        firstNumTemp = displayScreen.innerText;
        displayScreen.innerText += this.innerText;
        operandTemp = this.innerText;
        console.log(firstNumTemp);
        console.log(operandTemp);
    }
}

function onEqualsBtnClick () {
    if (firstNumTemp && operandTemp) {
        secondNumTemp = displayScreen.innerText.split('');
        console.log(secondNumTemp);
        
//        firstNumTemp = null;
//        secondNumTemp = null;
//        operandTemp = null;
//        comaBtn.disabled = false;
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

equalsBtn.addEventListener('click', onEqualsBtnClick);