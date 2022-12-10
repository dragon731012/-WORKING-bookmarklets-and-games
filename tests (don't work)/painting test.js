(function () {
	var color = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	var colorcolor='blue';
	body.appendChild(color);

	color.style.position = 'fixed';
	color.style.top = '600px';
	color.style.right ='730px';
	color.style.margin = '0px';
	color.style.paddingTop = '10px';
	color.style.width = '50px';
	color.style.height = '50px';
	color.style.zIndex = 10000;
	color.style.opacity = 1;
	color.style.color = '#d9d9d9';
	color.style.backgroundColor = ''+colorcolor+'';
	color.style.border = '6px solid #d9d9d9';
	color.style.textAlign = 'center';
	color.style.cursor = 'pointer';
	color.id = 'color';
	color.style.display = 'circle';
	color.innerText = '';

}());

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
	elem.style.color = 'blue';
	elem.style.backgroundColor = 'blue';
	elem.style.border = '0px solid white';
	elem.style.textAlign = 'center';
	elem.id = 'paint';
	elem.style.display = 'circle';
	elem.innerText = '';

}());
}

window.addEventListener('mousemove', mousemove);
