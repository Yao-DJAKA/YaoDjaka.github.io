console.log("JS File loaded");

function outputDemo()
{
    var output = document.getElementById("myText").value;
    
    console.log(output);
    
    alert(output);
    
    document.getElementById("output").innerHTML = "You entered: " + output;
  
}
