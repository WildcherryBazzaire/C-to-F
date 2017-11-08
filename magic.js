console.log('the shining')

var intialValues = [20,90]; //inital values to start with

var conversionC = function(fahrenheit) {
  return Math.round((fahrenheit - 32) * 0.556); //converts Fahrenheit to celsius
}

var conversionK = function(fahrenheit) {
  return Math.round((fahrenheit + 459.67) * 0.556) //converts Fahrenheit to Kelvin
}

var values = function() {

  var starting = parseInt(document.getElementById("Starting").value); //parse int: checks if integer or not
  var ending = parseInt(document.getElementById("Ending").value);

  if (isNaN(starting) == true || isNaN(ending) == true) //checikng to see if the values are integers
    alert("T00 HOT 4 M£!");
  else
    automagicallyTable(starting,ending);

}

var automagicallyTable = function(starting,ending) {
  //document.getElementbyId("table").remove();
  var table = document.createElement("TABLE");
  table.setAttribute("id","table");
  var j = starting; // starting value that will increment till ending value

  for(var i=0; i <= Math.round((ending-starting)/5); i++) { //i = # of rows
    var row = table.insertRow(i);

    for(var k=0; k < 3; k++) { // k = the # of cells in row i
      switch(k) {
        case 0: //checks to see what cell K is on to add value to appropiate place
          row.insertCell(k).innerHTML = j
          break;
        case 1:
          row.insertCell(k).innerHTML = conversionC(j); // celsius on cell 1
          break;
        case 2:
          row.insertCell(k).innerHTML = conversionK(j); //kelvin on cell 2
          break;
      }
    }

    j += 5; //incremnets by 5 everytime row is added, the rows added by the equation will stop it if it reaches it ending
  }

  document.body.appendChild(table);

  }

automagicallyTable(intialValues[0],intialValues[1])
