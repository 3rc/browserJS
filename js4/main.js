$(document).on('ready', function() {


	var vicName = [];
	var vicPhone = [];
	var vicAddress = [];
	var victims = [vicName, vicPhone, vicAddress];
	var i = 0;
  	var disaster = confirm("Enter Disaster Victim information?");
  	while(disaster == true) {
  		var i = i + 1;
		vicName.push(" " + prompt("Victim's name?"));
		vicPhone.push(" " + prompt("Victim's phone number?"));
		vicAddress.push(" " + prompt("Victim's address?"));
		var disaster = confirm("Enter another victim's information?");
  }

	var volName = [];
	var volPhone = [];
	var volAddress = [];
	var volunteers = [volName, volPhone, volAddress];
	var i = 0;
  	var disaster = confirm("Enter Disaster Volunteer information?");
  	while(disaster == true) {
  		var i = i + 1;
		volName.push(" " + prompt("Volunteer's name?"));
		volPhone.push(" " + prompt("Volunteer's phone number?"));
		volAddress.push(" " + prompt("Volunteer's address?"));
		var disaster = confirm("Enter another volunteer's information?");
	}

	alert("Victims' names: " + vicName)
});