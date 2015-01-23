$(document).on('ready', function() {

	$(".editable").hover(function() {
		$(this).toggleClass("editableHover");
	});

	$(".editable").click(function() {
		var textEditable = "<div class='form edit-inplace'>" +
		"<textarea class='edit-textarea'>" + $(this).text().trim() +
		"</textarea>" + "<ul class='edit-inplace-options'><li>" +
		"<a class='edit-save btnSubmit'>Save</a></li><li>" +
		"<a class='edit-cancel'>Cancel</a></li></ul></div>";

		$(this).hide().after(textEditable);
		$(".edit-textarea").focus();
	});
		$("edit-save").click(function() {
			$(this).val(textEditable.text)
		})

		$(".edit-cancel").click(function() {
			$(textEditable).remove();
			$(".editable").focus()
			});
  
});