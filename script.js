// player 1 code 

let randomnumber1 = Math.floor(Math.random()*6)+1;

let randomimage = "images/dice"+ randomnumber1+".png";

let image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage)


// player 2 code 


let randomnumber2 = Math.floor(Math.random()*6)+1;

let randomimage2 = "images/dice"+ randomnumber2+".png";

let image2 =document.querySelectorAll("img")[1].setAttribute("src",randomimage2);



// player rules who win 

if(randomnumber1>randomnumber2){
	document.querySelector("h1").innerHTML = "won by player 1";
}else if(randomnumber1<randomnumber2){
	document.querySelector("h1").innerHTML = "won by player 2";
}else{
	document.querySelector("h1").innerHTML = "Drow match";
}



// let img1 = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];

// let img2 = ["dice1.png","dice2.png","dice3.png","dice4.png","dice5.png","dice6.png"];
