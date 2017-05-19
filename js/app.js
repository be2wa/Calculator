var displayScreen = document.querySelector('.display-screen');
var numberBtns = document.querySelectorAll('.numbers');
var clearBtn = document.querySelector('.clear-all');
var deleteBtn = document.querySelector('.delete-last');
var plusMinusBtn = document.querySelector('.plus-minus');

function onNumberClick () {
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

for (var i = 0; i < numberBtns.length; i++) {
    numberBtns[i].addEventListener('click', onNumberClick);
}

clearBtn.addEventListener('click', onClearBtnClick);

deleteBtn.addEventListener('click', onDeleteBtnClick);

plusMinusBtn.addEventListener('click', onPlusMinusBtnClick);