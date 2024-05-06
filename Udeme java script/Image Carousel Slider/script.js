const container = document.getElementById("container");
const imgs = document.querySelectorAll("#container img");

const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");


//สร้างตัวนับภาพ 
let index = 0;

let interval = setInterval(slide,2000)

function slide(){
    index++;
    changeImage();
}

function changeImage(){
    //เปลี่ยนภาพต้องเพิ่มค่าที่ล่ะ 500 => 1000 =>1500 =>2000
    //นำ index * 500 เพื่อเปลี่ยนภาพ
    if(index>imgs.length-1){
        index = 0;
    }else if (index<0){
        index = imgs.length-1
    }
    container.style.transform = `translateX(${-index*500}px)`
    // console.log(`translateX(${-index*500}px)`);
}

prevBtn.addEventListener('click',(e)=>{
    index--;
    changeImage();
    resetInterval();
})

nextBtn.addEventListener('click',(e)=>{
    index++;
    resetInterval();
    changeImage();

})

function  resetInterval() {
    clearInterval(interval);
    interval = setInterval(slide,2000)
}