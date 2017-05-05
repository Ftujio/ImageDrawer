let toolNum = document.getElementsByClassName("tools-toolbar")[0].children[0].childElementCount;
let elem = document.getElementsByClassName("tools-toolbar")[0].children[0].children;
var currentTool = 'brush';
c.lineWidth = 10*2;

setToolBGColor();

for(let i = 0; i < toolNum - 1; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(i) });
	elem[i].style.backgroundColor = "#f2f2f2";
}

function setToolBGColor(){
	for(let i = 0; i < toolNum - 1; i++){
		elem[i].style.backgroundColor = "#f2f2f2";
	}
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

	canvas.removeEventListener("mousedown", one);
	canvas.removeEventListener("mouseup", two);
}

function setCurrentTool(i){
	currentTool = elem[i].id;
	console.log(elem[i].id ,' tool selected');
	setToolBGColor();
	elem[i].style.backgroundColor = "#d9d9d9";

	switch(currentTool){
		case 'line':
			line();
			break;
		case 'circle':
			circle();
			break;
		case 'square':
			rectange();
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