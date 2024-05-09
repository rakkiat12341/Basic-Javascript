const img = document.querySelector('img');
const input =document.querySelector('input');
input.addEventListener("change",(e)=>{
    img.src = URL.createObjectURL(input.files[0])
})



