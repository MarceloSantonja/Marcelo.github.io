'use strict';


function gestionarFicheroTXT(txtDoc){
	console.log(txtDoc);
	let capaVacia = document.querySelector("#CanalChat");
	let chat = txtDoc.split(`\n`);
	for (let i = 0; i < chat.length; i++) {
		if (i%2 ==0) {
			capaVacia = capaVacia + `<p style="background-color:wheat; text-align: left;">`+ chat[i]+ `</p>`;
		}else{
			capaVacia = capaVacia + `<p style="background-color: aquamarine; text-align: right;">`+ chat[i]+ `</p>`;
		}
	}
	
}


	loadDocA("chat.txt","txt"); 



