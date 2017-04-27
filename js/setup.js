var canvas = document.getElementById("canvas");
var c = canvas.getContext("2d");
c.fillStyle = "white";
c.fillRect(0, 0, canvas.width, canvas.height);

var save = document.getElementById("save").addEventListener("click", function(e){
	console.log('Image saved');
	console.log(c);
	this.href = canvas.toDataURL('image/png');
});