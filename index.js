function suma (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let sumado = parseInt(num1) + parseInt(num2);
            document.getElementById("resultado").innerHTML = "la suma de " + num1 + "+" + num2 + " = " + sumado;
}

function subs(){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let subsc = parseInt(num1) - parseInt(num2);
            document.getElementById("resultado").innerHTML = "La resta de " + num1 + "-" + num2 + " = " + subsc;
}
function multi (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let multipli = parseInt(num1) * parseInt(num2);
            document.getElementById("resultado").innerHTML = "la multiplication de " + num1 + "*" + num2 + " = " + multipli;
}
function div (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let divi = parseInt(num1) / parseInt(num2);
            document.getElementById("resultado").innerHTML = "la division de " + num1 + "/" + num2 + " = " + divi;
}


