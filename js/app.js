/*

	ping me at tinka.edgar@gmail.com

*/

$(document).ready(function(){

	setInterval(function(){
		var date = new Date();
		var hrTime = date.getHours();
		var minTime = date.getMinutes();
		var secTime= date.getSeconds();

		var minTime0 = minTime.toString();
		var secTime0 = secTime.toString();

		if (minTime0.length < 2){
			secTime = '0' + minTime;
		};

		if (secTime0.length < 2){
			secTime = '0' + secTime;
		};

		document.getElementById("hrClock").innerHTML = hrTime;
		document.getElementById("minClock").innerHTML = minTime;
		document.getElementById("secClock").innerHTML = secTime;

	}, 1000);

	/*function conv12(){

		setInterval(function(){
			var date = new Date();
			var hrTime = date.getHours();
			var minTime = date.getMinutes();
			var secTime= date.getSeconds();

			var minTime0 = minTime.toString();
			var secTime0 = secTime.toString();

			if (minTime0.length < 2){
				secTime = '0' + minTime;
			};

			if (secTime0.length < 2){
				secTime = '0' + secTime;
			};

			document.getElementById("hrClock").innerHTML = hrTime;
			document.getElementById("minClock").innerHTML = minTime;
			document.getElementById("secClock").innerHTML = secTime;

		}),1000);

	};*/
	
});
