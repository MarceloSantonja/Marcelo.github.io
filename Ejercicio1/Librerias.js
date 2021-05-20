'use strict';


function gestionarFicheroXML(xmlDoc){
	/*alert(xmlDoc)*/
	let capaVacia = document.querySelector("#ContenedorLibros");
	let libreria = xmlDoc.querySelectorAll("libreria");
	
	console.log(libreria.length);
	let libros = libreria[0].querySelectorAll("Libros");
	console.log(libros.lenght);
	for(let i=0; i<libros.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libros[i].textContent + "</p>"
	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */



