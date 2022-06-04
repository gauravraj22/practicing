//Selector variables
let hr = document.getElementById("hour");
let min = document.getElementById("minute");
let sec = document.getElementById("second");

// variable
var time = "";

// Function
function timer(){
    if(hr.value != 0 && min.value == 0 && sec.value == 0){
        hr.value--;
        min.value = 60;
    }else if(min.value != 0 && sec.value == 0){
        min.value--;
        sec.value = 60;
        // min.value<10;
        // min.value = 0+min.value;
    }else if(sec.value != 0){
        sec.value--;
        // sec.value<10;
        // sec.value = 0+sec.value;
    }
    if(sec.value<10){
       sec.value = 0+sec.value;
    }
    if(min.value<10){
        min.value = 0+min.value;
     }
}

function pause(){
    clearInterval(time);
}


function start(){
    //alert("hii");
    time = setInterval(function() {
        timer();
     }, 1000);
}

function reset(){
    hr.value = "00";
    min.value = "00";
    sec.value = "00";
    pause();
}