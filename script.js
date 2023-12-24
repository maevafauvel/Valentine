// VARIABLES

const yesButton = document.querySelector('.yesButton');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const img = document.querySelector('img');
const noButton = document.querySelector('.noButton');

// YES BUTTON

yesButton.addEventListener('click', function () {
    h1.innerHTML = 'Yeeeeeeeees';
    p.style.opacity = 0;
    img.src = "./images/coupleCat.gif"
    yesButton.style.opacity = 0;
    noButton.style.opacity = 0;
});

// NO BUTTON

noButton.addEventListener('mouseover', function () {
    const i = Math.floor(Math.random() * 200)
    const j = Math.floor(Math.random() * 500)

    noButton.style.left = i + 'px';
    noButton.style.bottom = j + 'px';
});