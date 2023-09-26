
setTimeout(function() {
   
    console.log("Səhifə hazır oldu!");
  }, 5000);
  
  
  var inputElement = document.getElementById("inputElementId");
  

  inputElement.addEventListener("keydown", function(event) {
    if (event.key === " ") {
      event.preventDefault(); 
      inputElement.value = inputElement.value.replace(" ", ""); 
    }
  });
  
  
  inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
      event.preventDefault(); 
      inputElement.value += " "; 
    }
  });