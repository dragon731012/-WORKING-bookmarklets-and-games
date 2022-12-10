function mousemove(event){
     var x=event.clientX;
     var y=event.clientY;
     x=x-10;
     y=y-10;
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
	elem.style.opacity = 0.9;
	elem.style.color = 'blue';
	elem.style.backgroundColor = 'blue';
	elem.style.border = '0px solid white';
	elem.style.textAlign = 'center';
	elem.style.cursor = 'pointer';
	elem.id = 'myTimer';
	elem.style.display = 'circle';
	elem.innerText = '';

}());
}

window.addEventListener('mousemove', mousemove);
