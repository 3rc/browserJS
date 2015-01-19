$(document).on('ready', function() {

  var phoneNumber = prompt("Please enter your phone number.\nWe assure you it will not be used for spam.\nFollow the format: XXX-XXX-XXXX");
  alert(phoneNumber.charAt(3) === "-" && phoneNumber.charAt(7) === "-");

  var birthday = prompt("Please enter your birthday, following the format xx/xx/xx");
  alert(birthday.charAt(2) === "/" && birthday.charAt(5) === "/");

  var postal = prompt("Please enter your postal code, following format XXXXX or XXXXX-XXXX");
  alert(postal.length === 5 || postal.charAt(5) === "-"); 

  var state = prompt("Please enter your state abbreviation, in capitals. IE: XX");
  alert(state.length === 2 && state.toUpperCase() === state);

  var married = prompt("Are you married?");
  alert(married.toUpperCase() === "YES" || married.toUpperCase() === "NO")
  
});