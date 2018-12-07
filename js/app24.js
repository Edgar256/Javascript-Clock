function conv24(){

		setInterval(function(){
			var date = new Date();
			var hrTime = date.getHours();
			var minTime = date.getMinutes();
			var secTime= date.getSeconds();

			var minTime0 = minTime.toString();
			var secTime0 = secTime.toString();

			if (minTime0.length < 2){
				minTime = '0' + minTime;
			};

			if (secTime0.length < 2){
				secTime = '0' + secTime;
			};

			
			document.getElementById("minClock").innerHTML = minTime;
			document.getElementById("secClock").innerHTML = secTime;
			var amPm0 = document.getElementById("amPm");

			if( amPm0 = 'am'){
				var hrTime0 = 12 + hrTime ;
				/*amPm.style.display = 'none';*/
				var amPm2 = ' ';
				document.getElementById("hrClock").innerHTML = hrTime;
				/*document.getElementById("amPm").innerHTML = amPm2;*/
			}
			
		}, 1000);

	};