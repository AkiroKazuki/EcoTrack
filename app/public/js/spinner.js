(function () {
     "use strict";
 
     var hideSpinner = function () {
         setTimeout(function () {
             var spinner = document.getElementById('spinner');
             if (spinner) {
                 spinner.classList.add('hide');
                 console.log("Spinner hidden");
             }
         }, 50); // Delay 50ms
     };
 
     window.onload = function () {
         hideSpinner();
     };
 })();
 