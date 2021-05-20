
function gestionarFicheroXML(xmlDoc){
	alert(xmlDoc)
	let capaVacia = document.querySelector("#ContenedorLibros")
	let alumnos = xmlDoc.querySelectorAll("libro")
	for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i].textContent + "</p>"
	
}


	loadDocA("libros.xml","xml"); /*tenemos un objeto xml */
