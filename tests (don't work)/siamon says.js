alert("by dragonmaster73101");

(function () {
	var green = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(green);

	green.style.position = 'fixed';
	green.style.top = '0px';
	green.style.left = '0px';
	green.style.margin = '10px';
	green.style.paddingTop = '40px';
	green.style.width = '100px';
	green.style.height = '100px';
	green.style.zIndex = 10000;
	green.style.opacity = 0.8;
	green.style.color = 'black';
	green.style.backgroundColor = 'green';
	green.style.border = '0px solid white';
	green.style.textAlign = 'center';
	green.style.cursor = 'pointer';
	green.id = 'green';
	green.style.display = 'block';
	green.innerText = 'green';
	document.getElementById('green').addEventListener('click', function() {
		green.style.opacity = 1;
		setTimeout(function() {
			green.style.opacity = 0.8;
		}, 500);
	});
}());
