c.lineCap = "round";
c.lineWidth = 10;
var a;

function line(){
	removeEventListeners();

	canvas.addEventListener("mousedown", first);
	//canvas.addEventListener("mousemove", lineGhost);
	canvas.addEventListener("mouseup", second);
}

var first = function(e){
	c.beginPath();
	c.moveTo(e.offsetX,e.offsetY) 
	console.log("[Line Tool]: First point: (", e.offsetX, ", ", e.offsetY, ")");
}

// var lineGhost = function(e){
// 	c.lineTo(e.offsetX, e.offsetY);
// 	let r = Math.floor((Math.random() * 255) + 1);
// 	let g = Math.floor((Math.random() * 255) + 1);
// 	let b = Math.floor((Math.random() * 255) + 1);

// 	//c.strokeStyle = 'rgb(' + r + ',' + g + ',' + b + ')';
// 	c.stroke();
// 	c.closePath();

	
// }

var second = function(e){
	c.lineTo(e.offsetX, e.offsetY);
	c.strokeStyle = color;
	c.stroke();
	c.closePath();
	console.log("[Line Tool]: Second point: (", e.offsetX, ", ", e.offsetY, ")");
}