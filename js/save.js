var save = document.getElementById("save");
save.addEventListener("click", function(e){
	console.log('Image saved');
	save.download = Math.random().toString(36).substring(7) + '.png';
	this.href = canvas.toDataURL('image/png');
});