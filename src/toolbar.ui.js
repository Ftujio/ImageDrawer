$(document).ready(() => {
	sideToobarSetup();
});

function sideToobarSetup(){
	let toolbar = [
		{
			"name": "brush",
			"icon-src": ""
		},
		{
			"name": "line",
			"icon-src": ""
		},
		{
			"name": "circle",
			"icon-src": ""
		},
		{
			"name": "rectangle",
			"icon-src": ""
		},
		{
			"name": "eraser",
			"icon-src": ""
		},
		{
			"name": "delete",
			"icon-src": ""
		},
		{
			"name": "save",
			"icon-src": ""
		}
	];

	$('#side-toolbar').append('<ul class="toolbar"></ul>');

	for(let i = 0; i < toolbar.length; i++){
		let elem = $('<li></li>').text(toolbar[i].name);
		$('#side-toolbar .toolbar').append(elem);
	}
}
