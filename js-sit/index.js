const deletePx = /px$/g;
window.addEventListener('load', loading, false)

function loading() {
    let btnPrev = previous;
    let btnNext = next;
    btnPrev.addEventListener('click', choosePrev, true)
    btnNext.addEventListener('click', chooseNext, false)
}

function chooseNext() {
    let sliderStyle = getComputedStyle(document.querySelector('.slider-track'));
    let position = sliderStyle.left.replace(deletePx, '');
    const sliderWidth = sliderStyle.width.replace(deletePx, '');
    if (sliderWidth > 1656) {
        if (position > -1120 && position % 380 == 0) {
            document.querySelector('.slider-track').style.left = (Number(position) - 380) + 'px';
        }
        else if (position <= -1120) {
            document.querySelector('.slider-track').style.left = '0px'
        }
    } else {
        if (position > -830 && position % 281 == 0) {
            document.querySelector('.slider-track').style.left = (Number(position) - 281) + 'px';
        }
        else if (position <= -830) {
            document.querySelector('.slider-track').style.left = '0px'
        }
    }

}

function choosePrev() {
    let sliderStyle = getComputedStyle(document.querySelector('.slider-track'));
    let position = sliderStyle.left.replace(deletePx, '');
    const sliderWidth = sliderStyle.width.replace(deletePx, '');
    if (sliderWidth > 1656) {
        if (position < 0 && position % 380 == 0) {
            document.querySelector('.slider-track').style.left = (Number(position) + 380) + 'px';
        }
        else if (position >= 0) {
            document.querySelector('.slider-track').style.left = '-1140px'
        }
    } else{
        if (position < 0 && position % 281 == 0) {
            document.querySelector('.slider-track').style.left = (Number(position) + 281) + 'px';
        }
        else if (position >= 0) {
            document.querySelector('.slider-track').style.left = '-843px'
        }
    }
}