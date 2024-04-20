const container = document.querySelector(".container");
const seats = document.querySelectorAll('.row .seat:not(.soalout)')

const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let price = +movieSelect.value;


container.addEventListener('click', (e) => {
    if (e.target.classList.contains('seat') & !e.target.classList.contains('soalout')) {
        e.target.classList.toggle('select');
        updateSelected();
    }
});

movieSelect.addEventListener('change', e => {
    price = +e.target.value;
    setMovieToLocalStrorange(e.target.selectedIndex, e.target.value);
    updateSelected();
});

function updateSelected() {
    const selectedSeats = document.querySelectorAll('.row .seat.select')
    const countSeats = selectedSeats.length;
    //เก็บข้อมูลที่นั่งลง Localstrorange
    let seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));
    count.innerText = countSeats;
    total.innerHTML = countSeats * price;
}

function setMovieToLocalStrorange(movieIndex, moviePrice) {
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice);
}

function showDataToUi() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    let selectedmovieIndex = localStorage.getItem('movieIndex'); //เก็บข้อมูลตำเเหน่งหนังที่เรากดจองไว้
    seats.forEach((seat, index) => {
        if (selectedSeats.indexOf(index) > -1) {
            seat.classList.add('select');
        }
    });
    if(selectedmovieIndex != null){
        movieSelect.selectedIndex = selectedmovieIndex;
    };
    if(price != null){
        price = localStorage.getItem('moviePrice');
    }
}

showDataToUi();
updateSelected();