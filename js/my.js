var guessArray = [];

var maxGuesses = 5;

var answer = Math.floor((Math.random() * 100) + 1);

var lowArray = ["Too little nuggets. Guess more!",
				"C'mon, there are more nuggets than that!",
				"That box is bigger than it looks...",
				"You underestimate the number of nuggets"];

var highArray = ["Too many nuggets. Guess less!",
				"Woh, you guessed too many nuggets!!",
				"That box isn't that big...",
				"You can't fit THAT many nuggets"];

//Submit Click--------------------------------------------------------------------------

$("#submit1").on("click", function(event){

	event.preventDefault();

	var tempGuess = $("#guess").val();

	guessArray.push(tempGuess);

	if (guessArray.length < maxGuesses){
		if (answer == tempGuess){

			$("#status").text("Congrats you win! You guessed right!!!"); 
		}
		else if (answer - tempGuess < 0){
			$("#countGuess").text(maxGuesses - guessArray.length + " Guesses Left")
			$("#status").text(highArray[Math.floor(Math.random()*highArray.length)]); 
		}
		else{
			$("#countGuess").text(maxGuesses - guessArray.length + " Guesses Left")
			$("#status").text(lowArray[Math.floor(Math.random()*lowArray.length)]); 
		}
	}

	else{
		$("#countGuess").text(maxGuesses - guessArray.length + " Guesses Left")
		$("#status").text("You couldn't guess the nuggets. Please play again!"); 
		//A button that resets and plays again
	}
});

//Reset Button--------------------------------------------------------------------------

$("#resetbtn").on("click", function(event){
	$("#status").text("You have " + maxGuesses + " more tries. Thanks for playing again!");
	var guessArray = [];
	var answer = Math.floor((Math.random() * 100) + 1);
	$("#countGuess").text(maxGuesses - guessArray.length + " Guesses Left")
});





