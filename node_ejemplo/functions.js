fvar fs = require('fs');

function print (error, content){
	console.log(content);
}

fs.readFile('file.txt', 'utf8', print);