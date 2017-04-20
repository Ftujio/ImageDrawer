let toolNum = document.getElementById("tools-toolbar").children[0].childElementCount;
let elem = document.getElementById("tools-toolbar").children[0].children;
var currentTool = 'brush';

for(let i = 0; i < toolNum; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(e, i) });
}

canvas.addEventListener("click", function(e){
	console.log('using ', currentTool);

	switch(currentTool){
		case 'line':
			line(e);
			break;
		case 'circle':
			circle(e);
			break;
		case 'square':
			square(e);
			break;
		case 'eraser':
			eraser(e);
			break;
		case 'undo':
			undo(e);
			break;
		case 'bin':
			bin(e);
			break;
		case 'save':
			save(e);
			break;
		default:
			brush(e);
			console.log('Brush');
	}
});

function brush(e){
	let x = e.offsetX;
	let y = e.offsetY;
	c.beginPath();
	c.arc(x, y, 50, 0, 2*Math.PI);
	c.fill();
	c.stroke();
}

function setCurrentTool(e, i){
	currentTool = elem[i].id;
	console.log(elem[i].id ,' tool selected');
}