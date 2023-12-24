const cartIcon = document.getElementById("cart-icon");
const globalCurtain = document.getElementById("global-curtain");
const globalCurtainBottom = globalCurtain.nextElementSibling;
  
cartIcon.addEventListener('mouseover', () =>{
    globalCurtain.classList.add("curtain-flyout");
    globalCurtainBottom.classList.add("curtain-bottom-flyout");
    
})

cartIcon.addEventListener('mouseout', () =>{
    globalCurtainBottom.classList.remove("curtain-bottom-flyout");
    globalCurtain.classList.remove("curtain-flyout");
});

