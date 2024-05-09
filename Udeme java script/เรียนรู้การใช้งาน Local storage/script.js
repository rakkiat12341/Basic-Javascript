const setting = document.getElementById('setting');
const text = document.querySelector('#text');
const resteBtn = document.getElementById('reset');
const body = document.querySelector('body');

// true = โหมดกลางคืน
// false = โหมดกลางวัน

resteBtn.addEventListener('click',()=>{
    localStorage.clear("");
    loadTheme ()
})

setting.addEventListener('change',(e)=>{
    //บันทึกการตั้งค่าลงใน local storage
localStorage.setItem("nightMode",setting.checked)
loadTheme ();


})

function loadTheme (){
    //ดึงค่าจาก local storage มาใช้เเละเปลี่ยนจาก string เป็น boolean
  let status = JSON.parse(localStorage.getItem("nightMode"))
  setting.checked = status
    if(status){
        text.innerText = "โหมดกลางคืน"
        body.classList.add('dark')
    }else {
        text.innerText = "โหมดกลางวัน"
        body.classList.remove('dark')
    }
}

loadTheme ();