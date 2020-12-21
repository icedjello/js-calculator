const STACK_DISPLAY = document.getElementById('stack-display');

const NUMBER_DISPLAY = document.getElementById('number-display');


const PLUS_BUTTON = document.getElementById('plusButton');
const MINUS_BUTTON = document.getElementById('minusButton');
const MULTIPLY_BUTTON = document.getElementById('multiplyButton');
const DIVIDE_BUTTON = document.getElementById('divideButton');
const EQUALS_BUTTON = document.getElementById('equalsButton');


PLUS_BUTTON.addEventListener('click', () => onOperatorInput('+'));
MINUS_BUTTON.addEventListener('click', () => onOperatorInput('-'));
MULTIPLY_BUTTON.addEventListener('click', () => onOperatorInput('*'));
DIVIDE_BUTTON.addEventListener('click', () => onOperatorInput('/'));
EQUALS_BUTTON.addEventListener('click', ()=> onOperatorInput('='));

const ONE_BUTTON = document.getElementById('oneButton');
const TWO_BUTTON = document.getElementById('twoButton');
const THREE_BUTTON = document.getElementById('threeButton');
const FOUR_BUTTON = document.getElementById('fourButton');
const FIVE_BUTTON = document.getElementById('fiveButton');
const SIX_BUTTON = document.getElementById('sixButton');
const SEVEN_BUTTON = document.getElementById('sevenButton');
const EIGHT_BUTTON = document.getElementById('eightButton');
const NINE_BUTTON = document.getElementById('nineButton');
const ZERO_BUTTON = document.getElementById('zeroButton');

ONE_BUTTON.addEventListener('click', () => onNumberInput(1));
TWO_BUTTON.addEventListener('click', () => onNumberInput(2));
THREE_BUTTON.addEventListener('click', () => onNumberInput(3));
FOUR_BUTTON.addEventListener('click', () => onNumberInput(4));
FIVE_BUTTON.addEventListener('click', () => onNumberInput(5));
SIX_BUTTON.addEventListener('click', () => onNumberInput(6));
SEVEN_BUTTON.addEventListener('click', () => onNumberInput(7));
EIGHT_BUTTON.addEventListener('click', () => onNumberInput(8));
NINE_BUTTON.addEventListener('click', () => onNumberInput(9));
ZERO_BUTTON.addEventListener('click', () => onNumberInput(0));

let runningTotal = 0;
let lastOperator = '+';
let stack = [];

function onNumberInput(number) {
    let leadingZero = parseInt(NUMBER_DISPLAY.innerHTML) === 0;
    if (leadingZero) {
        NUMBER_DISPLAY.innerHTML = '';
    }
    NUMBER_DISPLAY.innerHTML += number;
}

function clearNumberDisplay() {
    NUMBER_DISPLAY.innerHTML = '';
}

function showTotal() {
    NUMBER_DISPLAY.innerHTML = runningTotal;
}

function clearStack(){
    STACK_DISPLAY.innerHTML = '';
}

function showStack(){
    STACK_DISPLAY.innerHTML = stack[stack.length - 1].toString().replaceAll(',', ' ');
}

function pushToStack(toPush){
    stack.push(toPush)
}

function doSum(inputNumber) {
    let sumString = `${runningTotal}${lastOperator}${inputNumber}`;
    runningTotal = eval(sumString);
}

function onOperatorInput(latestOperator) {
    let currentInput = parseInt(NUMBER_DISPLAY.innerHTML);
    let noInput = isNaN(currentInput);
    let isEquals = latestOperator === '=';

    if (noInput) {
        console.warn('No input!');
    }else if(isEquals){
        doSum(currentInput);
        showTotal();
        clearStack();
        lastOperator = latestOperator;
    } else {
        clearNumberDisplay();
        doSum(currentInput);
        lastOperator = latestOperator;
        pushToStack([runningTotal, latestOperator]);
        showStack();
    }
}
