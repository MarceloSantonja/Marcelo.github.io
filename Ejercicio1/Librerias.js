'use strict';


function gestionarFicheroXML(xmlDoc){
	/*alert(xmlDoc)*/
	let capaVacia = document.querySelector("#ContenedorLibros");
	let libreria = xmlDoc.querySelectorAll("libreria");
	
	console.log(libreria.length);
	let libros = libreria[0].querySelectorAll("Libros");
	console.log(libros.textContent);

	for(let i=0; i<libreria.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + libreria[i].textContent + "</p>"
	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */



