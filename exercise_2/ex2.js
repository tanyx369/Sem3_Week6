let height = document.getElementById("height")
let weight = document.getElementById("weight")
let button = document.getElementsByTagName("button")
let result = document.getElementById("result")
let message = document.getElementById("Suggestion")

function cal(kg, m){
    return (kg/(m*m));
}

function checkValid(value1 , value2){
    value1 = Number(value1)
    value2 = Number(value2)

    if(String(value1) == "NaN" ||  String(value2) == "NaN" ){
        return false
    }
    else{
        return true
    }
}

function checkBMI(value){
    if(value <= 18.4){
        return "You are underweight !"
    }
    else if(value >= 18.5 && value <= 24.9){
        return "Consgrate, your weight is normal"
    }
    else if(value >= 25.0 && value <= 39.9){
        return "You are overweight !"
    }
    else if(value >= 40.0){
        return "You are obese !"
    }
}

button[0].onclick = function(){
    let valueH = height.value;
    let valueW = weight.value;

   if( checkValid(valueH, valueW)){
        console.log(cal(valueW, valueH))
        let answer = cal(valueW, valueH).toFixed(2)
        result.textContent = "Your BMI: " + answer
        message.textContent = checkBMI(answer)
   }
   else{
        message.textContent = "Please enter a valid input"
   }

}