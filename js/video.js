const intro = document.querySelector('.intro');
const video = document.getElementById('video-desktop');
const videoMobile = document.getElementById('video-mobile');
videoMobile.playbackRate=2;
const text = intro.querySelector('h1');

const controller = new ScrollMagic.Controller();


window.addEventListener("scroll", function(){
    let elementHeight = videoMobile.offsetHeight;
    let scrollTop = this.window.scrollY;
    offset = Math.min(elementHeight,scrollTop);
    opacity = 1-offset/300;
    videoMobile.style.opacity = opacity;
})


//Scenes
// if (window.getComputedStyle(video).getPropertyValue("display")=="block"){
//     let scene = new ScrollMagic.Scene({
//         duration: 4800,
//         triggerElemnt: intro,
//         triggerHook: 0.5
//     }).addTo(controller).setPin(intro);
    
//     //Animation
//     let accelamount=0.1;
//     let delay=0;
//     let scrollpos = 0;
    
//     scene.on('update', e => {
//         scrollpos = e.scrollPos/1000;
//     })
    
//     setInterval(() => {
//         delay+= (scrollpos - delay) *accelamount;
//         video.currentTime = scrollpos;
//     }, 33.3)
// }

