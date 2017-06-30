$(document).ready(function(){
	console.log('jquery is working');
	let a = $(".test").text();
	let elem = $("<p></p>").text(a);
	$('#wrapper').append(elem);
	console.log(a);
});
