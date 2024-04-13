const countDownForm =document.getElementById('countDownForm');
const inputContainer = document.getElementById('input-container');
const datEl = document.getElementById('date-picker');
const countDownEl = document.getElementById('countdown');

const countDownTitleEl = document.getElementById('countdown-title');
const countButtonEl = document.getElementById('countdown-button');
const timeEl = document.querySelectorAll('span');

const completeEL = document.getElementById('complete');
const completeElInfo = document.getElementById('complete-info');
const completeBtnEl = document.getElementById('complete-button');

// ตัวแปลสำหรับควบคุมการทำงาน 

let countDownTitle = "";
let countDownDate = "";

let conuntDownValue = Date; //วันที่ที่เก็บจากฟอร์ม
let countDownActive;//ตัวนับเวลา
let saveCountDown;//ตัวเก็บข้อมูล หัวข้อเเละวันแจ้งเตือน (Object)

//แปลงหน่วยเวลา 

const second = 1000;
const minute = second * 60;
const hour = minute*60;
const day = hour*24;

countDownForm.addEventListener('submit',uodateCountDown);

function uodateCountDown(e){
 e.preventDefault();
 countDownTitle = e.srcElement[0].value;
 countDownDate = e.srcElement[1].value;

 if(countDownTitle == ''){
    alert('กรุณาป้อนหัวข้อ')
 } else if(countDownDate == ''){
    alert('กรุณาป้อนวันที่')
 }else {
    saveCountDown = {
        title:countDownTitle,
        date:countDownDate
    };
    localStorage.setItem("countDown",JSON.stringify(saveCountDown));
    conuntDownValue = new Date(countDownDate).getTime(); //เวลาที่ตั้ง
    setUpTime(); //function นับถอยหลัง
 }
}

function setUpTime(){
    countDownActive = setInterval(()=>{
        // เวลาปัจจุบัน - เวลาที่่รับค่าเพื่อหาความต่าง
        const now = new Date().getTime();
        const distance = conuntDownValue - now;
        const days = Math.floor(distance/day);
        const hours = Math.floor((distance%day)/hour);
        const minutes = Math.floor((distance%hour)/minute);
        const seconds = Math.floor((distance%hour)/second);
        inputContainer.hidden =true;
        if (distance<0) {
            //หมดเวลา
            alert('หมดเวลา')
        }else {
            //นับถอยหลัง
            timeEl[0].textContent = `${days}/`;
            timeEl[1].textContent = `${hours}/`;
            timeEl[2].textContent = `${minutes}/`;
            timeEl[3].textContent = `${seconds}/`;
            countDownEl.hidden = false;
            
        }
    },second);

}



