let x1, y1, x2, y2, width, height;

function square(){
	removeEventListeners();
	c.lineWidth = 5;

	canvas.addEventListener("mousedown", one);
	canvas.addEventListener("mouseup", two);
}

var one = function(e){
	x1 = e.offsetX;
	y1 = e.offsetY;

	console.log("[Square Tool]: First point: (", x1, ", ", y1, ")");
}

var two = function(e){
	let temp;

	x2 = e.offsetX;
	y2 = e.offsetY;

	console.log("[Square Tool]: Second point: (", x2, ", ", y2, ")");

	width = x2 - x1;
	height = y2 - y1;

	if(width < 0) width = - width;
	if(height < 0) height = - height;

	if(e.offsetX < x1){
		temp = x1;
		x1 = x2;
		x2 = temp;
	}

	if(e.offsetY < y1){
		temp = y1;
		y1 = y2;
		y2 = temp;
	}

	c.rect(x1, y1, width, height);
	c.strokeStyle = color;
	c.stroke();

	console.log("Created a square on coordinates: (", x1, ", ", y1, ") with dimensions: (", width, ", ", height, ")");
}