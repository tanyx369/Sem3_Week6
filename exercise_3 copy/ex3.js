/* let buttons = document.getElementsByClassName("buttons") */  /* getElementByxxx produced collection */
let buttons = document.querySelectorAll(".buttons")
let screen = document.getElementById("screen")
let calculation = document.getElementById("calculation")
let result = document.getElementById("result")
let parameters = new String();
let Numstatus = false;

/* buttons.forEach( (button, index) => {
    button.addEventListener("click", ()=>appendText(index))
})

function appendText(value){
    screen.innerText += String(value + 1)
} */

// Buttons 

function clicked(value){

    parameters += String(value)
    console.log(parameters) 
    document.createElement("p").innerText = String(value)
   /*  calculation.innerText += String(value); */
   calculation.append(document.createElement("p").innerText = String(value))
   
   if(Numstatus == true){
    parameters = ""
    calculation.innerText = String(value)
   }
   else{
    console.log("caught")
     return null    // if return null , the rest of code below will not run
     console.log("hello")
   }

   Numstatus = false
   parameters += String(value) 
   /* console.log("parameters") */
}


// Operators

function operators(value){
    parameters += String(value)
    console.log(parameters)
    let ope = document.createElement("span")
    ope.innerText = String(value)
    ope.style.color = "red"
    calculation.append(ope);
    if(Numstatus == true){
        Numstatus = false;
        calculation.innerText = result.innerText
        calculation.append(ope);
        result.innerText = "";
        console.log(parameters)
    }
}


buttons[15].onclick = function(){
    console.log(parameters)
    /* screen.innerText += "="; */
    try {
        let answer = eval(parameters)
        console.log(answer)
        result.innerText = answer
        parameters = answer
        
    } catch (error) {
        result.innerText = "Syntax Error"
    }
   
    Numstatus = true;
}

buttons[16].onclick = function(){
    parameters = parameters.substring(0, parameters.length - 1)
    calculation.innerText = parameters
}


buttons[17].onclick = function(){
    parameters = ""
    calculation.innerText = ""
    result.innerText = ""
}

buttons[18].onclick = function(){
    parameters += "("
    console.log(parameters)
    calculation.innerText += "(";
    /* Numstatus ? screen.innerText = "0" :  null; */
    if(Numstatus == true){
        parameters = ""
        calculation.innerText = "("
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "("
}


buttons[19].onclick = function(){
    parameters += ")"
    console.log(parameters)
    calculation.innerText += ")";
    /* Numstatus ? screen.innerText = "0" :  null; */
    if(Numstatus == true){
        parameters = ""
        calculation.innerText = ")"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += ")"
}
