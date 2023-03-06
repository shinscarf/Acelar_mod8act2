

function addNum() {
    var num1 =0;
    num1= document.getElementById("num1").value;
    var num2 = 0;
    num2 = document.getElementById("num2").value;
    var answer = 0;
    answer = parseFloat(num1) + parseFloat(num2);
    document.getElementById("ans").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + answer + " .";
  }

  function subtractNum() {
    var num1 =0;
    num1= document.getElementById("num1").value;
    var num2 = 0;
    num2 = document.getElementById("num2").value;
    var answer = 0;
    answer = parseFloat(num1) - parseFloat(num2);
    document.getElementById("ans").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + answer + " .";
  }

  function multiplyNum() {
    var num1 =0;
    num1= document.getElementById("num1").value;
    var num2 = 0;
    num2 = document.getElementById("num2").value;
    var answer = 0;
    answer = parseFloat(num1) * parseFloat(num2);
    document.getElementById("ans").innerHTML = "The product of " + num1 + " and " + num2 + " is " + answer + " .";
  }

  function divideNum() {
    var num1 =0;
    num1= document.getElementById("num1").value;
    var num2 = 0;
    num2 = document.getElementById("num2").value;
    var answer = 0;
    answer = parseFloat(num1) / parseFloat(num2);
    document.getElementById("ans").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + answer + " .";
  }

  function modNum() {
    var num1 =0;
    num1= document.getElementById("num1").value;
    var num2 = 0;
    num2 = document.getElementById("num2").value;
    var answer = 0;
    answer = parseFloat(num1) % parseFloat(num2);
    document.getElementById("ans").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + answer + " .";
  }