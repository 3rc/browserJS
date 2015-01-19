$(document).on('ready', function() {

	var word = prompt("Enter any word:");
	alert("The word you entered was:\n " + word);
	alert("The number of characters in your word is:\n " + word.length);
	alert("The third character of your word is:\n " + word[2]);
	alert("Your word uppercase:\n " + word.toUpperCase());
	alert("Your word lowercase:\n " + word.toLowerCase());
	alert("In a sentence:\n Man, those are some really nice " + word + "s!");
	alert("Subword:\n " + word[1] + word[2] + word[3]);
});