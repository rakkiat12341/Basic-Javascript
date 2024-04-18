const count = 10;
const apikey = 'NZbCv6ENRh03LX7CuZAiU8y1grRCakXcWhO7Q1tzjMQ';
// const apiurl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


const imageContainer = document.getElementById('img-container');

let photoArray = [];
// async function getPhoto(){
//  try {
//     let response = await fetch(apiurl);
//     photoArray = await response.json();
//     console.log(photoArray);
//     displayImage();
    
//  } catch (error) {
//     console.log("errors");
//  }
// }

// function displayImage(){
//    photoArray.forEach((photo)=>{
//       const item = document.createElement('a')
//       item.setAttribute('href',photo.links.html);
//       item.setAttribute('traget','_blank');
//       const img = document.createElement('img')
//       img.setAttribute('src',photo.urls.regular);
//       img.setAttribute('title',photo.alt_description)
//       img.setAttribute('alt',photo.alt_description)

//       item.appendChild(img);
//       imageContainer.appendChild(item)
//    });
// }



// getPhoto();

async function showphoto(){
   try{
      const res = await fetch(apiurl);
      photoArray = await res.json();
      getPhotoToHtml();

   }catch (eror){
      console.log("error");
   }
   
   
}
function getPhotoToHtml(){
photoArray.forEach((photo)=>{
   const item = document.createElement('a')
         item.setAttribute('href',photo.links.html);
         item.setAttribute('target','_blank');
         const img = document.createElement('img')
         img.setAttribute('src',photo.urls.regular);
         img.setAttribute('title',photo.alt_description)
         img.setAttribute('alt',photo.alt_description)
   
         item.appendChild(img);
         imageContainer.appendChild(item)

})

}
window.addEventListener('scroll',()=>{
   if(window.innerHeight+window.scrollY>=document.body.offsetHeight-100){
      //ดึงข้อมูลมาแสดงผล
      showphoto();
   }
})

showphoto();