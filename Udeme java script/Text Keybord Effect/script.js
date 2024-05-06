const textEl = document.getElementById('text');
const speedEl = document.getElementById('speed');

const text = 'iceeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
let speed = 300 / speedEl.value; // 300 = 0.3 second

let charactorId = 1;
writeText();

function writeText() {
    textEl.innerText = text.slice(0, charactorId);
    charactorId++;
    if (charactorId > text.length) {
        charactorId = 1;
    }
    setTimeout(writeText, speed)
}

speedEl.addEventListener('input',(e)=>{
   speed = 300/e.target.value;
    console.log(e.target.value);
})
