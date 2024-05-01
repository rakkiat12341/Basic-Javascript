const btnToggle = document.querySelector('#toggle');
// const nav = document.querySelector('nav');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})