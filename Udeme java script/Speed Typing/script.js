const wordEL = document.getElementById('word-exam');
const textEl = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEL = document.getElementById('time');

const btnLevelEL = document.getElementById('level-btn');
const setting = document.getElementById('setting');
const levelForm = document.getElementById('level-form');
const levelEL = document.getElementById('level');
const gameoverEL = document.getElementById('gameover-container');


const wordsExsam = ["ไก่","หมู","แมว","มหาลัย"];

let randomText; 
let score=0;
let time = 15; // easy = 15 , medium = 10 , hard = 5

function getRandomWord(){
    return wordsExsam[Math.floor(Math.random()*wordsExsam.length)];

}

function showWordToUi(){
    randomText=getRandomWord();
    wordEL.innerHTML = randomText;
}
showWordToUi();
