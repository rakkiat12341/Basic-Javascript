const ratingContainer = document.querySelector(".rating-container");
const rating = document.querySelectorAll(".rating");
const panel = document.getElementById('panel')
const sendBtn = document.getElementById('send')

let selected;

ratingContainer.addEventListener('click',(jojo)=>{
    if(jojo.target.parentNode.classList.contains('rating')){
        removeActive();
        jojo.target.parentNode.classList.add('active')
        selected = jojo.target.nextElementSibling.innerHTML;
        console.log(selected);
    }})

function removeActive(){
    for(i = 0; i<rating.length; i++){
        rating[i].classList.remove('active')
    }
}

sendBtn.addEventListener('click',(e)=>{
panel.innerHTML = `
<img src="images/heart.svg" alt="" class="img-complete">
<strong>ขอบคุณที่ใช้บริการของเรา</strong>
<br>
<strong>ผลการประเมิน : ${selected}</strong>
`

});


