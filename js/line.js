c.lineCap = "round";
c.lineWidth = 10;

function line(){
	removeEventListeners();

	canvas.addEventListener("mousedown", first);
	canvas.addEventListener("mouseup", second);
}

var first = function(e){
	c.beginPath();
	c.moveTo(e.offsetX,e.offsetY) 
	console.log("[Line Tool]: First point: (", e.offsetX, ", ", e.offsetY, ")");
}

var second = function(e){
	c.lineTo(e.offsetX, e.offsetY);
	c.strokeStyle = color;
	c.stroke();
	c.closePath();
	console.log("[Line Tool]: Second point: (", e.offsetX, ", ", e.offsetY, ")");
}