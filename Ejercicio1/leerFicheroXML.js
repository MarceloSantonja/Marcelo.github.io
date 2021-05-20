
function gestionarFicheroXML(xmlDoc){
	let capaVacia = document.querySelector("#ficheroXML")
	let alumnos = xmlDoc.querySelectorAll("alumno")
	for(let i=0; i<alumnos.length; i++)
		capaVacia.innerHTML = capaVacia.innerHTML + "<p>" + alumnos[i].textContent + "</p>"
	
}


	loadDocA("leerFicheroXML.xml","xml");
