// Obtener elementos del DOM Pagina
const CerrarPagina = document.getElementById('btcerrar');
const VentanaPagina = document.getElementById('videoModal');
const iframe = document.getElementById('frame-pagina');
const overlay = document.getElementById('overlay');

// Función para abrir la ventana flotante Pagina
function AbrirPagina(urlx) {
		const pageUrl = 'https://www.youtube.com/embed/' + urlx + '?vq=hd1080?rel=0&autoplay=1&controls=0'
		VentanaPagina.style.display = 'block';
		overlay.style.display = 'block';
		iframe.src = pageUrl; // Cargar la página en el iframe
}

// Función para cerrar la ventana flotante
function CerrarVentanaPagina() {
		VentanaPagina.style.display = 'none';
		overlay.style.display = 'none';
		iframe.src = ''; // Limpiar el iframe al cerrar
}

// Evento para cerrar la ventana flotante
CerrarPagina.addEventListener('click', CerrarVentanaPagina);

function iframeReady(iframeSelector, callback) {
		const iframe = document.querySelector(iframeSelector);

		if (!iframe) {
				console.error('El iframe no fue encontrado.');
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

// Usar la función iframeReady
iframeReady('#frame-pagina', function() {
		console.log('El iframe está listo.');
});

// Obtener referencias al iframe y al botón
const videoIframe = document.getElementById('frame-pagina');
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