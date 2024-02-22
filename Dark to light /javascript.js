function myf(){
	document.getElementById("demo").innerHTML = "Downloading Started.......";
	alert("Thanks for downloading..")
}

let btn = document.createElement("button");
let pp = document.querySelector("p");
pp.after(btn);

btn.innerHTML = "Download ";
btn.setAttribute("onclick", "myf()")

let myd= () =>{
	alert(Date());
	document.getElementById("nemo").innerHTML = Date();document.getElementById("nemo").style.backgroundColor = "red" ;
}

btn.style.color = "red";

function Change(){
	
		document.querySelector("body").style.backgroundColor ="black";
	document.querySelector("body").style.color ="white";
	}
function Change2(){
		document.querySelector("body").style.backgroundColor ="white";
	document.querySelector("body").style.color ="black";}

