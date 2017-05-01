c.lineCap = "round";
c.lineWidth = 10;
console.log(canvas);

function line(){
	removeEventListeners();

	canvas.addEventListener("mousedown", function(e){
		c.beginPath();
		c.moveTo(e.offsetX,e.offsetY) 
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
	canvas.addEventListener("mouseup", function(e){ 
		c.lineTo(e.offsetX, e.offsetY);
		c.strokeStyle = color;
		c.stroke();
		c.closePath();
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
}