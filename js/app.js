const carouselInit = function () {
  const cardContainer = document.querySelector(".carousel-wrapper");
  const carouselCards = document.querySelectorAll(".carousel-card");
  let curSlide = 1;

  const dots = document.querySelector(".dots");

  const createDots = function () {
    carouselCards.forEach((_, i) => {
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}"></button>`
      );
    });
  };

  const updateDot = function (slide) {
    document
      .querySelectorAll(".dots-dot")
      .forEach((dot) => dot.classList.remove("dots-dot-active"));
    document
      .querySelector(`.dots-dot[data-slide="${slide}"]`)
      .classList.add("dots-dot-active");
  };

  const showSlide = function (slide) {
    carouselCards.forEach((card, i) => {
      card.style.transform = `translateX(${(i - slide) * 104}%)`;
      card.classList.remove("carousel-card-active");
    });
    document
      .querySelector(`.carousel-card[data-slide="${slide}"]`)
      .classList.add("carousel-card-active");
    updateDot(slide);
  };

  dots.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("dots-dot")) {
      curSlide = e.target.dataset.slide;
      showSlide(curSlide);
    }
  });

  cardContainer.addEventListener("click", function (e) {
    const targetCard = e.target.closest(".carousel-card");
    if (targetCard == null) return;
    curSlide = targetCard.dataset.slide;
    showSlide(curSlide);
  });

  const init = function () {
    createDots();
    showSlide(curSlide);
  };

  init();
};

carouselInit();
