const cartIcon = document.getElementById("cart-icon");
const globalCurtain = document.getElementById("cart-curtain");
const globalCurtainBottom = globalCurtain.nextElementSibling;

const curtainFlyout = function () {
  globalCurtain.classList.add("curtain-flyout");
  globalCurtainBottom.classList.add("curtain-bottom-flyout");
};
cartIcon.addEventListener("click", curtainFlyout);

const curtainFlyoutDisable = function () {
  globalCurtainBottom.classList.remove("curtain-bottom-flyout");
  globalCurtain.classList.remove("curtain-flyout");
};
globalCurtainBottom.addEventListener("mouseover", curtainFlyoutDisable);

const cartQty = document.getElementById("cart-qty");
const inCartWrapper = document.querySelector(".in-cart-wrapper");
let itemQtyTracker = 0;

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
          <span class="item-img col-1">
            <img
              src="${product.thumbnail}"
              alt="${product.imgAlt}"
              class="rounded top-5"
              width="64"
              height="64"
            />
          </span>
          <span class="item-name col-6"
            >${product.productName}<br><span class="item-qty"> x${qty}</span></span
          >
        </li>`
    );
  });

  itemQtyTracker = itemQty;
  if (itemQty == 0)
    inCartWrapper.insertAdjacentHTML(
      "beforeend",
      `<span class="h4 mt-3">Your cart is empty</span>`
    );
  else cartQty.innerHTML = itemQtyTracker;
};

displayCart();
