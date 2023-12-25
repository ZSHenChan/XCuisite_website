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

const rotateBtn = document.querySelectorAll('.icon-link');

for (let i=0; i<rotateBtn.length; i++){
    rotateBtn[i].addEventListener('click', function(){
        rotateBtn[i].closest('.card-wrapper').classList.toggle('is-flipped');
    })
}
