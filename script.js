//Average Calculator

//Event Listener
document.getElementById("calc-btn").addEventListener("click", calcAverage);

//Event Function
function calcAverage() {
  //Input
  let num1 = +document.getElementById("num1").value;
  let num2 = +document.getElementById("num2").value;
  let num3 = +document.getElementById("num3").value;

  // P{rocess
  let average = Math.floor((num1 + num2 + num3) / 3);
  let sum = num1 + num2 + num3;
  let product = num1 * num2 * num3;
  let remainder = num1 % num2;
  let power = num1 ** num2;
  let rounded = num1.toFixed(2);
  let tangent = Math.tan(num3);
  let random = Math.floor(Math.random() * (num2 - num1 + 1) + num1);
  //Output
  document.getElementById("ave-out").innerHTML = average;
  document.getElementById("sum-out").innerHTML = sum;
  document.getElementById("prod-out").innerHTML = product;
  document.getElementById("rem-out").innerHTML = remainder;
  document.getElementById("pow-out").innerHTML = power;
  document.getElementById("round-out").innerHTML = rounded;
  document.getElementById("tan-out").innerHTML = tangent;
  document.getElementById("rand-out").innerHTML = random;
}
