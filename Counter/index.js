let count = 0;
const Omfoo = document.getElementById("omfoo")


function add() {
    count++;
    Omfoo.innerHTML = count;
    //console.log(count)
}

function sub() {
    count--;
    Omfoo.innerHTML = count;
    //console.log(count);
    if (count < 0 ){
        count=0;
        Omfoo.innerHTML = count;
    }
}

function reset() {
    count = 0;
    Omfoo.innerHTML = count;
}