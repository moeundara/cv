
var randomImg1= Math.floor(Math.random()*6)+1;
var imgDice1="dice"+randomImg1;
var srcImg1="images/"+imgDice1+".png";

var randomImg2=Math.floor(Math.random()*6)+1;
var imgDice2="dice"+randomImg2;
var srcImg2="images/"+imgDice2+".png";

document.querySelectorAll("img")[0].setAttribute("src",srcImg1);
document.querySelectorAll("img")[1].setAttribute("src",srcImg2);
if(randomImg1>randomImg2){
  document.querySelector("h1").innerHTML="⛳️Player1 Wins!";
}else if(randomImg1<randomImg2){
  document.querySelector("h1").innerHTML="⛳️Player2 Wins!";
}else{
  document.querySelector("h1").innerHTML="Draw!";
}
