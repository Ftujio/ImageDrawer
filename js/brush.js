let dragging = false;

function brush(){
	canvas.addEventListener("mousedown", engage);
	canvas.addEventListener("mousemove", down);
	canvas.addEventListener("mouseup", disengage); 
}

var down = function(e){
	drawPath(e.offsetX, e.offsetY, 10);
}

var point = function(e){
	drawPoint(e.offsetX, e.offsetY, 10);
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
		c.strokeStyle = "black";
		c.stroke();
		c.beginPath();
		c.arc(x, y, radius, 0, 2*Math.PI);
		c.fillStyle = "black";
		c.fill();
		c.beginPath();
		c.moveTo(x, y);
	}
}

function drawPoint(x, y, radius){
	c.beginPath();
	c.arc(x, y, radius, 0, 2*Math.PI);
	c.fillStyle = "black";
	c.fill();
	c.strokeStyle = "black";
	c.stroke();
	c.beginPath();
}