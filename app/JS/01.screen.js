function setDynamicHeight() {

    let alto = window.innerHeight;
    let BOX = document.querySelector('.all');
    if (BOX) {
        BOX.style.minHeight = alto  + 'px';
    }
}

window.addEventListener('resize', setDynamicHeight);
window.addEventListener('load', setDynamicHeight);

setDynamicHeight();
