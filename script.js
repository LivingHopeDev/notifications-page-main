const btn = document.querySelector(".toggle-btn")

btn.addEventListener('click', () => {

    cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = "white";

    });
    redDots = document.querySelectorAll(".dot");

    redDots.forEach(dot => {
        dot.style.border = "none";
    })

    num = document.querySelector('.num');
    num.innerHTML = 0;

})