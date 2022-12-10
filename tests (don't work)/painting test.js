const colors=['red','blue','green','orange','pink','purple','yellow'];
var x=0;
function repeat(event){
(function () {
	var color = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(color);

	color.style.position = 'fixed';
	color.style.top = '570px';
	color.style.right ='770px';
	color.style.margin = '0px';
	color.style.paddingTop = '10px';
	color.style.width = '50px';
	color.style.height = '50px';
	color.style.zIndex = 10000;
	color.style.opacity = 1;
	color.style.color = '#d9d9d9';
	color.style.backgroundColor = ''+colors[x]+'';
	color.style.border = '6px solid #d9d9d9';
	color.style.textAlign = 'center';
	color.style.cursor = 'pointer';
	color.id = 'color';
	color.style.display = 'circle';
	color.innerText = '';
	document.getElementById('color').addEventListener('click', function() {
		x=x+1;
		if (x>6)
		{x=0}
		color.style.backgroundColor = ''+colors[x]+'';
	});
}());
}

function mousemove(event){
     var x=event.clientX;
     var y=event.clientY;
     x=x-10;
     y=y-8;
(function () {
	var elem = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(elem);

	elem.style.position = 'fixed';
	elem.style.top = ''+y+'px';
	elem.style.left =''+x+'px';
	elem.style.margin = '10px';
	elem.style.paddingTop = '10px';
	elem.style.width = '10px';
	elem.style.height = '10px';
	elem.style.zIndex = 10000;
	elem.style.opacity = 1;
	elem.style.color = ''+colors[x]+'';
	elem.style.backgroundColor = ''+colors[x]+'';
	elem.style.border = '0px solid white';
	elem.style.textAlign = 'center';
	elem.id = 'paint';
	elem.style.display = 'block';
	elem.innerText = '';
}());
}


window.addEventListener('mousemove', mousemove);
repeat();
setInterval(repeat,6000);
