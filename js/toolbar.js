let toolNum = document.getElementById("tools-toolbar").children[0].childElementCount;
let elem = document.getElementById("tools-toolbar").children[0].children;
var currentTool = 'brush';
c.lineWidth = 10*2;

for(let i = 0; i < toolNum - 1; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(i) });
}

function line(){
	removeEventListeners();

	canvas.addEventListener("mousedown", function(e){ 
		c.moveTo(e.offsetX,e.offsetY) 
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
	canvas.addEventListener("mouseup", function(e){ 
		c.lineTo(e.offsetX, e.offsetY);
		c.stroke();
		console.log("offsetX: ", e.offsetX, " offsetY: ", e.offsetY);
	});
}

function removeEventListeners(){
	canvas.removeEventListener("mousedown", engage);
	canvas.removeEventListener("mousemove", down);
	canvas.removeEventListener("mouseup", disengage);
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
			//var a = c.cloneNode(true);
			//c.parentNode.replaceChild(a, c);
			brush();
	}
}