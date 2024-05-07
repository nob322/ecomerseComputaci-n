const botonMenu = document.getElementById('btn_menu');
const Menu = document.getElementById('aside');
const asideMenu = document.getElementsByClassName('aside_menu_a');

for (const element of asideMenu) {
    element.addEventListener('click',()=>{
        Menu.classList.toggle('hidden');
    })    
}

botonMenu.addEventListener('click', () => {
    Menu.classList.toggle('hidden');
});
