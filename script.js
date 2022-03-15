var firstValue = parseInt(prompt("Enter the first value: "))
var secondValue = parseInt(prompt("Enter the second value: "))


var operation = prompt("Digite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma, 4 para subtração.")

if(operation == 1){
  var result = firstValue / secondValue
  document.write("<h2>",firstValue," / ", secondValue, " = ", result, "</h2>")
}
else if (operation == 2){
  var result = firstValue * secondValue
  document.write("<h2>",firstValue," X ", secondValue," = ", result, "</h2>")
}
else if(operation == 3){
  var result = firstValue + secondValue
  document.write("<h2>",firstValue," + ", secondValue," = ", result, "</h2>")
}
else if(operation == 4){
  var result = firstValue - secondValue
  document.write("<h2>",firstValue, " - ", secondValue," = ",
  result, "</h2>")
}
else{
  document.write("<h2>Invalid operation</h2>")
}
