javascript:
var start = confirm("Would you like to play Untiteld Game");
if(start == true){
var truthordare = confirm("Truth or Dare, Cancel for Truth, Okay for Dare")
}
else{
alert("Thank you for playing");
}
if(truthordare == true){
var random = Math.floor(Math.random() * 11) + 1;
alert(random);
}
if(truthordare == false){
var randomtruth = Math.floor(Math.random() * 21) + 11;
alert(randomtruth);
}
if(random == 1){
alert("Lick a tree");
}
if(random == 2){
alert("Start dancing in the middle of the sidewalk");	 
}
if(random == 3){
alert("Wear one of your sibilings cloths to school");	 
}
if(random == 4){
alert("Ask someone to play football but bring a soccer ball"); 
}
if(random == 7){
alert("Reorganize someone in your house's drawers");	 
}
if(random == 8){
alert("");	 
}
if(random == 9){
alert("");	 
}
if(random == 10){
alert("");	
}
if(randomtruth == 11){
alert("What is a weird food that you love?");
}
if(randomtruth == 12){
alert("What is the worst grade you received for a class?");	 
}
if(randomtruth == 13){
alert("Have you ever broken an expensive item?");	 
}
if(randomtruth == 14){
alert("Have you ever revealed a friend’s secret to someone else?");	 
}
if(randomtruth == 15){
alert("What is the worst physical pain you’ve ever been in?");	 
}
if(randomtruth == 16){
alert("If you could pick one other person to take with you to a deserted island, who would it be?");	 
}
if(randomtruth == 17){
alert("What sport or hobby do you wish you would’ve picked up");	 
}
if(randomtruth == 18){
alert("Personality-wise, are you more like your mom or your dad?");	 
}
if(randomtruth == 19){
alert("If you could only eat one meal for the rest of your life, what would it be?");	 
}
if(randomtruth == 20){
alert("Who is the best teacher you’ve ever had and why?");	 
}
