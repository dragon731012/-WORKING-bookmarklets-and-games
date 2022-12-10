alert("keyboard commands: c=color picker. u=pen up. d=pen down. reload to clear.");
var pen='none';
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
	color.style.width = '200px';
	color.style.height = '50px';
	color.style.zIndex = 10000;
	color.style.opacity = 1;
	color.style.color = 'black';
	color.style.backgroundColor = 'white';
	color.style.border = '6px solid black';
	color.style.textAlign = 'center';
	color.style.cursor = 'pointer';
	color.id = 'color';
	color.style.display = 'circle';
	color.innerText = 'by dragonmaster73101';
	document.getElementById('me').addEventListener('click', function() {
		window.open('https://github.com/dragon731012');
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
	elem.style.color = ''+clr+'';
	elem.style.backgroundColor = ''+clr+'';
	elem.style.border = '0px solid white';
	elem.style.textAlign = 'center';
	elem.id = 'paint';
	elem.style.display = ''+pen+'';
	elem.innerText = '';
}());
}
elem.style.display='none';
window.addEventListener("keydown", function(event) {
    if (event.key == "c"){
        clr=prompt("what color do you want? must be very broad, and with no caps or special charecters. ex: blue");
	elem.style.display = 'block';
    }
});
window.addEventListener("keydown", function(event) {
    if (event.key == "u"){
        alert("pen is up");
	pen='none';
	elem.style.display = 'none';
    }
});

window.addEventListener("keydown", function(event) {
    if (event.key == "d"){
        alert("pen is down");
	pen='circle';
	elem.style.display = 'circle';
    }
});

window.addEventListener('mousemove', mousemove);
repeat();
setInterval(repeat,6000);
