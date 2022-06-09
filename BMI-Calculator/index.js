function hii(){
    var weight = parseFloat(document.getElementById("weight").value);

    var height = parseFloat(document.getElementById("height").value);

    let bmi = weight/(height*height);

    var result = document.getElementById("result");
    //console.log(bmi.toFixed(2));

    result.innerText = bmi.toFixed(2);
}

function reload(){
    window.location.reload()
}
