let globalNumber = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';
let answerNumber = null;
let isFirstNumber = true;
let isDecimal = false;

function display(globalNumber){
    if (isFirstNumber === true){
        return firstNumber = globalNumber;
    }
    else if (isFirstNumber === false){
        return secondNumber = globalNumber; 
        }
}

function reset(){
    globalNumber = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';
    answerNumber = null;
    isFirstNumber = true;
    }

function operatorReset(){
    isFirstNumber = false;
    isDecimal = false;
    globalNumber = '';
}

const displayScreen = document.querySelector('.screen');

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
    displayScreen.textContent = '';
    reset();
});

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
    globalNumber = globalNumber.substring(0, globalNumber.length - 1);
    displayScreen.textContent = display(globalNumber);
});

const sevenButton = document.querySelector('#seven');
sevenButton.addEventListener('click', () => {
    globalNumber += '7';
    displayScreen.textContent = display(globalNumber);
});

const eightButton = document.querySelector('#eight');
eightButton.addEventListener('click', () => {
    globalNumber += '8';
    displayScreen.textContent = display(globalNumber);
});

const nineButton = document.querySelector('#nine');
nineButton.addEventListener('click', () => {
    globalNumber += '9';
    displayScreen.textContent = display(globalNumber);
});

const divideButton = document.querySelector('#divide');
divideButton.addEventListener('click', () => {
    displayScreen.textContent = '/';
    operator = '/';
    operatorReset();
});

const fourButton = document.querySelector('#four');
fourButton.addEventListener('click', () => {
    globalNumber += '4';
    displayScreen.textContent = display(globalNumber);
});

const fiveButton = document.querySelector('#five');
fiveButton.addEventListener('click', () => {
    globalNumber += '5';
    displayScreen.textContent = display(globalNumber);
});

const sixButton = document.querySelector('#six');
sixButton.addEventListener('click', () => {
    globalNumber += '6';
    displayScreen.textContent = display(globalNumber);
});

const multiplyButton = document.querySelector('#multiply');
multiplyButton.addEventListener('click', () => {
    displayScreen.textContent = '*';
    operator = '*';
    operatorReset();
});

const oneButton = document.querySelector('#one');
oneButton.addEventListener('click', () => {
    globalNumber += '1';
    displayScreen.textContent = display(globalNumber);
});

const twoButton = document.querySelector('#two');
twoButton.addEventListener('click', () => {
    globalNumber += '2';
    displayScreen.textContent = display(globalNumber);
});

const threeButton = document.querySelector('#three');
threeButton.addEventListener('click', () => {
    globalNumber += '3';
    displayScreen.textContent = display(globalNumber);
});

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', () => {
    displayScreen.textContent = '-';
    operator = '-';
    operatorReset();
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
    if (isDecimal === false) {
        globalNumber += '.';
        displayScreen.textContent = display(globalNumber);
        isDecimal = true;
    }
});

const zeroButton = document.querySelector('#zero');
zeroButton.addEventListener('click', () => {
    globalNumber += '0';
    displayScreen.textContent = display(globalNumber);
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    answerNumber = operate(operator, 
        firstNumber, secondNumber)
    displayScreen.textContent = answerNumber;
    isFirstNumber = false;
    isDecimal = false;
    firstNumber = answerNumber;
});

const addButton = document.querySelector('#add');
addButton.addEventListener('click', () => {
    displayScreen.textContent = '+';
    operator = '+';
    operatorReset();
});


function add(a, b){
    return Math.round((a+b)*100)/100;
}

function minus(a, b){
    return Math.round((a-b)*100)/100;
}

function multiply(a, b){
    return Math.round((a*b)*100)/100;
}

function divide(a, b){
    if (b === 0){
        return 'bruh';
    }
    return Math.round((a/b)*100)/100;
}

function operate(operator, firstNumber, secondNumber){
    if (operator === null){
        return;
    }
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    switch(operator) {
        case '+':
            return answerNumber = add(firstNumber,secondNumber);
        case '-':
            return answerNumber = minus(firstNumber,secondNumber);
        case '*':
            return answerNumber = multiply(firstNumber,secondNumber);
        case '/':
            return answerNumber = divide(firstNumber,secondNumber);
    }
}