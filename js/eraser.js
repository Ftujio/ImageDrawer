let dragging2 = false;

function eraser(){
	removeEventListeners();
	c.lineWidth = 20;

	canvas.addEventListener("mousedown", engage2);
	canvas.addEventListener("mousemove", down2);
	canvas.addEventListener("mouseup", disengage2);
}

let down2 = function(e){
	drawPath2(e.offsetX, e.offsetY, 20);
}

let engage2 = function(){
	dragging2 = true;
}

let disengage2 = function(){
	dragging2 = false;
	c.beginPath();
}

function drawPath2(x, y, radius){	
	if(dragging2){
		c.lineTo(x, y);
		c.strokeStyle = "white";
		c.stroke();
		c.beginPath();
		c.arc(x, y, radius, 0, 2*Math.PI);
		c.fillStyle = "white";
		c.fill();
		c.beginPath();
		c.moveTo(x, y);
	}
}

// function drawPoint(x, y, radius){
// 	console.log('point');

// 	c.beginPath();
// 	c.arc(x, y, 10, 0, 2*Math.PI);
// 	c.fillStyle = "white";
// 	c.fill();
// 	c.strokeStyle = "white";
// 	c.stroke();
// 	c.beginPath();
// }