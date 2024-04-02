const switchToogle=document.querySelector('input[type = "checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const nav = document.getElementById('nav');

const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');

function siwtchMode(e){
if(e.target.checked){
    document.documentElement.setAttribute('data-theme','dark');
    darkMode();
    imageSwitchMoode('dark');
}else{
    document.documentElement.setAttribute('data-theme','ligth');
    ligthMode();
    imageSwitchMoode('ligth');
} 

}

function darkMode(){
    toggleIcon.children[0].textContent = "โหมดกลางคืน"
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon');
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
}

function ligthMode(){
    toggleIcon.children[0].textContent = "โหมดกลางวัน"
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun');
    nav.style.backgroundColor = 'rgb(255 255 255/50%)';
}

function imageSwitchMoode(a){
image1.src =`img/undraw_cloud_hosting_7xb1_${a}.svg`
image2.src =`img/undraw_analysis_dq08_${a}.svg`
image3.src =`img/undraw_educator_re_ju47_${a}.svg`
}

switchToogle.addEventListener('change',siwtchMode)

