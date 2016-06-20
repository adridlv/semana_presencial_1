
function Hangman(hiddenWord){
	this.hiddenWord = hiddenWord.toUpperCase(),
	this.wordToGuess ="",
	this.charactersUsed = [],
	this.numberOfTries = 6;
}

Hangman.prototype.initializeWordtoGuess = function(){
	for(var i = 0; i<this.hiddenWord.length; i++){
		this.wordToGuess += "_";
	}
}

Hangman.prototype.guess = function(word){
	if(this.numberOfTries>0){
		if(!checkIfCharacterUsed(this.charactersUsed, word)){
			var fail = true;
			if(word.length===1){
				for(var i = 0; i<this.hiddenWord.length;i++){
					if(this.hiddenWord[i] === word.toUpperCase()){
						this.wordToGuess = this.wordToGuess.substring(0,i) + word.toUpperCase() + this.wordToGuess.substring(i+1,this.wordToGuess.length);
						fail = false;
					}
				}

				this.charactersUsed.push(word);

			}else{
				if(word.length === this.hiddenWord.length){
					if(word.toUpperCase() === this.hiddenWord){
						this.wordToGuess = word.toUpperCase();
						fail = false;
						console.log("Has ganado");
					}
				}
			}
			if(fail)
				this.numberOfTries--;
			checkIfWin(this.hiddenWord, this.wordToGuess, this.numberOfTries);
		}
	}
}

function checkIfCharacterUsed(array, character){
	for(var i = 0; i<array.length; i++){
		if(character === array[i])
			return true;
	}
	return false;
}

function checkIfWin(hiddenWord, wordToGuess, numberOfTries){
	if(hiddenWord === wordToGuess)
		console.log("Ha ganado!");
	else if(numberOfTries === 0)
		console.log("Ha perdido!");
}

function updateText(){
	document.getElementsByClassName("showWord")[0].innerText = hangman.wordToGuess;
}

function updateCharactersUsed(){
	document.getElementsByClassName("arrayCharacters")[0].innerText
}

var text = "pePiTo";
var hangman = new Hangman(text);
hangman.initializeWordtoGuess();

window.onload = function(){
	var setGuess = document.getElementsByClassName("setGuess")[0];
	updateText();
	
	setGuess.addEventListener("keypress",function(e){
		if(e.keyCode === 13){
			hangman.guess(setGuess.value);
			updateText();
			setGuess.value = "";
		}
	});
};