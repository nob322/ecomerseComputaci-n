
const botonModoOscuro = document.getElementById('btn_modo');

botonModoOscuro.addEventListener('click', () => {
    const modoActual = document.documentElement.getAttribute('data-modo');
    const nuevoModo = modoActual === 'claro' ? 'oscuro' : 'claro';
    document.documentElement.setAttribute('data-modo', nuevoModo);
});

function cambiarModo(modo) {
    document.documentElement.setAttribute('data-modo', modo);
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    cambiarModo('oscuro');
} else {
    cambiarModo('claro');
}


