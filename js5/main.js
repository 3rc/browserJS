$(document).on('ready', function() {

	$(".editable").hover(function() {
		$(this).toggleClass("editableHover");
	});

	$(".editable").click(function() {
		var textEditable = "<form class='edit-inplace'>" +
		"<textarea class='edit-textarea'>" + $(this).text().trim() +
		"</textarea>" + "<ul class='edit-inplace-options'><li>" +
		"<a class='edit-save'>Save</a></li><li>" +
		"<a class='edit-cancel'>Cancel</a></li></ul></form>";

		var textEditableElement = $(textEditable);
		var textToEdit = (this)
		

		$(this).hide().after(textEditableElement);
		$(".edit-textarea").focus();

		$(".edit-cancel").click(function() {
			textEditableElement.remove();
			$(".editable").show()
		});	

		$(".edit-save").click(function() {
			var textEdited = ($(".edit-textarea").val());
			$(textToEdit).text(textEdited);
			textEditableElement.remove();
			$(".editable").show()
		});

  	});
});