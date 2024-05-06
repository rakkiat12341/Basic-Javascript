const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition ;


const recognize = new SpeechRecognition();
const btn = document.querySelector('.control');

function recordVioce(){
    const isReccord = btn.classList.contains('record');
    if(isReccord){
        recognize.start();
        btn.classList.remove('record');
        btn.classList.add('pause');
        btn.innerText = 'pause';
    }else{
        recognize.stop();
        btn.classList.remove('pause');
        btn.classList.add('record');
        btn.innerText = 'record';
    }
};

function setVoiceToText(e){
    let message = document.querySelector('.message');
    message.innerText+= e.results[0][0].transcript;
   
}

function continueRecord(){
    const isPause = btn.classList.contains('pause');
    if (isPause){
        recognize.start();
    }
}

function setUpVoice(){
    recognize.lang = "th-TH";
    btn.addEventListener('click',recordVioce);
    recognize.addEventListener('result',setVoiceToText);
    recognize.addEventListener('end',continueRecord);
}

setUpVoice();    



