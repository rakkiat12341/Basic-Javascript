const currency_one = document.getElementById('cuurncy-list1');
const currency_two = document.getElementById('cuurncy-list2');

const amount_one = document.getElementById('input-curency1');
const amount_two = document.getElementById('input-curency2');

const rate_text = document.getElementById('exchang-rate');
const btn_swap = document.getElementById('btn-exchange')

currency_one.addEventListener('change',calculateMoney);
currency_two.addEventListener('change',calculateMoney);

// ทำการสร้าง addEventListener ใช้ input มหายถึงเมื่อกรอกอะไรมาก็ตามจะทำการรับค่า
amount_one.addEventListener('input',calculateMoney);
amount_two.addEventListener('input',calculateMoney);

btn_swap.addEventListener('click',swap_currency)

function  calculateMoney(){
    const one = currency_one.value
    const two = currency_two.value
    let url = `https://api.exchangerate-api.com/v4/latest/${one}`
    
    fetch(url)
    .then(Response=>Response.json())
    .then(data=>{const rate = data.rates[two]
        rate_text.innerText = `1 ${one} = ${rate}  ${two}`
        amount_two.value = (amount_one.value*rate).toFixed(3) ;
})
}

function swap_currency(){
    const old_currencyOne = currency_one.value ;
    currency_one.value = currency_two.value ;
    currency_two.value = old_currencyOne ;
    //หลังจากที่สลับสกุลเงินเเล้วก็ทำการเรียนใช้ function calculateMoney เพื่อทำการคำนวณใหม่
    calculateMoney();

}


//จะสามารถรับค่าได้เลยตอนเปิดหน้าเว็บ
calculateMoney();



