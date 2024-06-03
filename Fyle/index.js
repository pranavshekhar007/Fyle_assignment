 
 var modal = document.getElementById("contactModal");
 var btn = document.getElementById("contactBtn");

 var span = document.getElementsByClassName("close")[0];
 btn.onclick = function () {
     modal.style.display = "block";
 }

 span.onclick = function () {
     modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the
 window.onclick = function (event) {
     if (event.target == modal) {
         modal.style.display = "none";
     }
 }

 

 