var celsius = document.getElementsByClassName("celsius");
console.log(celsius);
var fahrenheit = document.getElementsByClassName("Fahrenheit");
console.log(fahrenheit);

var conversion = function(celsius) {
  return celsius * 1.8 + 32;
}

for(var x=1; x < celsius.length; x++) {
  celsius[x].innerHTML = x * 5;
  fahrenheit[x].innerHTML = conversion(x * 5);
}