function circle(){
	removeEventListeners();
	c.lineWidth = 5;

	canvas.addEventListener("click", drawCircle);
}

let drawCircle = function(e){
	c.beginPath();
	c.arc(e.offsetX, e.offsetY, 80, 0, 2*Math.PI);
	c.strokeStyle = color;
	c.stroke();
	c.fillStyle = "white";
	c.fill();
}