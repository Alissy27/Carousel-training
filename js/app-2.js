(function () {
    const images = document.querySelectorAll('.sliderTwo .slider-line-two .picTwo');
    const sliderLineTwo = document.querySelector('.slider-line-two');
    let count = 0;
    let width;


function init(){
console.log('resize');
width = document.querySelector('.sliderTwo').offsetWidth;
sliderLineTwo.style.width = width * images.length + 'px';
images.forEach( item => {
    item.style.width = width + 'px';
    item.style.height = 'auto';
});
rollSlider();
}

window.addEventListener('resize', init);
init()

document.querySelector('.slider-next-two').addEventListener('click', function(){
    count++;
    
if (count >= images.length) {
    count = 0;
}

rollSlider()
})

document.querySelector('.slider-prev-two').addEventListener('click', function(){
    count--;
    
if (count < 0) {
    count = images.length - 1;
}

rollSlider()
})


function rollSlider() {
    sliderLineTwo.style.transform = 'translate(-' + count * width + 'px)'
}

    })();