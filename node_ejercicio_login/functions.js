var array = [];

var fs = require('fs'); //incluye los metodos de "fs"


function getContent (error, content){ //la variable error guarda el error, la variable contenido guarda contenido

	array = content.split("\r\n");
	checkUser("asun", "4321");
}

function checkUser(user, password){
	var arrayAux = array;
	var found = false;
	var i = 0;
	var lengthArray = arrayAux.length;

	console.log("User: "+user + " Password: "+password);
	do{
		arrayAux[i] = arrayAux[i].split(" ");
		console.log(arrayAux[i]);

		if(user === arrayAux[i][0] && password === arrayAux[i][1]){
			console.log("found");
			found = true;
		}
		i++;	
	}while(i<lengthArray && !found);
}

function getUsers(error, content){
	users = content.split("\r\n");

}

fs.readFile('users.txt', 'utf8', getContent); //Nombre del archivo, encoding, callback
//fs.readFile('login.txt', 'utf8', getUsers);
