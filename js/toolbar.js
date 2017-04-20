let toolNum = document.getElementById("tools-toolbar").children[0].childElementCount;
let elem = document.getElementById("tools-toolbar").children[0].children;
var currentTool = 'brush';

for(let i = 0; i < toolNum; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(e, i) });
}

canvas.addEventListener("click", function(){
	console.log('using ', currentTool);

	if(currentTool == 'brush'){
		
	}
});

function setCurrentTool(e, i){
	currentTool = elem[i].id;
	console.log(elem[i].id ,' tool selected');
}