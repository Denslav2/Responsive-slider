const img = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * img.length + 'px';
    img.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);

init();

document.querySelector('.prev').addEventListener('click', function(){
    count--;
    if(count < 0) {
        count = img.length - 1;
    }
    rollSlider()
});

document.querySelector('.next').addEventListener('click', function(){
    count++;
    if(count >= img.length) {
        count = 0;
    }
    rollSlider()
});

function rollSlider(){
    sliderLine.style.transform = 'translate(-'+count*width+'px)';
}
