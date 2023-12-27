const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.remove('hidden');
        } else{
            entry.target.classList.remove('show');
            entry.target.classList.add('hidden');
        }
        
    })
})

const grid1 = document.querySelector('.grid-item-2');
const grid2 = document.querySelector('.grid-item-3');
const grid3 = document.querySelector('.grid-item-4');
const grid4 = document.querySelector('.grid-item-5');
observer.observe(grid1);
observer.observe(grid2);
observer.observe(grid3);
observer.observe(grid4);