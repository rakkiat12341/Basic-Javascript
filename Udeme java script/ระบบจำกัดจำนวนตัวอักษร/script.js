const textarea = document.querySelector('textarea');
const amount = document.querySelector('.amout');
const limit = document.querySelector('.limit');



textarea.addEventListener('keyup',()=>{
    let count  = textarea.value.length;
    amount.textContent = count;
    if(count>=20){
        
        limit.classList.add('active');
    }else {
        limit.classList.remove('active');
    }
})






