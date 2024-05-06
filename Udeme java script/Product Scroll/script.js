const categories = document.querySelectorAll('.category');

window.addEventListener('scroll', showCategory);

function showCategory() {
    const calculateHeigth = window.innerHeight -100;

    categories.forEach((category) => {
        const topPosition = category.getBoundingClientRect().top;
        if (topPosition < calculateHeigth) {
            category.classList.add('active');
        }else{
            category.classList.remove('active');
        }
    })
};