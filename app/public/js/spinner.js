(function () {
     "use strict";
 
     // Fungsi untuk menyembunyikan spinner
     var hideSpinner = function () {
         setTimeout(function () {
             var spinner = document.getElementById('spinner');
             if (spinner) {
                 spinner.classList.add('hide'); // Tambahkan class 'hide' untuk menghilangkan spinner
                 console.log("Spinner hidden");
             }
         }, 1000); // Delay 1 detik sebelum menyembunyikan spinner
     };
 
     // Panggil hideSpinner ketika semua konten selesai loading
     window.onload = function () {
         hideSpinner();
     };
 })();
 