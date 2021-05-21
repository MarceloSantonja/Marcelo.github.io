'use strict';


function gestionarFicheroXML(xmlDoc){
	/*alert(xmlDoc)*/
	let capaVacia = document.querySelector("#ContenedorLibros");
	let libreria = xmlDoc.querySelectorAll("libreria");
	let nombre = xmlDoc.querySelectorAll("nombre");
	console.log(nombre[0].textContent);
	

	let libros = xmlDoc.querySelectorAll("libro");

	console.log(libros[0].childNodes.length);
	console.log(libros[0].childElementCount );
	console.log(libros[0].children[1]);



	capaVacia.innerHTML += `<div id = "Tabla">`;
	for (let i = 1; i <= libreria.length; i++) {
		capaVacia.innerHTML += `<div id= "Libreria">`+nombre[i-1].textContent+`</div><div class="fila"> <div class="celda">ISBN</div> <div class="celda">titulo</div> <div class="celda">Nivel de profundidad</div> <div class="celda">autor</div> <div class="celda">editorial</div> <div class="celda">fecha de publicacion</div> <div class="celda">pagina Web</div ><div class="celda">precio</div></div>`;

		for(let j=1; j<=3; j++){
		capaVacia.innerHTML = capaVacia.innerHTML + `<div class="fila">`;
		
		for(let k=0; k<libros[(i*j)-1].childElementCount; k++){
			capaVacia.innerHTML +=	 `<div class="celda">`+libros[(i*j)-1].children[k].textContent+`</div>`;
		}
		
		capaVacia.innerHTML += `</div>`;
		}
		
	}
	capaVacia.innerHTML += `</div>`;

	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */



