let element = document.getElementsByClassName("color");

for(let i = 0; i < element.length; i++){
	element[i].style.backgroundColor = element[i].id;
	console.log(element[i].id);
}