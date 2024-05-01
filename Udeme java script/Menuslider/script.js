const btnToggle = document.querySelector('#toggle');
const open = document.querySelector('#open');
const modal = document.getElementById('modal');
const close = document.getElementById('close');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
});

open.addEventListener('click', () => {
    modal.classList.add('show-showmodal');
});

close.addEventListener('click',()=>{
    modal.classList.remove('show-showmodal');
});

window.addEventListener('click',e=>e.target == modal ? modal.classList.remove('show-showmodal') : false);

