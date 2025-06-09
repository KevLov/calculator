//  6" DJM
 function Sum(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 + num2;
    document.getElementById("result").innerText = `Result: ${result}`;	
}

 function Substraction(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 - num2;
    document.getElementById("result").innerText = `Result: ${result}`;	
}

 function Multiplication(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result = num1 * num2;
  document.getElementById("result").innerText = `Result: ${result}`;	
}

 function Division(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    let result = num2 !== 0 ? num1 / num2: "error(Cannot divide by zero)";
  document.getElementById("result").innerText = `Result: ${result}`;	
}
