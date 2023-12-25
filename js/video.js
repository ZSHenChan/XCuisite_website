const intro = document.querySelector('.intro');
const video = document.getElementById('video-desktop');
const text = intro.querySelector('h1');

const controller = new ScrollMagic.Controller();

//Scenes
if (window.getComputedStyle(video).getPropertyValue("display")=="block"){
    let scene = new ScrollMagic.Scene({
        duration: 4800,
        triggerElemnt: intro,
        triggerHook: 0.5
    }).addTo(controller).setPin(intro);
    
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
}

