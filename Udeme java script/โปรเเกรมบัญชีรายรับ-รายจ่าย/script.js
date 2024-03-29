const formatter = new Intl.NumberFormat('en-US', {
    currency: 'USD',
});


// อ้างอิงชื่อ element index.html 
const balanc = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text_form = document.getElementById("text");
const amount_form = document.getElementById("amount");

const dataTransaction = [
    
    
]
let transaction = dataTransaction;

function init() {
    list.innerHTML = '';
    transaction.forEach(addDataToList);
    calculateMoney()
}

function reMoveData(id){
transaction = transaction.filter(transaction =>transaction.id !== id)
init();
}

function addDataToList(transaction) {
    const symbol = transaction.amount < 0 ? "-" : "+";
    const status = transaction.amount < 0 ? "minus" : "plus";
    const item = document.createElement('li');
    item.classList.add(status);
    item.innerHTML = `${transaction.text}<span>${symbol}${formatter.format(Math.abs(transaction.amount))}</span><button onclick = "reMoveData(${transaction.id})" class="delete-btn">x</button>`;
    list.appendChild(item);
}
function autoID() {
    return Math.floor(Math.random()*1000000)
}


function calculateMoney() {
    const amounts = transaction.map(transaction => transaction.amount);
    //คำนวนยอดเงินคงเหลือ
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวนรายรับ
    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวนรายจ่าย
    const expense = amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0).toFixed(2);
    //เเสดงผลทางจอหน้าจอ
    balanc.innerHTML = `฿`+formatter.format(total)
    money_plus.innerHTML = `฿`+formatter.format(income)
    money_minus.innerHTML = `฿`+formatter.format((expense*-1).toFixed(2))

}

function addTransaction(e){
    e.preventDefault();
    if(text.value.trim() === '' || amount.value.trim() === ''){
alert('กรุณากรอกข้อมูลให้ครบ')
    } else {
        const data = {
            id: autoID(),
            text: text.value,
            amount: +amount.value
        }
        transaction.push(data);
        addDataToList(data);
        calculateMoney();
        text.value='';
        amount.value='';
        console.log(transaction);
    }
}



form.addEventListener('submit',addTransaction);


init();

