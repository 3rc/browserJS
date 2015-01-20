$(document).on('ready', function() {

	$( "p" ).hover(function() {
		$( this ).toggleClass("hover")
	});

	$("h1, h2").hover(function() {
		$(this).append("!");
	});

	$("a").click(function() {
		var follow = confirm("Navigate away from this page?");
		if(follow) {
			return true;
		} else {
			return false;
			$(this).remove;
		}
	})

  
});