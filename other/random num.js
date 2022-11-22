javascript:
alert("by dragonmaster73101-dragonmaster731012 on github");
l=prompt("what do you want the max to be? ex: 1-6 max:6");
m=prompt("what do you want the min to be? ex: 1-6 min=1");
function getRandomNumberBetween(min,max){ return Math.floor(Math.random()*(max-min+1)+min); };
a=getRandomNumberBetween(m,l);alert("your random number is "+a+".")
