// FIRST RANDOM IMAGE GENERATION
var imgarray1=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomNumber1 =Math.floor(Math.random()*6);
document.getElementById("imagerandom1").src=imgarray1[randomNumber1];

// SECOND RANDOM IMAGE GENERATION
var imgarray2=["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
var randomNumber2 =Math.floor(Math.random()*6);
document.getElementById("imagerandom2").src=imgarray2[randomNumber2];

// CONDITION FOR H1
if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML= "Player1 Wins!!!";
}else if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML= "Draw!!!";
}else{
  document.querySelector("h1").innerHTML= "Player2 Wins!!!";}
