const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration: 5000,
    triggerElemnt: intro,
    triggerHook: 0.5
}).setPin(intro).addTo(controller);

//Animation
let accelamount=0.1;
let delay=0;
let scrollpos = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos/1000;
})

setInterval(() => {
    delay+= (scrollpos - delay) *accelamount;
    video.currentTime = scrollpos;
}, 33.3)
