const apiKey = 'f51a5baaf7e5aca20094e95d93bee133'
const movieYears = document.querySelector('#years');
const nextBtn = document.getElementById('next');
let pages = '1';
let years = "2024";
let posterKey;
const content = document.querySelector('#content');
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pages}&sort_by=popularity.desc&year=${years}`


movieYears.addEventListener('change', selectYear);
function selectYear() {
    years = movieYears.value;
    const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pages}&sort_by=popularity.desc&year=${years}`
    displayMovie(updateUrl)
};

async function displayMovie(url) {
    const res = await fetch(url);
    const movieFromApi = await res.json();
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    movieFromApi.results.forEach(data => {
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        const title = document.createElement('h2');
        const img = document.createElement('img');
        const yearEL = document.createElement('p');
        yearEL.classList.add('year-text');
        const yearOfMovie = data.release_date.substring(0,4);
        let posterKey = data.poster_path;
        const urlPoster = `https://image.tmdb.org/t/p/w500${posterKey}`
        yearEL.innerText = yearOfMovie;
        title.innerHTML = `${data.title.substring(0, 24)}`;
        movieEl.appendChild(yearEL);
        movieEl.appendChild(title);
        content.appendChild(movieEl);
        img.setAttribute('src', urlPoster);
        movieEl.appendChild(img);
        
    });
}

nextBtn.addEventListener('click', nextPage);
function nextPage() {
    pages++;
    displayMovie(url);
    selectYear();
}

document.getElementById('prevoius').addEventListener('click', prevPage);

function prevPage() {
    pages--;
    displayMovie(url);
    selectYear();
}

displayMovie(url);

