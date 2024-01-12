const introSectionFunc = function () {
  const intro = document.querySelector(".intro");
  const video = document.getElementById("video-desktop");
  const videoMobile = document.getElementById("video-mobile");
  const text = intro.querySelector("h1");
  const introCtaBtn = document.querySelector(".intro-cta-btn");
  const postIntro = document.querySelector(".post-intro");
  // const controller = new ScrollMagic.Controller();

  window.addEventListener("scroll", function () {
    let elementHeight = video.offsetHeight;
    let scrollTop = this.window.scrollY;
    offset = Math.min(elementHeight, scrollTop);
    opacity = 1 - offset / 300;
    video.style.opacity = opacity;
  });

  window.addEventListener("scroll", function () {
    let elementHeight = videoMobile.offsetHeight;
    let scrollTop = this.window.scrollY;
    offset = Math.min(elementHeight, scrollTop);
    opacity = 1 - offset / 300;
    videoMobile.style.opacity = opacity;
  });

  const introCtaBtnAnimation = function (entries) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      introCtaBtn.classList.remove("expand-btn");
      introCtaBtn.classList.add("contract-btn");
    } else {
      introCtaBtn.classList.add("expand-btn");
      introCtaBtn.classList.remove("contract-btn");
    }
  };

  const introCtaObserver = new IntersectionObserver(introCtaBtnAnimation, {
    root: null,
    threshold: 0.1,
  });
  introCtaObserver.observe(postIntro);

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
};

introSectionFunc();
