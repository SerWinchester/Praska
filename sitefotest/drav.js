var r = document.getElementById("s1").onload = function()
{
		alert("d");
		var canv = document.getElementById("mainCanvas")
		var contx = canv.getContext("2d");
		var ship = new Image();
		ship.src = "bg.svg";
		ship.onload = function()
		{
			contx.drawImage(ship,0,0);
		
		}

		contx.webkitImageSmoothingEnabled = false;
		contx.moveTo(500.5,500.5);
		contx.lineTo(70.5,80.5);
		contx.stroke();
}