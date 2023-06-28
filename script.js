let firstNumber = null;
let secondNumber = null;
let operator = null;

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
    return Math.round((a/b)*100)/100;
}

function operate(firstNumber, secondNumber, operator){
    switch(operator) {
        case '+':
            add(firstNumber,secondNumber);
            break;
        case '-':
            minus(firstNumber,secondNumber);
            break;
        case '*':
            multiply(firstNumber,secondNumber);
            break;
        case '/':
            divide(firstNumber,secondNumber);
            break;
    }
}