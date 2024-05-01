// const card = document.querySelector('.card');
const addQestionBtn = document.getElementById('show')
const addContainer = document.getElementById('add-container');
const hiddenBtn = document.getElementById('btn-hidden');
const cardContainer = document.getElementById('card-container');
//ปุ่มต่างๆ
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const currentQestion = document.getElementById('current-qestion');
const clearBtn = document.getElementById('clear');
const inputQestionEl = document.getElementById('qestion');
const inputAnswer = document.getElementById('answer');

const addCard = document.getElementById('add-card')

let currentActiveCard = 0;
let cardEl = [];//เก็บคำถามทั้งหมด
const cardData = GetcardData();


function createCard() {
    cardData.forEach((data, index) => {
        createSingleCard(data, index)
    });

};

function createSingleCard(data, index) {
    const card = document.createElement('div');
    card.classList.add('card');
    if (index == 0) {
        card.classList.add('active');
    }

    card.innerHTML = `
            <div class="inner-card">
                <div class="inner-card-font">
                    <p>${data.qusetion}</p>
                </div>
                <div class="inner-card-back">
                    <p>${data.answer}</p>
                </div>
            </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('show-answer'));
    cardEl.push(card);
    cardContainer.appendChild(card);
    updateCurrentQuestion();
}

function updateCurrentQuestion() {
    currentQestion.innerText = `${currentActiveCard + 1}/${cardEl.length}`;
}

//สลับคำถามเเละคำตอบโดยใช้วิธี Flip
// card.addEventListener('click',()=>card.classList.toggle('show-answer'))

//ADD class "show"เเละ เขียนในcssเพื่อให้แสดงแบบฟอร์ม
addQestionBtn.addEventListener('click', () => addContainer.classList.add('show'))
hiddenBtn.addEventListener('click', () => addContainer.classList.remove('show'))

nextBtn.addEventListener('click', () => {
    cardEl[currentActiveCard].className = 'card left';
    currentActiveCard = currentActiveCard + 1;
    if (currentActiveCard > cardEl.length - 1) {
        currentActiveCard = cardEl.length - 1;
    };
    cardEl[currentActiveCard].className = 'card active';
    updateCurrentQuestion();
});

prevBtn.addEventListener('click', () => {
    cardEl[currentActiveCard].className = 'card right';
    currentActiveCard = currentActiveCard - 1;
    if (currentActiveCard < 0) {
        currentActiveCard = 0;
    };
    cardEl[currentActiveCard].className = 'card active';
    updateCurrentQuestion();
})

addCard.addEventListener('click', () => {
    const qusetion = inputQestionEl.value;
    const answer = inputAnswer.value;

    if (qusetion.trim() && answer.trim()) {
        const newCard = { qusetion, answer };
        createSingleCard(newCard);
        inputQestionEl.value = '';
        inputAnswer.value = '';
        addContainer.classList.remove('show');
        cardData.push(newCard);
        setCardData(cardData)
    };

})
function setCardData(cards) {
    localStorage.setItem('cards', JSON.stringify(cards));
    window.location.reload();
};

function GetcardData() {
    const cards = JSON.parse(localStorage.getItem('cards'))
    return cards === null ? [] : cards;
};

clearBtn.addEventListener('click',()=>{
    localStorage.clear();
    cardContainer.innerHTML = '';
    window.location.reload();
});


createCard();