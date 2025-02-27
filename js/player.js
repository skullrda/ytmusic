// Función para abrir la ventana flotante del video
function AbrirVideo(urlx) {
		const pageUrl = 'https://www.youtube-nocookie.com/embed/' + urlx + '?vq=hd1080&autoplay=1&controls=1&iv_load_policy=3&origin=https://skullrda.github.io/ytmusic/'
		document.getElementById('videoModal').style.display = 'block';
		document.getElementById('overlay').style.display = 'block';
		document.getElementById('frame-video').src = pageUrl; // Cargar la página en el iframe
}

// Función para cerrar la ventana flotante
function CerrarVentanaModal() {
		document.getElementById('videoModal').style.display = 'none';
		document.getElementById('overlay').style.display = 'none';
		document.getElementById('frame-video').src = ''; // Limpiar el iframe al cerrar
}

// Evento para cerrar la ventana flotante
document.getElementById('btcerrar').addEventListener('click', CerrarVentanaModal);

// Usar la función iframeReady
iframeReady('#frame-pagina', function() {
		console.log('El iframe está listo.');
});
