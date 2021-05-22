'use strict';


function gestionarFicheroXML(xmlDoc){
	/*alert(xmlDoc)*/
	let capaVacia = document.querySelector("#ContenedorLibros");
	let libreria = xmlDoc.querySelectorAll("libreria");
	let nombre = xmlDoc.querySelectorAll("nombre");


	let libros = xmlDoc.querySelectorAll("libro");
	
	console.log(libreria.length);
	console.log(libreria[0].childElementCount);
	console.log(libreria[0].libro);
	console.log(libreria[0].querySelectorAll("libro"));
	console.log(libreria[0].querySelectorAll("precio"));
	let precios = libreria[0].querySelectorAll("precio");
	let precioMinimo = 0;
	
	
	
	for (let i = 0; i < precios.length; i++) {
		let precio = (Number)(precios[i].textContent);
		if (precioMinimo == 0) {
			precioMinimo = precio;	
		}else if (precioMinimo > precio) {
			precioMinimo = precio;		
		}
	}
	console.log(libreria[0].querySelectorAll("libro").length);

	console.log (precioMinimo);

	let textoIner = "";

	
	for (let i = 0; i < libreria.length; i++) {
		textoIner += `<h2>`+nombre[i-1].textContent+`</h2><div id = "Tabla">`;
		textoIner += `<div class="fila"> <div class="celda">ISBN</div> <div class="celda">titulo</div> <div class="celda">Nivel de profundidad</div> <div class="celda">autor</div> <div class="celda">editorial</div> <div class="celda">fecha de publicacion</div> <div class="celda">pagina Web</div ><div class="celda">precio</div></div>`;
		
		for(let j=0; j<libreria[i].length; j++){
		textoIner = textoIner + `<div class="fila">`;
		
		libros = libreria[i].querySelectorAll("libro");


		for(let k=0; k < libros[j].childElementCount; k++){
			textoIner +=	 `<div class="celda">`+libros[j].children[k].textContent+`</div>`;
		}
		
		textoIner += `</div>`;
		}
		textoIner += `</div>`;
	}
	
	capaVacia.innerHTML += textoIner;


	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */



