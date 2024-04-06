//operator
const calcuratorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button'); //array
const clearBtn = document.getElementById('clear-btn');

const calulate = {
    "/": (firstNumber,secondNumber) =>secondNumber!=0?firstNumber/secondNumber:"error",
    "*": (firstNumber,secondNumber) =>firstNumber*secondNumber,
    "-": (firstNumber,secondNumber) =>firstNumber-secondNumber,
    "+": (firstNumber,secondNumber) =>firstNumber+secondNumber,
    "=": (firstNumber,secondNumber) =>secondNumber,
    
}

let fristValue = 0; // frist number
let operatorValue = ''; //operator
let waitForNext = false; //waiot user fill fristNuber and operator
let secondValue = 0; // second number




function setNumberValue(number) { 
    if(waitForNext){
        calcuratorDisplay.textContent = number;
        waitForNext = false;
    }else{
        const displayValue = calcuratorDisplay.textContent;
        calcuratorDisplay.textContent = displayValue === '0' ? number : displayValue + number;
    }

}
function callOperator(operator) {
    const currentValue = Number(calcuratorDisplay.textContent)
    if(operatorValue && waitForNext){
        operatorValue = operator;
        return
    }

    if (!fristValue) {
        fristValue = currentValue; //ค่าเริ่มต้น
    } else {
       const result = calulate[operatorValue](fristValue,currentValue);
        calcuratorDisplay.textContent = result;
        fristValue = result;
        if(fristValue === 'error'){
            resetAll();
        }
    }
    operatorValue = operator;
    waitForNext = true;

}
function addDecimal(decimal) {
    if(waitForNext) ;
    if (!calcuratorDisplay.textContent.includes('.')) {
        calcuratorDisplay.textContent = `${calcuratorDisplay.textContent}.`
    };
}


inputBtn.forEach((input) => {
    if (input.classList.length === 0) {
        input.addEventListener('click', () => setNumberValue(input.value));
    } else if (input.classList.contains('operator')) {
        input.addEventListener('click', () => callOperator(input.value));
    } else if (input.classList.contains('decimal')) {
        input.addEventListener('click', () => addDecimal(input.value));
    }
});

// clear number in display to be "0"
function resetAll() {
    fristValue = 0;
    operatorValue = '';
    waitForNext = false;
    calcuratorDisplay.textContent = '0';
}
clearBtn.addEventListener('click', () => resetAll());




//operland