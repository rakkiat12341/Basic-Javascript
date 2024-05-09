const slideContainer = document.querySelector('.slider-container');
const slideright = document.querySelector('.right-content');
const sliderleft = document.querySelector('.left-content');
const downBtn = document.querySelector('.down-btn');
const upBtn = document.querySelector('.up-btn');

//จำนวนภาพ slide
const sliderLenght = slideright.querySelectorAll('div').length;

let activeIndex = 0;

upBtn.addEventListener('click',()=>changeImage('up'));

downBtn.addEventListener('click',()=>changeImage('down'));

function changeImage(direction){
    const slideHeight = slideContainer.clientHeight;
    if(direction === 'up'){
        activeIndex++;
        if(activeIndex > sliderLenght-1){
            activeIndex = 0
        }
    }else if(direction === 'down'){
        activeIndex--;
        if(activeIndex < 0){
            activeIndex = sliderLenght-1
        }
    }
    sliderleft.style.transform = `translateY(-${slideHeight*activeIndex}px)`
    slideright.style.transform = `translateY(-${slideHeight*activeIndex}px)`

    
}





