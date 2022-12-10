alert("by dragonmaster73101");
var start=0;
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
	document.getElementById('green').addEventListener('click', function () {
		  green.style.opacity = 1;
		  setTimeout(function () {
	            green.style.opacity = 0.8;
	          }, 500);
	});
    var red = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(red);

	red.style.position = 'fixed';
	red.style.top = '0px';
	red.style.left = '110px';
	red.style.margin = '10px';
	red.style.paddingTop = '40px';
	red.style.width = '100px';
	red.style.height = '100px';
	red.style.zIndex = 10000;
	red.style.opacity = 0.8;
	red.style.color = 'black';
	red.style.backgroundColor = 'red';
	red.style.border = '0px solid white';
	red.style.textAlign = 'center';
	red.style.cursor = 'pointer';
	red.id = 'red';
	red.style.display = 'block';
	red.innerText = 'red';
	document.getElementById('red').addEventListener('click', function () {
		red.style.opacity = 1;
		
		setTimeout(function () {
			red.style.opacity = 0.8;
		}, 500);
	});
   var yellow = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(yellow);

	yellow.style.position = 'fixed';
	yellow.style.top = '110px';
	yellow.style.left = '0px';
	yellow.style.margin = '10px';
	yellow.style.paddingTop = '40px';
	yellow.style.width = '100px';
	yellow.style.height = '100px';
	yellow.style.zIndex = 10000;
	yellow.style.opacity = 0.8;
	yellow.style.color = 'black';
	yellow.style.backgroundColor = 'yellow';
	yellow.style.border = '0px solid white';
	yellow.style.textAlign = 'center';
	yellow.style.cursor = 'pointer';
	yellow.id = 'yellow';
	yellow.style.display = 'block';
	yellow.innerText = 'yellow';
	document.getElementById('yellow').addEventListener('click', function () {
		yellow.style.opacity = 1;
		
		setTimeout(function () {
			yellow.style.opacity = 0.8;
		}, 500);
	});
  var blue = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(blue);

	blue.style.position = 'fixed';
	blue.style.top = '110px';
	blue.style.left = '110px';
	blue.style.margin = '10px';
	blue.style.paddingTop = '40px';
	blue.style.width = '100px';
	blue.style.height = '100px';
	blue.style.zIndex = 10000;
	blue.style.opacity = 0.8;
	blue.style.color = 'black';
	blue.style.backgroundColor = 'blue';
	blue.style.border = '0px solid white';
	blue.style.textAlign = 'center';
	blue.style.cursor = 'pointer';
	blue.id = 'blue';
	blue.style.display = 'block';
	blue.innerText = 'blue';
	document.getElementById('blue').addEventListener('click', function () {
		blue.style.opacity = 1;
		
		setTimeout(function () {
			blue.style.opacity = 0.8;
		}, 500);
	});
	var me = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(me);

		me.style.position = 'fixed';
		me.style.top = '215px';
		me.style.left = '125px';
		me.style.margin = '10px';
		me.style.paddingTop = '10px';
		me.style.width = '85px';
		me.style.height = '40px';
		me.style.zIndex = 10000;
		me.style.opacity = 1;
		me.style.color = 'black';
		me.style.backgroundColor = 'gray';
		me.style.border = '0px solid white';
		me.style.textAlign = 'center';
		me.style.cursor = 'pointer';
		me.id = 'me';
		me.style.display = 'block';
		me.innerText = 'by dragonmaster73101';
		me.style.fontSize='8px';
		document.getElementById('me').addEventListener('click', function () {
			window.open('https://github.com/dragon731012');
			
	});
	var start = document.createElement('div');
		var body = document.getElementsByTagName('body')[0];
		body.appendChild(start);

		start.style.position = 'fixed';
		start.style.top = '215px';
		start.style.left = '0px';
		start.style.margin = '10px';
		start.style.paddingTop = '10px';
		start.style.width = '115px';
		start.style.height = '40px';
		start.style.zIndex = 10000;
		start.style.opacity = 1;
		start.style.color = 'black';
		start.style.backgroundColor = 'gray';
		start.style.border = '0px solid white';
		start.style.textAlign = 'center';
		start.style.cursor = 'pointer';
		start.id = 'start';
		start.style.display = 'block';
		start.innerText = 'start';
		document.getElementById('start').addEventListener('click', function () {
			start.style.left = '-999999px';
			me.style.width='210px';
			me.style.left='0px';
			me.style.fontSize='15px';
			start=1;
	});
}());
