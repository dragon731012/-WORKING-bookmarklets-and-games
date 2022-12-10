(function () {
	var color = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	body.appendChild(color);
	var l=screen.width;
	color.style.position = 'fixed';
	color.style.top = '500px';
	color.style.left =''+l+'px';
	color.style.margin = '10px';
	color.style.paddingTop = '10px';
	color.style.width = '10px';
	color.style.height = '10px';
	color.style.zIndex = 10000;
	color.style.opacity = 1;
	color.style.color = 'blue';
	color.style.backgroundColor = 'blue';
	color.style.border = '2px solid white';
	color.style.textAlign = 'center';
	color.id = 'color';
	color.style.display = 'block';
	color.innerText = '';

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
	elem.id = 'draw';
	elem.style.display = 'block';
	elem.innerText = '';

}());
}

window.addEventListener('mousemove', mousemove);
