$(document).on('ready', function() {

	$(".btnEdit").click(function() {
		$(this).text("Hide Edit Form");
		$(".editForm").toggleClass("hidden visible")
		$(".btnEdit").click(function() {
			$(this).text("Show Edit Form");
			$(".editForm").removeClass("visible")
		});

		$(".btnSubmit").click(function() {
			var nameUpdate = ($(".name").val());
			var bioUpdate = ($(".bio").val());
			var booksUpdate = ($(".books").val());
			var librariesUpdate = ($(".libraries").val());
			$(".profileName").text(nameUpdate);
			$(".profileBio").text(bioUpdate);
			$(".profileBooks").text(booksUpdate);
			$(".profileLibraries").text(librariesUpdate)
		})
	})
  
});