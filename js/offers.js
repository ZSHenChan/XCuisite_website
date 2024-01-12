"use strict";

function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}
window.addEventListener("scroll", reveal);

const cardBtns = document.querySelectorAll(".card-wrapper .btn");
const cardsContainer = document.querySelector(".content-wrapper .row");
const cardWrapper = document.querySelectorAll(".card-wrapper");

const product1 = {
  productName: "Strawberry&nbsp;Indulgence",
  description: "Strawberry Beast",
  img: "/images/products/strawberry-indulgence.jpg",
  ingredients: "strawberry",
};
const product2 = {
  productName: "Kobby&nbsp;Mendez",
  description: "For&nbsp;Him",
  img: "/images/products/kobby-mendez.jpg",
  ingredients: "cookie",
};
const product3 = {
  productName: "Lore&nbsp;Schodts",
  description: "Assorted&nbsp;Caramel",
  img: "/images/products/caramel.jpg",
  ingredients: "caramel",
};
const product4 = {
  productName: "Matcha&nbsp;Deluxe",
  description: "Matcha&nbsp;Icing",
  img: "/images/products/matcha.jpg",
  ingredients: "matcha",
};
const product5 = {
  productName: "Dark&nbsp;Forest",
  description: "Dark&nbsp;Chocolate",
  img: "/images/products/dark-chocolate.jpg",
  ingredients: "98% chocolate",
};
const product6 = {
  productName: "Towfuqi",
  description: "Colourful&nbsp;Carade",
  img: "/images/products/towfiqu.jpg",
  ingredients: "sugar",
};
const product7 = {
  productName: "Classic&nbsp;Schodts",
  description: "Classic&nbsp;.Not Basic",
  img: "/images/products/classic-choc.jpg",
  ingredients: "sugar",
};
const product8 = {
  productName: "Black Magic",
  description: "Avada Kedavra",
  img: "/images/products/black-magic.jpg",
  ingredients: "sugar",
};
const product9 = {
  productName: "Oreo&nbsp;Bonanza",
  description: "Kids&nbsp;Favourite",
  img: "/images/products/oreo.jpg",
  ingredients: "sugar",
};
const product10 = {
  productName: "Banana",
  description: "Natural&nbsp;Sweetness",
  img: "/images/products/banana.jpg",
  ingredients: "sugar",
};
const product11 = {
  productName: "Scary Chocolate",
  description: "Halloween&nbsp;Special",
  img: "/images/products/halloween-choc.jpg",
  ingredients: "sugar",
};
const product12 = {
  productName: "Raspberry",
  description: "Stay&nbsp;Pretty",
  img: "/images/products/raspberry.jpg",
  ingredients: "sugar",
};
const product13 = {
  productName: "Hazelnut",
  description: "Nuts&nbsp;Kraze",
  img: "/images/products/hazelnut.jpg",
  ingredients: "sugar",
};

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6,
  product7,
  product8,
  product9,
  product10,
  product11,
  product12,
  product13,
];

products.forEach((product, i) => {
  cardsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="col">
              <div class="col-section">
                <div class="card-wrapper" data-product="${i + 1}">
                  <div class="card text-center rounded-5 reveal face front">
                    <img
                      src="${product.img}"
                      alt=""
                      class="card-image-top rounded-top-5"
                    />
                    <div class="card-body justify-content-center">
                      <h4 class="card-title">${product.productName}</h4>
                      <h6 class="card-text">${product.description}</h6>
                      <div class="cta-links mt-4">
                        <a class="icon-link" onclick="">
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
                          Ingredients
                        </a>
                        <button class="btn btn-primary text-secondary">
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="card text-center rounded-5 face back">
                    <img
                      src="${product.img}"
                      alt=""
                      class="card-image-top rounded-top-5"
                      style="transform: scaleX(-1)"
                    />
                    <div class="card-body justify-content-center">
                      <h4 class="card-title">Ingredients</h4>
                      <p>${product.ingredients}</p>
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
                          Back
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`
  );
});

cardWrapper.forEach((card) => {
  card.addEventListener("click", function (e) {
    e.preventDefault();
    const target = e.target;
    console.log(e.target);
    if (
      target.classList.contains("card-image-top") ||
      target.classList.contains("icon-link")
    ) {
      target.closest(".card-wrapper").classList.toggle("is-flipped");
    } else if (target.classList.contains("btn")) {
      console.log(target.dataset.product);
      console.log("button clicked");
    } else {
      console.log("nothing");
    }
  });
});
