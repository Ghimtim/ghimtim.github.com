
var i = 5; 
var intervalid; 
intervalid = setInterval("countdown()", 1000); 
function countdown() { 
if (i == 0) { 
window.location.href = "http://ghimtim.github.io"; 
clearInterval(intervalid); 
} 
document.getElementById("countdown").innerHTML = i; 
i--; 
} 
