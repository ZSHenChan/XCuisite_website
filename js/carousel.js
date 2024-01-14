"use strict";

const carouselInit = function () {
  const cardWrapper = document.querySelector(".carousel-wrapper");
  const cardContainer = document.querySelector(".carousel .card-container");
  products.forEach((product, i) => {
    cardContainer.insertAdjacentHTML(
      "beforeend",
      `<div
                class="card text-center rounded-5 carousel-card"
                data-slide="${i}"
              >
                <img
                  src="${product.img}"
                  alt="${product.imgAlt}"
                  class="card-image-top rounded-top-5"
                />
                <div class="card-body justify-content-center">
                  <p class="card-title">${product.productName}</p>
                  <p class="card-text">${product.description}</p>
                  <div class="cta-links mt-4">
                    <a class="icon-link">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-symmetry-horizontal"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M13.5 7a.5.5 0 0 0 .24-.939l-11-6A.5.5 0 0 0 2 .5v6a.5.5 0 0 0 .5.5zm.485 2.376a.5.5 0 0 1-.246.563l-11 6A.5.5 0 0 1 2 15.5v-6a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 .485.376M11.539 10H3v4.658L11.54 10z"
                        />
                      </svg>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>`
    );
  });

  const carouselCards = document.querySelectorAll(".carousel-card");
  let curSlide = 1;

  const dots = document.querySelector(".dots");

  const createDots = function () {
    carouselCards.forEach((_, i) => {
      dots.insertAdjacentHTML(
        "beforeend",
        `<button class="dots-dot" data-slide="${i}" aria-label="carousel button"></button>`
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

  cardWrapper.addEventListener("click", function (e) {
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
