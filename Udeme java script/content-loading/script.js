const header = document.getElementById('header');
const title = document.getElementById('title');
const description = document.getElementById('description');
const profile_img = document.getElementById('profile');
const seller_name = document.getElementById('name');
const price = document.getElementById('price');

const animated_bg = document.querySelectorAll('.animated_bg');
const animated_text = document.querySelectorAll('.animated_text');

setTimeout(showContent, 2000);

function showContent() {
    header.innerHTML = `
    <img src="https://cdn.pixabay.com/photo/2017/03/19/01/43/living-room-2155376_640.jpg" alt="">
    `;
    title.innerText = 'Sofa'
    description.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, ea?' 
    profile_img.innerHTML = `<img src="https://randomuser.me/api/portraits/women/9.jpg" alt="">`
   seller_name.innerText = 'ลลิตา'
   price.innerText = 'ราคา 1,000 บาท'
    animated_bg.forEach(bg => bg.classList.remove('animated_bg'));
    animated_text.forEach(text => text.classList.remove('animated_text'));
}





