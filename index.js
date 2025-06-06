function suma (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let sum = parseInt(num1) + parseInt(num2);
            document.getElementById("resultado").innerHTML = `La Suma de ${num1} + ${num2} = ${sum}`
}

function subs(){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let subsc = parseInt(num1) - parseInt(num2);
            document.getElementById("resultado").innerHTML = `La Resta de ${num1} - ${num2} = ${subsc}`
}
function multi (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
            let multipli = parseInt(num1) * parseInt(num2);
            document.getElementById("resultado").innerHTML = `La Multiplicacion de ${num1} * ${num2} = ${multipli}`
}
function div (){
 let num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            
           let divi = parseInt(num2) !== 0 ? parseInt(num1) / parseInt(num2) : "Error: Divide by zero.";
           document.getElementById("resultado").innerHTML = `La división de ${num1} / ${num2} = ${divi}`;

}


