$(document).on('ready', function() {


	var victims = [];
	var i = 0;
  	var disaster = confirm("Enter Disaster Victim information?");
  	while(disaster == true) {
  		
  		victims[i] = {
			vicName: prompt("Victim's name?"),
			vicPhone: prompt("Victim's phone number?"),
			vicAddress: prompt("Victim's address?")
			
		}
		var i = i + 1
		var disaster = confirm("Enter another victim's information?");
  	}

	var volunteers = [];
	var i = 0;
  	var disaster = confirm("Enter Disaster Volunteer information?");
  	while(disaster == true) {
		volunteers[i] = {
			volName: prompt("Volunteer's name?"),
			volPhone: prompt("Volunteer's phone number?"),
			volAddress: prompt("Volunteer's address?")
			
		}
		var i = i + 1
		var disaster = confirm("Enter another volunteer's information?");
	}
	var help = prompt("Enter the name of a victim in need");
	console.log(volunteers.find(help))
});