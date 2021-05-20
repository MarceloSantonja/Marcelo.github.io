


function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc)
	let capaVacia = document.querySelector("#ContenedorLibros");
	let libros = xmlDoc.querySelectorAll("libreria");
	console.log(libros.textContent);
	console.log(libros.console);

	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */



