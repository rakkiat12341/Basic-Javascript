const countDownForm =document.getElementById('countDownForm');
const inputContainer = document.getElementById('input-container');
const datEl = document.getElementById('date-picker');
const countEl = document.getElementById('countdown');

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

