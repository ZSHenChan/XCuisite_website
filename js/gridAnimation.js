const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        }
        
    })
})

const captionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('fadeInUp');
        } 
        
    })
})
const textLineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
        
    })
})

const grid1 = document.querySelector('.grid-item-2');
const grid2 = document.querySelector('.grid-item-7');
const grid3 = document.querySelector('.grid-item-4');
const grid4 = document.querySelector('.grid-item-5');
const caption = document.getElementById("grid-gallery-caption");
observer.observe(grid1);
observer.observe(grid2);
observer.observe(grid3);
observer.observe(grid4);
captionObserver.observe(caption);


