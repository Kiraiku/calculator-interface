//This function clears all values
 function myDelete() {
    document.getElementById("output").value = "";
}

//This function displays values
function display(value) {
    document.getElementById("output").value += value;
}

//Evaluates the expression and return result
function calculate() {
    var x = document.getElementById('output').value;
    var y = eval(x);
    document.getElementById('output').value = y;
}
