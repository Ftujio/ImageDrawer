function line(){
	removeEventListeners();

	canvas.addEventListener("mousedown", function(e){ 
		c.moveTo(e.offsetX,e.offsetY) 
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
	canvas.addEventListener("mouseup", function(e){ 
		c.lineTo(e.offsetX, e.offsetY);
		c.strokeStyle = color;
		c.stroke();
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
}