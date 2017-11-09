console.log('the shining')

var table = document.createElement("TABLE"); //creates the table of conversions
table.setAttribute("id","table");

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
  var increments = parseInt(document.getElementById("Increment").value);

  if (isNaN(starting) == true || isNaN(ending) == true || isNaN(increments) == true)  //checikng to see if the values are integers
    alert("Cranb3rry Sauce");
  else {
    while(table.rows.length > 0) {
      table.deleteRow(0);
    }
    automagicallyTable(starting,ending,increments);
  }
}

var automagicallyTable = function(starting,ending,increment) {
  //document.getElementbyId("table").remove();
  var j = starting; // starting value that will increment till ending value

  for(var i=0; i <= Math.round(Math.abs((ending-starting)/increment) + 1); i++) { //i = # of rows; equation can now start backwards in order now
    var row = table.insertRow(i);
    for(var k=0; k < 3; k++) { // k = the # of cells in row i
      if(i === 0) {
          switch(k) {
            case 0:
              row.insertCell(k).innerHTML = "Fahrenheit";
              break;
            case 1:
              row.insertCell(k).innerHTML = "Celsius";
              break;
            case 2:
              row.insertCell(k).innerHTML = "Kelvin";
              break;
        }
      }
      else {
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
    }
    if(i !== 0)
      j += increment; //incremnets by 5 everytime row is added, the rows added by the equation will stop it if it reaches it ending
  }

  document.body.appendChild(table);

  }

automagicallyTable(intialValues[0],intialValues[1]);
