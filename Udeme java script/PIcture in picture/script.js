const videoEl = document.getElementById('video');
const btnRequrest = document.getElementById('requestbtn');
const btnShare = document.getElementById('sharebtn');



btnRequrest.addEventListener('click',()=>{
    selectMediaStream();
});

btnShare.addEventListener('click',async ()=>{
    btnShare.disabled = true;
    await videoEl.requestPictureInPicture();
    btnShare.disabled = false;

});

//ส่งคำขอเข้าถึงอุปกรณ์
async function selectMediaStream(){
try{
    const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaSteam
    videoEl.onloadedmetadata = ()=>{
        videoEl.play();
    }

}catch (error){
 console.log("error");
}
};