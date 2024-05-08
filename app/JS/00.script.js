function importarScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

const urlsScripts = [
    './JS/01.screen.js',
    './JS/02.theme.js',
    './JS/03.menu.js'
];

async function importarScripts() {
    for (let url of urlsScripts) {
        try {
            await importarScript(url);
            console.log(`Script ${url} importado correctamente.`);
        } catch (error) {
            console.error(`Error al importar el script ${url}.`, error);
        }
    }
}

window.onload = () => {
    importarScripts();
};
