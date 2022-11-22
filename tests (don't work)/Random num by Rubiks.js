javascript:
l=prompt("what do you want the max to be? ex: 1-10 max:10");
m=prompt("what do you want the min to be? ex: 1-10 min=1");
l = l + 1
m = m - 1
a = Math.Floor(Math.random() * l) + m;
alert("your random number is "+a+".")
