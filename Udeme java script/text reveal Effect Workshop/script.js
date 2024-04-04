// const content = document.getElementsByClassName("content")
const conTent = document.querySelectorAll(".content")



window.addEventListener('scroll',showText);

function showText(){
    conTent.forEach(section => {
        const imgEl = section.querySelector('img');
        const textEl = section.querySelector('.text');

        const scrollPosition = window.scrollY;
        // 500px +100 / 50 
        //502=>แสดงข้อความ
        
        const textPosition = imgEl.offsetTop+ imgEl.offsetHeight /50;
        if(scrollPosition>textPosition){
            textEl.classList.add('showtext');
        }else {
            textEl.classList.remove('showtext');
        }
        
    });
    console.log(imgEl,textEl);
}
