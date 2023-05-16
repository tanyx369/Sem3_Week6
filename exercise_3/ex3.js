/* let buttons = document.getElementsByClassName("buttons") */  /* getElementByxxx produced collection */
let buttons = document.querySelectorAll(".buttons")
let screen = document.getElementById("screen")
let parameters = new String();
let Numstatus = false;

/* buttons.forEach( (button, index) => {
    button.addEventListener("click", ()=>appendText(index))
})

function appendText(value){
    screen.innerText += String(value + 1)
} */

// Buttons 
buttons[0].onclick = function(){
    parameters += "1"
    console.log(parameters) 
    screen.innerText += "1";
   
   if(Numstatus == true){
    parameters = ""
    screen.innerText = "1"
   }
   else{
    console.log("caught")
     return null    // if return null , the rest of code below will not run
     console.log("hello")
   }

   Numstatus = false
   parameters += "1" 
   /* console.log("parameters") */

}

buttons[1].onclick = function(){
    parameters += "2"
    console.log(parameters)
    screen.innerText += "2";
    /* Numstatus ? screen.innerText = "2" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "2"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "2"
    console.log(parameters)
}

buttons[2].onclick = function(){
    parameters += "3"
    console.log(parameters)
    screen.innerText += "3";
    /* Numstatus ? screen.innerText = "3" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "3"
       }
    else{
         return null 
    }
    Numstatus = false
    parameters += "3"
}

buttons[4].onclick = function(){
    parameters += "4"
    console.log(parameters)
    screen.innerText += "4";
    /* Numstatus ? screen.innerText = "4" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "4"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "4"

}

buttons[5].onclick = function(){
    parameters += "5"
    console.log(parameters)
    screen.innerText += "5";
   /*  Numstatus ? screen.innerText = "5" :  null; */
   if(Numstatus == true){
    parameters = ""
    screen.innerText = "5"
    }
    else{
     return null 
    }       
    Numstatus = false
    parameters += "5"
}

buttons[6].onclick = function(){
    parameters += "6"
    console.log(parameters)
    screen.innerText += "6";
   /*  Numstatus ? screen.innerText = "6" :  null; */
   if(Numstatus == true){
    parameters = ""
    screen.innerText = "6"
    }
    else{
     return null 
    }
    Numstatus = false
    parameters += "6"
}

buttons[8].onclick = function(){
    parameters += "7"
    console.log(parameters)
    screen.innerText += "7";
   /*  Numstatus ? screen.innerText = "7" :  null; */
   if(Numstatus == true){
    parameters = ""
    screen.innerText = "7"
    }
    else{
     return null 
    }   
    Numstatus = false
    parameters += "7"
}

buttons[9].onclick = function(){
    parameters += "8"
    console.log(parameters)
    screen.innerText += "8";
    /* Numstatus ? screen.innerText = "8" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "8"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "8"
}

buttons[10].onclick = function(){
    parameters += "9"
    console.log(parameters)
    screen.innerText += "9";
    /* Numstatus ? screen.innerText = "9" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "9"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "9"
}

buttons[12].onclick = function(){
    parameters += "0"
    console.log(parameters)
    screen.innerText += "0";
    /* Numstatus ? screen.innerText = "0" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "0"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += "0"
}

// Operators


buttons[3].onclick = function(){
    parameters += "+"
    console.log(parameters)
    screen.innerText += "+";
    if(Numstatus == true){
        Numstatus = false;
    }
}

buttons[7].onclick = function(){
    parameters += "-"
    console.log(parameters)
    screen.innerText += "-";
    if(Numstatus == true){
        Numstatus = false;
    }
}

buttons[11].onclick = function(){
    parameters += "*"
    console.log(parameters)
    screen.innerText += "×";
    if(Numstatus == true){
        Numstatus = false;
    }
}

buttons[13].onclick = function(){
    parameters += "."
    console.log(parameters)
    screen.innerText += ".";
    if(Numstatus == true){
        Numstatus = false;
    }
}

buttons[14].onclick = function(){
    parameters += "/"
    console.log(parameters)
    screen.innerText += "÷";
    if(Numstatus == true){
        Numstatus = false;
    }
}



buttons[15].onclick = function(){
    console.log(parameters)
    /* screen.innerText += "="; */
    try {
        let answer = eval(parameters)
        console.log(answer)
        screen.innerText = answer
        parameters = answer
        
    } catch (error) {
        screen.innerText = "Syntax Error"
    }
   
    Numstatus = true;
}

buttons[16].onclick = function(){
    parameters = parameters.substring(0, parameters.length - 1)
    screen.innerText = parameters

}


buttons[17].onclick = function(){
    parameters = ""
    screen.innerText = ""
}

buttons[18].onclick = function(){
    parameters += "("
    console.log(parameters)
    screen.innerText += "(";
    /* Numstatus ? screen.innerText = "0" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = "("
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
    screen.innerText += ")";
    /* Numstatus ? screen.innerText = "0" :  null; */
    if(Numstatus == true){
        parameters = ""
        screen.innerText = ")"
    }
    else{
         return null 
    }
    Numstatus = false
    parameters += ")"
}
