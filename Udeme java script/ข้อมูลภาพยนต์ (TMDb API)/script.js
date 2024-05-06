const apiKey = 'f51a5baaf7e5aca20094e95d93bee133'
const movieYears = document.querySelector('#years');
const nextBtn = document.getElementById('next');
let value =movieYears.value;
let posterKey;
let years;
const content = document.querySelector('#content');
const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${value}&sort_by=popularity.desc&year=${years}`

movieYears.addEventListener(`change`, selectYear.bind(this), false);
/*function selectYear(e) {
    years = movieYears.value;
    const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${pages}&sort_by=popularity.desc&year=${years}`
    displayMovie(updateUrl)
    console.log(updateUrl);
    var text = e.options[e.selectedIndex].text;
    console.log(text)
};*/

function selectYear(e) {
    const select = e.target;
    const desc = select.selectedOptions[0].text;
    value = select.value;
    years = desc;
    console.log("text: " + desc + " value: " + value)
    const updateUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${value}&sort_by=popularity.desc&year=${desc}`
    displayMovie(updateUrl);
    console.log(updateUrl);
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
        const yearOfMovie = data.release_date.substring(0, 4);
        let posterKey = data.poster_path;
        const urlPoster = `https://image.tmdb.org/t/p/w500${posterKey}`
        yearEL.innerText = yearOfMovie;
        title.innerHTML = `${data.title.substring(0, 15)}`;
        movieEl.appendChild(yearEL);
        movieEl.appendChild(title);
        content.appendChild(movieEl);
        img.setAttribute('src', urlPoster);
        movieEl.appendChild(img);

    });
}

nextBtn.addEventListener('click', nextPage);
function nextPage() {
    value++;
    let urlForNext = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${value}&sort_by=popularity.desc&year=${years}`
    displayMovie(urlForNext);
    console.log(urlForNext);
}

document.getElementById('prevoius').addEventListener('click', prevPage);

function prevPage() {
    value--;
    let urlForNext = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=${value}&sort_by=popularity.desc&year=${years}`
    displayMovie(urlForNext);
    console.log(urlForNext);

}

displayMovie(url);

