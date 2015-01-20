$(document).on('ready', function() {

	$( "button.test" ).click(function() {
		console.log("The Button was clicked.");
		$( "body" ).append("<p>This is appended to the body.</p>")
	});

	$( "button.showh1" ).click(function() {
		$( "body" ).prepend("<h1>This is a header!</h1>");
		$( "body" ).append("<p>That's a nice h1 you've got there</p>")
	})
	$( "button.list" ).click(function() {
		$( "body" ).append("<ul><li>Bass</li><li>Treble</li><li>Mids</li></ul>")
	
	})
  
});