/* Author: 

*/
const progressBar = document.querySelector('.progress-bar');
const prev = document.querySelector('.previous-button > a');
const next = document.querySelector('.next-button > a');
const pages = document.querySelectorAll('.pagination > li');

var currentActive = 1;

next.addEventListener('click',() => {
    currentActive++;
    if(currentActive > pages.length){
        currentActive = pages.length;
    }
    update();
})

prev.addEventListener('click',() => {
     
    if(currentActive <= pages.length){
        if(currentActive === 1){
            currentActive = 1
        }else{
            currentActive--; 

        }
    }
    update();
})

function update(){
    pages.forEach((page, index) => {
        if(index < currentActive){
            page.classList.add('active')
        }else{
            page.classList.remove('active')
        }
    })


    progressBar.style.width = (activePages.length-1) / (pages.length-1)*100 + '%';


    if(currentActive === 1){
        prev.classList.add('disabled');
    }else if(currentActive === pages.length){
        next.classList.add('disabled');
    }else{
        prev.classList.remove('disabled');
        next.classList.remove('disabled');
    }
}



















