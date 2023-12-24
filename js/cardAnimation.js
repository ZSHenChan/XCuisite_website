//reveal on scroll
window.addEventListener('scroll', reveal);

function reveal(){
    let reveals = document.querySelectorAll('.reveal');
    for (let i=0; i<reveals.length; i++){
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop<windowHeight - revealPoint){
            reveals[i].classList.add("active");
        }
    }
}

//flipping

const card = document.querySelector('.card-wrapper');
const rotateBtn = document.querySelector('.icon-link');

rotateBtn.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
})