function suma (num1, num2){
 var num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            var sumado;
            return num1 + num2;
}
function restar (num1, num2){
    var num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            var resta;
            return num1 - num2;
}function multiplicar (num1, num2){
   var num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            var multiplica;
            return num1 * num2;
}
function dividir (num1, num2){
   var num1, num2;
            num1 = document.getElementById("valor").value;
            num2 = document.getElementById("valor2").value;
            var divide;
            return num1 / num2;
}


 sumado = suma();
        document.getElementById("resultado").innerHTML = "la suma de " + num1 + " y " + num2 + " es " +
            sumado;