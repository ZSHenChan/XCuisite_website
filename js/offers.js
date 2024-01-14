"use strict";
const offers = function () {
  const cardsContainer = document.querySelector(".content-wrapper .row");

  const product0 = {
    productName: "Strawberry&nbsp;Indulgence",
    description: "Strawberry Beast",
    img: "/images/products/strawberry-indulgence.jpg",
    thumbnail: "/images/products/strawberry-indulgence_tn.jpg",
    imgAlt: "Strawberry Indulgence",
    ingredients: "strawberry",
  };
  const product1 = {
    productName: "Hazelnut",
    description: "Nuts&nbsp;Kraze",
    img: "/images/products/hazelnut.jpg",
    thumbnail: "/images/products/hazelnut_tn.jpg",
    imgAlt: "Hazelnut Doughnut",
    ingredients: "sugar",
  };
  const product2 = {
    productName: "Kobby&nbsp;Mendez",
    description: "For&nbsp;Him",
    img: "/images/products/kobby-mendez.jpg",
    thumbnail: "/images/products/kobby-mendez_tn.jpg",
    imgAlt: "Kobby Mendez Doughnut",
    ingredients: "cookie",
  };
  const product3 = {
    productName: "Lore&nbsp;Schodts",
    description: "Assorted&nbsp;Caramel",
    img: "/images/products/caramel.jpg",
    thumbnail: "/images/products/caramel_tn.jpg",
    imgAlt: "Caramel icing doughnut",
    ingredients: "caramel",
  };
  const product4 = {
    productName: "Matcha&nbsp;Deluxe",
    description: "Matcha&nbsp;Icing",
    img: "/images/products/matcha.jpg",
    thumbnail: "/images/products/matcha_tn.jpg",
    imgAlt: "Match icing doughnut",
    ingredients: "matcha",
  };
  const product5 = {
    productName: "Dark&nbsp;Forest",
    description: "Dark&nbsp;Chocolate",
    img: "/images/products/dark-chocolate.jpg",
    thumbnail: "/images/products/dark-chocolate_tn.jpg",
    imgAlt: "Dark Forest doughnut",
    ingredients: "98% chocolate",
  };
  const product6 = {
    productName: "Towfuqi",
    description: "Colourful&nbsp;Carade",
    img: "/images/products/towfiqu.jpg",
    thumbnail: "/images/products/towfiqu_tn.jpg",
    imgAlt: "doughnut with colourful sprinkles",
    ingredients: "sugar",
  };
  const product7 = {
    productName: "Classic&nbsp;Schodts",
    description: "Classic&nbsp;.Not Basic",
    img: "/images/products/classic-choc.jpg",
    thumbnail: "/images/products/classic-choc_tn.jpg",
    imgAlt: "classic chocolate doughnut",
    ingredients: "sugar",
  };
  const product8 = {
    productName: "Black Magic",
    description: "Avada Kedavra",
    img: "/images/products/black-magic.jpg",
    thumbnail: "/images/products/black-magic_tn.jpg",
    imgAlt: "dark chocolate doughnut with self-made cream",
    ingredients: "sugar",
  };
  const product9 = {
    productName: "Oreo&nbsp;Bonanza",
    description: "Kids&nbsp;Favourite",
    img: "/images/products/oreo.jpg",
    thumbnail: "/images/products/oreo_tn.jpg",
    imgAlt: "oreo doughnut",
    ingredients: "sugar",
  };
  const product10 = {
    productName: "Banana Indulgence",
    description: "Natural&nbsp;Sweetness",
    img: "/images/products/banana.jpg",
    thumbnail: "/images/products/banana_tn.jpg",
    imgAlt: "banana doughnut",
    ingredients: "sugar",
  };
  const product11 = {
    productName: "Scary Chocolate",
    description: "Halloween&nbsp;Special",
    img: "/images/products/halloween-choc.jpg",
    thumbnail: "/images/products/halloween-choc_tn.jpg",
    imgAlt: "halloween special doughnut",
    ingredients: "sugar",
  };
  const product12 = {
    productName: "Raspberry",
    description: "Stay&nbsp;Pretty",
    img: "/images/products/raspberry.jpg",
    thumbnail: "/images/products/raspberry_tn.jpg",
    imgAlt: "raspberry doughnut",
    ingredients: "sugar",
  };

  const products = [
    product0,
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
  ];

  products.forEach((product, i) => {
    cardsContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="col-section reveal">
      <div class="card-wrapper" data-product="${i}">
        <div class="card text-center rounded-5  face front">
          <img
            src="${product.img}"
            alt="${product.imgAlt}"
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
            alt="${product.imgAlt}"
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
    </div>`
    );
  });

  const cardBtns = document.querySelectorAll(".card-wrapper .btn");
  const cardWrapper = document.querySelectorAll(".card-wrapper");
  const inCartWrapper = document.querySelector(".in-cart-wrapper");
  const modal = document.querySelector(".modal");
  const modalBtn = modal.querySelector(".modal-btn");
  const modalItemName = modal.querySelector(".modal-item-name");
  const modalImg = modal.querySelector(".card-img-top");
  const cartQty = document.getElementById("cart-qty");
  let modalProduct;
  let targetData;
  let itemQtyTracker = 0;
  modalBtn.addEventListener("click", function () {
    getQtyFromModal();
  });

  const displayCart = function () {
    inCartWrapper.innerHTML = "";

    let itemQty = 0;
    Object.entries(localStorage).forEach((item) => {
      const product = products[+item[0]];
      const qty = +item[1];
      itemQty += qty;
      inCartWrapper.insertAdjacentHTML(
        "beforeend",
        `<li class="item row">
          <span class="item-img col-4">
            <img
              src="${product.thumbnail}"
              alt="${product.imgAlt}"
              class="rounded top-5"
              width="64"
              height="64"
            />
          </span>
          <span class="item-name col-8"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></span
          >
        </li>`
      );
    });
    itemQtyTracker = itemQty;
    cartQty.innerHTML = itemQtyTracker;
  };

  const addToCart = function (qty) {
    const prd = window.localStorage.getItem(targetData);
    if (qty <= 0) return;
    if (prd == null) {
      window.localStorage.setItem(targetData, qty);
    } else {
      const oldQty = +window.localStorage.getItem(targetData);
      window.localStorage.setItem(targetData, qty + oldQty);
    }
    displayCart();
  };

  const getQtyFromModal = function () {
    const qty = modal.querySelector(".modal-item-qty");
    modal.classList.add("hidden");
    const quantity = qty.value;
    addToCart(+quantity);
  };

  function modalWindow() {
    modal.classList.remove("hidden");
    modalImg.setAttribute("src", modalProduct.img);
    modalItemName.innerHTML = modalProduct.productName;
  }

  cardWrapper.forEach((card) => {
    card.addEventListener("click", function (e) {
      e.preventDefault();
      const target = e.target;
      if (
        target.classList.contains("card-image-top") ||
        target.classList.contains("icon-link")
      ) {
        target.closest(".card-wrapper").classList.toggle("is-flipped");
      } else if (target.classList.contains("btn")) {
        targetData = target.closest(".card-wrapper").dataset.product;
        modalProduct = products[targetData];
        modalWindow();
      }
    });
  });
};

offers();
