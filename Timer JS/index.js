// Selectors Variable
var min = document.getElementById("minute");
var sec = document.getElementById("second");
var timer = "";

var time = 300;
function start(){
    timer = setInterval(function () {
        min.innerHTML = parseInt(time / 60);
        sec.innerHTML = parseInt(time % 60);
        time--;
        if (time < 0) {
            clearInterval(timer)
        }
    }, 1000)
}

function stop(){
    clearInterval(timer);
}

function reset(){
    time = 300;
    min.innerHTML = "05";
    sec.innerHTML = "00";
    clearInterval(timer);
}