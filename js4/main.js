$(document).on('ready', function() {
  
  	var numVictims = prompt("Enter the number of disaster victims:");
  	var vicName = [];
  	var vicPhone = [];
  	var vicAddress = [];

	for(i = 0; i < numVictims; i++) {
		vicName.push(prompt("Victim's name?"));
		vicPhone.push(prompt("Victim's phone number?"));
		vicAddress.push(prompt("Victim's address?"))
	}

	var numVolunteers = prompt("Enter the number of volunteers:");
	var volName = [];
	var volPhone = [];
	var volAddress = [];

	for(i = 0; i <numVolunteers; i++) {
		volName.push(prompt("Volunteer's name?"));
		volPhone.push(prompt("Volunteer's phone number?"));
		volAddress.push(prompt("Volunteer's address?"));
	}

	alert("Number of victims: " + numVictims + "\nNumber of volunteers: " + numVolunteers + "\nVictims:\n" + vicName + "\nVolunteers:\n" + volName)
});