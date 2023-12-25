const cartIcon = document.getElementById("cart-icon");
const globalCurtain = document.getElementById("cart-curtain");
const globalCurtainBottom = globalCurtain.nextElementSibling;
  
cartIcon.addEventListener('click', () =>{
    globalCurtain.classList.add("curtain-flyout");
    globalCurtainBottom.classList.add("curtain-bottom-flyout");
    
})

globalCurtainBottom.addEventListener('mouseover', () =>{
    globalCurtainBottom.classList.remove("curtain-bottom-flyout");
    globalCurtain.classList.remove("curtain-flyout");
});
