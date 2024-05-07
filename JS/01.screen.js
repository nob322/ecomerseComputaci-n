function setDynamicHeight() {

    let alto = window.innerHeight;
    // const Header = document.querySelector('.header');
    // let headerHeight = Header.offsetHeight;
    let BOX = document.querySelector('.all');
    if (BOX) {
        // BOX.style.height = alto-headerHeight + 'px';
        BOX.style.minHeight = alto  + 'px';
    }
}

window.addEventListener('resize', setDynamicHeight);
window.addEventListener('load', setDynamicHeight);

setDynamicHeight();
