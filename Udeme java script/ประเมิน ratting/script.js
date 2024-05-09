const rating = document.querySelectorAll('i');
const result = document.getElementById('result');

rating.forEach((star,selectIndex)=>{
    star.addEventListener('click',()=>{
        console.log(selectIndex);
        rating.forEach((star,choice)=>{
            if(selectIndex>=choice){
                star.classList.add('active');
            }else{
                star.classList.remove('active');
            }
            console.log(choice);
        })
        result.innerText = "ผลการประเมินคือ"+(selectIndex+1)+"/5"
    })
    
})






