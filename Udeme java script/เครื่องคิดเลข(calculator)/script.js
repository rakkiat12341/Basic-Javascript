//operator
const calcuratorDisplay = document.querySelector('h1');
const inputBtn = document.querySelectorAll('button'); //array
const clearBtn = document.getElementById('clear-btn');

//ตัวเลขที่ 1 เชื่อมด้วยตัวดำเนินกร ตัวเลขที่2 
// 10 + 20 = 30

let fristValue = 0; // frist number
let operatorValue = ''; //operator
let secondValue = 0; // second number
let waitForNext = false; //waiot user fill fristNuber and operator



function setNuberValue(number) { 
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

    if (!fristValue) {
        fristValue = currentValue;
    } else {
        console.log(fristValue);
        console.log(operatorValue);
        console.log(currentValue);

    }
    operatorValue = operator;
    waitForNext = true;

}
function addDecimal(decimal) {
    if (!calcuratorDisplay.textContent.includes('.')) {
        calcuratorDisplay.textContent = `${calcuratorDisplay.textContent}.`
    };
}


inputBtn.forEach((input) => {
    if (input.classList.length === 0) {
        input.addEventListener('click', () => setNuberValue(input.value));
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