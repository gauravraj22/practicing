//Selectors

let screen = document.getElementById("screen");
let Button = document.querySelectorAll("button");
let screenValue= "";

// eventListner
Button.forEach(but => {
    but.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerHTML;
    //console.log(buttonText);
    screenValue = screen.value
    screen.value += buttonText;

    if(buttonText=="C"){
        screen.value = "";
        return;
    }

    if(buttonText == "="){
        screen.value = eval(screenValue)
    }
}

