$(document).on('ready', function() {
  
  $(".createpopup").click(function() {
  	$(".container").append("<div class='popup'>This is what happens when you click a button.<br><br> <button class='closepopup'>Click to close</button></div>")
  });

  $(document).on("click", ".closepopup", function() {
  	$(".popup").remove();

  })
});