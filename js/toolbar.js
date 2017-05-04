let toolNum = document.getElementsByClassName("tools-toolbar")[0].children[0].childElementCount;
let elem = document.getElementsByClassName("tools-toolbar")[0].children[0].children;
var currentTool = 'brush';
c.lineWidth = 10*2;

for(let i = 0; i < toolNum - 1; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(i) });
}

function removeEventListeners(){
	canvas.removeEventListener("mousedown", engage);
	canvas.removeEventListener("mousemove", down);
	canvas.removeEventListener("mouseup", disengage);

	canvas.removeEventListener("mousedown", engage2);
	canvas.removeEventListener("mousemove", down2);
	canvas.removeEventListener("mouseup", disengage2);

	canvas.removeEventListener("mousedown", first);
	canvas.removeEventListener("mouseup", second);

	canvas.removeEventListener("click", drawCircle);
}

function setCurrentTool(i){
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
		default:
			brush();
	}
}