function bin(){
	removeEventListeners();

	var clone = canvas.cloneNode(true);
	canvas.parentNode.replaceChild(clone, canvas);

	c = canvas.getContext("2d");
}