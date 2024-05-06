
const questionData = [
	{
	  question:"1.ข้อใดไม่ใช่ระบบปฏิบัติการ",
      a:"ระบบปฏิบัติการดอส",
      b:"ไมโครซอฟท์เวิร์ด",
      c:"ไมโครซอฟต์วินโดวส์",
      d:"ระบบปฏิบัติการแอนดรอยด์",
      correct:"b"
	},
    {
        question:"2.ข้อใดคือโปรแกรม Web Browser",
        a:"Google Chrome",
        b:"Keyboard",
        c:"Mouse",
        d:"Monitor",
        correct:"a"
    },
    {
        question:"3.ข้อใดคือฮา์ดแวร์",
        a:"Keyboard",
        b:"Mouse",
        c:"Monitor",
        d:"ถูกทุกข้อ",
        correct:"d"
    }
]

const questionEl = document.getElementById("question");
const answerEl = document.querySelectorAll(".answer");
const choiceA = document.getElementById("a-text");
const choiceB = document.getElementById("b-text");
const choicec = document.getElementById("c-text");
const choiceD = document.getElementById("d-text");
const container = document.getElementById('quiz');

const submitBtn = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;
loadQuestion();
function loadQuestion(){
    checkChoice();
    currentQuizData =  questionData[currentQuestion];
    questionEl.innerText = currentQuizData.question;
    choiceA.innerText = "A. "+currentQuizData.a;
    choiceB.innerText = "B. "+currentQuizData.b;
    choicec.innerText = "C. "+currentQuizData.c;
    choiceD.innerText = "D. "+currentQuizData.d;
}

function checkChoice(){
    answerEl.forEach(answer => {
        answer.checked = false;
    })
}

submitBtn.addEventListener('click',()=>{
    //ตรวจสอบตัวเลือก
   let answer= getChoiceAnswer();
   if(answer){
    if(answer == questionData[currentQuestion].correct){
        score++;
    }
    currentQuestion++;
    if(currentQuestion<questionData.length){
        loadQuestion();
    } else{
        container.innerHTML = `<h2>คุณได้คะแนน ${score}/${questionData.length}</h2>`
    }
   }
})

function getChoiceAnswer(){
    let answer;
    answerEl.forEach(answerEl =>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })
return answer;
}


