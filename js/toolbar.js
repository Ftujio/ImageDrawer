let toolNum = document.getElementById("tools-toolbar").children[0].childElementCount;
let elem = document.getElementById("tools-toolbar").children[0].children;
var currentTool = 'brush';

for(let i = 0; i < toolNum; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(e, i) });
}

function brush(e){
	let dragging = false;

	canvas.addEventListener("click", function(e){ drawPoint(e.offsetX, e.offsetY, 10); });

	canvas.addEventListener("mousedown", function(e){ dragging = true });
	canvas.addEventListener("mousemove", function(e){
		if(dragging) drawPoint(e.offsetX, e.offsetY, 10);
	});
	canvas.addEventListener("mouseup", function(e){ dragging = false });
}

function line(e){
	
}

function setCurrentTool(e, i){
	currentTool = elem[i].id;
	console.log(elem[i].id ,' tool selected');

	switch(currentTool){
		case 'line':
			line();
			break;
		case 'circle':
			circle();
			break;
		case 'square':
			square();
			break;
		case 'eraser':
			eraser();
			break;
		case 'undo':
			undo();
			break;
		case 'bin':
			bin();
			break;
		case 'save':
			save();
			break;
		default:
			brush();
	}
}

function drawPoint(x, y, radius){
	c.beginPath();
	c.arc(x, y, 10, 0, 2*Math.PI);
	c.fill();
	c.stroke();
}