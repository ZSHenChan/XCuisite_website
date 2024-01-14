"use strict";

const offers = function () {
  const cardsContainer = document.querySelector(".content-wrapper .row");

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
            <p class="card-title">${product.productName}</p>
            <p class="card-text">${product.description}</p>
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
            <p class="card-title">Ingredients</p>
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

  let modalProduct;
  let targetData;

  modalBtn.addEventListener("click", function () {
    getQtyFromModal();
  });

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
