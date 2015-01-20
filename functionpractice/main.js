$(document).on('ready', function() {

/* COMPLETED EXERCISES //////////////////////////
	

	var tripleFive = function(n) {
		for(i = 0; i < n; i++) {
			console.log("Five!")
		}
	}
  
  tripleFive(3)

----------------------------------------------

  var lastLetter = function(n) {
  	console.log(n[n.length-1]);
  }

  lastLetter('hello')
  lastLetter('island')

  ----------------------------------------------


  var square = function(n) {
  	console.log(n * n);
  }

  square(3);
  square(5);

----------------------------------------------


    var negate = function(n) {
    	console.log(-n)
    }

    negate(5);
    negate(-8);

    ----------------------------------------------


var toArray = function(x, y, z) {
	var array = [];
	array.push(x, y, z);
	console.log(array);
}

toArray(1, 4, 5);
toArray(8, 9, 10)

    ----------------------------------------------


var startsWithA = function(n) {
	alert(n[0] === "a");
}

startsWithA('aardvark');
startsWithA('bear')

    ----------------------------------------------


var excite = function(n) {
	console.log(n + "!!!");
}

excite('yes');
excite('go')

    ----------------------------------------------


var sun = function(n) {
	alert(n.indexOf("sun") !== -1);
}

sun('sundries');
sun('asunder');
sun('catapult');

    ----------------------------------------------


var tiny = function(n) {
	alert(n >=0 && n <= 1);
}

tiny(0.3);
tiny(14);
tiny(-5)

    ----------------------------------------------


*/

var getSeconds = function(t) {
	var n = t.split(":");
	var s1 = n[0] * 60;
	var s2 = n[1];
	var s = s1 += s2;
	console.log(s)
}


getSeconds('01:30');
getSeconds('10:25')












});