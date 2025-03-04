const urls1 = 'json/listas.json';

function quitarselecionado() {
	const listItems = document.querySelectorAll('li');
	// selecionar cada elemento <li> y eliminar la clase seleccionado
	listItems.forEach(li => {
			li.classList.remove('seleccionado');
	});	
}

function seleccionx(listax) {
	// Obtener todos los elementos <li>
	const items = document.querySelectorAll(listax);

	// Agregar un evento click a cada <li>
	items.forEach(item => {
			item.addEventListener('click', () => {
				quitarselecionado();
				// Agregar la clase 'seleccionado' al elemento citado
				item.classList.add('seleccionado');
			});
	});
}

//* Estraer narrativa del clima para los proximos 3 dias de archivo json almacenado en la constante (url2)   
async function mostrarlistas(elementox, const_ch, listax) {
  await fetch(`${urls1}`)
  .then(function(resp) { return resp.json() })
  .then(function(data) {

	const channelList = document.getElementById(elementox);

	let categoria = const_ch
	const lista = data[categoria];

	lista.forEach(sitio => {
		const chNombre = sitio.nombre;
		const chdescrip = sitio.descrip;
		const chUrl = sitio.url;

		const listItem = document.createElement('li');
		listItem.innerHTML = `<a onclick="AbrirVideo('${chUrl}')">${chNombre}</a>`;
		channelList.appendChild(listItem);
	});		

	seleccionx(listax);
  
})}

mostrarlistas('lista-yt_trance', 'yt_trance', '#lista-yt_trance li'); 
mostrarlistas("lista-yt_80s90s", 'yt_80s90s', '#lista-yt_80s90s li');
mostrarlistas("lista-yt_chillout", 'yt_chillout', '#lista-yt_chillout li');
mostrarlistas("lista-yt_relax", 'yt_relax', '#lista-yt_relax li');
mostrarlistas("lista-vd_eurodance", 'vd_eurodance', '#lista-vd_eurodance li');
mostrarlistas("lista-vd_70s80s90s", 'vd_70s80s90s', '#lista-vd_70s80s90s li');
mostrarlistas("lista-vd_trance", 'vd_trance', '#lista-vd_trance li');
