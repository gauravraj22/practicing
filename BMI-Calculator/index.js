// console.log("hii");

// let h = 1.98;
// let w = 100;
// let bmi = w/(h*h);
// console.log(bmi);

//Selectors Variable
var weight = parseFloat(document.getElementById("weight").value);
let height = parseFloat(document.getElementById("height").value);
let result = document.getElementById("result");


//Calculate BMI
let bmi = weight/(height*height);


//function
function hii(){
    // console.log("hii");
    result.innerHTML = bmi.toFixed(2);//here toFixed is used to get only two digit after decimal.
}

function reload(){
    window.location.reload()

    // if(weight.innerHTML != 0){
    //   console.log(typeof(weight))
    //     weight.innerHTML = "";
    // }

    // if(height.innerHTML>0){
    //     console.log("hii")
    // }

    // else if(result.innerHTML>0){
    //    console.log("hii")
    //    result.innerHTML = "";
    // }
}