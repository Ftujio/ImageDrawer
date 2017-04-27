let element = document.getElementsByClassName("color");
var color = "black";

for(let i = 0; i < element.length; i++){
	element[i].style.backgroundColor = element[i].id;
	element[i].addEventListener("click", function(e){
		color = element[i].id;
	});
}

