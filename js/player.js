// Función para abrir la ventana flotante del video
function AbrirVideo(urlx) {
    const pageUrl = 'https://www.youtube-nocookie.com/embed/' + urlx + '?vq=hd1080&autoplay=1&controls=1&iv_load_policy=3&origin=https://skullrda.github.io/ytmusic/'
    document.getElementById('videoModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('frame-video').src = pageUrl; // Cargar la página en el iframe
}

// ********************************************************
// Función para cerrar la ventana flotante
function CerrarVentanaModal() {
    document.getElementById('videoModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('frame-video').src = ''; // Limpiar el iframe al cerrar
}

// Evento para cerrar la ventana flotante
document.getElementById('btcerrar').addEventListener('click', CerrarVentanaModal);

// ********************************************************
function iframeReady(selector, callback) {
    const iframe = document.querySelector(selector);

    if (!iframe) {
            console.error(`No se encontró ningún iframe con el selector: ${selector}`);
            return;
    }

    if (iframe.contentDocument && iframe.contentDocument.readyState === 'complete') {
            callback();
    } else {
            iframe.addEventListener('load', function() {
                    callback();
            });
    }
}

iframeReady('#frame-video', function() {
    console.log('El iframe está listo.');
});

// ********************************************************
// Crear evento para el boton pantalla completa del video
// Obtener referencias al iframe y al botón
const videoIframe = document.getElementById('frame-video');
const fullscreenButton = document.getElementById('fullpantalla');

// Agregar evento al botón
fullscreenButton.addEventListener('click', () => {
// Verificar si el navegador soporta el modo de pantalla completa
if (videoIframe.requestFullscreen) {
    videoIframe.requestFullscreen();
} else if (videoIframe.mozRequestFullScreen) { // Firefox
    videoIframe.mozRequestFullScreen();
} else if (videoIframe.webkitRequestFullscreen) { // Chrome, Safari y Opera
    videoIframe.webkitRequestFullscreen();
} else if (videoIframe.msRequestFullscreen) { // Internet Explorer/Edge
    videoIframe.msRequestFullscreen();
}
});