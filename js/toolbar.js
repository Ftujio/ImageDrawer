let toolNum = document.getElementById("tools-toolbar").children[0].childElementCount;
let elem = document.getElementById("tools-toolbar").children[0].children;

for(let i = 0; i < toolNum; i++){
	elem[i].addEventListener("click", function(e){ setCurrentTool(e, i) });
}

function setCurrentTool(e, i){
	console.log(e);

	//console.log("tool ", elem[i], " clicked");
}