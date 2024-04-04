const wordEL = document.getElementById('word-exam');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEL = document.getElementById('time');

const btnLevelEL = document.getElementById('level-btn');
const setting = document.getElementById('setting');
const levelForm = document.getElementById('level-form');
const levelEL = document.getElementById('level');
const gameoverEL = document.getElementById('gameover-container');


const wordsExsam = ["ไก่", "หมู", "แมว", "มหาลัย", "ลำโพง", ];

let randomText;
let score = 0;
let time = 15; // easy = 15 , medium = 10 , hard = 5
let timeInterval = setInterval(updateTime, 1000);
let saveMode= localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : 'medium';
let level = 'medium';
function getRandomWord() {
    return wordsExsam[Math.floor(Math.random() * wordsExsam.length)];

}

function showWordToUi() {
    randomText = getRandomWord();
    wordEL.innerHTML = randomText;
    timeEL.innerHTML = time;

};

textEl.addEventListener('input', (e) => {
    const inputText = e.target.value;

    if (inputText === randomText) {
        if (saveMode === 'easy') {
            time += 5;
        } else if (saveMode === 'medium') {
            time += 3;
        } else {
            time += 2;
        };
        showWordToUi();
        e.target.value = "";
        updateScore();
    }
});
function updateScore() {
    score += 10;
    scoreEl.innerHTML = score;

}
function updateTime() {
    time--;
    timeEL.innerHTML = time;
    if (time === 0) {
        clearInterval(timeInterval)
        gameOver();
    }
}
function gameOver() {
    gameoverEL.innerHTML = `<h1>จบเกมเเล้วนะคร๊าบ</h1><p>คะเเนนของคุณคือ ${score} แต้ม</p>
    <button onclick="location.reload()">เล่นอีกครั้ง</button>`
    gameoverEL.style.display = 'flex';
}

btnLevelEL.addEventListener('click', () => {
    setting.classList.toggle('hide')
});

levelEL.addEventListener('change', (e) => {
    level = e.target.value;
    localStorage.setItem("mode", level);

});

function startGame() {
    // const saveMode = localStorage.getItem("mode") !== null ? localStorage.getItem("mode") : 'medium';
    levelEL.value = saveMode;

    if (saveMode === 'easy') {
        time = 15;
    } else if (saveMode === 'medium') {
        time = 10;
    } else {
        time = 5;
    }

}
startGame()
showWordToUi();
textEl.focus();


