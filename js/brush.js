let dragging = false;

function brush(){
	removeEventListeners();
	c.lineWidth = 20;

	canvas.addEventListener("mousedown", engage);
	canvas.addEventListener("mousemove", down);
	canvas.addEventListener("mouseup", disengage);
}

let down = function(e){
	drawPath(e.offsetX, e.offsetY, 10);
}

let engage = function(){
	dragging = true;
}

let disengage = function(){
	dragging = false;
	c.beginPath();
}

function drawPath(x, y, radius){
	if(dragging){
		c.lineTo(x, y);
		c.strokeStyle = color;
		c.stroke();
		c.beginPath();
		c.arc(x, y, radius, 0, 2*Math.PI);
		c.fillStyle = color;
		c.fill();
		c.beginPath();
		c.moveTo(x, y);
	}
}

// function drawPoint(x, y, radius){
// 	console.log('point');

// 	c.beginPath();
// 	c.arc(x, y, 10, 0, 2*Math.PI);
// 	c.fillStyle = color;
// 	c.fill();
// 	c.strokeStyle = color;
// 	c.stroke();
// 	c.beginPath();
// }