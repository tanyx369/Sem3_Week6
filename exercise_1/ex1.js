let inputF = document.getElementById("input")
let result = document.getElementById("result")
let convert = document.getElementsByTagName("button")

convert[0].onclick = function(){
    /* console.log("checked") */
    let value = inputF.value;
    value = Number(value);
    let str = String(value); 
    let alert;

    if(str == "NaN"){
        alert = document.getElementById("message");
        alert.innerHTML = "Please type in a valid input"
    }
    else{
        result.textContent = "Celsius: " + Math.round(celsius(value))  + "°"
    }
}

function celsius(value){
    return(value-32) * (5/9)
}