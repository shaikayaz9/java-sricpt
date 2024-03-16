let count_display = document.getElementById("count");
let inc = document.getElementById("inc");
let dic = document.getElementById("dic");
let reset = document.getElementById("Reset");

let count = 0;
function increment(){
    count++ ;
    count_display.innerHTML = count;
}

function dicrement(){
    count-- ;
    count_display.innerHTML = count;
}
function Reset(){
    count = 0;
    count_display.innerHTML = 0;
}
