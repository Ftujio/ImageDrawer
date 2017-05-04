let dragging = false;

function brush(){
	removeEventListeners();
	
	canvas.addEventListener("mousedown", engage);
	canvas.addEventListener("mousemove", down);
	canvas.addEventListener("mouseup", disengage);

	//canvas.addEventListener("click", point);
}

var down = function(e){
	drawPath(e.offsetX, e.offsetY, 10);
}

var point = function(e){
	console.log("click");

	drawPoint(e.offsetX, e.offsetY, 10);
	c.beginPath();
}

var engage = function(){
	dragging = true;
}

var disengage = function(){
	dragging = false;
	c.beginPath();
}

function drawPath(x, y, radius){	
	if(dragging){
		c.lineTo(x, y);
		c.strokeStyle = color;
		c.lineWidth = 20;
		c.stroke();
		c.beginPath();
		c.arc(x, y, radius, 0, 2*Math.PI);
		c.fillStyle = color;
		c.fill();
		c.beginPath();
		c.moveTo(x, y);
	}
}

function drawPoint(x, y, radius){
	console.log('point');

	c.beginPath();
	c.arc(x, y, 10, 0, 2*Math.PI);
	c.fillStyle = color;
	c.fill();
	c.strokeStyle = color;
	c.stroke();
	c.beginPath();
}