// อ้างอิง Element from index.html
const balanc = document.getElementById("balance");
const money_plus = document.getElementById("money-plus");
const money_minus = document.getElementById("money-minus");
const list = document.getElementById("list");
const form = document.getElementById("form");
const text_form = document.getElementById("text");
const amount_form = document.getElementById("amount");

const dataTransaction = [
    { id: 1, text: "ค่าซ้อมรถ", amount: -1000 },
    { id: 2, text: "ค่าบ้าน", amount: -1000 },
    { id: 3, text: "เงินเดือน", amount: +18000 },
    { id: 4, text: "ค่าเช้าบ้าน", amount: -16000 },
    { id: 5, text: "โบนัส", amount: +8000 },
];

const transaction = dataTransaction;

function init() {
    transaction.forEach(addDataToList);
    calculateMoney();
}

//function ใช้ในการเเสดงผลการทำรายการ
function addDataToList(transaction) {
    const symbol = transaction.amount < 0 ? "-" : "+";
    const status = transaction.amount < 0 ? "minus" : "plus";
    const item = document.createElement("li"); /*สร้าง Li element*/
    item.innerHTML = `${transaction.text}<span>${symbol}${Math.abs(transaction.amount)}</span><button class="delete-btn">x</button>`;
    list.appendChild(item);
    item.classList.add(status);
    
}
function autoID(){
    return Math.floor(Math.random()*1000000)
}
function calculateMoney() {
    const amounts = transaction.map(transaction => transaction.amount);
    //คำนวนยอดคงเหลือ
    const total = amounts.reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวนรายรับ
    const income = amounts.filter(item => item > 0).reduce((result, item) => (result += item), 0).toFixed(2);
    //คำนวนรายจ่าย
    const expense = amounts.filter(item => item < 0).reduce((result, item) => (result += item), 0).toFixed(2);

    // แสดงผลทางจอภาพ
balanc.innerText = `฿${total}`
money_plus.innerText = `฿${income}`
money_minus.innerText = `฿${expense}`
}

function addTransaction(e){
e.preventDefault();
if(text_form.value.trim()==="" || amount_form.value.trim() === ""){  
    alert("กรุณากรอกข้อมูลให้ครบ");  
}else{
    console.log(autoID());    
}

}
form.addEventListener('submit',addTransaction);



console.log(dataTransaction);




init();


